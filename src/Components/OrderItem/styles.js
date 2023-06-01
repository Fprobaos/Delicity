import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    borderRadius: 20,
    borderColor: theme.colors.background,
    borderWidth: 2,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: theme.colors.black,
  },

  date: {
    color: theme.colors.text,
    textAlign: 'center',
    fontFamily: 'OpenSans-Medium',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bodyContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  totalprice: {
    paddingVertical: 5,
    color: theme.colors.text,
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
});
