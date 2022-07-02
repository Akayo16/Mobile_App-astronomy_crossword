import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Crossword from '../components/Crossword.js';
import ListQuestion from '../components/ListQuestion.js';
import { questionList } from '../questions/questionForMars.js';

const Mars = ({navigation, ...props}) => {

    const [correctAnswer, setCorrectAnswer] = useState(false);

    const [countAnswer, setCountAnswer] = useState(0);

    const listQuestion = [...questionList];



    return (
    
        <ScrollView 
            style = { styles.wrapper }
        >

            <ListQuestion
                countAnswer = { countAnswer }
                setCountAnswer = { setCountAnswer }
                listQuestion = { listQuestion }
                setCorrectAnswer = { setCorrectAnswer }
                style = {{ flex: 1 }}
            />

            <Crossword 
                listQuestion = { listQuestion }
                countAnswer = { countAnswer }
                style = { styles.crossword }
            />

        </ScrollView>
    
    )
};

export default Mars;

const styles = StyleSheet.create({

    wrapper: {
        backgroundColor: '#1E1E1E',
        flex: 1,
    },
    
    crossword: {
        marginTop: 15,
        marginBottom: 0,
    }

})