import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList, TextInput
} from 'react-native';
import { Skill } from '../Components/Skill';
import {Button} from "../Components/Button.tsx";

interface SkillData {
  id: string,
  name: string
}

export const Home = () => {

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);

  function setSkillsHandle() {

    const data: SkillData = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    if (newSkill === '' || skills.some(skill => skill.name === newSkill)) return;

    setSkills(oldState => [...oldState, data])
  }

  function removeSkillHandle(id: string) {

    setSkills(oldState => oldState.filter(
          skill => skill.id !== id
        )
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.text}>Welcome, Marcone!</Text>
      </View>


      <View style={styles.formContainer}>
        <TextInput
            style={styles.input}
            placeholder="Skills"
            placeholderTextColor={'#fff'}
            onChangeText={setNewSkill}
        />

        <Button onPress={setSkillsHandle}  text="Add"/>

      </View>

        <View style={styles.skillsContainer}>
            <Text style={[styles.text, { fontWeight: 'bold', fontSize: 18, marginBottom: 10 }]}>My Skills</Text>
            <FlatList
                nestedScrollEnabled={true}
                data={skills}
                renderItem={({item}) => (
                    <Skill
                        skill={item.name}
                        onPress={() => removeSkillHandle(item.id)}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 20,
    paddingVertical: 70,
    backgroundColor: '#121014',
  },
  skillsContainer: {
    marginTop: 30,
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
  },
  formContainer: {
    marginTop: 30,
    backgroundColor: '#121014',
    gap: 15,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
  },
});
