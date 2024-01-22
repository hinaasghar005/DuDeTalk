import {StyleSheet} from 'react-native';

import Theme, {moderateScale, normalized, scale} from '../Theme/index';

const styles = StyleSheet.create({
  keyboardWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    marginTop: moderateScale(50),
  },
  arrimg: {
    height: moderateScale(105),
    width: '35%',

    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  DealText: {
    fontSize: 30,
    fontWeight: '600',
    color: Theme.colors.orangeColor,
    textAlign: 'center',
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
  Camera: {
    height: moderateScale(340),
    width: moderateScale(340),
    borderRadius: moderateScale(30),
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    marginTop: moderateScale(20),
    margin: moderateScale(5),
    justifyContent: 'center',
  },
  Cameracon: {
    maxHeight: moderateScale(150),
    width: '100%',
    borderRadius: moderateScale(30),
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    margin: moderateScale(5),
  },
  mainCard: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: moderateScale(220),
    width: '48%',
    margin: moderateScale(3),
  },
  connectFriendstitle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '800',
    padding: 10,
  },
  connectFriends: {
    color: 'black',
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
    flex: 1,
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
  },
  texstyle: {
    color: Theme.colors.dimGreen,
    fontWeight: '500',
    marginTop: scale(80),
    textDecorationLine: 'underline',
  },
  BottomText: {
    fontSize: moderateScale(14),
    justifyContent: 'center',
    paddingTop: scale(45),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    color: Theme.colors.placeHolderColor,
  },
  imgcontainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'black',
  },
  box: {
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
  micUpperView: {
    justifyContent: 'center',
    marginTop: scale(30),
    alignItems: 'center',
    height: scale(150),
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
