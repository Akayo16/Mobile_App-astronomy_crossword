import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlanetList from '../components/PlanetList.js';

const ChoiceOfSubject = ({navigation}) => {

    const planetsImges = [
    
        {
            name: 'Earth',
            src: 'https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-970-80.jpg.webp',
            index: 0,
        },
    
        {
            src: 'https://static.scientificamerican.com/sciam/cache/file/C454F5A6-536E-4C9F-AA6AF354BB85A85B_source.jpg?w=590&h=800&06788583-1951-4B69-A9881715B6FE78DA',
            name: 'Mars',
            index: 1,
        },
        
    ]

    return (

        <SafeAreaView style = {{ flex: 1, backgroundColor: '#84BCF1' }}>

            {/* isDarkMode ? 'light-content' : 'dark-content' */}
            
            <StatusBar barStyle = { 'isDarkMode' } />

            <PlanetList 

                planetsImges = { planetsImges }
                title={`Вот ${planetsImges.length} планет`}
                navigation = { navigation }
                
            ></PlanetList>
                    
        </SafeAreaView>

    )
};

export default ChoiceOfSubject;

const styles = StyleSheet.create({

    firstBlockContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    firstBlock: {
        marginTop: 15,
        width: "40%",
        height: 160,
        borderRadius: 8,
        backgroundColor: "blue",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
    },

})