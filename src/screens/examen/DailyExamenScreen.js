import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { Card } from "../../components";
import colors from "../../theme/colors";

// Examen description taken from here
// https://www.ignatianspirituality.com/examen-prayer-card/
export default function DailyExamenScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.text}>
          The Examen is a method of reviewing your day in the presence of God.
          It's a time set aside for thankful reflection on where God is in your
          everyday life. It has five steps, which most people take more or less
          in order, and it usually takes 15 minutes per day.
        </Text>
      </Card>
      <Card style={styles.examen}>
        <Text style={styles.header}>Transition</Text>
        <Text style={styles.examenText}>
          Become aware of the love with which God looks upon me as I begin this
          examen.
        </Text>
        <Text> </Text>
        <Text style={styles.header}>Gratitude</Text>
        <Text style={styles.examenText}>
          Note the gifts that God's love has given you this day and give thanks
          to God for them.
        </Text>
        <Text> </Text>
        {/* <Text style={styles.header}>Petition</Text>
                <Text style={styles.examenText}>
                    Ask God for an insight and a strength that will make this
                    examen a work of grace, fruitful beyond your human capacity
                    alone.
                </Text>
                <Text> </Text> */}
        <Text style={styles.header}>Review</Text>
        <Text style={styles.examenText}>
          With God, review the day. Look for the stirrings in your heart and the
          thoughts which God has given you this day. Look also for those which
          have not been of God. Review your choices in response to both, and
          throughout the day in general.
        </Text>
        <Text> </Text>
        <Text style={styles.header}>Forgiveness</Text>
        <Text style={styles.examenText}>
          Ask for the healing touch of the forgiving God who, with love and
          respect for you, removes your heart’s burdens.
        </Text>
        <Text> </Text>
        <Text style={styles.header}>Renewal</Text>
        <Text style={styles.examenText}>
          Look to the following day and, with God, plan concretely how to live
          it in accord with God’s loving desire for your life.
        </Text>
        {/* <Text> </Text>
                <Text style={styles.header}>Transition</Text>
                <Text>
                    Aware of God’s presence with you, prayerfully conclude the
                    examen
                </Text> */}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    padding: 15,
  },
  card: {
    marginBottom: 15,
  },
  text: {
    // textAlign: "center",
    fontSize: 18,
  },
  header: {
    // textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  examenText: {
    fontSize: 18,
  },
  examen: {
    marginBottom: 30,
  },
});
