import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";

import colors from "../theme/colors";
import { Accordian, Card } from "../components";
import { getTodaysMassReadings } from "../helper/massReadings";
import RenderHTML from "react-native-render-html";

export default function MassScreen() {
  const { width } = useWindowDimensions();
  const [readings, setReadings] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getTodaysMassReadings().then((response) => {
      setReadings(response);
      setLoaded(true);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loaded ? (
        <View>
          <Card style={styles.card}>
            <Text style={styles.heading}>{readings.day}</Text>
          </Card>
          <Accordian title="First Reading" style={styles.card}>
            <Text style={styles.source}>{readings.r1.source}</Text>
            <Text style={styles.heading}>{readings.r1.heading}</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.neutral80,
                marginTop: 10,
                marginBottom: 20,
              }}
            />
            <RenderHTML
              source={{ html: readings.r1.text }}
              contentWidth={width}
              baseStyle={{ fontSize: 16, color: colors.neutral20 }}
            />
          </Accordian>
          <Accordian title="Responsorial Psalm" style={styles.card}>
            <Text style={styles.source}>{readings.ps.source}</Text>
            <RenderHTML
              baseStyle={{
                marginLeft: -42,
                fontSize: 16,
                color: colors.neutral20,
              }}
              source={{ html: readings.ps.text }}
              contentWidth={width}
            />
          </Accordian>
          {readings.r2.heading && (
            <Accordian title="Second Reading" style={styles.card}>
              <Text style={styles.source}>{readings.r2.source}</Text>
              <Text style={styles.heading}>{readings.r2.heading}</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.neutral80,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              />
              <RenderHTML
                source={{ html: readings.r2.text }}
                contentWidth={width}
                baseStyle={{ fontSize: 16, color: colors.neutral20 }}
              />
            </Accordian>
          )}
          <Accordian title="Gospel Acclamation" style={styles.card}>
            <Text style={styles.source}>{readings.ga.source}</Text>
            <RenderHTML
              baseStyle={{
                marginLeft: -42,
                fontSize: 16,
                color: colors.neutral20,
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
            <Text style={styles.heading}>{readings.g.heading}</Text>
            <View style={styles.divider} />
            <RenderHTML
              baseStyle={{ fontSize: 16, color: colors.neutral20 }}
              source={{ html: readings.g.text }}
              contentWidth={width}
            />
          </Accordian>
        </View>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.neutral60} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    paddingHorizontal: 15,
  },
  card: {
    marginTop: 15,
  },
  source: {
    textAlign: "right",
    color: colors.neutral30,
    marginVertical: 10,
    fontSize: 18,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.neutral20,
    fontSize: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral80,
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
