import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useLanguage } from "../../src/Languagecontext";


export default function PinSuccess({ navigation }) {
  const { t } = useLanguage();
  return (
    <View style={styles.container}>
      
      <Image
        source={require("../../src/images/pin2.png")}
        style={styles.check}
      />

      <Text style={styles.title}>{t('pin_success_title')}</Text>
      <Text style={styles.subtitle}>{t('pin_success_subtitle')}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.buttonText}>{t('pin_success_button')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  check: {
    width: 100,
    height: 100,
    marginBottom: 30,
    marginTop: 50,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    // marginBottom: 5,
  },
  subtitle: {
    color: "#aaa",
    // marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    width: "80%",
    borderRadius: 10,
    marginTop: 350,
  },
  buttonText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "600",
  },
});
