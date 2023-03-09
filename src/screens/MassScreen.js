import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  useWindowDimensions,
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
      {loaded && (
        <View>
          <Card style={styles.card}>
            <Text style={styles.heading}>{readings.day}</Text>
          </Card>
          <Accordian title="First Reading" style={styles.card}>
            <Text style={styles.source}>{readings.r1.source}</Text>
            <Text style={styles.heading}>{readings.r1.heading}</Text>
            <RenderHTML
              source={{ html: readings.r1.text }}
              contentWidth={width}
            />
          </Accordian>
          <Accordian title="Responsorial Psalm" style={styles.card}>
            <Text style={styles.source}>{readings.ps.source}</Text>
            <RenderHTML
              source={{ html: readings.ps.text }}
              contentWidth={width}
            />
          </Accordian>
          {readings.r2.heading && (
            <Accordian title="Second Reading" style={styles.card}>
              <Text style={styles.source}>{readings.r2.source}</Text>
              <Text style={styles.heading}>{readings.r2.heading}</Text>
              <RenderHTML
                source={{ html: readings.r2.text }}
                contentWidth={width}
              />
            </Accordian>
          )}
          <Accordian title="Gospel Acclamation" style={styles.card}>
            <Text style={styles.source}>{readings.ga.source}</Text>
            <RenderHTML
              source={{ html: readings.ga.text }}
              contentWidth={width}
            />
          </Accordian>
          <Accordian title="The Holy Gospel" style={styles.card}>
            <Text style={styles.source}>{readings.g.source}</Text>
            <Text style={styles.heading}>{readings.g.heading}</Text>
            <RenderHTML
              source={{ html: readings.g.text }}
              contentWidth={width}
            />
          </Accordian>
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
    fontWeight: "bold",
    marginVertical: 10,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
});
