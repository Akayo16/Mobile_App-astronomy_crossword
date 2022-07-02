import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PlanetList = ({navigation, planetsImges, title, ...props}) => {

    return (

        <ScrollView style = {{ flex: 1 }} >

            <View
            style = { styles.imgWrapper }
            >
            
                <Text style = { styles.title } >  </Text>
                
                {[...planetsImges].map((img) => {

                    return (

                        <TouchableOpacity 
                            style = {{ display: 'flex' }}
                            key = { img.index }
                            onPress = {() => navigation.navigate(`${img.name}`)}
                        >

                            <Image 

                                style = { styles.imgEarth }
                                source = {{ uri: img.src }}
                                key = { img.name }

                            />

                        </TouchableOpacity>

                    )
                })}

            </View>
            
        </ScrollView>
    )
}

export default PlanetList;

const styles = StyleSheet.create({
    
    input: {
        paddingLeft: 10,
        padding: 15,
        marginVertical: 20,
        borderRadius: 8,
        textAlign: 'center',
    },

    title: {
        color: '#1C172A',
        fontSize: 22,
        fontWeight: '700',
    },

    imgEarth: {
        width: 200,
        height: 200,
        borderRadius: 25,
        margin: 15,
    },

    imgWrapper: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#84BCF1',
    }
})