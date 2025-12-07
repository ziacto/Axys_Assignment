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
import { useLanguage } from "../../src/Languagecontext";


export default function CreatePinScreen({ navigation }) {
  const [pin, setPin] = useState("");
  const { t } = useLanguage();

  const handleInput = (value) => {
    if (pin.length < 4) {
      const newPin = pin + value;
      setPin(newPin);

      if (newPin.length === 4) {
        navigation.navigate("Confirmpin", { firstPin: newPin });
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Dice Image */}
      <Image source={require("../../src/images/pin1.png")} style={styles.dice} />

      <Text style={styles.title}>{t('setup_pin_title')}</Text>
      <Text style={styles.subtitle}>{t('setup_pin_subtitle')}</Text>

      {/* PIN Boxes */}
      <View style={styles.pinRow}>
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={styles.pinBox}>
            <Text style={styles.pinText}>{pin[i] ? "•" : ""}</Text>
          </View>
        ))}
      </View>

      {/* Hidden Input */}
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
