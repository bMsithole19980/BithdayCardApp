import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import GreetingsInput from './GreetingsInput'
import Happy from '/try.jpg'
export default function BirthdayCard() {
    const [greetingMessage, setGreetingMessage] = useState('');
    const handleButton = () => {
        console.log(greetingMessage);
    }
    return (
        <View style={styles.container} >
            <View style={styles.card}>
                <GreetingsInput
                    value={greetingMessage}
                    textInput={setGreetingMessage} />
                <View style={styles.cardBox}>
                    <Text style={styles.greeting}>{greetingMessage}</Text>
                    <View style={styles.imgContainer}>
                        <Image
                            style={styles.img}
                            source={{ uri: Happy }}
                            resizeMode='cover' />

                    </View>
                </View>

            </View>

            <Pressable
                style={styles.wishButton}
                onPress={handleButton}

            >
                <Text style={styles.text}>Wish</Text>
            </Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparant',
        borderRadius: 24,


    },
    card: {
        padding: 20

    },
    cardBox:{
        width: 300,
        height: 400,
        borderColor: '#FFF',
        flexDirection: 'column'

    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'pacifico',
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        flexWrap: 'wrap',
        width: 200
    },
    imgContainer: {
     width: 200,
     height: 200,
     justifyContent: 'center',
     alignSelf: 'center',
     borderRadius: 10,
     marginTop: 150

    },
    img: {
        width: 200,
        height: 200,
        marginLeft:-33
    },
    wishButton: {
        borderRadius: 14,
        borderColor: '#FFF',
        width: '70%',
        backgroundColor: "skyblue",
        height: 40,
        alignItems: 'center',
        marginTop: 20

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10,
        color: '#FFF'

    }
})