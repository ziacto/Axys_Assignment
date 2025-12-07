// src/screens/PEPScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useLanguage } from "../../src/Languagecontext";


export default function PEPScreen({ navigation }) {
  const [selected, setSelected] = useState(null);
  const allFilled = selected !== null;
  const { t } = useLanguage();

  const handleNext = () => {
    if (allFilled) {
      navigation.navigate("Addressscreen"); // Screen 4
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        {/* HEADER */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={{ width: 24 }} />
        </View>

        {/* PROGRESS BAR — STEP 3 */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "75%" }]} />
        </View>

        <Text style={styles.headerTitle} > {t('get_to_know_title')}</Text>
        <Text style={styles.subText}>
          {t('pep_question')}
        </Text>

        <View style={{ marginTop: 30,flexDirection: 'row',   }}>
          <TouchableOpacity
            style={[
              styles.optionBtn,
              selected === true && styles.optionSelected,
            ]}
            onPress={() => setSelected(true)}
          >
            <Text style={styles.optionTxt}>{t('yes_option')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionBtn,
              selected === false && styles.optionSelected,
            ]}
            onPress={() => setSelected(false)}
          >
            <Text style={styles.optionTxt}>{t('no_option')}</Text>
          </TouchableOpacity>
        </View>

        {/* NEXT BUTTON */}
        <TouchableOpacity
          style={[
            styles.nextBtn,
            { backgroundColor: allFilled ? "#fff" : "#444" },
          ]}
          onPress={handleNext}
        >
          <Text style={[styles.nextTxt, { color: allFilled ? "#000" : "#999" }]}>
            {t('next')}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingHorizontal: 20 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingTop: 10,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600", marginTop: 10 },
  subText: { color: "#aaa", fontSize: 13, marginTop: 6 },
  progressBar: {
    height: 4,
    width: "100%",
    backgroundColor: "#222",
    borderRadius: 10,
    marginBottom: 20,
  },
  progressFill: { height: 4, backgroundColor: "#fff", borderRadius: 10 },

  optionBtn: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    width: 154,
    alignItems: "center",
    marginRight: 10,
  },
  optionSelected: {
    borderWidth: 1,
    borderColor: "#fff",
  },
  optionTxt: { color: "#fff", fontSize: 15 },
  nextBtn: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 450,
  },
  nextTxt: { fontWeight: "600", fontSize: 16 },
});
