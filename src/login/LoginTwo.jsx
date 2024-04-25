import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ResetButton, ForgetButton, LoginButton, SignUp } from '../components/ContinusWithButton';
import { useState } from 'react';
export default function LoginTwo() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LinearGradient
            colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}
        >
            <View style={styles.container} >
                <Image source={require('../assets/img/Artboard26.png')}
                    style={styles.Artboardlogo26} />
                <Image source={require('../assets/img/Artboard24.png')}
                    style={styles.Artboardlogo25} />
                <Image source={require('../assets/img/Artboard24.png')}
                    style={styles.Artboardlogo24} />
                <View style={styles.action}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        onChange={e => setEmail(e.target.text)}
                    />
                </View>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        onChange={e => setPassword(e.target.text)}
                    />
                </View>
                <View style={styles.ForgetResetAction}>
                    <ForgetButton onPress={() => console.log("dfdf")}>
                        <Text style={{ color: '#F3F6F6', fontWeight: '400', fontFamily: 'Roboto', fontSize: 14, }}>
                            ForgotPasssword?
                        </Text>
                    </ForgetButton>
                    <ResetButton onPress={() => console.log("dfdfdf")}>
                        <Text style={{ color: '#F3F6F6', fontWeight: '400', fontFamily: 'Roboto', fontSize: 14, textDecorationLine: "underline" }}>
                            reset
                        </Text>
                    </ResetButton>
                </View>
                <View style={styles.LoginviewAction} >
                    <LoginButton onpress={() => console.log("login")} />
                </View>
                <View style={styles.LoginAccountAction}>
                    <Text style={{ color: '#F3F6F6', fontWeight: '400', fontFamily: 'Roboto', fontSize: 14, }}>
                        Don’t have an account?
                    </Text>
                    <SignUp onPress={() => console.log("sign up")} />
                </View>
            </View>
        </LinearGradient>
    )
}