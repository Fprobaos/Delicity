import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContainer: {
    flex: 1,
  },

  touchableContainer: {
    borderWidth: 2,
    borderColor: theme.colors.tertiary,
    borderRadius: 5,
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.background,
  },

  buttonDisabled: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primary,
  },
  buttonConfirm: {
    color: theme.colors.text,
    fontFamily: 'OpenSans-Bold',
  },
  totalPurchaseContainer: {
    flexDirection: 'row',
  },
  totaltext: {
    color: theme.colors.text,
    fontFamily: 'OpenSans-Bold',
  },
  totalPrice: {
    color: theme.colors.text,
    fontFamily: 'OpenSans-Bold',
  },
});
