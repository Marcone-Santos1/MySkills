import {StyleSheet, TextInput, View} from "react-native";
import {Button} from "./Button";

export const SkillForm = ({ setNewSkill, onpress }) => {
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Skills"
                placeholderTextColor={'#fff'}
                onChangeText={setNewSkill}
            />

            <Button onPress={onpress} />

        </View>
    );
}

const styles = StyleSheet.create({
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
