import React, {useEffect, useState,useRef } from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View,ImageBackground, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import Theme, { moderateScale } from '../Theme';


const Camerasrc = () => {
    
  const cameraRef = useRef(null);
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
      // Handle the captured image data as needed
    }
  };
  return (
  
  
    <ImageBackground
      style={styles.mainView}
      source={require('../../assets/images/bgImage.png')}>
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardWrapper}>
      <View
            style={{
              padding: moderateScale(5),
              width: '90%',
             // backgroundColor:'blue',
            justifyContent:'center',
            position:'relative'
            }}>

           
                 <Text style={styles.DealText}>Sign To Text</Text>
                 </View>
             <View style={styles.Camera}>
              <RNCamera
              ref={cameraRef}
               style={styles.preview}
               type={RNCamera.Constants.Type.back}
        /> 
       {/* <CaptureButton buttonDisabled={loading} onPress={takePicture} /> */}
      <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
              <View
             style={styles.captureButtonInner}
              />
            </TouchableOpacity>
        
              
            
             
            </View>
         
        
        <View style={styles.CameraimgBox}>
        <Image style={{height:moderateScale(280), width:'90%', alignSelf:'center', }} source={require('../../assets/images/Text.png')}/>
        </View>
       
          </KeyboardAwareScrollView>
          </ImageBackground>
  
  );
};
export default Camerasrc;