const INITIAL_STATE = {
    name: '',
    email: '',
    pwd: '',
    registerError: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case 'change_name':
            return { ...state, name: action.payload }
        case 'change_email':
            return { ...state, email: action.payload }
        case 'change_pwd':
            return { ...state, pwd: action.payload }
        case 'success':
            return { ...state, nome: '', senha: '' }
        case 'register_error':
            return { ...state, registerError: action.payload }
    }
    return state
}