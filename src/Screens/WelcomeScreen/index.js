/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
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
import Theme, {moderateScale} from '../Theme';
import Button from '../../Components/Custom/Button';

const Welcomesrc = ({navigation}) => {
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
            top: 0,
          }}>
          <View
            style={{
              // padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.DealText}>Welcome, User</Text>
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
          <TouchableOpacity
            style={[styles.mainCard]}
            onPress={() => navigation.navigate('Camerasrc')}>
            <Image
              style={styles.cardimg}
              source={require('../../assets/images/Understand.png')}
            />
            <Text style={styles.connectFriendstitle}>Understand</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.mainCard]}
            onPress={() => navigation.navigate('AudioSrc')}>
            <Image
              style={styles.cardimg}
              source={require('../../assets/images/Talk.png')}
            />
            <Text style={styles.connectFriendstitle}>Talk</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.mainCard]}
            onPress={() => navigation.navigate('Gesturesrc')}>
            <Image
              style={styles.cardimg}
              source={require('../../assets/images/gesture.png')}
            />
            <Text style={[styles.connectFriendstitle, {paddingHorizontal: 10}]}>
              Common hand gestures
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.mainCard]}>
            <Image
              style={styles.cardimg}
              source={require('../../assets/images/Objection.png')}
            />
            <Text style={styles.connectFriendstitle}>Point Of Objection</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};
export default Welcomesrc;
