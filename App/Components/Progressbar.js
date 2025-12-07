// components/ProgressBar.js
// import React from "react";
// import { View } from "react-native";
// import { s } from "react-native-size-matters";

// export default function ProgressBar({ active }) {
//   return (
//     <View style={{ height: s(2), backgroundColor: "#222", width: "100%" }}>
//       <View
//         style={{
//           height: s(2),
//           width: active === 1 ? "20%" : active === 2 ? "40%" : "70%",
//           backgroundColor: "#fff",
//         }}
//       />
//     </View>
//   );
// }




import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export default function ProgressBar({ step = 2, total = 4 }) {
  const percent = Math.max(0, Math.min(100, (step / total) * 100));
  return (
    <View style={styles.wrap}>
      <View style={styles.track} />
      <View style={[styles.fill, { width: `${percent}%` }]} />
    </View>
  );
}

const styles = ScaledSheet.create({
  wrap: {
    height: "6@ms", // small area reserved (thin line sits inside)
    justifyContent: "center",
    marginBottom: "12@ms",
  },
  track: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "2@ms",
    backgroundColor: "#1b1b1b",
    borderRadius: "2@ms",
  },
  fill: {
    position: "absolute",
    left: 0,
    height: "2@ms",
    backgroundColor: "#fff",
    borderRadius: "2@ms",
  },
});

