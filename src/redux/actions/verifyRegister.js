import http from '../../helper/http';

export const verifyRegister = (username, code, password) => {
    const param = new URLSearchParams();
    param.append('username', username);
    param.append('code', code);
    param.append('password', password);
    return ({
        type: 'VERIFY_REGISTER',
        payload: http().post('/auth/verification', param)
    });
};