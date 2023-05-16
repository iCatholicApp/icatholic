import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import colors from "../theme/colors";

export default function DropDown(props) {
  const { options, onPress, placeholder, width, searchable } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("MAT");
  const [items, setItems] = useState(options || []);

  useEffect(() => {
    if (items.length < 1) {
      setItems(options);
    }
  });

  return (
    <DropDownPicker
      open={open}
      onSelectItem={(value) => onPress(value.value)}
      value={value}
      items={items}
      searchable={searchable}
      setOpen={setOpen}
      setValue={setValue}
      placeholder={placeholder}
      setItems={setItems}
      showArrowIcon={false}
      showTickIcon={false}
      arrowIconStyle={{
        width: 0,
      }}
      style={{
        backgroundColor: open ? colors.neutral800 : colors.primary,
        borderRadius: open ? 15 : 20,
        borderWidth: 0,
        minHeight: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}
      labelProps={{
        numberOfLines: 1,
      }}
      containerStyle={{
        marginRight: 10,
        width: `${width}`,
        borderWidth: 0,
        backgroundColor: colors.neutral200,
      }}
      textStyle={{
        color: open ? colors.neutral900 : colors.neutral100,
        textAlign: "center",
      }}
      dropDownContainerStyle={{
        borderRadius: 15,
        backgroundColor: open ? colors.neutral800 : colors.primary,
        borderColor: colors.neutral700,
        borderWidth: 0,
      }}
      searchContainerStyle={{
        borderBottomWidth: 0,
        color: colors.neutral900,
      }}
      searchTextInputStyle={{
        backgroundColor: colors.neutral800,
        borderColor: colors.neutral700,
        color: colors.neutral900,
      }}
      selectedItemLabelStyle={{
        color: colors.neutral900,
      }}
      listItemContainerStyle={{
        height: 30,
      }}
      selectedItemContainerStyle={{
        backgroundColor: colors.neutral700,
      }}
    />
  );
}
