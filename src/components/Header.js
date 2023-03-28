import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../theme/colors";
import IconButton from "./Buttons/IconButton";

const screenWidth = Dimensions.get("window").width;

export default function Header({ props }) {
  const { navigation, route, options, back } = props;
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {back && (
          <IconButton
            type="ion"
            name="chevron-back"
            size={26}
            iconStyle={styles.backButton}
            onPress={navigation.goBack}
          />
        )}
        <Text style={styles.title}>{title}</Text>
        <View>
          {/* {true && (
                        <IconButton
                            // type="ion"
                            name="info-circle"
                            size={16}
                            iconStyle={styles.infoButton}
                            onPress={() => {}}
                        />
                    )} */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 30,
    height: 60,
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    // shadowColor: colors.neutral20,
    // shadowOpacity: 0.2,
    // shadowOffset: { width: 0, height: 2 },
    backgroundColor: colors.white,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    zIndex: 1,
  },
  title: {
    flex: 1,
    textAlign: "center",
    flexDirection: "column",
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: colors.neutral95,
  },
});
