import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {styles} from './styles'; 
import LinearGradient from 'react-native-linear-gradient';
import ContinusWithButton from '../components/ContinusWithButton';
export default function LoginFirst(){
    return(
        <LinearGradient
            colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}
             >
        <View style ={styles.container} >
            <Image source= {require('../assets/img/Artboard26.png')}
                style = {styles.Artboardlogo26} /> 
             <Image  source={require('../assets/img/logo2.png')}
                style = {styles.tinyLogo}/>
            <Image source= {require('../assets/img/Artboard24.png')}
                style = {styles.Artboardlogo25} />
             <Image source= {require('../assets/img/Artboard24.png')}
                style = {styles.Artboardlogo24} />
            <Text style = {styles.TextSingn}>SIGN IN TO PLAY</Text>
        <ContinusWithButton/>
        </View>
        </LinearGradient>
    )
}
