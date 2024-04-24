
import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
export default function LoginView(){
    return(
     
        <View>
            <Image  source={require('../assets/img/logo1.png')}
                style={styles.tinyLogo}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 260,
      height: 252,
      marginTop: 300,
      Left: 70
    },
    logo: {
      width: 66,
      height: 58,
    },
  });