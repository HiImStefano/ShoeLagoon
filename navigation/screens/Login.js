import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, Platform, Dimensions, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'

const Login = () => {

    const [data, setData] = React.useState({
        Email: '',
        Pword: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                Email: val,
                check_textInputChange: true
            });
        }
        else {
            setData({
                ...data,
                Email: val,
                check_textInputChange: false
            });
        }
    }

return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={style.action}>
                <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput
                    placeholder='Your Email:'
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange
                }
                <Feather 
                    name="check-circle"
                    color="green"
                    size={2}
                />
            </View>

            <Text style={[styles.text_footer, {marginTop: 35}]}>Passwprd</Text>
            <View style={style.action}>
                <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput
                    placeholder='Your Password:'
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                />
                <Feather 
                    name="eye-off"
                    color="grey"
                    size={2}
                />
            </View>
        </View>
    </View>
  )
}

export default Login

const {height} = Dimensions.get("screen");
const height_logo = height * .28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});