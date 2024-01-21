import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Theme, {moderateScale, normalized, scale} from '../../Screens/Theme';

// import { heightPercentageToDP } from 'react-native-responsive-screen';
import {fontSize} from '../Constants/index';
export default Button = ({
  text,
  disabled,
  onPress,
  loading,
  indicatorColor,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  disableStyle,
  disableTextColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress ?? null}
      style={[styles.mainContainer, style, disabled && disableStyle]}>
      {loading ? (
        <ActivityIndicator color={indicatorColor} size="small" />
      ) : (
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}>
          {leftIcon}
          <Text
            style={[
              styles.buttonText,
              textStyle,
              disabled && {color: disableTextColor},
            ]}>
            {text}
          </Text>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: moderateScale(1),
    width: '80%',
    alignSelf: 'center',
    padding: moderateScale(15),
    borderRadius: 100,
    backgroundColor: Theme.colors.orangeColor, //'#F7A045',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: Theme.colors.darkTextColor,
    fontSize: moderateScale(20),
  },
});
