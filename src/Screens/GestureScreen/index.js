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



const Gesturesrc = () => {
  return (
  
  
    <ImageBackground
      style={styles.mainView}
      source={require('../../assets/images/bgImage.png')}>
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardWrapper}>
      <View
            style={{
              padding: moderateScale(5),
              width: '90%',
             //  backgroundColor:'blue',
          //  justifyContent:'center'
            }}>

           
                 <Text style={styles.DealText}>Common Hand Gestures</Text>
             
        </View>

        <Image resizeMode='cover'
                  style={styles.arrimg}
                  source={require('../../assets/images/handgesture.png')}
                />
    
               
         
       
          </KeyboardAwareScrollView>
          </ImageBackground>
  
  );
};
export default Gesturesrc;