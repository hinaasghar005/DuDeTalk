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



const Welcomesrc = () => {
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
               top:0,
            }}>
            <View
              style={{
              // padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <View>
                 <Text style={styles.DealText}>Welcome, email?</Text>
                 {/* <Text style={styles.DealText}>email?</Text> */}
             </View>
                <Image
                  style={styles.arrimg}
                  source={require('../../assets/images/usericon.png')}
                />
         
             
            </View>
          </View>
      {/* <View style={{padding: 12}}>
            <Text style={styles.DealText}>Welcome email?</Text>
            </View> */}
        <View style={styles.mainContainer}>
      
        
        <View style={[ styles.mainCard,]}>
     <Image style={styles.cardimg}source={require('../../assets/images/Understand.png')} />
     <Text style={styles.connectFriendstitle}>Understand</Text>
                </View>
              
                 
       
                
        <View style={[ styles.mainCard,]}>
     <Image style={styles.cardimg}source={require('../../assets/images/Talk.png')} />
     <Text style={styles.connectFriendstitle}>Talk</Text>
                </View>
                
                
                
        <View style={[ styles.mainCard,]}>
     <Image style={styles.cardimg}source={require('../../assets/images/gesture.png')} />
     <Text style={[styles.connectFriendstitle,{paddingHorizontal:10}]}>Common hand gestures</Text>
                </View>
                
        <View style={[ styles.mainCard,]}>
     <Image style={styles.cardimg}source={require('../../assets/images/Objection.png')} />
     <Text style={styles.connectFriendstitle}>Point Of Objection</Text>
                </View>

   
         
          </View>
          </KeyboardAwareScrollView>
          </ImageBackground>
  
  );
};
export default Welcomesrc;