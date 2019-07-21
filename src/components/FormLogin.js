import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'


export default class FormLogin extends Component {
    render() {
        return (
            <ImageBackground source={require('../images/wpp_background.jpg')} style={{ width: '100%', height: '100%' }} >
                <View style={styles.view}>
                    <View style={styles.title}>
                        <Image source={require('../images/wpp_logo.png')} style={{ width: 100, height: 100 }} />
                        <Text style={styles.titleText}>Whatsapp Clone</Text>
                    </View>
                    <View style={styles.form}>
                        <TextInput
                            placeholder="E-mail"
                            style={styles.input}
                            placeholderTextColor='#C3C3C3'
                            autoCapitalize="none" />
                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholderTextColor='#C3C3C3'
                            autoCapitalize="none"
                            secureTextEntry
                        />
                        <View style={styles.registerText}>
                            <Text style={styles.registerLink} >Ainda não tem acesso? </Text>
                            <TouchableOpacity onPress={() => Actions.register()}>
                                <Text style={[styles.registerLink, { color: '#25D366' }]} >Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.touchable}>
                            <Text style={styles.touchableText} >Acessar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 40,
    },

    title: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },


    form: {
        flex: 2,
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    titleText: {
        color: '#ECE5DD',
        fontSize: 25
    },

    input: {
        fontSize: 20,
        backgroundColor: '#ECE5DD',
        height: 45,
        borderColor: '#ECE5DD',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10
    },

    registerLink: {
        color: '#ECE5DD',
        fontSize: 20
    },

    registerText: {
        flexDirection: 'row'
    },

    touchable: {
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#128C7E',
        elevation: 0.5
    },

    touchableText: {
        color: '#ECE5DD',
        fontSize: 20,
    }
})