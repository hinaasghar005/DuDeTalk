import { StyleSheet } from 'react-native';

import Theme, {moderateScale, normalized, scale} from '../Theme/index';



const styles = StyleSheet.create({
  keyboardWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor:'blue'
  },
  forgotPassword: {
    marginTop: moderateScale(42),
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
    marginTop: moderateScale(30)
  },
  tabText: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    lineHeight: moderateScale(20),
    color: Theme.colors.darkTextColor
  },
  mainContainer: {
    height: moderateScale(500),
    width: '90%',
   backgroundColor: Theme.colors.modalBackground,
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(35),
    paddingHorizontal: moderateScale(25),
    justifyContent: 'space-between',
   // backgroundColor:'yellow',
    marginTop: moderateScale(35)
  },
  tabContainer: {
    flexDirection: 'row',
    height: moderateScale(35),
    borderWidth: 1,
    borderRadius: moderateScale(50),
    borderColor: Theme.colors.darkTextColor
  },
  mainView: {
    flex: 1,
    justifyContent: 'center'
  },
  tabWrapper: {
    width: '50%',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    justifyContent: 'center'
  },
  forgotPasswordText: {
    textAlign: 'right',
    fontSize: moderateScale(14),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    color: Theme.colors.placeHolderColor
  },
  socialIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  butndis:{
    marginTop: moderateScale(70)
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
    fontWeight: 'bold',
  },
  BottomText: {
   // textAlign: 'right',
    fontSize: moderateScale(14),
    justifyContent: 'center',
    paddingTop: scale(45),
    fontWeight: '500',
    lineHeight: moderateScale(20),
    color: Theme.colors.placeHolderColor
  },
});

export default styles;
