import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View,ImageBackground, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Formik} from 'formik';
import styles from './styles';
import Theme, { moderateScale } from '../Theme';
// import Button from '../../Components/Custom/Button';
import SoundRecorder from 'react-native-sound-recorder';

import { PermissionsAndroid } from 'react-native';
const Audiosrc = () => {
  
  useEffect(() => {
    checkMicrophonePermission();

  }, []);
  var RNFS = require('react-native-fs');

  const [isRecording, setRecording] = useState(false);
  const audioPath =  RNFS.CachesDirectoryPath + '/input.mp3';; // Path where the audio file will be saved

  const checkMicrophonePermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message: 'This app needs access to your microphone to record audio.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Microphone permission granted');
        } else {
          console.log('Microphone permission denied');
        }
      } else {
        // For iOS or other platforms, use react-native-permissions
        const permissionResult = await check(PERMISSIONS.IOS.MICROPHONE);

        if (permissionResult === RESULTS.GRANTED) {
          console.log('Microphone permission granted');
        } else {
          console.log('Microphone permission denied');
        }
      }
    } catch (error) {
      console.error('Error checking microphone permission:', error);
    }
  };


  const startRecording = async () => {
    try {
      // Start recording
      const result = await SoundRecorder.start(audioPath);
      console.log('Recording started:', result);
      setRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };
   

  const stopRecording = async () => {
    try {
      // Stop recording
      const result = await SoundRecorder.stop();
      console.log('Recording stopped. File saved at:', result.path);
      setRecording(false);
    } catch (error) {
      console.error('Error stopping recording:', error);
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
             //  backgroundColor:'blue',
            justifyContent:'center'
            }}>

           
                 <Text style={styles.DealText}>Audio To Sign</Text>
             
        <TouchableOpacity  onPress={isRecording ? stopRecording : startRecording}>
                <Image
                  style={styles.arrimg}
                  source={require('../../assets/images/mike.png')}
                />
                </TouchableOpacity>
         <Text style={{textAlign:'center'}}>{isRecording ? 'Recording...' : 'Tap to record'}</Text>
             
            </View>
         
        <View style={styles.Cameracon}>
<Image style={{height:moderateScale(100), width:'30%', alignSelf:'center'}} source={require('../../assets/images/Text.png')}/>
        </View>
        <View style={styles.Camera}>
        <Image   style={{height:moderateScale(250), width:'80%', alignSelf:'center'}} source={require('../../assets/images/img.png')}/>
  
</View>
       
          </KeyboardAwareScrollView>
          </ImageBackground>
  
  );
};
export default Audiosrc;

// import React, { useState, useRef } from 'react';
// import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { AudioRecorderPlayer, AudioUtils } from 'react-native-audio-recorder-player';
// import styles from './styles';
// import Theme, { moderateScale } from '../Theme';

// const Audiosrc = () => {
//   const [isRecording, setRecording] = useState(false);
//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

//   const startRecording = async () => {
//     try {
//       await audioRecorderPlayer.startRecorder(audioPath);
//       setRecording(true);
//       console.log('Recording started');
//     } catch (error) {
//       console.error('Error starting recording:', error);
//     }
//   };

//   const stopRecording = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       setRecording(false);
//       console.log('Recording stopped. File saved at:', result);
//     } catch (error) {
//       console.error('Error stopping recording:', error);
//     }
//   };

//   return (
//     <ImageBackground
//       style={styles.mainView}
//       source={require('../../assets/images/bgImage.png')}
//     >
//       <KeyboardAwareScrollView contentContainerStyle={styles.keyboardWrapper}>
//         <View
//           style={{
//             padding: moderateScale(5),
//             width: '90%',
//             justifyContent: 'center',
//           }}
//         >
//           <Text style={styles.DealText}>Audio To Sign</Text>

//           <TouchableOpacity
//             onPress={isRecording ? stopRecording : startRecording}
//           >
//             <Image
//               style={styles.arrimg}
//               source={require('../../assets/images/mike.png')}
//             />
//           </TouchableOpacity>
//           <Text style={{ textAlign: 'center' }}>
//             {isRecording ? 'Recording...' : 'Tap to record'}
//           </Text>
//         </View>

//         <View style={styles.Cameracon}>
//           <Image
//             style={{ height: moderateScale(100), width: '30%', alignSelf: 'center' }}
//             source={require('../../assets/images/Text.png')}
//           />
//         </View>

//         <View style={styles.Camera}>
//           <Image
//             style={{ height: moderateScale(250), width: '80%', alignSelf: 'center' }}
//             source={require('../../assets/images/img.png')}
//           />
//         </View>
//       </KeyboardAwareScrollView>
//     </ImageBackground>
//   );
// };

// export default Audiosrc;
