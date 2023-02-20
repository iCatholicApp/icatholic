import React from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import colors from "../../theme/colors";
import Button from "../Buttons/Button";

export default function TimeInput(props) {
  const { onChange, style, value } = props;

  return (
    <View>
      <DateTimePicker
        value={value}
        mode="time"
        is24Hour={true}
        onChange={onChange}
      />
    </View>
  );
}
