
import { Button, View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../login/styles";
import { Componetesstyle } from "./style";
export default function ContinusWithButton() {
    return (
        <View style={styles.ContinusWithLayout}>
            <TouchableOpacity onPress={() => console.log('Goolgle')}>
                <View style={styles.GoogleView}>
                    <Image style={styles.GoogleLogo} source={require('../assets/img/GoogleLogo.png')}></Image><Text style={styles.GoogleText}>Continue with Goolgle</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Email')}>
                <View style={styles.EmailView}>
                    <Text style={styles.EmailText} >Continue with Email</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export function ForgetButton({ onPress, children }) {
    return (
        <TouchableOpacity onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}
export function ResetButton({ onPress, children }) {
    return (
        <TouchableOpacity onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}
export function LoginButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={Componetesstyle.LoginTextAction}>Login</Text>
        </TouchableOpacity>
    )
}
export function SignUp({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={Componetesstyle.SignUpText}>  SIGN UP</Text>
        </TouchableOpacity>
    )
}
export function SignUpButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={Componetesstyle.SignUpTextAction} >Sign Up</Text>
        </TouchableOpacity>
    )
}