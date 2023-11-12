import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Accordian, WideButton } from "../../components";
import colors from "../../theme/colors";
import prayers from "../../constants/prayers";
import ListItem from "../../components/List/ListItem";

export default function PrayerListScreen() {
  const navigation = useNavigation();
  const [searchString, setSearchString] = useState("");

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search"
        value={searchString}
        onChangeText={(text) => setSearchString(text)}
        style={styles.searchInput}
      />
      {searchString !== "" ? (
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
      ) : (
        <>
          <Accordian title="Marian prayers" style={styles.accordian}>
            {prayers.map((prayer, i) => {
              if (prayer.category[0] === "Marian") {
                return (
                  <ListItem
                    key={i}
                    text={prayer.label}
                    onPress={() => navigation.navigate("Prayer", { prayer })}
                  />
                );
              }
            })}
          </Accordian>
          {/* <Accordian
            title="The Holy Rosary & Mysteries"
            style={styles.accordian}
          >
            {prayers.map((prayer, i) => {
              if (prayer.category[0] === "Rosary") {
                return (
                  <ListItem
                    key={i}
                    text={prayer.label}
                    onPress={() => navigation.navigate("Prayer", { prayer })}
                  />
                );
              }
            })}
          </Accordian> */}
          <Accordian title="Litanies" style={styles.accordian}>
            {prayers.map((prayer, i) => {
              if (prayer.category[0] === "Litany") {
                return (
                  <ListItem
                    key={i}
                    text={prayer.label}
                    onPress={() => navigation.navigate("Prayer", { prayer })}
                  />
                );
              }
            })}
          </Accordian>
          <Accordian title="Latin prayers" style={styles.accordian}>
            {prayers.map((prayer, i) => {
              if (prayer.category[0] === "Latin") {
                return (
                  <ListItem
                    key={i}
                    text={prayer.label}
                    onPress={() => navigation.navigate("Prayer", { prayer })}
                  />
                );
              }
            })}
          </Accordian>

          <Accordian title="Prayers for Mass" style={styles.accordian}>
            {prayers.map((prayer, i) => {
              if (prayer.category[0] === "Mass") {
                return (
                  <ListItem
                    key={i}
                    text={prayer.label}
                    onPress={() => navigation.navigate("Prayer", { prayer })}
                  />
                );
              }
            })}
          </Accordian>
          {/* <Accordian title="Devotional prayers" style={styles.accordian}>
            {prayers.map((prayer, i) => (
              <ListItem
                key={i}
                text={prayer.label}
                onPress={() => navigation.navigate("Prayer", { prayer })}
              />
            ))}
          </Accordian> */}
          <Accordian title="Other prayers" style={styles.accordian}>
            {prayers.map((prayer, i) => {
              if (prayer.category[0] === "Other") {
                return (
                  <ListItem
                    key={i}
                    text={prayer.label}
                    onPress={() => navigation.navigate("Prayer", { prayer })}
                  />
                );
              }
            })}
          </Accordian>
        </>
      )}
      <WideButton
        buttonStyle={styles.buttonStyle}
        textStyle={{ fontSize: 24 }}
        text="Pray the Holy Rosary"
        onPress={() => navigation.navigate("Rosary")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    paddingHorizontal: 15,
  },
  buttonStyle: {
    marginBottom: 15,
  },
  searchInput: {
    width: "100%",
    backgroundColor: colors.neutral100,
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
    borderBottomColor: colors.neutral400,
    marginTop: 10,
    marginBottom: 20,
  },
});
