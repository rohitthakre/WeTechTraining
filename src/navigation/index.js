import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreeen, RegistrationScreen, SplashScreen, DashbordScreen, DetailsScreen, StudentForm } from "../Screen";
import { CallScreen, ChatScreen, ContactScreen } from '../Screen/TabScreen';
import { SafeAreaProvider} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../assets/constants";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;
               if (route.name === 'Call') {
                  iconName = focused ? 'call' : 'call-sharp';
               } else if (route.name === 'Chat') {
                  iconName = focused ? 'chatbox' : 'chatbox';
               } else if (route.name === 'Contact') {
                  iconName = focused ? 'book' : 'book';
               }
               else if (route.name === 'Student') {
                  iconName = focused ? 'person-sharp' : 'person-sharp';
               }
               return <Ionicons name={iconName} size={size} color={color} />;
            },
         })}
         tabBarOptions={{
            activeTintColor: Colors.DEFAULT_BLACK,
            inactiveTintColor: 'gray',
            keyboardHidesTabBar: true,
            style: {
               position: 'absolute',
               paddingHorizontal: 10,
               borderTopLeftRadius: 20,
               borderTopRightRadius: 20
            }
         }}
      >
         <Tab.Screen name="Call" component={CallScreen} />
         <Tab.Screen name="Chat" component={ChatScreen} />
         <Tab.Screen name="Contact" component={ContactScreen} />
         <Tab.Screen name="Student" component={StudentForm} />
      </Tab.Navigator >
   );
}

const Navigators = () => {
   return (
      <SafeAreaProvider>
         <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" >
               <Stack.Screen name="Splash" component={SplashScreen} />
               <Stack.Screen name="Login" component={LoginScreeen} />
               <Stack.Screen name="Registration" component={RegistrationScreen} />
               <Stack.Screen name="DashBoard" component={DashbordScreen} />
               <Stack.Screen name="Details" component={MyTabs} />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaProvider>
   );
};

export default Navigators;