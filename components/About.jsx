import{Text, View, StyleSheet, Button} from 'react-native'

// On met en parametre navigation afin de naviguer vers une autre page
export default function About({navigation}) {
    return (
        <View style={Style.view}>
            <Text style={Style.title}> A propos</Text>
            <Text></Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis doloribus quibusdam commodi veniam eum nemo voluptate a asperiores sunt, numquam doloremque totam tenetur necessitatibus reprehenderit sint perferendis magnam eos!</Text>
            {/* Bouton qui redirige vers la page Search */}
            <Button title="Go to search page" onPress={()=> navigation.navigate('Search')} />
        </View>
    )
}

const Style = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    view: {
        margin: 40
    }
})