import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Skill = ({ skill }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.buttonSkill}
    >
      <Text style={styles.buttonSkill.buttonText}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 5,
    marginVertical: 2,
    alignItems: 'center',
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  },
})
