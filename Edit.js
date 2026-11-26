import React from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {datasource} from "./Data";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = React.useState(route.params.key);
    const [type, setType] = React.useState('');

    return (
        <View>
            <Text>Letter:</Text>
            <TextInput
                value={letter}
                maxLength={1} style={{borderWidth: 1, borderColor: 'gray'}}
                onChangeText={(text) => setLetter(text)}/>
            <Picker onValueChange={(text) => setType(text)}>
                <Picker.Item label='Vowels' value='Vowels'/>
                <Picker.Item lebel='Consonants' value='Consonants'/>
            </Picker>
            <Button title="Save" onPress={() => {
                let indexnum = 1;

                if (route.params.type === "Vowels") {
                    indexnum = 0;
                }

                datasource[indexnum].data[route.params.index].key = letter;

                navigation.navigate('Home');
            }}/>
            <Button title='Delete' onPress={() => {
                let indexnum = 1;
                if (route.params.type === "Vowels") {
                    indexnum = 0;
                }
                Alert.alert('Confirm Delete', 'Are you sure?', [
                    {
                        text: 'Yes', onPress: () => {
                            datasource[indexnum].data.splice(route.params.index, 1);
                            navigation.navigate('Home');
                        }
                    },
                    {text: 'No'}
                ]);
            }}/>

        </View>
    )
}

export default Edit;