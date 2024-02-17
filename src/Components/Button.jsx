import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Button = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.button.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  },
})
