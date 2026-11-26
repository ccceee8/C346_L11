import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {datasource} from "./Data";

const Add = ({navigation}) => {
    const [letter, setLetter] = React.useState('');
    const [type, setType] = React.useState('Vowels');

    return (
        <View>
            <Text>Letter:</Text>
            <TextInput maxLength={1} style={{borderWidth: 1, borderColor: 'gray'}}
                       onChangeText={(text) => setLetter(text)}/>
            <Picker
                selectedValue={type}
                onValueChange={(value) => setType(value)}>
                <Picker.Item label = 'Vowels' value='Vowels'/>
                <Picker.Item label = 'Consonants' value='Consonants'/>
            </Picker>
            <Button title="Add" onPress={()=> {
                let item = {key: letter};
                let indexnum = 1;
                if (type === "Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate('Home')
            }
            }
            />
        </View>
    )
}

export default Add;