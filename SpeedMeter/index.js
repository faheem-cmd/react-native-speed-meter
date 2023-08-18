// import React, { useState, useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   PanResponder,
//   TouchableOpacity,
//   Image,
//   TextInput,
// } from "react-native";
// import Speed from "./FuelChart.svg";
// import { RFValue } from "react-native-responsive-fontsize";
// const height = 844;

// export const GlobalSize = (number) => {
//   const value = RFValue(number, height);
//   return value;
// };

// export const FuelMeter = () => {
//   const [rotationValue, setRotationValue] = useState(90);
//   const [percentage, setPercentage] = useState(1);

//   useEffect(() => {
//     setPercentage(((90 - rotationValue) / 180) * 100);
//   }, [rotationValue]);

//   const handleInputChange = (text) => {
//     const inputValue = parseFloat(text);
//     if (inputValue > 100 || inputValue < 0) {
//       alert("invalid");
//     } else if (!isNaN(inputValue)) {
//       setPercentage(inputValue);
//       setRotationValue(90 - (inputValue / 100) * 180);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.subContainer}>
//         <Speed height={200} width={250} />

//         <View style={styles.meterOverlay}>
//           <View style={styles.meterArrow}>
//             <View
//               style={[
//                 styles.arrowStick,
//                 {
//                   transform: [{ rotate: `${rotationValue}deg` }],
//                 },
//               ]}
//             >
//               <Image
//                 source={require("./Arrow.png")}
//                 style={styles.arrowImage}
//               />
//             </View>
//             <View style={styles.arrowRotationPosition} />
//           </View>
//         </View>
//       </View>
//       <View style={styles.textInputContainer}>
//         <Text style={styles.percentageText}>{percentage}%</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     elevation: 1,
//     borderRadius: 24,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   subContainer: {
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     // marginTop: GlobalSize(24),
//     // backgroundColor: 'red',
//     padding: GlobalSize(24),
//   },
//   meterOverlay: {
//     bottom: "45%",
//     alignItems: "center",
//     position: "absolute",
//   },
//   meterArrow: {
//     alignItems: "center",
//     height: GlobalSize(86),
//     left: GlobalSize(-4.4),
//   },
//   arrowStick: {
//     height: GlobalSize(135),
//     width: GlobalSize(30),
//     zIndex: 1000,
//   },
//   arrowImage: {
//     height: null,
//     width: null,
//     flex: 1,
//     resizeMode: "contain",
//     top: GlobalSize(12.5),
//   },
//   arrowRotationPosition: {
//     height: GlobalSize(24),
//     width: GlobalSize(24),
//     backgroundColor: "black",
//     position: "absolute",
//     bottom: GlobalSize(6.2),
//     borderRadius: 100,
//   },
//   title: {
//     fontFamily: theme.font.MS600,
//     color: "#000000",
//     fontSize: GlobalSize(16),
//     lineHeight: GlobalSize(17.07),
//     marginTop: GlobalSize(28),
//   },
//   textInputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     position: "absolute",
//     bottom: GlobalSize(8),
//     paddingBottom: GlobalSize(25),

//     justifyContent: "center",
//   },
//   fuelFont: {
//     fontFamily: theme.font.MS600,
//     color: "#000000",
//     fontSize: GlobalSize(16),
//     lineHeight: GlobalSize(18.07),
//   },
//   textInputContainer2: {
//     height: GlobalSize(45),
//     width: GlobalSize(80),
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   input: {
//     color: "#242424",
//     fontSize: GlobalSize(13),
//     letterSpacing: GlobalSize(-0.41),
//     padding: 0,
//   },
//   percentageText: {
//     fontFamily: theme.font.MS600,
//     color: "#242424",
//     fontSize: GlobalSize(16),
//   },
// });

import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
