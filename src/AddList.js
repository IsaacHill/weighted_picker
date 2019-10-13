import React, {useState, useContext} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import {createList, getLists} from './Queries';
import {ListContext} from "./ListContext"

export const AddList = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("")
    const {setLists} = useContext(ListContext);
    const sendList = async () => {
        try {
            console.log("come on");
            let response = await createList(name, description);
            console.log("this do a thing?", response)
        } catch (e) {
            console.log("error or nah?",e, e.message)
            setError(e.message)
        } finally {
            getLists().then((list_array) => {
                console.log(list_array, "heres my list boy!", []);
                setLists(list_array._array);
                setError("");

            console.log("come off");
             });
        }
    }
    return (
    <View>
        <FieldAndLabel label={"Name"} value={name} setValue={setName}/>
        <FieldAndLabel label={"Description"} value={description} setValue={setDescription}/>
        <ErrorMessage error={error} />
        <Button
          title="Add List"
          onPress={sendList}
        />
    </View>)
}

const ErrorMessage = ({error}) => {
    if (error !== "") {
        return(<Text>{error}</Text>);
    } else {
        return(null);
    }
}

const FieldAndLabel = ({label,value, setValue}) => {
    return (<View>
        <Text>{label}</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setValue(text)}
            value={value}
        />
    </View>);
}

export default AddList