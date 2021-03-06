import 'react-native-gesture-handler';
import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text,  
Image, TouchableOpacity, Alert } from 'react-native';
import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import RegisterScreen from './RegisterScreen';
import DrawerNavigationRoutes from './DrawerNavigationRoutes';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}  }
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer as we will use our custom header
          options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};

export default class Myapp extends Component<{}>  
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true, 
   
    }  
  }  

    render()  
    {  

         return(
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
              {/* SplashScreen which will come once for 5 Seconds */}
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                // Hiding header for Splash Screen
                options={{headerShown: false}}
              />
              {/* Auth Navigator which includer Login Signup will come once */}
              <Stack.Screen
                name="Auth"
                component={Auth}
                options={{headerShown: false}}
              />
              {/* Navigation Drawer as a landing page */}

            </Stack.Navigator>
        </NavigationContainer>
              );  
    }  
}  
