import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

import PanelInput from './PanelInput.js';
import { set } from 'react-native-reanimated';

const ListQuestion = ({listQuestion, countAnswer, setCountAnswer, setCorrectAnswer, ...props}) => {

    const vertical = [...listQuestion].filter(qst => qst.direction == 'vertical');
    const horizontal = [...listQuestion].filter(qst => qst.direction == 'horizontal');

    return (

        <View >

            <Text style={ styles.title }>По вертикали:</Text>

            {vertical.map(qst => {

                return (

                    <View style = { styles.wrapper } key={ qst.answer }>

                        <Text style={ styles.question } key = { qst.question } >{ qst.number }) { qst.question }</Text>

                        <PanelInput 
                            qst={ qst }
                            setCountAnswer = { setCountAnswer }
                        />
                                            
                    </View>

                )

            })}

            <Text style={ styles.title } > По горизонтали:</Text>

                {horizontal.map(qst => {

                    return (

                        <View style = { styles.wrapper } key = { qst.answer }>

                            <Text style = { styles.question } key={ qst.question } >{qst.number}) {qst.question}</Text>

                            <PanelInput 
                                qst = { qst }
                                setCountAnswer = { setCountAnswer }
                            />

                        </View>

                    )
                })}

                {countAnswer === 8 ? 

                    <Image 
                        source={ require ('../../img/crosswordWithAnswer.png') }
                    />

                    :

                    <Text style = { styles.counter } > { countAnswer }/8 </Text>

                }

        </View>

    )
}

export default ListQuestion

const styles = StyleSheet.create({  

    title: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 50,
        marginVertical: 10,
    },

    question: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 15,
        marginVertical: 8,
    },

    input: {
        minHeight: 25,
    },

    allAnswersCorrect: {
        color: 'green',
        fontSize: 24,
    },

    wrapper: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 15,
        marginVertical: 15,
        marginHorizontal: 10,
    },

    counter: {
        color: '#DADA11',
        fontSize: 18,
        padding: 15,
        margin: 5,
    },
    
})