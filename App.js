import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import Splash from './App/Components/Splash';
import Initialscreen from './App/Components/Initialscreen';
import Createaccountscreen from './App/Components/Createaccount/Createaccountscreen';
import Verifyemail from './App/Components/Createaccount/Verifyemail';
import Userinfo from './App/Components/Createaccount/Userinfo';
import Namefields from './App/Components/Createaccount/Namefields';
import Pep from './App/Components/Createaccount/Pep';
import Addressscreen from './App/Components/Createaccount/Addressscreen';
import Createpassword from './App/Components/Createpassword/Createpassword';
import Dashboard from './App/Components/Dashboard/Dashboard';
import Createpin from './App/Components/Createpin/Createpin';
import Confirmpin from './App/Components/Createpin/Confirmpin';
import PinSuccess from './App/Components/Createpin/pinsuccess';
import { LanguageProvider } from './App/src/Languagecontext';
import Login from './App/Components/Login/Login';


enableScreens();


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {/* <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }} /> */}
          <Stack.Screen name="Initialscreen" component={Initialscreen} options={{ headerShown: false }} />
           <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Createaccountscreen" component={Createaccountscreen} options={{ headerShown: false }} />
          <Stack.Screen name="Verifyemail" component={Verifyemail} options={{ headerShown: false }} />
        <Stack.Screen name="Userinfo" component={Userinfo} options={{ headerShown: false }} /> 
        <Stack.Screen name="Namefields" component={Namefields} options={{ headerShown: false }} />
        <Stack.Screen name="Pep" component={Pep} options={{ headerShown: false }} />
         <Stack.Screen name="Addressscreen" component={Addressscreen} options={{ headerShown: false }} />
         <Stack.Screen name="Createpassword" component={Createpassword} options={{ headerShown: false }} />
         <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Createpin" component={Createpin} options={{ headerShown: false }} />
          <Stack.Screen name="Confirmpin" component={Confirmpin} options={{ headerShown: false }} />
          <Stack.Screen name="PinSuccess" component={PinSuccess} options={{ headerShown: false }} /> */}

      </Stack.Navigator>
    </NavigationContainer>
    </LanguageProvider>
  );
}
