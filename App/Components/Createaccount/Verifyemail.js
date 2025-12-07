import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLanguage } from '../../src/Languagecontext';

export default function OtpScreen({ navigation, route }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [verifying, setVerifying] = useState(false);
  const { t } = useLanguage();
  const inputs = useRef([]);
  const { email } = route.params;

  const handleInput = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) inputs.current[index + 1]?.focus();

    if (index === 5 && text !== "") {
      setVerifying(true);
      setTimeout(() => {
        setVerifying(false);
        navigation.navigate('Userinfo');
      }, 2000); // simulate verification
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 10 }}>
        <Text style={{ color: "white", fontSize: 16 }}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{t('otp_screen_title')}</Text>
      <Text style={styles.subtitle}>{t('otp_screen_subtitle')}</Text>

      <View style={styles.otpWrapper}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpBox}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleInput(text, index)}
          />
        ))}
      </View>

      {verifying && (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20 }}>
          <ActivityIndicator size="small" color="#fff" />
          <Text style={{ color: "#fff", marginLeft: 8 }}>{t('otp_screen_verifying')}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => {
          setVerifying(true);
          setTimeout(() => {
            setVerifying(false);
            navigation.navigate("Userinfo");
          }, 2000);
        }}
      >
        <Text style={styles.nextBtnText}>{t('otp_screen_next_btn')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingHorizontal: "20@ms" },
  title: { color: "#fff", fontSize: "22@ms", fontWeight: "600", textAlign: "center", marginTop: "120@ms" },
  subtitle: { color: "#aaa", fontSize: "13@ms", textAlign: "center", marginTop: "8@ms" },
  otpWrapper: { flexDirection: "row", justifyContent: "space-between", marginTop: "35@ms" },
  otpBox: { width: "45@ms", height: "50@ms", backgroundColor: "#1C1C1E", borderRadius: "8@ms", color: "#fff", fontSize: "20@ms", textAlign: "center" },
  nextBtn: { backgroundColor: '#fff', height: hp('6%'), borderRadius: '12@ms', justifyContent: 'center', alignItems: 'center', marginTop: hp('45%') },
  nextBtnText: { color: '#000', fontSize: '16@ms', fontWeight: '600' },
});