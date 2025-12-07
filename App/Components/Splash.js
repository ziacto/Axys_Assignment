// src/screens/SplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Initialscreen");
    }, 1600); // show splash for 1.6s

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
     
      <Image source={require("../src/images/splashlogo.png")} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    position: "absolute",
    width: "130%",
    height: "100%",
    opacity: 0.95,
  },
  logo: {
    width: 170,
    height: 70,
   
  },
});

