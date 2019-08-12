import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    Vibration,
    Button
} from 'react-native'
import { connect } from 'react-redux'

import {
    changeEmail,
    changePwd,
    changeName,
    createUser
} from '../actions/AuthActions'
import NavigationService from 'whatsappclone/src/services/NavigationService';


class FormRegister extends Component {

    _createUser() {
        const { name, email, pwd } = this.props
        this.props.createUser({ name, email, pwd })
    }

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
                            value={this.props.name}
                            onChangeText={text => this.props.changeName(text)}
                            placeholder="Nome"
                            style={styles.input}
                            placeholderTextColor='#C3C3C3'
                            autoCapitalize="none" />
                        <TextInput
                            value={this.props.email}
                            onChangeText={text => this.props.changeEmail(text)}
                            placeholder="E-mail"
                            style={styles.input}
                            placeholderTextColor='#C3C3C3'
                            autoCapitalize="none" />
                        <TextInput
                            value={this.props.pwd}
                            onChangeText={text => this.props.changePwd(text)}
                            placeholder="Senha"
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholderTextColor='#C3C3C3'
                            autoCapitalize="none"
                            secureTextEntry
                        />

                        <View style={styles.registerText}>
                            <Text style={styles.errorText}>{this.props.registerError}</Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.touchable} onPress={() => this._createUser()}>
                            <Text style={styles.touchableText} >Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerText}>
                        <Text style={styles.registerLink} >Já possui uma conta? </Text>
                        <TouchableOpacity onPress={() => NavigationService.navigate('Login')}>
                            <Text style={[styles.registerLink, { color: '#25D366' }]} >Acesse aqui</Text>
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
        flex: 3,
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
        flexDirection: 'row',
        justifyContent: 'center'
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
    },

    errorText: {
        color: '#ff0000',
        fontSize: 16
    }
})

const mapStateToProps = state => (
    {
        name: state.AuthReducer.name,
        email: state.AuthReducer.email,
        pwd: state.AuthReducer.pwd,
        registerError: state.AuthReducer.registerError
    }
)

export default connect(
    mapStateToProps,
    {
        changeEmail,
        changePwd,
        changeName,
        createUser
    }
)(FormRegister)