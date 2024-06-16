/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './src/screens/Login/index';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeListing from './src/screens/home/index';
import HomeDetails from './src/screens/homeDetail/HomeDetails';
import {getUserPref} from './src/utils/storageUtils';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {getUserPref('user') ? (
            <>
              <Stack.Screen name="HomeListing" component={HomeListing} />
              <Stack.Screen name="HomeDetails" component={HomeDetails} />
              <Stack.Screen name="Login" component={Login} />
            </>
          ) : (
            <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeListing" component={HomeListing} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
