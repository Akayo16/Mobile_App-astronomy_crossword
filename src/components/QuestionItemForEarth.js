import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

// qst:

// {
//     number: SERIAL,
//     question: STRING,
//     answers: [
//         {
//             index: SERIAL,
//             answer: STRING,
//             correct: BOOL,
//         },
//     ]
// }

const QuestionItemForEarth = ({qst, setCorrectAnswerCounter, ...props}) => {

    const [correctAnswer, setCorrectAnswer] = useState('waitingAnswer');

    const clickOnCorrectAnswer = () => {

        setCorrectAnswerCounter(prevValue => prevValue + 1);
        // setAnswerCounter(prevValue => prevValue + 1)
        setCorrectAnswer('correct')

    }

    const clickOnWrongAnswer = () => {

        // setAnswerCounter(prevValue => prevValue + 1)
        setCorrectAnswer('err')

    }

    return (

        <View style = { styles.wrapper } >

            <Text style = {styles.question} >{qst.number}) {qst.question}</Text>

            {
                correctAnswer === 'err' 

                ?

                <Text style = { styles.err } >Эй, товарищ, соберись</Text>

                :

                correctAnswer === 'correct'

                ?

                <Text style ={ styles.correct } > Умница, продолжай в том же духе </Text>

                :

                [...qst.answers].map(answ => {

                    if(answ.correct) {

                        return (

                            <TouchableOpacity onPress = { clickOnCorrectAnswer } key = { answ.index } >

                                <Text style = { styles.answer } key = { answ.answer} >{answ.index}) {answ.answer}</Text>

                            </TouchableOpacity>

                        )

                    } else {

                        return (

                            <TouchableOpacity onPress = { clickOnWrongAnswer } key = { answ.index } >

                                <Text style = { styles.answer } key = { answ.answer} >{answ.index}) {answ.answer}</Text>

                            </TouchableOpacity>

                        )

                    }

                })
            }

        </View>

    )
}

export default QuestionItemForEarth

const styles = StyleSheet.create({

    wrapper: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 15,
        marginVertical: 15,
        marginHorizontal: 10,
    },

    question: {
        color: '#fff',
        fontSize: 19,
    },

    answer: {
        color: '#979797',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 16,
    },

    correct: {
        color: '#50C878',
        marginTop: 6,
    },

    err: {
        color: 'red',
        marginTop: 6,
    }

})