// screens/PhoneScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import ProgressBar  from "../Progressbar";
import { useLanguage } from '../../src/Languagecontext'

export default function PhoneScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar active={1} />

      <Text style={styles.title}>{t('phone_screen_title')}</Text>

      <View style={styles.phoneInputWrapper}>
        <Text style={styles.countryCode}>+1</Text>
        <TextInput
          style={styles.phoneInput}
          keyboardType="numeric"
          placeholder={t('phone_screen_placeholder')}
          placeholderTextColor="#777"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Namefields")}
      >
        <Text style={styles.btnText}>{t('phone_screen_button')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: "20@ms" },
  title: { color: "#fff", fontSize: "22@ms", marginTop: "20@ms" },
  phoneInputWrapper: {
    flexDirection: "row",
    backgroundColor: "#1C1C1E",
    paddingHorizontal: "15@ms",
    height: "50@ms",
    borderRadius: "8@ms",
    alignItems: "center",
    marginTop: "25@ms",
  },
  countryCode: { color: "#fff", fontSize: "16@ms", marginRight: "10@ms" },
  phoneInput: { flex: 1, color: "white", fontSize: "16@ms" },
  button: {
    height: "50@ms",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10@ms",
    marginTop: "40@ms",
  },
  btnText: { fontSize: "16@ms", fontWeight: "700",color: "#000" },
});
