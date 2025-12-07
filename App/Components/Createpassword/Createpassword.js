import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useLanguage } from "../../src/Languagecontext";


export default function CreatePasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { t } = useLanguage();

  // Password criteria
  const has8 = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNum = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const allCriteria = has8 && hasUpper && hasLower && hasNum && hasSpecial;
  const passwordMatch = password === confirm && confirm.length > 0;

  const enableNext = allCriteria && passwordMatch;

  const handleNext = () => {
    if (enableNext) {
      navigation.navigate("Createpin"); // <-- ADD YOUR SCREEN NAME HERE
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* HEADER */}
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={{ width: 24 }} />
          </View>

          {/* PROGRESS BAR */}
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "100%" }]} />
          </View>

          {/* TITLE */}
          <Text style={styles.title}>{t('create_password_title')}</Text>
          <Text style={styles.subtext}>
            {t('create_password_subtext')}
          </Text>

          {/* PASSWORD FIELD */}
          <View style={styles.field}>
            <Text style={styles.label}>{t('password_label')}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPass}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#666"
              />
              <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                <Icon
                  name={showPass ? "eye-off" : "eye"}
                  size={22}
                  color="#888"
                />
              </TouchableOpacity>
            </View>

            {/* CRITERIA LIST */}
            <View style={styles.criteriaBox}>
              <CriteriaRow label={t('criteria_8chars')} valid={has8} />
              <CriteriaRow label={t('criteria_uppercase')} valid={hasUpper} />
              <CriteriaRow label={t('criteria_lowercase')} valid={hasLower} />
              <CriteriaRow label={t('criteria_number')} valid={hasNum} />
              <CriteriaRow
                label={t('criteria_special')}
                valid={hasSpecial}
              />
            </View>
          </View>

          {/* CONFIRM PASSWORD */}
          <View style={styles.field}>
            <Text style={styles.label}>{t('confirm_password_label')}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                secureTextEntry={!showConfirm}
                value={confirm}
                onChangeText={setConfirm}
                placeholder={t('confirm_password_placeholder')}
                placeholderTextColor="#666"
              />
              <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                <Icon
                  name={showConfirm ? "eye-off" : "eye"}
                  size={22}
                  color="#888"
                />
              </TouchableOpacity>
            </View>

            {passwordMatch && (
              <Text style={styles.matchText}>{t('password_match')}</Text>
            )}
          </View>

          {/* NEXT BUTTON */}
          <TouchableOpacity
            onPress={handleNext}
            style={[
              styles.nextBtn,
              { backgroundColor: enableNext ? "#fff" : "#444" },
            ]}
            disabled={!enableNext}
          >
            <Text
              style={[styles.nextTxt, { color: enableNext ? "#000" : "#888" }]}
            >
              {t('next_button')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* CRITERIA COMPONENT */
const CriteriaRow = ({ label, valid }) => (
  <View style={styles.criteriaRow}>
    <Icon
      name={valid ? "checkmark-circle" : "ellipse-outline"}
      size={16}
      color={valid ? "#4CAF50" : "#777"}
    />
    <Text style={[styles.criteriaText, { color: valid ? "#fff" : "#777" }]}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingTop: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#222",
    borderRadius: 10,
    marginBottom: 25,
  },
  progressFill: {
    height: 4,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  title: { color: "#fff", fontSize: 22, fontWeight: "600", marginBottom: 5 },
  subtext: { color: "#888", fontSize: 14, marginBottom: 25 },
  field: { marginBottom: 20 },
  label: { color: "#bbb", fontSize: 14, marginBottom: 8 },
  inputWrapper: {
    backgroundColor: "#1A1A1A",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    color: "#fff",
    fontSize: 15,
  },
  criteriaBox: { marginTop: 10 },
  criteriaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  criteriaText: {
    marginLeft: 8,
    fontSize: 13,
  },
  matchText: {
    color: "#4CAF50",
    marginTop: 8,
    fontSize: 13,
  },
  nextBtn: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  nextTxt: { fontWeight: "600", fontSize: 16 },
});
