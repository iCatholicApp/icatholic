// import React, { useEffect, useState } from "react";
// import { StyleSheet, ScrollView, View, Text } from "react-native";
// import { useTheme } from "@react-navigation/native";

// import Romcal from "romcal";
// import { Canada_En } from "@romcal/calendar.canada";
// import colors from "../theme/colors";
// import { Card } from "../components";
// import { getTodaysMass } from "../helper/massReadings";

// export default function HomeScreen() {
//   const { colors } = useTheme();

//   // console.log("colors", colors);
//   const currentDateTime = new Date();
//   const dateTimeStringForChurchCalendar = `${currentDateTime.getFullYear()}-${(
//     "0" +
//     (currentDateTime.getMonth() + 1)
//   ).slice(-2)}-${("0" + currentDateTime.getDate()).slice(-2)}`;

//   const currentHour = currentDateTime.getHours();
//   const timeString =
//     currentHour > 12 ? (currentHour > 18 ? "Evening" : "Afternoon") : "Morning";

//   const [churchCalendar, setChurchCalendar] = useState({});
//   const romcal = new Romcal({
//     localizedCalendar: Canada_En,
//     epiphanyOnSunday: true,
//   });

//   useEffect(() => {
//     romcal
//       .generateCalendar(2023)
//       .then((data) => setChurchCalendar(data[dateTimeStringForChurchCalendar]));
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       <Card>
//         <View>
//           <Text style={{ textAlign: "center", fontSize: 20 }}>
//             Good {timeString} Friend!
//           </Text>
//         </View>
//         <View style={{ marginTop: 25 }}>
//           <Text style={{ fontSize: 18, textAlign: "center" }}>
//             Today's Feast
//           </Text>
//           <View
//             style={{
//               marginTop: 10,
//               backgroundColor: colors.neutral98,
//               padding: 10,
//               borderRadius: 10,
//             }}
//           >
//             {churchCalendar?.[0] && (
//               <Text key={churchCalendar[0]?.id}>{churchCalendar[0]?.name}</Text>
//             )}
//             {churchCalendar?.[1] && (
//               <Text key={churchCalendar[1]?.id}>
//                 Or: {churchCalendar[1]?.name}
//               </Text>
//             )}
//             {churchCalendar?.[2] && (
//               <Text key={churchCalendar[2]?.id}>
//                 Or: {churchCalendar[2]?.name}
//               </Text>
//             )}
//           </View>
//         </View>
//       </Card>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.neutral95,
//     padding: 15,
//   },
// });

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

export default function HomeScreen() {
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
    marginBottom: 15,
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
