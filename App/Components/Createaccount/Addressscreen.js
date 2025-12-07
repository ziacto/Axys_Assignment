import { LinkingContext } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useLanguage } from '../../src/Languagecontext'

const COUNTRIES = [
  "United States of America",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Romania",
  "Switzerland",
  "Austria",
];

export default function GetToKnowYouScreen({ navigation }) {
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [nationality, setNationality] = useState("");
  const [openNationalityModal, setOpenNationalityModal] = useState(false);
  const { t } = useLanguage();

  const allFilled = first && last && nationality; // optional middle

  const handleNext = () => {
    if (allFilled) {
      // Navigate to next screen
      navigation.navigate("Createpassword"); // replace with your screen
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
          {/* <Text style={styles.headerTitle}>Let's get to know you</Text> */}
          <View style={{ width: 24 }} />
        </View>
       
         

        {/* PROGRESS BAR */}
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "100%" }]} />
        </View>

         <Text style={styles.headerTitle}>{t('address_title')}</Text>

        {/* FORM */}
        <View style={styles.form}>
          <Text style={styles.label}>{t('street_label')}</Text>
          <TextInput
            value={first}
            onChangeText={setFirst}
            style={styles.input}
          />

          <Text style={styles.label}>{t('city_label')}</Text>
          <TextInput
            value={middle}
            onChangeText={setMiddle}
            style={styles.input}
          />

          <Text style={styles.label}>{t('state_label')}</Text>
          <TextInput
            value={last}
            onChangeText={setLast}
            style={styles.input}
          />

          <Text style={styles.label}>{t('country_label')}</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setOpenNationalityModal(true)}
          >
            <Text style={{ color: nationality ? "#fff" : "#777" }}>
              {nationality ? nationality : "Select country"}
            </Text>
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
            {t('next_button')}
          </Text>
        </TouchableOpacity>

        {/* NATIONALITY MODAL */}
        <Modal visible={openNationalityModal} transparent animationType="slide">
          <View style={styles.modalBg}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>{t('select_nationality_title')}</Text>
              <FlatList
                data={COUNTRIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => {
                      setNationality(item);
                      setOpenNationalityModal(false);
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setOpenNationalityModal(false)}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>{t('close_button')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingTop: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  progressBar: {
    height: 4,
    width: "100%",
    backgroundColor: "#222",
    borderRadius: 10,
    marginBottom: 25,
  },
  progressFill: {
    height: 4,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  form: {
    flex: 1,
  },
  label: {
    color: "#999",
    fontSize: 13,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 8,
    color: "#fff",
    fontSize: 15,
  },
  nextBtn: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  nextTxt: {
    fontWeight: "600",
    fontSize: 16,
  },
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
  },
  modalBox: {
    backgroundColor: "#111",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: "65%",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "600",
  },
  countryItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  closeBtn: {
    marginTop: 20,
    padding: 14,
    backgroundColor: "#333",
    borderRadius: 8,
  },
});
