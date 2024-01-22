import React, {useEffect} from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginForm');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} />
      <Image
        resizeMode="stretch"
        style={styles.logo}
        source={require('../../assets/images/DuDeSplash.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  logo: {
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
  },
});

export default Splash;
