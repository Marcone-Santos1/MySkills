import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList
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
            <FlatList
                nestedScrollEnabled={true}
                data={skills}
                renderItem={({item}) => <Skill skill={item} />}
                keyExtractor={item => item}
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
});
