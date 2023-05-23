import { StyleSheet } from 'react-native';

import { theme } from '../../Constants/themes/colors';

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

  categoryname: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: theme.colors.text,
  },
});
