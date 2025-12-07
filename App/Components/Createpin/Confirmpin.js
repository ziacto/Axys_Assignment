import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLanguage } from "../../src/Languagecontext";


export default function ConfirmPinScreen({ route, navigation }) {
  const { t } = useLanguage();
  const { firstPin } = route.params;
  const [pin, setPin] = useState("");

  const handleInput = async (value) => {
    if (pin.length < 4) {
      const newPin = pin + value;
      setPin(newPin);

      if (newPin.length === 4) {
        if (newPin === firstPin) {
          await AsyncStorage.setItem("userPin", newPin);
          navigation.navigate("PinSuccess");
        } else {
          alert("PINs do not match!");
          setPin("");
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Dice */}
      <Image source={require("../../src/images/pin1.png")} style={styles.dice} />

      <Text style={styles.title}>{t('confirm_pin_title')}</Text>
      <Text style={styles.subtitle}>{t('confirm_pin_subtitle')}</Text>

      {/* PIN Boxes */}
      <View style={styles.pinRow}>
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={styles.pinBox}>
            <Text style={styles.pinText}>{pin[i] ? "•" : ""}</Text>
          </View>
        ))}
      </View>

      <TextInput
        style={{ height: 0, width: 0 }}
        keyboardType="number-pad"
        autoFocus
        value={pin}
        onChangeText={(t) => handleInput(t.slice(-1))}
      />
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  dice: {
    width: 100,
    height: 100,
    marginTop: 40,
    alignSelf: "center",
    marginTop: 100,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginTop: 20,
  },
  subtitle: {
    color: "#888",
    textAlign: "center",
    fontSize: 13,
    marginBottom: 40,
  },
  pinRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  pinBox: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
  },
  pinText: {
    color: "#fff",
    fontSize: 28,
  },
});
