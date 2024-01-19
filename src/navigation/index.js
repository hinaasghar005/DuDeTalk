import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginForm from "../Screens/LoginScreen";
import SignUpForm from "../Screens/SignupScreen";
import Welcomesrc from "../Screens/WelcomeScreen";

import Audiosrc from "../Screens/AudioScreen";
import Gesturesrc from "../Screens/GestureScreen";
import Camerasrc from "../Screens/CameraScreen";


const StackNavigation = () => {
  return <AuthStack />;
};

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SignUpForm"
      screenOptions={{
        headerStyle: {
          headerShown: false,
        },
      }}
    >
      <Stack.Screen
        name="LoginForm"
        component={LoginForm}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Gesturesrc"
        component={Gesturesrc}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="AudioSrc"
        component={Audiosrc}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="SignUpForm"
        component={SignUpForm}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
 <Stack.Screen
        name="Welcomesrc"
        component={Welcomesrc}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Camerasrc"
        component={Camerasrc}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
 

    </Stack.Navigator>
  );
};

export default StackNavigation;
