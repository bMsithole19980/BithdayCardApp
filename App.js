import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GreetingsInput from './components/GreetingsInput';
import BirthdayCard from './components/BirthdayCard';
import backgroundImage from './components/birthday.jpg'
import { ImageBackground } from 'react-native';
export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backImage}>
      <View style={styles.container}>
      <Text style={styles.textHeader}>Happy Birthday!</Text>
      
      <BirthdayCard/>

    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  backImage:{
  flex : 1,
  resizeMode: 'cover'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textHeader:{
    fontSize: 40,
    fontWeight: 'bold',
    color : '#FFF',
    justifyContent : 'center',
    alignItems: 'center',
    fontFamily: 'pacifico'
  },
  card:{
    
  }
});
