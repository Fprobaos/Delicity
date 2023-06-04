import { StyleSheet } from 'react-native';

import { theme } from '../../Constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },

  loginContainer: {
    borderColor: theme.colors.text,
    borderWidth: 10,
    borderRadius: 10,
    height: 400,
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
  },
  inputsContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },

  input: {
    height: 50,
    width: 200,
    borderColor: theme.colors.text,
    borderWidth: 5,
    borderRadius: 10,
    marginVertical: 5,
    textAlign: 'center',
    color: theme.colors.text,
  },
  title: {
    paddingVertical: 10,
    color: theme.colors.text,
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
  button: {},
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  link: {
    marginVertical: 10,
  },
  linkTitle: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: theme.colors.tertiary,
  },
});
