import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './screens/signUpScreen';
import LoginScreen from './screens/loginScreen';
import ResetPasswordScreen from './screens/resetPasswordScreen';
import HomeScreen from './screens/homeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
        
    
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={ HomeScreen } />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
