import firebase from 'firebase';
import NavigationService from 'whatsappclone/src/services/NavigationService';

export const changeName = (text) => {
    return {
        type: 'change_name',
        payload: text
    }
}

export const changeEmail = (text) => {
    return {
        type: 'change_email',
        payload: text
    }
}

export const changePwd = (text) => {
    return {
        type: 'change_pwd',
        payload: text
    }
}

export const createUser = ({ name, email, pwd }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .then(user => createUserSuccess(user, dispatch))
            .catch(err => createUserError(err, dispatch));
    }
}

const createUserSuccess = (user, dispatch) => {
    dispatch({
        type: 'success'
    })
    NavigationService.navigate('Welcome')
}

const createUserError = (err, dispatch) => {
    console.log(err)
    dispatch({
        type: 'register_error',
        payload: err.message
    })
}