import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'


export default function GreetingsInput({value, textInput}) {
  
  
  return (
    <View style={styles.container}>
        <TextInput 
        style={styles.message}
        placeholder='Enter you birthday message here'
        onChangeText={textInput}
        value={value}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 20,
        padding: 10

    },
    message:{  
        borderRadius: 20,
        borderColor : '#FFF',
        width: '100%',
        height: 50,
        borderWidth : 1,
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        fontFamily: 'pacifico',
        color: '#FFF',
        width: 250

    }
})
