/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  LayoutAnimation,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Formik} from 'formik';
import styles from './styles';
import Theme, {moderateScale, scale} from '../Theme';
// import Button from '../../Components/Custom/Button';
import SoundRecorder from 'react-native-sound-recorder';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

import {PermissionsAndroid} from 'react-native';
import {speechToText} from '../../services/AI_Modals/speechToText';
import {dall_e} from '../../services/AI_Modals/dall-e';
import {Icon} from 'react-native-elements';
import {defaultImg} from '../../utils/constants';
import SoundPlayer from 'react-native-sound-player';
const Audiosrc = ({navigation}) => {
  const [isRecording, setRecording] = useState(false);
  const RNFB = RNFetchBlob.fs;
  const dirs = RNFB.dirs;
  const [audioPermissionGranted, setAudioPermissionGranted] = useState(false);
  const [micPadding, setMicPadding] = useState(scale(15));
  const [loadingText, setLoadingText] = useState(false);
  const [loadingPic, setLoadingPic] = useState(false);
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    const requestAudioPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setAudioPermissionGranted(true);
        } else {
          console.log('Audio recording permission denied');
        }
      } catch (error) {
        console.log('Error requesting audio permission:', error);
      }
    };
    requestAudioPermission();
    const _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );
    const _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingFile',
      ({success, name, type}) => {
        console.log('finished loading file', success, name, type);
      },
    );
    return () => {
      _onFinishedLoadingSubscription.remove();
      _onFinishedLoadingFileSubscription.remove();
    };
  }, []);

  const startRecording = async () => {
    try {
      if (audioPermissionGranted) {
        SoundPlayer.playSoundFile('click', 'wav');
        // Perform your action here (e.g., start recording)
        // Start recording
        const result = await SoundRecorder.start(
          RNFS.CachesDirectoryPath + '/input.mp3',
        );
        console.log('Recording started:', result);
        setRecording(true);
      } else {
        Alert.alert(
          'Permission Denied',
          'Cannot record audio. Permission not granted.',
        );
      }
    } catch (error) {
      console.error('Error starting recording:', error);
      SoundRecorder.stop();
    }
  };

  const stopRecording = async () => {
    try {
      // Stop recording

      const result = await SoundRecorder.stop();
      console.log('Recording stopped. File saved at:', result);
      SoundPlayer.stop();
      let fileContent = await RNFS.readFile(result.path, 'base64');
      // console.log('Base64 Audio:', fileContent);
      setLoadingText(true);
      speechToText(fileContent)
        .then(res => {
          console.log(
            '🚀 ~ speechToText ~ res.data:',
            res.result?.data?.text?.raw,
          );
          setText(res.result?.data?.text?.raw);
          setLoadingPic(true);
          dall_e(
            `Draw a real human who is translating '${res.result?.data?.text?.raw}' in sign language. There are separate pictures of same human for each sign`,
          )
            .then(res_img => {
              console.log(res_img.messsage);
              setImg(
                `data:image/png;base64,${res_img.result?.data?.image?.base64}`,
              );
            })
            .catch(err => {
              console.log('🚀 ~ stopRecording ~ err:', err);
            })
            .finally(() => {
              setLoadingPic(false);
            });
        })
        .catch(err => {
          console.log('🚀 ~ speechToText ~ err:', err);
        })
        .finally(() => {
          setLoadingText(false);
        });
      setRecording(false);
    } catch (error) {
      console.log('Error stopping recording:', error);
    }
  };
  const updatePadding = val => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setMicPadding(val);
  };

  return (
    <ImageBackground
      style={styles.mainView}
      source={require('../../assets/images/bgImage.png')}>
      <Icon
        type="antdesign"
        name="arrowleft"
        size={scale(30)}
        color={Theme.colors.white}
        containerStyle={{
          position: 'absolute',
          top: scale(40),
          left: scale(20),
          zIndex: 1,
        }}
        onPress={() => {
          navigation.goBack();
          console.log('hellow');
        }}
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardWrapper}>
        <View
          style={{
            padding: moderateScale(5),
            width: '90%',
            justifyContent: 'center',
          }}>
          <Text style={styles.DealText}>Audio To Sign</Text>

          <View style={styles.micUpperView}>
            <Pressable
              style={[
                styles.micTouch,
                {padding: micPadding},
                micPadding === scale(25) && {backgroundColor: Theme.colors.red},
              ]}
              // onPress={isRecording ? stopRecording : startRecording}
              onPressIn={() => {
                setMicPadding(scale(25));
                startRecording();
              }}
              onPressOut={() => {
                setMicPadding(scale(15));
                stopRecording();
              }}>
              <Icon
                type="material"
                name="mic"
                size={scale(50)}
                color={Theme.colors.white}
              />
            </Pressable>
          </View>
          <Text style={{textAlign: 'center', color: 'white'}}>
            {isRecording ? 'Recording...' : 'Tap to record'}
          </Text>
        </View>

        <View style={styles.Cameracon}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {loadingText ? (
              <ActivityIndicator size={'large'} color={Theme.colors.white} />
            ) : !text ? (
              <Icon
                type="font-awesome"
                name="file-text"
                size={scale(35)}
                color={Theme.colors.white}
              />
            ) : (
              <Text style={{color: 'black'}}>{text}</Text>
            )}
          </ScrollView>
        </View>
        <View style={styles.Camera}>
          {loadingPic ? (
            <ActivityIndicator size={'large'} color={Theme.colors.white} />
          ) : (
            <Image
              style={{
                height: '100%',
                width: '100%',
                alignSelf: 'center',
              }}
              source={img ? {uri: img} : {uri: defaultImg}}
            />
          )}
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
