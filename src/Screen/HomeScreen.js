import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation, ...props }) => {



    return (

        <View style = { styles.wrapper } >

            <View style = { styles.titleWrapper } >

                <Text style = { styles.title } >Привет!</Text>
                <Text style = { styles.title } >Хочешь посмотреть на свой кругозор</Text>
                <Text style = { styles.title } >с точки зрения астрономии?</Text>
                <Text style = { styles.title } >Тогда выбирай тематику</Text>
                <Text style = { styles.title } >и отвечай на вопросы</Text>

            </View>

            <TouchableOpacity
                onPress = {() => navigation.navigate('Choice')}
                style = { styles.btnChoice }
            >

                <Text style = { styles.btnTitle } > Выбрать тематику викторины </Text>

            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#84978F',
    },

    btnChoice: {
        width: '35%',
        height: '17%',
        backgroundColor: '#22D18B',
        color: '#29B8DB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 10,
    },

    btnTitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: `700`,
    },

    titleWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },

    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: `500`,
    },

})