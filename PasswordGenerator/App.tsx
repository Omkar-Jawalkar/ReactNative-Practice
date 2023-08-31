import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {object, number} from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = object({
  passwordLength: number()
    .min(4, 'Number should be greater than 4')
    .max(16, 'Number should be less than 16')
    .positive()
    .required(),
});

export default function App() {
  const [passwordLength, setPasswordLength] = useState(0);
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [validationCheckState, setValidationCheckState] = useState({
    lowercase: false,
    uppercase: false,
    symbols: false,
    numbers: false,
  });

  // FORMIK THINGS
  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharacters = '0123456789';
    const symbolCharacters = '!@#$%^&*()_+';

    if (validationCheckState.lowercase) {
      characterList += lowercaseCharacters;
    }
    if (validationCheckState.uppercase) {
      characterList += uppercaseCharacters;
    }
    if (validationCheckState.numbers) {
      characterList += numberCharacters;
    }
    if (validationCheckState.symbols) {
      characterList += symbolCharacters;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    characterList;
    console.log(passwordResult);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      let characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetAllFields = () => {
    setPassword('');
    setPasswordLength(0);
    setIsPasswordGenerated(false);
    setValidationCheckState({
      lowercase: false,
      uppercase: false,
      symbols: false,
      numbers: false,
    });
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          {/*  THis is FORMIK */}
          <Formik
            initialValues={{
              passwordLength: '',
            }}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values.passwordLength);
              generatePasswordString(+values.passwordLength);
            }}>
            {({
              handleChange,
              touched,
              isValid,
              handleReset,
              errors,
              values,
              handleSubmit,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={validationCheckState.lowercase}
                    onPress={() => {
                      setValidationCheckState({
                        ...validationCheckState,
                        lowercase: !validationCheckState.lowercase,
                      });
                    }}></BouncyCheckbox>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include UpperCase </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={validationCheckState.uppercase}
                    onPress={() => {
                      setValidationCheckState({
                        ...validationCheckState,
                        uppercase: !validationCheckState.uppercase,
                      });
                    }}></BouncyCheckbox>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={validationCheckState.numbers}
                    onPress={() => {
                      setValidationCheckState({
                        ...validationCheckState,
                        numbers: !validationCheckState.numbers,
                      });
                    }}></BouncyCheckbox>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={validationCheckState.symbols}
                    onPress={() => {
                      setValidationCheckState({
                        ...validationCheckState,
                        symbols: !validationCheckState.symbols,
                      });
                    }}></BouncyCheckbox>
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetAllFields();
                    }}
                    style={styles.secondaryBtn}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Results :</Text>
            <Text style={styles.description}>Long Press to Copy</Text>
            <Text selectable style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
