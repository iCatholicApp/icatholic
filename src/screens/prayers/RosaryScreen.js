import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Card, Accordian } from "../../components";
import colors from "../../theme/colors";
import ListItem from "../../components/List/ListItem";

export default function RosaryScreen() {
  const mysteries = {
    joyful: {
      label: "Joyful Mysteries",
      prayedOn: "Typically prayed on Monday and Saturday",
      mysteries: [
        {
          number: "First Joyful Mystery",
          label: "The Annunciation",
          passage: "",
          // "And when the angel had come to her, he said, 'Hail, full of grace, the Lord is with thee. Blessed art thou among women.'",
          passageId: "Luke 1:28",
          fruit: "The love of humility",
        },
        {
          number: "Second Joyful Mystery",
          label: "The Visitation",
          passage: "",
          passageId: "Luke 1:41-42",
          fruit: "Charity towards my neighbour",
        },
        {
          number: "Third Joyful Mystery",
          label: "The Nativity",
          passage: "",
          passageId: "Luke 2:6-7",
          fruit: "The spirit of poverty",
        },
        {
          number: "Fourth Joyful Mystery",
          label: "The Presentation in the Temple",
          passage: "",
          passageId: "Luke 2:22-23",
          fruit: "The virtue of obedience",
        },
        {
          number: "Fifth Joyful Mystery",
          label: "The Finding of Jesus in the Temple",
          passage: "",
          passageId: "Luke 2:46",
          fruit: "The virtue of piety",
        },
      ],
    },
    sorrowful: {
      label: "Sorrowful Mysteries",
      prayedOn: "Typically prayed on Tuesday and Friday",
      mysteries: [
        {
          number: "First Sorrowful Mystery",
          label: "The Agony in the Garden",
          passage: "",
          passageId: "",
          fruit: "True contrition for sin",
        },
        {
          number: "Second Sorrowful Mystery",
          label: "The Scourging at the Pillar",
          passage: "",
          passageId: "",
          fruit: "The virtue of purity",
        },
        {
          number: "Third Sorrowful Mystery",
          label: "The Crowning with Thorns",
          passage: "",
          passageId: "",
          fruit: "Moral courage",
        },
        {
          number: "Fourth Sorrowful Mystery",
          label: "The Carrying of the Cross",
          passage: "",
          passageId: "",
          fruit: "The virtue of patience",
        },
        {
          number: "Fifth Sorrowful Mystery",
          label: "The Crucifixion",
          passage: "",
          passageId: "",
          fruit: "Final perseverance",
        },
      ],
    },
    glorious: {
      label: "Glorious Mysteries",
      prayedOn: "Typically prayed on Wednesday and Sunday",
      mysteries: [
        {
          number: "First Glorious Mystery",
          label: "The Resurrection",
          passage: "",
          passageId: "",
          fruit: "The virtue of faith",
        },
        {
          number: "Second Glorious Mystery",
          label: "The Ascension",
          passage: "",
          passageId: "",
          fruit: "The virtue of hope",
        },
        {
          number: "Third Glorious Mystery",
          label: "The Descent of the Holy Spirit",
          passage: "",
          passageId: "",
          fruit: "The virtue of love",
        },
        {
          number: "Fourth Glorious Mystery",
          label: "The Assumption",
          passage: "",
          passageId: "",
          fruit: "A happy death",
        },
        {
          number: "Fifth Glorious Mystery",
          label: "The Coronation of the Blessed Virgin",
          passage: "",
          passageId: "",
          fruit: "Eternal salvation",
        },
      ],
    },
    luminous: {
      label: "Luminous Mysteries",
      prayedOn: "Typically prayed on Thursday",
      mysteries: [
        {
          number: "First Luminous Mystery",
          label: "The Baptism of Jesus",
          passage: "",
          passageId: "",
          fruit: "Submission to God's Will",
        },
        {
          number: "Second Luminous Mystery",
          label: "The Wedding at Cana",
          passage: "",
          passageId: "",
          fruit: "Devotion to Mary",
        },
        {
          number: "Third Luminous Mystery",
          label: "Proclamation of the Kingdom of God",
          passage: "",
          passageId: "",
          fruit: "The grace of conversion",
        },
        {
          number: "Fourth Luminous Mystery",
          label: "The Transfiguration",
          passage: "",
          passageId: "",
          fruit: "A holy fear of God",
        },
        {
          number: "Fifth Luminous Mystery",
          label: "The Institution of the Holy Eucharist",
          passage: "",
          passageId: "",
          fruit: "Thanksgiving to God",
        },
      ],
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={{ marginBottom: 15 }}>
        <Text style={styles.prayerHeader}>How to Pray the Rosary</Text>
        <Text style={styles.prayerBody}>
          As a general rule, and depending on the season:
        </Text>
        <Text style={styles.prayerBody}>
          Joyful Mysteries are said on Monday and Saturday;
        </Text>
        <Text style={styles.prayerBody}>
          Sorrowful Mysteries are said on Tuesday and Friday;
        </Text>
        <Text style={styles.prayerBody}>
          Glorious Mysteries are said on Wednesday and Sunday; and
        </Text>
        <Text style={styles.prayerBody}>
          Luminous Mysteries are said on Thursdays.
        </Text>
      </Card>
      {Object.values(mysteries).map((mystery, index) => (
        <Accordian
          key={index}
          title={mystery.label}
          style={{ marginBottom: 15 }}
        >
          <Text style={styles.prayerSubHeader}>{mystery.prayedOn}</Text>
          {mystery.mysteries.map((m, index) => (
            <View
              style={
                mystery.mysteries.length - 1 !== index && { marginBottom: 15 }
              }
            >
              <Text style={styles.numberText}>{m.number}:</Text>
              <Text style={styles.mysteryText}>{m.label}</Text>
              {m.passage.length > 0 && (
                <Text style={styles.passageText}>
                  "{m.passage}"{" "}
                  <Text style={styles.passageIdText}>({m.passageId})</Text>
                </Text>
              )}

              <Text
                style={{
                  color: colors.neutral900,
                  fontSize: 16,
                  // marginTop: 10,
                  fontWeight: "bold",
                }}
              >
                Fruit of the mystery:
                <Text style={styles.fruitText}> {m.fruit}</Text>
              </Text>
            </View>
          ))}
        </Accordian>
      ))}
      <Accordian title="Closing Prayers" style={{ marginBottom: 30 }}>
        <View>
          <Text
            style={{
              color: colors.neutral900,
              textAlign: "center",
              marginTop: 15,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Let us pray
          </Text>
          <Text
            style={{ color: colors.neutral700, marginTop: 10, fontSize: 16 }}
          >
            O God, whose only-begotten Son, by His life, death and resurrection,
            has purchased for us the rewards of eternal life; grant, we beseech
            Thee, that, meditating upon these mysteries of the Most Holy Rosary
            of the Blessed Virgin Mary, we may imitate what they contain and
            obtain what they promise, through the same Christ our Lord. Amen.
          </Text>
          <Text
            style={{ color: colors.neutral700, marginTop: 10, fontSize: 16 }}
          >
            V. May the divine assistance remain always with us.
          </Text>
          <Text
            style={{ color: colors.neutral700, marginTop: 10, fontSize: 16 }}
          >
            R. And may the souls of the faithful departed, through the mercy of
            God, rest in peace.
          </Text>
          <Text
            style={{ color: colors.neutral700, marginTop: 10, fontSize: 16 }}
          >
            Amen
          </Text>
        </View>
      </Accordian>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral200,
    padding: 15,
  },
  fruitText: {
    fontSize: 16,
    color: colors.neutral700,
    marginBottom: 5,
    fontWeight: "normal",
  },
  passageIdText: {
    fontSize: 12,
    color: colors.neutral500,
    marginBottom: 5,
  },
  passageText: {
    fontSize: 16,
    color: colors.neutral700,
    marginBottom: 5,
  },
  mysteryText: {
    fontSize: 20,
    color: colors.neutral900,
    fontWeight: "bold",
    marginBottom: 5,
  },
  numberText: {
    fontSize: 16,
    color: colors.neutral700,
    fontWeight: "bold",
    marginBottom: 5,
  },
  accordian: {
    marginBottom: 15,
  },
  prayerHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.neutral1000,
  },
  prayerSubHeader: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 15,
    color: colors.neutral700,
  },
  prayerBody: {
    fontSize: 16,
    color: colors.neutral700,
  },
});
