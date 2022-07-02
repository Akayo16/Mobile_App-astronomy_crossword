import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import HomeScreen from './src/Screen/HomeScreen.js';
import ChoiceOfSubject from './src/Screen/ChoiceOfSubject.js';
import Mars from './src/Screen/Mars.js';
import Earth from './src/Screen/Earth.js';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

    return (
        
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen 
                    name = "Home" 
                    component = { HomeScreen } 
                    options = {{ title: 'Главная' }}
                />

                <Stack.Screen 
                    name = "Choice" 
                    component = { ChoiceOfSubject } 
                    options = {{ title: 'Выбор темы' }}
                />

                <Stack.Screen 
                    name = 'Mars' 
                    component = { Mars } 
                    options = {{ title: 'Марс' }}
                />

                <Stack.Screen 
                    name = 'Earth' 
                    component = { Earth } 
                    options = {{ title: 'Земля' }}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );
};

const styles = StyleSheet.create({});

export default App;
