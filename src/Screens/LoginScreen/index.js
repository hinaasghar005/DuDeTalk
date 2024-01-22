import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Formik} from 'formik';
import styles from './styles';
import Theme, {moderateScale, scale} from '../Theme';
import Button from '../../Components/Custom/Button';
import Feather from 'react-native-vector-icons/Feather';
import BootSplash from 'react-native-bootsplash';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(6, 'Password too Short'),
  // .matches(
  //   passwordRegExp,
  //   'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
  // ),
});

const LoginForm = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = values => {
    // Handle form submission logic here
    navigation.navigate('Welcomesrc');

    console.log(values);
  };
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      //   validateOnMount={true}
      validationSchema={loginValidationSchema}
      onSubmit={values => handleSubmit(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        dirty,
        setFieldTouched,
      }) => (
        <ImageBackground
          style={styles.mainView}
          source={require('../../assets/images/bgImage.png')}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.keyboardWrapper}>
            {/* <View style={{height:moderateScale(140), width:'40%', backgroundColor:Theme.colors.modalBackground, borderRadius: moderateScale(85), justifyContent:'center'}} > */}
            <Image
              style={{
                height: scale(100),
                width: scale(100),
                alignSelf: 'center',
                borderRadius: scale(15),
              }}
              source={require('../../assets/images/logo.png')}
            />
            {/* </View> */}
            <View style={styles.mainContainer}>
              <View style={{}}>
                <View>
                  <TextInput
                    placeholder="Enter email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    placeholderTextColor={Theme.colors.placeHolderColor}
                    style={[
                      styles.inputStyle,
                      {
                        borderBottomColor:
                          errors.email && touched.email
                            ? Theme.colors.red
                            : Theme.colors.darkTextColor,
                      },
                    ]}
                  />
                  {errors.email && touched.email && (
                    <Text style={{color: Theme.colors.red}}>
                      {errors.email}
                    </Text>
                  )}
                  <View>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={!showPassword}
                      onChangeText={handleChange('password')}
                      value={values.password}
                      placeholderTextColor={Theme.colors.placeHolderColor}
                      style={[
                        styles.inputStyle,
                        {
                          borderBottomColor:
                            errors.email && touched.email
                              ? Theme.colors.red
                              : Theme.colors.darkTextColor,
                        },
                      ]}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={{position: 'absolute', right: 10, bottom: 10}}>
                      <Feather
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={20}
                        color="black"
                        style={[styles.icon, {marginLeft: 5}]}
                      />
                    </TouchableOpacity>
                  </View>

                  {errors.password && touched.password && (
                    <Text style={{color: Theme.colors.red}}>
                      {errors.password}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => forgotPassword(true)}
                  style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>
                    Forget password?
                  </Text>
                </TouchableOpacity>
                <Button
                  // disabled={!isValid || !dirty}

                  disableStyle={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,.25)',
                    backgroundColor: '#C4C4C4',
                  }}
                  disableTextColor={'rgba(0,0,0,.25)'}
                  textStyle={
                    [
                      // styles.Buttontext,
                      // {
                      //    color: isValid  ? 'white' : 'grey',
                      // },
                    ]
                  }
                  style={styles.butndis}
                  text={'Login'}
                  // loading={loading}
                  // onPress={ handleEmailPress}
                  // onPress={handleSubmit}
                  onPress={() => navigation.navigate('Welcomesrc')}
                />
                {/* <Text style={styles.BottomText}>
          Already have an account?
        <Text style={styles.texstyle}>Login</Text>

      </Text> */}
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      )}
    </Formik>
  );
};
export default LoginForm;
