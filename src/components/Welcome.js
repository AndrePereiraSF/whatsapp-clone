import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native'
import NavigationService from 'whatsappclone/src/services/NavigationService';



class Welcome extends Component {
    render() {
        return (
            <ImageBackground source={require('../images/wpp_background.jpg')} style={{ width: '100%', height: '100%' }} >
                <View style={styles.view}>
                    <View style={styles.title}>
                        <Image source={require('../images/wpp_logo.png')} style={{ width: 100, height: 100 }} />
                        <Text style={styles.titleText}>Bem-vindo, {this.props.name}!</Text>
                        <Text style={styles.subtitleText}>Seu cadastro foi efetuado com sucesso.</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.contentText}>
                            Agora você só precisa logar e poderá conversar
                            com todos os seus amigos.
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.touchable} onPress={() => NavigationService.navigate('Login')}>
                            <Text style={styles.touchableText}>Efetuar login</Text>
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
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        flex: 1,
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleText: {
        color: '#ECE5DD',
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    subtitleText: {
        color: '#ECE5DD',
        fontSize: 18,
        fontWeight: 'bold'
    },

    contentText: {
        color: '#ECE5DD',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    touchable: {
        height: 40,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#128C7E',
        elevation: 0.5
    },

    touchableText: {
        color: '#ECE5DD',
        fontSize: 18,
        fontWeight: 'bold'
    },
})

const mapStateToProps = state => (
    {
        name: state.AuthReducer.name,
        email: state.AuthReducer.email,
        pwd: state.AuthReducer.pwd,
        registerError: state.AuthReducer.registerError
    }
)

export default connect(mapStateToProps)(Welcome)
