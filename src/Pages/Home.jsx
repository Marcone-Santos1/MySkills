import { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Skill } from '../Components/Skill';
import {SkillForm} from "../Components/SkillForm";

export const Home = () => {

  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function setSkillsHandle() {
    setSkills(oldState => [...oldState, newSkill])
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.text}>Welcome, Marcone!</Text>
      </View>

      <SkillForm setNewSkill={setNewSkill} onpress={setSkillsHandle} />

        <View style={styles.skillsContainer}>
            <Text style={[styles.text, { fontWeight: 'bold', fontSize: 18, marginBottom: 10 }]}>My Skills</Text>
            <ScrollView style={{ padding: 10 }}>
              {
                skills.map(skill => (
                  <Skill skill={skill} key={skill} />
                ))
              }
            </ScrollView >

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
});
