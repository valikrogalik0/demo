import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../BaseComponents/Input';
import Form from '../BaseComponents/Form';
import Checkbox from '../BaseComponents/Checkbox';

import './styles/Login.styles.css';

const Login = React.memo(props => {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit() {
    console.log('submitted')
  }

  return (
    <div className="login-page-container">
      <div className="login-page-container__page-title">CloneDesk</div>
      <Form className="login-form login-page-container__login-form" onSubmit={handleSubmit}>
        <div className="login-form__title">Sign in</div>
        <Input
          className="login-form__text-input"
          type="text"
          value={loginName}
          onChangeValue={setLoginName}
          placeholder={'email'}
        />
        <Input
          className="login-form__text-input"
          type="password"
          value={password}
          onChangeValue={setPassword}
          placeholder={'password'}
        />
        <div className="login-form-footer login-form__login-form-footer">
          <div className="login-form-left-section">
            <Input className="login-form-footer__submit-input" type="submit" value="Login" />
            <Checkbox
              className="login-form__checkbox"
              isChecked={rememberMe}
              onChange={setRememberMe}
              title={'Remember'}
            />
          </div>
          <div className="login-form-right-section">
            <div>Forgot password</div>
          </div>
        </div>
      </Form>
    </div>
  )
});

export default Login;