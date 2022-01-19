import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import SplashScreen from "./Screens/SplashScreen";
import Names from './Screens/signup/Names';
import Dob from './Screens/signup/Dob';
import Gender from './Screens/signup/Gender';
import Identities from './Screens/signup/Identities';
import IdentityConfirmation from './Screens/signup/IdentityConfirmation';
import Sexuality from './Screens/signup/Sexuality';
import GenderInterest from "./Screens/signup/GenderInterest";
import ProfilePage from "./Screens/Profile/ProfilePage"
import homeNavigatorTab from "./navigation/homeNavigatorTab";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator  
    >
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="Main" component={homeNavigatorTab} options={{headerShown:false}} />
      {/* <Stack.Screen name="CollegeID" component={CollegeID} /> */}
      <Stack.Screen name="Names" component={Names}/>
      <Stack.Screen name="Dob" component={Dob}/>
      <Stack.Screen name="Gender" component={Gender}/>
      <Stack.Screen name="Identities" component={Identities}/>
      <Stack.Screen name="IdentityConfirmation" component={IdentityConfirmation}/>
      <Stack.Screen name="Sexuality" component={Sexuality}/>
      <Stack.Screen name="GenderInterest" component={GenderInterest}/>
      <Stack.Screen name="Profile" component={ProfilePage} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;