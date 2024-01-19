import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

import StackNavigation from "./src/navigation";


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
      
        <StackNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
