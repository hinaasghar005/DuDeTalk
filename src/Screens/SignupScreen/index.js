import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View,ImageBackground, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {Formik} from 'formik';
import styles from './styles';
import Theme, { moderateScale } from '../Theme';
import Button from '../../Components/Custom/Button';
import Feather from 'react-native-vector-icons/Feather';

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must not exceed 50 characters')
  .required('Name is required'),

  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      'Invalid email'
    )
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});



const SignUpForm = ({navigation}) => {

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleSubmit = (values) => {
      // Handle form submission logic here
    navigation.navigate('Welcomesrc');
  
      console.log(values);
    };
  return (
    <Formik
    initialValues={{
      email: '',
      name:'',
      password:'',
      confirmPassword:''

    }}
 //   validateOnMount={true}
    validationSchema={validationSchema}
    // onSubmit={values => handleEmailPress(values)}
    >
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      errors,
      isValid,
      dirty,
      setFieldTouched,
    }) => (
  
    <ImageBackground
      style={styles.mainView}
      source={require('../../assets/images/bgImage.png')}>
      <KeyboardAwareScrollView contentContainerStyle={styles.keyboardWrapper}>
        {/* <View style={{height:moderateScale(140), width:'40%', backgroundColor:Theme.colors.modalBackground, borderRadius: moderateScale(85), justifyContent:'center'}} > */}
          <Image style={{height:moderateScale(85), width:'30%', alignSelf:'center'}} source={require('../../assets/images/hand.png')}/>
          {/* </View> */}
        <View style={styles.mainContainer}>
        <View>
            <TextInput
              placeholder="Enter Name"
              onChangeText={handleChange('name')}
              value={values.name}
              placeholderTextColor={Theme.colors.placeHolderColor}
              style={[
                styles.inputStyle,
                {
                  borderBottomColor:
                    errors.name && touched.name
                      ? Theme.colors.red
                      : Theme.colors.darkTextColor,
                },
              ]}
            />
            {errors.name && touched.name && (
              <Text style={{color: Theme.colors.red}}>{errors.name}</Text>
            )}
            <TextInput
              placeholder="Enter email or Username"
              onChangeText={handleChange('email')}
              value={values.email}
              placeholderTextColor={Theme.colors.placeHolderColor}
              style={[
                styles.inputStyle,
                {
                  borderBottomColor:
                    errors.email && touched.email
                      ? Theme.colors.red
                      : Theme.colors.darkTextColor,
                },
              ]}
            />
            {errors.email && touched.email && (
              <Text style={{color: Theme.colors.red}}>{errors.email}</Text>
            )}
          <View>  
            <TextInput
              placeholder="Password"
              secureTextEntry={showPassword? false : true}
           
              onChangeText={handleChange('password')}
              placeholderTextColor={Theme.colors.placeHolderColor}
              value={values.password}
              style={[
                styles.inputStyle,
                {
                  borderBottomColor:
                    errors.email && touched.email
                      ? Theme.colors.red
                      : Theme.colors.darkTextColor,
                },
              ]}
            />
             <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{position: 'absolute', right: 10, bottom: 10}}>
                   <Feather name={showPassword ? 'eye' : 'eye-off'}
 size={20} color="black" style={[styles.icon,{marginLeft:5}]} />
                </TouchableOpacity></View>
            {errors.password && touched.password && (
              <Text style={{color: Theme.colors.red}}>{errors.password}</Text>
            )}
            <View>
            <TextInput
              placeholder=" Confirm Password"
             // secureTextEntry
              secureTextEntry={confirmPassword? false : true}
              onChangeText={handleChange('confirmPassword')}
              value={values.confirmPassword}
              placeholderTextColor={Theme.colors.placeHolderColor}
              style={[
                styles.inputStyle,
                {
                  borderBottomColor:
                    errors.email && touched.email
                      ? Theme.colors.red
                      : Theme.colors.darkTextColor,
                },
              ]}
            />
            <TouchableOpacity
                  onPress={() => setConfirmPassword(!confirmPassword)}
                  style={{position: 'absolute', right: 10, bottom: 10}}>
                      <Feather name={confirmPassword ? 'eye' : 'eye-off'}
 size={20} color="black" style={[styles.icon,{marginLeft:5}]} />
                  {/* <Feather
                    name={confirmPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color={COLORS.darkTextColor}
                  /> */}
                </TouchableOpacity></View>
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={{color: Theme.colors.red}}>{errors.confirmPassword}</Text>
            )}
              <Button
            // disabled={!isValid || !dirty}
           
              disableStyle={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.25)',
                backgroundColor: '#C4C4C4',
              }}
              disableTextColor={'rgba(0,0,0,.25)'}
              textStyle={[
                // styles.Buttontext,
                // {
                //    color: isValid  ? 'white' : 'grey',
                // },
              ]}
              style={styles.butndis}
              text={'Signup'}
              // loading={loading}
              // onPress={ handleEmailPress}
              onPress={handleSubmit}
            />
            <View style={styles.logtext}>
             <Text style={styles.BottomText}>
          Already have an account?
          </Text>
          <TouchableOpacity  onPress={() => navigation.navigate('LoginForm')}>
        <Text style={styles.texstyle}>Login</Text>
        </TouchableOpacity>
        </View>
            {/* <CustomButton
              text="Signup"
              onPress={handleSubmit}
              wrapStyle={{marginTop: moderateScale(70)}}
            /> */}
          </View>
         
          </View>
          </KeyboardAwareScrollView>
          </ImageBackground>
  
      )}
      </Formik>
  );
};
export default SignUpForm;