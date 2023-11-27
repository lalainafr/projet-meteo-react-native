import { useState } from "react";
import { TextInput, StyleSheet, View, Text, Button } from "react-native"

// On met en parametre navigation afin de retourner ver la page about
export default function Search({navigation }) {
    const [city, setCity] = useState({ city: 'Montpelier' })

    return (
        <View>
            <TextInput style={Style.textInput} onChangeText={(city) => { setCity(city) }} />
            <Text style={Style.text}>{JSON.stringify(city)}</Text>
            {/* Bouton qui redirige vers la page Search */}
            <Button title="Go back to About" onPress={()=> navigation.navigate('About')}  />
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
