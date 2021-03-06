import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SplashScreen from "./Screens/SplashScreen";
import Names from './Screens/signup/Names';
import Dob from './Screens/signup/Dob';
import Gender from './Screens/signup/Gender';
import Sexuality from './Screens/signup/Sexuality';
import Batch from './Screens/signup/Batch';
import Bio from './Screens/signup/Bio';
import Photo from './Screens/signup/Photo';
import GenderInterest from "./Screens/signup/GenderInterest";
import Interests from "./Screens/signup/Interests";
import ProfilePage from "./Screens/Profile/ProfilePage"
import homeNavigatorTab from "./navigation/homeNavigatorTab";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import MessageScreen from "./Screens/ChatScreen/MessageScreen";
import MatchScreen from "./Screens/MatchScreen";
import LoginScreen from "./Screens/LoginScreen";
import useAuth from "./hooks/useAuth";
import DisplayMatchedScreen from "./Screens/DisplayMatchedScreen/DisplayMatchedScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {user} = useAuth();
  return (
    <Stack.Navigator> 
    {user ? (
      <>
      {/* <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} /> */}
      <Stack.Screen name="Main" component={homeNavigatorTab} options={{headerShown:false}} />      
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Message" component={MessageScreen} options={{headerShown:false}}/>
      <Stack.Screen name="What's in the name tho?" component={Names}/>
      <Stack.Screen name="Are you old enough?" component={Dob}/>
      <Stack.Screen name="Gender" component={Gender}/>
      <Stack.Screen name="Sexuality" component={Sexuality}/>
      <Stack.Screen name="Batch" component={Batch}/>
      <Stack.Screen name="Bio" component={Bio}/>
      <Stack.Screen name="Photo" component={Photo}/>
      <Stack.Screen name="Gender Interest" component={GenderInterest}/>
      <Stack.Screen name="Interests" component={Interests}/>
      <Stack.Screen name="Profile" component={ProfilePage} options={{headerShown:false}}/>
      <Stack.Screen name="MatchScreen" component={MatchScreen} options={{headerShown:false}}/>
      <Stack.Screen name="DisplayMatchedDetails" component={DisplayMatchedScreen} options={{headerShown:false}}/> 
      </>
    ) : (
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
    )}      
    </Stack.Navigator>
  );
};

export default StackNavigator;
