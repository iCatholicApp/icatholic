import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../../theme/colors";
import { useState } from "react";

export default function TimeInput(props) {
  const { onChange, value } = props;
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowPicker(!showPicker)}
        style={styles.button}
      >
        <Text style={{ fontSize: 16, color: colors.neutral700 }}>
          {value.toLocaleTimeString("en-ca", {
            hour: "numeric",
            minute: "numeric",
          })}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <View
          style={{
            backgroundColor: colors.neutral200,
            borderRadius: 10,
            maxWidth: "50%",
            marginTop: 10,
          }}
        >
          <DateTimePicker
            value={value}
            mode="time"
            is24Hour={false}
            onChange={onChange}
            // textColor={colors.neutral800}
            display="spinner"
            style={
              {
                // borderRadius: 10,
              }
            }
            // accentColor={colors.primary}
            // themeVariant="dark"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: colors.neutral200,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
