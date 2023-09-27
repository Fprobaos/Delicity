import { useReducer, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import Input from '../../Components/input';
import { theme } from '../../Constants/themes/colors';
import { Register, signIn } from '../../store/actions/auth.actions';
import { UPDATE_FORM, onInputChange } from '../../utils/form';

const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const title = isLogin ? 'Log In' : 'Register';
  const buttonTitle = isLogin ? 'Log In' : 'Register';
  const messageText = isLogin ? 'Need an account?' : 'Already have an account?';

  const dispatch = useDispatch();

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : Register({ email: formState.email.value, password: formState.password.value })
    );
  };

  const onHandleInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.brandtitle}>LOGO</Text>
        </View>
        <Text style={styles.title}>{title}</Text>

        <Input
          placeholder="wdawda@gmail.com"
          placeholderTextColor={theme.colors.primary}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleInputChange({ value: text, name: 'email' })}
          value={formState.email.value}
          label="E-mail"
          error={formState.email.error}
          hasError={formState.email.hasError}
          touched={formState.email.touched}
        />
        <Input
          placeholder="******"
          placeholderTextColor={theme.colors.primary}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandleInputChange({ value: text, name: 'password' })}
          value={formState.password.value}
          secureTextEntry
          label="Password"
          error={formState.password.error}
          hasError={formState.password.hasError}
          touched={formState.password.touched}
        />
        <View style={styles.buttonContainer}>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            style={styles.button}
            onPress={onHandleAuth}
          />
        </View>

        <TouchableOpacity onPress={onHandleChangeAuth} style={styles.link}>
          <Text style={styles.linkTitle}>{messageText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;
