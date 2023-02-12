import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import colors from "../../theme/colors";

export default function DateTimePicker(props) {
  const { options, onPress, placeholder, width, searchable } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState(options || []);

  return (
    <View>
      {open ? (
        <View style={styles.open}>
          <Text>open</Text>
        </View>
      ) : (
        <View style={styles.open}>
          <Text>closed</Text>
        </View>
      )}
    </View>
  );
}
