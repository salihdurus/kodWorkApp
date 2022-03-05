import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.style';

const Button = ({title, icon, onPress, isEnable}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={isEnable}>
      <Icon name={icon} size={20} color="white" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
