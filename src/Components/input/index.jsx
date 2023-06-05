import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../Constants/themes/colors';
import Label from '../label';

const Input = ({
  editable,
  children,
  value,
  style,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor = theme.colors.primary,
  keyboardType = 'default',
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          editable={editable}
          value={value}
          style={{ ...styles.input, ...style }}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
        {hasError && touched ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        ) : null}
      </Label>
    </View>
  );
};

export default Input;
