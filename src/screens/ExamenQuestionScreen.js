import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import colors from "../theme/colors";
import { Accordian, Card } from "../components";
import { examination, precepts } from "../constants/examination";

export default function ExamenQuestionScreen({ route, navigation }) {
  return (
    <ScrollView style={styles.container}>
      {examination.map((commandment, index) => (
        <Accordian
          title={commandment.title}
          style={styles.card}
          key={commandment.commandment}
        >
          <Text style={styles.header}>{commandment.commandment}</Text>
          <Text style={styles.text}>{"\n"}Have I...</Text>
          {commandment.questions.map((question) => (
            <Text style={styles.text} key={question}>
              {"\n"}
              {question}
            </Text>
          ))}
        </Accordian>
      ))}
      {precepts.map((precept, index) => (
        <Accordian
          title={precept.title}
          style={[
            styles.card,
            precepts.length === index + 1
              ? { marginBottom: 30 }
              : { marginBottom: 15 },
          ]}
          key={precept.name}
        >
          <Text style={styles.header}>{precept.name}</Text>

          {precept.questions.map((question) => (
            <Text style={styles.text} key={question}>
              {"\n"}
              {question}
            </Text>
          ))}
        </Accordian>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral95,
    padding: 15,
  },
  card: {
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: colors.neutral40,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    color: colors.neutral40,
  },
});
