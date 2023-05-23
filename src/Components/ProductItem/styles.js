import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    borderRadius: 10,
    margin: 20,
  },

  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  name: {
    fontFamily: 'OpenSans-Medium',
    marginBottom: 10,
    color: theme.colors.text,
  },
  price: {
    fontFamily: 'OpenSans-Bold',
    color: theme.colors.text,
  },
});
