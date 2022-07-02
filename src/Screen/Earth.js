import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';

import { qstListForEarth } from '../questions/questionsForEarth';
import QuestionItemForEarth from '../components/QuestionItemForEarth';

const Earth = ({...props}) => {

    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

    const qstList = [...qstListForEarth];

    return (

        <ScrollView style = { styles.wrapper } >

            {

                [...qstList].map(qst => {

                    return <QuestionItemForEarth 
                        qst = { qst }
                        key = { qst.number }
                        setCorrectAnswerCounter = { setCorrectAnswerCounter }
                    />

                })

            }

            <Text style = { styles?.counter } >Правильных ответов: { correctAnswerCounter }</Text>

        </ScrollView>

    )
}

export default Earth

const styles = StyleSheet.create({

    wrapper: {
        backgroundColor: '#1E1E1E',
        flex: 1,
    },

    counter: {
        color: '#DADA11',
        fontSize: 18,
        padding: 15,
        margin: 5,
    },

})