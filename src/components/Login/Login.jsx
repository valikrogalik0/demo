import React, {useState} from 'react';
import PropTypes from 'prop-types';


const validateAuthData = (email, password, callback) => {
    console.log('callback');
    
    callback(email, password);
}

const Login = props => {
    const {handleLogin} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div>
            <input type='email' placeholder='email' value={email} onChange={(ev, value) => setEmail(value)} />
            <br/>
            <input type='password' placeholder='password' value={password} onChange={(ev, value) => setPassword(value)} />
            <br/>
            <input type='submit' placeholder='submit' value='submit' onClick={() => validateAuthData(email, password, handleLogin)}/>
        </div>
    )
}

export default Login;