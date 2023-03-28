import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Accordian, WideButton } from "../../components";
import colors from "../../theme/colors";
import prayers from "../../constants/prayers";
import ListItem from "../../components/List/ListItem";
import List from "../../components/List/List";

export default function PrayerListScreen() {
  const navigation = useNavigation();
  const [searchString, setSearchString] = useState("");
  console.log("searchstring", searchString);

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search"
        value={searchString}
        onChangeText={(text) => setSearchString(text)}
        style={styles.searchInput}
      />
      {/* {searchString !== "" ? ( */}
      {
        prayers
          .filter((prayer) => {
            if (
              prayer.label.toLowerCase().includes(searchString.toLowerCase())
            ) {
              return prayers;
            }
          })
          .map((prayer, i) => (
            <WideButton
              key={i}
              text={prayer.label}
              buttonStyle={styles.buttonStyle}
              onPress={() => navigation.navigate("Prayer", { prayer })}
            />
          ))
        // ) : (
        // <>
        //   <Accordian title="Latin prayers" style={styles.accordian}>
        //     {prayers.map((prayer, i) => (
        //       <ListItem
        //         key={i}
        //         text={prayer.label}
        //         onPress={() => navigation.navigate("Prayer", { prayer })}
        //       />
        //     ))}
        //   </Accordian>
        //   <Accordian title="Marian prayers" style={styles.accordian}>
        //     {prayers.map((prayer, i) => (
        //       <ListItem
        //         key={i}
        //         text={prayer.label}
        //         onPress={() => navigation.navigate("Prayer", { prayer })}
        //       />
        //     ))}
        //   </Accordian>
        //   <Accordian title="Litanies" style={styles.accordian}>
        //     {prayers.map((prayer, i) => (
        //       <ListItem
        //         key={i}
        //         text={prayer.label}
        //         onPress={() => navigation.navigate("Prayer", { prayer })}
        //       />
        //     ))}
        //   </Accordian>
        //   <Accordian title="Prayers in Mass" style={styles.accordian}>
        //     {prayers.map((prayer, i) => (
        //       <ListItem
        //         key={i}
        //         text={prayer.label}
        //         onPress={() => navigation.navigate("Prayer", { prayer })}
        //       />
        //     ))}
        //   </Accordian>
        //   <Accordian title="Devotional prayers" style={styles.accordian}>
        //     {prayers.map((prayer, i) => (
        //       <ListItem
        //         key={i}
        //         text={prayer.label}
        //         onPress={() => navigation.navigate("Prayer", { prayer })}
        //       />
        //     ))}
        //   </Accordian>
        //   <Accordian
        //     title="The Holy Rosary & Mysteries"
        //     style={styles.accordian}
        //   >
        //     <View style={styles.divider} />
        //     {prayers.map((prayer, i) => (
        //       <WideButton
        //         key={i}
        //         text={prayer.label}
        //         buttonStyle={styles.buttonStyle}
        //         textStyle={styles.accordianItems}
        //         onPress={() => navigation.navigate("Prayer", { prayer })}
        //       />
        //     ))}
        //   </Accordian>
        //   <Accordian title="Other prayers" style={styles.accordian}>
        //     {prayers.map((prayer, i) => (
        //       <ListItem
        //         key={i}
        //         text={prayer.label}
        //         onPress={() => navigation.navigate("Prayer", { prayer })}
        //       />
        //     ))}
        //   </Accordian>
        // </>
        // )}
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    paddingHorizontal: 15,
  },
  buttonStyle: {
    marginBottom: 15,
  },
  searchInput: {
    width: "100%",
    backgroundColor: colors.white,
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  accordian: {
    marginBottom: 15,
  },
  accordianItems: {
    fontStyle: "normal",
    fontSize: 12,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral80,
    marginTop: 10,
    marginBottom: 20,
  },
});
