// instaling double click with help __  $ npm install --save react-native-double-click


import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const PanelInput = ({qst, setCountAnswer, ...props}) => {

    const [answer, setAnswer] = useState('')

    const [checkAnswerCorrect, setCheckAnswerCorrect] = useState(false);

    const updateAnswer = () => {

        setCheckAnswerCorrect(false);
        setAnswer('')

    }

    const answerCheck = () => {

        let userAnswer = [];
        let correctAnswer = [];

        
        answer.split('').forEach((letter) => {
            
            const lowerCaseLetter = letter.toLowerCase();

            if(lowerCaseLetter !== ' ' && lowerCaseLetter !== 'о' && lowerCaseLetter !== 'и') userAnswer.push(letter.toLowerCase());

            if(lowerCaseLetter === 'о') userAnswer.push('а');

            if(lowerCaseLetter === 'и') userAnswer.push('е');

        });


        qst.answer.split('').forEach((letter) => {

            const lowerCaseLetter = letter.toLowerCase();

            if(lowerCaseLetter !== 'о' && lowerCaseLetter !== 'и') correctAnswer.push(lowerCaseLetter);

            if(lowerCaseLetter === 'о') correctAnswer.push('а');

            if(lowerCaseLetter === 'и') correctAnswer.push('е');

        });

        if(JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
            
            setCheckAnswerCorrect(true);
            setCountAnswer((prevCount) => prevCount += 1);

        };

        if(JSON.stringify(userAnswer) !== JSON.stringify(correctAnswer)) setCheckAnswerCorrect('err');

        console.log(checkAnswerCorrect);
         
    }

    return (

        <View>

            {checkAnswerCorrect && checkAnswerCorrect !== 'err' ?

                <Text key = { qst.answer } style = { styles.correctAnswer } > Поздравляю, ты ответил правилно! </Text>

                :

                checkAnswerCorrect === 'err' ?

                    <TouchableOpacity onPress = {() => updateAnswer()}>

                        <Text style = { styles.error }>Упс, неправильно. Попробуешь снова?</Text> 

                    </TouchableOpacity>

                    :

                    <TextInput
                        key = { qst.questions }
                        autoFocus = { false }
                        style = { styles.input }
                        value = { answer }
                        onChangeText = { setAnswer }
                        onEndEditing = { answerCheck }
                    />
            }

        </View>

    )
}

export default PanelInput

const styles = StyleSheet.create({

    input: {
        borderBottomColor: '#61747A',
        borderBottomWidth: 1,
        width: "30%",
    },

    correctAnswer: {
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        color: 'green',
        width: '65%',
    },

    error: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        color: 'red',
        width: '65%',
    }

})