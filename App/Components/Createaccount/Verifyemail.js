// OtpScreen.js
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, s } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Userinfo from "./Userinfo";
import { useLanguage } from '../../src/Languagecontext'

export default function OtpScreen({ navigation }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [verifying, setVerifying] = useState(false);
  const { t } = useLanguage();

  const inputs = useRef([]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleInput = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }

    // When 6 digits entered → start verifying
    if (index === 5 && text !== "") {
      setVerifying(true);
      setTimeout(() => {
        setVerifying(false);
        alert("OTP Verified (Demo)");
      }, 2500);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: s(10) }}>
        <Text style={{ color: "white", fontSize: s(16) }}>←</Text>
      </TouchableOpacity>

      {/* Lock Icon */}
      <View style={styles.iconWrapper}>
        <Image
          source={require("../../src/images/lock.png")} // your lock image
          style={styles.icon}
        />
      </View>

      <Text style={styles.title}>{t('otp_screen_title')}</Text>

      <Text style={styles.subtitle}>
        {t('otp_screen_subtitle')}
      </Text>

      {/* OTP Boxes */}
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

      {/* Verifying State */}
      {verifying && (
        <View style={styles.verifyingWrapper}>
          <ActivityIndicator size="small" color="#fff" />
          <Text style={styles.verifyingText}>{t('otp_screen_verifying')}</Text>
        </View>
      )}

      {/* Timer */}
      <Text style={styles.timerText}>
        Resend code in {timer < 10 ? `0${timer}` : timer}s
      </Text>


     <TouchableOpacity
             style={[
               styles.nextBtn,
              
             ]}
            
             onPress={() => navigation.navigate("Userinfo")}
           >
             <Text
               style={[
                 styles.nextBtnText,
                
               ]}
             >
               {t('otp_screen_next_btn')}
             </Text>


           </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: "20@ms",
  },
  iconWrapper: {
    alignItems: "center",
    marginTop: "100@ms",
    marginBottom: "10@ms",
  },
  icon: {
    width: "100@ms",
    height: "100@ms",
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: "22@ms",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "10@ms",
  },
  subtitle: {
    color: "#aaa",
    fontSize: "13@ms",
    textAlign: "center",
    marginTop: "8@ms",
    width: "90%",
    alignSelf: "center",
  },
  otpWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "35@ms",
  },
  otpBox: {
    width: "45@ms",
    height: "50@ms",
    backgroundColor: "#1C1C1E",
    borderRadius: "8@ms",
    color: "#fff",
    fontSize: "20@ms",
    textAlign: "center",
  },
  verifyingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20@ms",
  },
  verifyingText: {
    color: "#fff",
    marginLeft: "8@ms",
  },
  timerText: {
    color: "#777",
    textAlign: "center",
    marginTop: "20@ms",
    fontSize: "13@ms",
  },
   nextBtn: {
      backgroundColor: '#fff',
      height: hp('6%'),
      borderRadius: '12@ms',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('32%'),
    },
  
    
  
    nextBtnText: {
      color: '#000',
      fontSize: '16@ms',
      fontWeight: '600',
    },
});
