import{Text, View, StyleSheet} from 'react-native'

export default function About() {
    return (
        <View style={Style.view}>
            <Text style={Style.title}> A propos</Text>
            <Text></Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis doloribus quibusdam commodi veniam eum nemo voluptate a asperiores sunt, numquam doloremque totam tenetur necessitatibus reprehenderit sint perferendis magnam eos!</Text>
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