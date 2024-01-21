/* eslint-disable no-unused-vars */
import {StyleSheet} from 'react-native';

import Theme, {moderateScale, normalized, scale} from '../Theme/index';

const styles = StyleSheet.create({
  keyboardWrapper: {
    // flex: 1,
    padding: 20,
    // marginTop:moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'blue'
  },
  forgotPassword: {
    marginTop: moderateScale(50),
  },
  arrimg: {
    height: moderateScale(105),
    width: '35%',

    alignSelf: 'center',
    //  backgroundColor:'red'
    marginTop: moderateScale(20),
  },
  DealText: {
    fontSize: 25,
    fontWeight: '600',
    //color: Theme.colors.modalBackground,
    textAlign: 'center',
    padding: 5,
    color: '#F7A045',
  },
  or: {
    marginVertical: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  orText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    color: Theme.colors.placeHolderColor,
    // Theme.colors.lightgreen
  },
  inputStyle: {
    color: Theme.colors.darkTextColor,
    fontSize: moderateScale(16),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    paddingVertical: moderateScale(6),
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.darkTextColor,
    marginTop: moderateScale(30),
  },
  tabText: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    lineHeight: moderateScale(20),
    color: Theme.colors.darkTextColor,
  },

  mainCard: {
    //backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: moderateScale(220),
    width: '48%',
    margin: moderateScale(3),
    // shadowOpacity: 0.8,
    // shadowRadius: 20,
    // shadowOffset: {
    //   // Shadow offset (x, y)
    //   width: 0,
    //   height: 4,
    // },
    // elevation: 50,
  },
  connectFriendstitle: {
    color: 'black',
    textAlign: 'center',
    //   fontSize: fontSize.small,
    fontWeight: '800',
    padding: 10,
    //   fontFamily: fontFamily.regular,
  },
  connectFriends: {
    color: 'black',
    //  fontSize: fontSize.avgSmall,
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    height: moderateScale(35),
    borderWidth: 1,
    borderRadius: moderateScale(50),
    borderColor: Theme.colors.darkTextColor,
  },
  mainView: {
    // flex: 1,
    // justifyContent: 'center'
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  tabWrapper: {
    width: '50%',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    justifyContent: 'center',
  },
  forgotPasswordText: {
    textAlign: 'right',
    fontSize: moderateScale(14),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    color: Theme.colors.placeHolderColor,
  },
  socialIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  butndis: {
    marginTop: moderateScale(70),
  },
  sigtext: {
    color: Theme.colors.gray,
    fontSize: 15,
    justifyContent: 'center',
    paddingTop: scale(30),
    // alignSelf: 'center',
  },
  texstyle: {
    color: Theme.colors.dimGreen,
    fontWeight: '500',
    marginTop: scale(80),
    textDecorationLine: 'underline',
  },
  BottomText: {
    // textAlign: 'right',
    fontSize: moderateScale(14),
    justifyContent: 'center',
    paddingTop: scale(45),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    color: Theme.colors.placeHolderColor,
  },
  imgcontainer: {
    // flex:1,
    //z width: '100%' ,
    // height: '100%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'black',
  },
  box: {
    // flex:1,
    width: '60%',
    height: moderateScale(50),
    padding: 5,
    backgroundColor: 'red',
  },
  inner1: {
    flex: 1,

    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner2: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner3: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner4: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardimg: {
    height: moderateScale(165),
    width: '98%',
  },
  preview: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    // flex:1,
    overflow: 'hidden',
    // borderRadius:30
  },
  Camera: {
    height: moderateScale(400),
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    marginTop: moderateScale(20),
    // margin:moderateScale(5)
  },
  CameraimgBox: {
    height: moderateScale(360),
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    marginTop: moderateScale(20),
    padding: 15,
    // margin:moderateScale(5)
  },
  Cameracon: {
    maxHeight: moderateScale(150),
    width: '100%',
    borderRadius: moderateScale(30),
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    margin: moderateScale(5),
    marginTop: scale(20),
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Theme.colors.orangeColor,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Theme.colors.orangeColor,
  },
  micTouch: {
    padding: scale(15),
    borderRadius: scale(100),
    backgroundColor: Theme.colors.orangeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
