import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View,ImageBackground, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Formik} from 'formik';
import styles from './styles';
import Theme, { moderateScale } from '../Theme';
import Button from '../../Components/Custom/Button';


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



const LoginForm = () => {
  return (
    <Formik
    initialValues={{
      email: '',
      password: '',
    }}
 //   validateOnMount={true}
    validationSchema={loginValidationSchema}
    // onSubmit={values => handleEmailPress(values)}
    >
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
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardWrapper}>
        {/* <View style={{height:moderateScale(140), width:'40%', backgroundColor:Theme.colors.modalBackground, borderRadius: moderateScale(85), justifyContent:'center'}} > */}
          <Image style={{height:moderateScale(85), width:'30%', alignSelf:'center'}} source={require('../../assets/images/hand.png')}/>
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
                <Text style={{color: Theme.colors.red}}>{errors.email}</Text>
              )}
              <View>
                <TextInput
                  placeholder="Password"
                  // secureTextEntry={showEye ? false : true}
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
                  // onPress={() => setShowEye(!showEye)}
                  style={{position: 'absolute', right: 10, bottom: 10}}>
                  {/* <Feather
                    name={showEye ? 'eye' : 'eye-off'}
                    size={20}
                    color={COLORS.darkTextColor}
                  /> */}
                </TouchableOpacity>
              </View>

              {errors.password && touched.password && (
                <Text style={{color: Theme.colors.red}}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => forgotPassword(true)}
              style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forget password?</Text>
            </TouchableOpacity>
            <Button
            // disabled={!isValid || !dirty}
           
              disableStyle={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.25)',
                backgroundColor: '#C4C4C4',
              }}
              disableTextColor={'rgba(0,0,0,.25)'}
              textStyle={[
                // styles.Buttontext,
                // {
                //    color: isValid  ? 'white' : 'grey',
                // },
              ]}
              style={styles.butndis}
              text={'Login'}
              // loading={loading}
              // onPress={ handleEmailPress}
              onPress={handleSubmit}
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