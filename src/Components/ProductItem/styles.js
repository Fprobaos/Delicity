import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
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
    flexDirection: 'row',
    elevation: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  name: {
    fontFamily: 'OpenSans-Medium',
    marginBottom: 10,
    color: theme.colors.text,
  },
  price: {
    fontFamily: 'OpenSans-Bold',
    marginBottom: 10,
    color: theme.colors.text,
  },
  teampicture: {},
  teampicturecontainer: {},
});
