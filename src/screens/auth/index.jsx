import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { theme } from '../../Constants/themes/colors';
import { Register, signIn } from '../../store/actions/auth.actions';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const title = isLogin ? 'Log In' : 'Register';
  const buttonTitle = isLogin ? 'Log In' : 'Register';
  const messageText = isLogin ? 'Need an account?' : 'Already have an account?';

  const dispatch = useDispatch();

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleAuth = () => {
    dispatch(isLogin ? signIn({ email, password }) : Register({ email, password }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={theme.colors.primary}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder="******"
            placeholderTextColor={theme.colors.primary}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={buttonTitle} style={styles.button} onPress={onHandleAuth} />
        </View>

        <TouchableOpacity onPress={onHandleChangeAuth} style={styles.link}>
          <Text style={styles.linkTitle}>{messageText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;
