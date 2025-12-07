import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { useLanguage } from '../../src/Languagecontext'


const emailIsValid = (email) => /\S+@\S+\.\S+/.test(email);

const CreateAccountScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [canAgree, setCanAgree] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState('');
  const { t } = useLanguage();


  const translateY = useRef(new Animated.Value(hp(100))).current;

  const openModal = () => {
    setModalVisible(true);
    setCanAgree(false);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: hp(100),
      duration: 230,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const onAgreeFromModal = () => {
    setAgreed(true);
    closeModal();
  };

  const checkScroll = (e) => {
    const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
    const bottomReached =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (bottomReached) setCanAgree(true);
  };

  const onNext = () => {
    // console.log('Next pressed:', email, agreed);
    navigation.navigate("Verifyemail",{ email: email })
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      {/* Back Button */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Icon name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Titles */}
      <Text style={styles.mainTitle}>{t('create_account_title')}</Text>
      <Text style={styles.subText}>{t('create_account_subtext')}</Text>

      {/* Email Input */}
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      {/* Checkbox + Terms */}
      <View style={styles.termsRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.checkbox, agreed && styles.checkboxChecked]}
          onPress={() => {
            if (!agreed) openModal();
            else setAgreed(false);
          }}
        >
          {agreed && <Icon name="checkmark" size={16} color="#000" />}
        </TouchableOpacity>

        <Text style={styles.termsText}>
          {t('terms_agree_text')}
          <Text style={styles.termLink} onPress={openModal}>
            {t('terms_link')}
          </Text>
        </Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextBtn,
          !(emailIsValid(email) && agreed) && styles.nextBtnDisabled,
        ]}
        disabled={!(emailIsValid(email) && agreed)}
        onPress={onNext}
      >
        <Text
          style={[
            styles.nextBtnText,
            !(emailIsValid(email) && agreed) && { opacity: 0.6 },
          ]}
        >
          {t('next')}
        </Text>
      </TouchableOpacity>

      {/* TERMS MODAL */}
      <Modal visible={modalVisible} transparent animationType="none">
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.modalContent, { transform: [{ translateY }] }]}>

            <Text style={styles.modalTitle}>{t('terms_modal_title')}</Text>

            <ScrollView
              style={styles.scrollArea}
              onScroll={checkScroll}
              scrollEventThrottle={16}
            >
              <Text style={styles.termsLongText}>
                {t('terms_modal_text')}
                 {t('terms_modal_text')}
                  {t('terms_modal_text')}
                   {t('terms_modal_text')}
                    {t('terms_modal_text')}
                      {t('terms_modal_text')}
                        {t('terms_modal_text')}
                          {t('terms_modal_text')}
                            {t('terms_modal_text')}
               
                
              </Text>
            </ScrollView>

            <TouchableOpacity
              onPress={onAgreeFromModal}
              disabled={!canAgree}
              style={[styles.agreeBtn, !canAgree && styles.agreeBtnDisabled]}
            >
              <Text
                style={[
                  styles.agreeText,
                  !canAgree && { opacity: 0.6 },
                ]}
              >
                {t('agree')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeModal} style={styles.modalCloseArea}>
              <Text style={styles.modalCloseText}>{t('close')}</Text>
            </TouchableOpacity>

          </Animated.View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default CreateAccountScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('4%'),
  },

  topRow: {
    height: hp('6%'),
    justifyContent: 'center',
  },

  mainTitle: {
    color: '#fff',
    fontSize: '25@ms',
    fontWeight: '600',
    marginTop: hp('1%'),
  },

  subText: {
    color: '#9b9b9b',
    fontSize: '13@ms',
    marginTop: hp('0.7%'),
    marginBottom: hp('3%'),
  },

  input: {
    width: '100%',
    height: hp('6.5%'),
    backgroundColor: '#111',
    borderRadius: '10@ms',
    paddingHorizontal: '12@ms',
    color: '#fff',
    fontSize: '15@ms',
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('50%'),
    marginBottom: hp('2%'),
    paddingRight: wp('5%'),
  },

  checkbox: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: '6@ms',
    borderWidth: 1,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('3%'),
  },

  checkboxChecked: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },

  termsText: {
    flex: 1,
    color: '#bfbfbf',
    fontSize: '12.5@ms',
    lineHeight: '18@ms',
  },

  termLink: {
    color: '#fff',
    textDecorationLine: 'underline',
  },

  nextBtn: {
    backgroundColor: '#fff',
    height: hp('6%'),
    borderRadius: '12@ms',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
  },

  nextBtnDisabled: {
    backgroundColor: '#777',
  },

  nextBtnText: {
    color: '#000',
    fontSize: '16@ms',
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },

  modalContent: {
    height: hp('70%'),
    backgroundColor: '#111',
    borderTopLeftRadius: '20@ms',
    borderTopRightRadius: '20@ms',
    padding: wp('5%'),
  },

  modalTitle: {
    color: '#fff',
    fontSize: '18@ms',
    textAlign: 'left',
    marginBottom: hp('2%'),
  },

  scrollArea: { flex: 1 },

  termsLongText: {
    color: '#ccc',
    fontSize: '13@ms',
    lineHeight: '20@ms',
  },

  agreeBtn: {
    backgroundColor: '#fff',
    height: hp('6%'),
    borderRadius: '12@ms',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },

  agreeBtnDisabled: {
    backgroundColor: '#555',
  },

  agreeText: {
    color: '#000',
    fontSize: '15@ms',
    fontWeight: '600',
  },

  modalCloseArea: {
    alignItems: 'center',
    paddingTop: hp('1.5%'),
  },

  modalCloseText: {
    color: '#aaa',
    fontSize: '13@ms',
  },
});

