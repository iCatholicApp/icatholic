import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import colors from "../../theme/colors";

//todo searchable fields
// todo multi select
// todo replace input in bible with this

export default function SelectInput(props) {
  const { options, onPress, placeholder, style, maxHeight, searchable } = props;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedLabel, setSelectedLabel] = useState("");
  const [height, setHeight] = useState(200);
  const [filteredOptions, setFilteredOptions] = useState([]);

  const animatedvalue = useRef(new Animated.Value(0)).current;

  const slideDown = () => {
    setOpen(true);
    Animated.timing(animatedvalue, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const slideUp = () => {
    Animated.timing(animatedvalue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setOpen(false));
  };

  const handleOpen = () => {
    console.log("handleopen", open);
    if (open) slideUp();
    if (!open) slideDown();
  };

  React.useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    if (maxHeight) setHeight(maxHeight);
  }, [maxHeight]);

  useEffect(() => {
    onPress(selected);
  }, [selected]);

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={() => handleOpen()}
      >
        <View style={styles.open}>
          <Text style={styles.inputText}>
            {selectedLabel === ""
              ? placeholder
                ? placeholder
                : "Select option"
              : selectedLabel}
          </Text>
        </View>
      </TouchableOpacity>
      {open ? (
        <Animated.View style={[{ maxHeight: animatedvalue }, styles.menu]}>
          <ScrollView
            contentContainerStyle={{ paddingVertical: 10, overflow: "hidden" }}
            nestedScrollEnabled={true}
          >
            {filteredOptions.length >= 1 ? (
              filteredOptions.map((option, index) => (
                <TouchableOpacity
                  style={styles.option}
                  key={index}
                  onPress={() => {
                    setSelected(option);
                    setSelectedLabel(option.label);
                    handleOpen();
                    setTimeout(() => {
                      setFilteredOptions(options);
                    }, 800);
                  }}
                >
                  <Text style={{}}>{option.label}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <TouchableOpacity
                style={[styles.option]}
                onPress={() => {
                  setSelected("");
                  handleOpen();
                  setTimeout(() => setFilteredOptions(options), 800);
                }}
              >
                <Text>{searchable ? "Not found" : "No options"}</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </Animated.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral95,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menu: {
    overflow: "hidden",
    marginTop: 10,
    backgroundColor: colors.neutral95,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  option: {
    paddingVertical: 5,
    overflow: "hidden",
  },
  inputText: {},
});
