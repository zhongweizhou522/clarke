import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Select, option } from 'react-native';
import { CheckBox } from 'react-native-checkbox';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { SignUpButton } from '../components/ContinusWithButton';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

export default function LoginThree() {
    const [Username, setUsername] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Email, setEmail] = useState('');
    const [isSelected, setSelection] = useState(false);
    return (
        <LinearGradient
            colors={['#22252A', '#3C3C3C', '#1B1B1B']}
            style={{ flex: 1 }}
        >
            <View>
                <Image source={require('../assets/img/Artboard26.png')}
                    style={styles.SignUpArtboardlogo26} />
                <Image source={require('../assets/img/Artboard24.png')}
                    style={styles.SignUpArtboardlogo25} />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    onChange={e => setUsername(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Firstname"
                    style={styles.textInput}
                    onChange={e => setFirstname(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Lastname"
                    style={styles.textInput}
                    onChange={e => setLastname(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    onChange={e => setEmail(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Favorite Team"
                    style={styles.textInput}
                    onChange={e => setUsername(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Select Sports Jersey No"
                    style={styles.textInput}
                    onChange={e => setUsername(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Country"
                    style={styles.textInput}
                    onChange={e => setUsername(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    onChange={e => setUsername(e.target.text)}
                />
            </View>
            <View style={styles.SignUpaction}>
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.textInput}
                    onChange={e => setUsername(e.target.text)}
                />
            </View>
            <View style={styles.SignUpButtonAction}>
                <SignUpButton onpress={() => console.log("SignUp")} />
            </View>
            <View>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                />
                <Text>Do you like React Native?</Text>
            </View>
        </LinearGradient>
    )


}