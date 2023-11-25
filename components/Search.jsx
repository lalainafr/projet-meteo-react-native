import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native"


export default function Search() {
    const [city, setCity] = useState({ city: 'Montpelier' })

    return (
        <View>
            <TextInput style={Style.textInput} onChangeText={(city) => { setCity(city) }} />
            <Text style={Style.text}>{JSON.stringify(city)}</Text>
        </View>
    )
}


const Style = StyleSheet.create({
    text: {
        marginHorizontal: 40
    },
    textInput: {
        height: 40,
        margin: 40,
        borderWidth: 1,
        padding: 10,
    }
})
