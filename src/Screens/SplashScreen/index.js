/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('LoginForm');
  //   }, 2000);
  // }, [navigation]);
  return (
    <ImageBackground
      style={styles.mainView}
      source={require('../../assets/images/bgImage.png')}>
      <StatusBar barStyle={'light-content'} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
  },
});

export default Splash;
