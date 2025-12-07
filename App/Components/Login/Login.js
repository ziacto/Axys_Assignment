import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Feather";
import { useLanguage } from "../../src/Languagecontext";
import { useNavigation } from "@react-navigation/native";




export default function LoginScreen() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
    const navigation = useNavigation();

  const isFormFilled =
    (activeTab === "email" && email && password) ||
    (activeTab === "phone" && phone && password);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity>
        <Icon name="arrow-left" size={moderateScale(20)} color="#fff" />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.title}>{t("login_welcome")}</Text>
      <Text style={styles.subtitle}>{t("login_subtitle")}</Text>

      {/* Tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "email" && styles.activeTab]}
          onPress={() => setActiveTab("email")}
        >
          <Text style={[styles.tabText, activeTab === "email" && styles.activeTabText]}>
            {t("login_tab_email")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "phone" && styles.activeTab]}
          onPress={() => setActiveTab("phone")}
        >
          <Text style={[styles.tabText, activeTab === "phone" && styles.activeTabText]}>
            {t("login_tab_phone")}
          </Text>
        </TouchableOpacity>
      </View>

      {/* EMAIL UI */}
      {activeTab === "email" && (
        <>
          <Text style={styles.label}>{t("login_label_email")}</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={t("login_placeholder_email")}
            placeholderTextColor="#777"
            style={styles.input}
          />
        </>
      )}

      {/* PHONE UI */}
      {activeTab === "phone" && (
        <>
          <Text style={styles.label}>{t("login_label_phone")}</Text>

          <View style={styles.phoneRow}>
            <View style={styles.countryBox}>
              <Text style={{ color: "#fff" }}>+1</Text>
            </View>

            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder={t("login_placeholder_phone")}
              placeholderTextColor="#777"
              keyboardType="numeric"
              style={[styles.input, { flex: 1 }]}
            />
          </View>
        </>
      )}

      {/* PASSWORD */}
      <Text style={styles.label}>{t("login_label_password")}</Text>
      <View style={styles.passwordBox}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={t("login_placeholder_password")}
          placeholderTextColor="#777"
          secureTextEntry={secure}
          style={{ flex: 1, color: "#fff" }}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Icon
            name={secure ? "eye-off" : "eye"}
            size={moderateScale(20)}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgot}>{t("login_forgot_password")}</Text>
      </TouchableOpacity>

      {/* LOGIN BUTTON */}
      <TouchableOpacity 
      onPress={() => navigation.navigate("Createpin")}
        disabled={!isFormFilled}
        style={[styles.loginBtn, !isFormFilled && styles.disabledBtn]}
      >
        <Text style={styles.loginText}>{t("login_button")}</Text>

        {/* Purple Dot */}
        {isFormFilled && (
          <View style={styles.dot} />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: moderateScale(20),
  },
  title: {
    color: "#fff",
    fontSize: moderateScale(24),
    marginTop: moderateScale(20),
    fontWeight: "600",
  },
  subtitle: {
    color: "#aaa",
    fontSize: moderateScale(12),
    marginBottom: moderateScale(25),
  },
  tabRow: {
    flexDirection: "row",
    marginBottom: moderateScale(20),
  },
  tab: {
    flex: 1,
    paddingVertical: moderateScale(10),
    borderWidth: 1,
    borderColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  activeTab: {
    backgroundColor: "#444",
  },
  tabText: {
    color: "#777",
  },
  activeTabText: {
    color: "#fff",
  },

  label: {
    color: "#aaa",
    marginBottom: moderateScale(5),
  },
  input: {
    backgroundColor: "#1a1a1a",
    padding: moderateScale(12),
    borderRadius: moderateScale(6),
    color: "#fff",
    marginBottom: moderateScale(15),
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(15),
  },
  countryBox: {
    width: moderateScale(50),
    height: moderateScale(45),
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(6),
    marginRight: moderateScale(10),
  },
  passwordBox: {
    backgroundColor: "#1a1a1a",
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(6),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(10),
  },
  forgot: {
    color: "#999",
    marginBottom: moderateScale(30),
  },
  loginBtn: {
    backgroundColor: "#fff",
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    alignItems: "center",
    position: "relative",
    marginTop: moderateScale(220),
  },
  disabledBtn: {
    backgroundColor: "#444",
  },
  loginText: {
    color: "#000",
    fontWeight: "600",
  },
//   dot: {
//     width: 10,
//     height: 10,
//     // backgroundColor: "#b284ff",
//     borderRadius: 10,
//     position: "absolute",
//     right: 15,
//     top: "50%",
//     marginTop: -5,
//   },
});
