import {TouchableOpacity, StyleSheet, Text, TouchableOpacityProps, View} from 'react-native';
import React from "react";
import {Button} from "./Button.tsx";

interface SkillProp extends TouchableOpacityProps {
    skill: string
}

export const Skill = ({ skill, ...rest }: SkillProp) => {
  return (
      <View
          style={styles.container}
      >
          <Text style={styles.buttonText}>{skill}</Text>

          <Button
              activeOpacity={0.7}
              style={styles.buttonSkill}
              {...rest}
              text="Excluir"
          />
      </View>

  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    buttonSkill: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})
