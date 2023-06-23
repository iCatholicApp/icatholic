import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import RenderHTML from "react-native-render-html";
import { Accordian, Card, IconButton } from "../components";
import { getTodaysMassReadings } from "../helper/getMassReadings";
import colors from "../theme/colors";
import { TouchableOpacity } from "react-native-web";

export default function MassScreen() {
  const { width } = useWindowDimensions();

  const [readings, setReadings] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());

  const dateFormatter = (date) => {
    console.log("date", date);
    const currentDate = date ? date : new Date();
    console.log("currentDate", currentDate);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}${month}${day}`;

    return formattedDate;
  };

  const incrementDateByOneDay = (date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);

    setSelectedDay(newDate);
    return newDate;
  };

  const decrementDateByOneDay = (date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);

    setSelectedDay(newDate);
    return newDate;
  };

  useEffect(() => {
    setLoaded(false);
    const date = dateFormatter(selectedDay);

    getTodaysMassReadings(date).then((response) => {
      setReadings(response);
      setLoaded(true);
    });
  }, [selectedDay]);

  return (
    <ScrollView style={styles.container}>
      {loaded ? (
        <View>
          <Card style={styles.headerCard}>
            <IconButton
              type="ion"
              name="chevron-back"
              size={26}
              color={colors.primary}
              onPress={() => decrementDateByOneDay(selectedDay)}
            />
            {/* <TouchableOpacity onPress={() => setSelectedDay(new Date())}> */}
            <Text style={styles.heading}>{readings.day}</Text>
            {/* </TouchableOpacity> */}
            <IconButton
              type="ion"
              name="chevron-forward"
              size={26}
              color={colors.primary}
              onPress={() => incrementDateByOneDay(selectedDay)}
            />
          </Card>
          <Accordian title="First Reading" style={styles.card}>
            <Text style={styles.source}>{readings.r1.source}</Text>
            {/* <Text style={styles.heading}>{readings.r1.heading}</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.neutral300,
                marginTop: 10,
                marginBottom: 20,
              }}
            /> */}
            <RenderHTML
              source={{ html: readings.r1.text }}
              contentWidth={width}
              baseStyle={{ fontSize: 16, color: colors.neutral700 }}
            />
          </Accordian>
          <Accordian title="Responsorial Psalm" style={styles.card}>
            <Text style={styles.source}>{readings.ps.source}</Text>
            <RenderHTML
              baseStyle={{
                marginLeft: -42,
                fontSize: 16,
                color: colors.neutral700,
              }}
              source={{ html: readings.ps.text }}
              contentWidth={width}
            />
          </Accordian>
          {readings.r2.heading && (
            <Accordian title="Second Reading" style={styles.card}>
              <Text style={styles.source}>{readings.r2.source}</Text>
              {/* <Text style={styles.heading}>{readings.r2.heading}</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.neutral300,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              /> */}
              <RenderHTML
                source={{ html: readings.r2.text }}
                contentWidth={width}
                baseStyle={{ fontSize: 16, color: colors.neutral700 }}
              />
            </Accordian>
          )}
          <Accordian title="Gospel Acclamation" style={styles.card}>
            <Text style={styles.source}>{readings.ga.source}</Text>
            <RenderHTML
              baseStyle={{
                marginLeft: -42,
                fontSize: 16,
                color: colors.neutral700,
              }}
              source={{ html: readings.ga.text }}
              contentWidth={width}
            />
          </Accordian>
          <Accordian
            title="The Holy Gospel"
            style={[styles.card, { marginBottom: 15 }]}
          >
            <Text style={styles.source}>{readings.g.source}</Text>
            {/* <Text style={styles.heading}>{readings.g.heading}</Text> */}
            {/* <View style={styles.divider} /> */}
            <RenderHTML
              baseStyle={{ fontSize: 16, color: colors.neutral700 }}
              source={{ html: readings.g.text }}
              contentWidth={width}
            />
          </Accordian>
        </View>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.neutral500} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    paddingHorizontal: 15,
  },
  headerCard: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    flex: 1,
    alignItems: "center",
  },
  card: {
    marginTop: 15,
  },
  source: {
    textAlign: "right",
    color: colors.neutral800,
    marginVertical: 10,
    fontSize: 18,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.neutral900,
    fontSize: 18,
    paddingHorizontal: 10,
    flexShrink: 1,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral300,
    marginTop: 10,
    marginBottom: 20,
  },
  loader: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
