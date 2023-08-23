import { Pressable, StyleSheet, Text, View, Image , Share } from 'react-native'
import React, { useState } from 'react'
import GreetingsInput from './GreetingsInput'
import Happy from '/try.jpg'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'

export default function BirthdayCard() {
    const [greetingMessage, setGreetingMessage] = useState('');
    const handleClearButton = () => {
        setGreetingMessage('')

    }
    const handleButton = () => {
        console.log(greetingMessage);
    }
    const handleButtonShare = async () => {
        try {
            const result = await Share.share({
                message: greetingMessage,
                url: Happy,
            });
    
            if (result) {
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        console.log(`Shared via ${result.activityType}`);
                    } else {
                        console.log('Shared successfully');
                    }
                } else if (result.action === Share.dismissedAction) {
                    console.log('Shared dismissed');
                }
            } else {
                console.log('Share operation failed or was dismissed');
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <View style={styles.container} >
            <View style={styles.card}>
                <GreetingsInput
                    value={greetingMessage}
                    textInput={setGreetingMessage} />
                     <Text>To add emojiss press windows button and .</Text>
                <Pressable
                    style={styles.clear}
                    onPress={handleClearButton}
                >
                    <MaterialIcons
                        name='clear'
                        size={54}
                        style={styles.clearText}
                    />

                </Pressable>
                <View style={styles.cardBox}>

                    <View style={styles.imgContainer}>
                        <Image
                            style={styles.img}
                            source={{ uri: Happy }}
                            resizeMode='cover' />

                    </View>
                    <View style={styles.mesageBox}>
                        <Text style={styles.greeting}>{greetingMessage}</Text>
                       
                    </View>

                </View>
                <Pressable
                    style={styles.wishButton}
                    onPress={handleButton}
                >
                    <Text style={styles.text}>Wish</Text>
                </Pressable>
                <Pressable
                onPress={handleButtonShare}
                    style={styles.share}
                >
                    <FontAwesome
                        name='share-alt'
                        size={34}
                        style={styles.iconShare} />
                    <Text style={styles.shareText}>Share</Text>

                </Pressable>

            </View>




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
        padding: 20,

    },
    cardBox: {
        width: 300,
        height: 400,
        borderColor: '#FFF',
        flexDirection: 'row',
        marginBottom: 20

    },
    clear: {
        paddingHorizontal: 10,
        width: '25%',
        height: 40,
        borderRadius: 20,
        marginLeft: '91%',
        marginTop: -75

    },
    clearText: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'pacifico',
        color: '#FF00FF',
        alignItems: 'center',
        textAlign: 'center',
        fontStyle: 'italic'

    },
    imgContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,

    },
    img: {
        width: 200,
        height: 200,
        marginLeft: 40
    },
    mesageBox: {
        height: 150,
        marginTop: "110%",
        marginLeft: -170,
        width: '90%'
    },
    wishButton: {
        alignSelf: 'center',
        borderRadius: 14,
        borderColor: '#FFF',
        width: '30%',
        backgroundColor: "skyblue",
        height: 40,
        alignItems: 'center',
        marginTop: 90

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10,
        color: '#FFF'

    },
    share: {
        marginLeft: '90%',
        width: 40
    },
    iconShare: {
        color: 'skyblue'
    },
    shareText: {
        color: '#FFF'
    }
})