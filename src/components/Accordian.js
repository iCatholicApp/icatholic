import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconButton from "./Buttons/IconButton";
import colors from "../theme/colors";

export default function Accordian(props) {
  const { style, title, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <TouchableOpacity onPress={() => setOpen(!open)}>
      <View style={[style, styles.container]}>
        <View style={styles.titleStyle}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <IconButton
            type="ion"
            name={open ? "chevron-down" : "chevron-up"}
            size={26}
            color={colors.primary}
            onPress={() => setOpen(!open)}
          />
        </View>
        {open && children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",
  },
  titleStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleTextStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.neutral900,
  },
});
