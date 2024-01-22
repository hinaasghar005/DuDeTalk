/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import Theme, {moderateScale, scale} from '../Theme';
import {Icon} from 'react-native-elements';
import {gpt4_vision} from '../../services/AI_Modals/gpt4-vision';
import {textToSpeech} from '../../services/AI_Modals/textToSpeech';
import SoundPlayer from 'react-native-sound-player';
import RNFS from 'react-native-fs';

const Camerasrc = ({navigation}) => {
  const cameraRef = useRef(null);
  const [loadingText, setLoadingText] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  const [audio, setAudio] = useState('');

  useEffect(() => {
    const _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {
        console.log('finished playing', success);
        if (success) {
          SoundPlayer.stop();
          setIsPlaying(false);
        }
      },
    );

    const _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );
    const _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingURL',
      ({success, url}) => {
        console.log('finished loading url', success, url);
        // SoundPlayer.playUrl(`data:audio/wav;base64,${url}`);
        // console.log('...Audio Played successfully...');
      },
    );
    return () => {
      _onFinishedLoadingSubscription.remove();
      _onFinishedLoadingURLSubscription.remove();
      _onFinishedPlayingSubscription.remove();
    };
  }, []);
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data?.base64?.substring(0, 8));
      setLoadingText(true);
      cameraRef.current.pausePreview();
      gpt4_vision({
        image: data.base64,
        prompt: 'what this person is trying to tell me in sign language',
      })
        .then(res => {
          setText(res?.result?.data?.text?.raw);
          console.log(
            '🚀 ~ gpt4_vision ~ res.result:',
            res?.result?.data?.text?.raw,
          );
          console.log(
            'Sign meaning:',
            res?.result?.data?.text?.raw?.split('"')[1],
          );
          setLoadingAudio(true);
          textToSpeech(res?.result?.data?.text?.raw)
            .then(res => {
              console.log(
                '🚀 ~ takePicture ~ res.result.data:',
                JSON.stringify(res.result.data),
              );
              //data:audio/mpeg;base64,
              setAudio(`${res.result?.data?.audio?.base64}`);
              // try {
              //   SoundPlayer.loadUrl(
              //     `data:audio/acc;base64,${res.result?.data?.audio?.base64}`,
              //   );
              //   console.log('...Audio Load successfully...');
              // } catch (err) {
              //   console.log('🚀 ~ Audio play ~ err:', err);
              // }
            })
            .catch(err => {
              console.log('🚀 ~ takePicture ~ err:', err);
            })
            .finally(() => {
              setLoadingAudio(false);
            });
        })
        .catch(err => {
          console.log('🚀 ~ gpt4_vision ~ err:', err);
        })
        .finally(() => {
          setLoadingText(false);
          cameraRef.current?.resumePreview();
        });
      // Handle the captured image data as needed
    }
  };
  const playPauseAudio = async () => {
    const audioPath = RNFS.DocumentDirectoryPath + '/audio.wav';
    console.log('test1');
    console.log('test2', audio.substring(0, 10));

    // Write the binary data to a file
    await RNFS.writeFile(audioPath, audio, 'base64');
    console.log('🚀 ~ playPauseAudio ~ audioPath:', audioPath);

    isPlaying ? SoundPlayer.stop() : SoundPlayer.playUrl(audioPath);
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
            // backgroundColor:'blue',
            justifyContent: 'center',
            position: 'relative',
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
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: scale(10),
          }}>
          <Pressable
            style={[
              styles.micTouch,
              isPlaying && {backgroundColor: Theme.colors.red},
              audio.length === 0 && {backgroundColor: Theme.colors.gray},
            ]}
            disabled={audio.length === 0}
            onPress={() => {
              // isPlaying
              //   ? SoundPlayer.pause()
              //   : SoundPlayer.playUrl(sampleAudio);
              playPauseAudio();
              setIsPlaying(!isPlaying);
            }}>
            {loadingAudio ? (
              <ActivityIndicator size={'large'} color={Theme.colors.white} />
            ) : (
              <Icon
                type="material"
                name={isPlaying ? 'pause' : 'play-arrow'}
                size={scale(50)}
                color={Theme.colors.white}
              />
            )}
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};
export default Camerasrc;
