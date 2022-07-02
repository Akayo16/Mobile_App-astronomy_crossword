import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Crossword = ({listQuestion, countAnswer, ...props}) => {

    

    return (
        
        <View key='crossword' style = { styles.crosswordWrapper } >

            {countAnswer !== 8 ?
                <Image 
                    source={ require('../../img/crossword.png') }
                />
                :
                <Text style = { styles.congratulations } > Поздравляю </Text>
            }

        </View>

    )
}

export default Crossword

const styles = StyleSheet.create({

    crosswordWrapper: {
        width: '100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    congratulations: {
        fontSize: 30,
        color: 'green',
        textAlign: 'center',
    }

})