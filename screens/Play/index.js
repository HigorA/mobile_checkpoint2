import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function Play( {navigation} ) {

    const user = useSelector((state) => state.login.user)
    console.log(user)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user}Choose the level</Text>
            <View style={styles.buttonView}>
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('Game')}>
                    <Text style={styles.buttonTitle}>Easy</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                >
                    <Text style={styles.buttonTitle}>Normal</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                >
                    <Text style={styles.buttonTitle}>Hard</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
        backgroundColor: '#121214'
    },


    buttonView: {
        gap: 30,
        height: 400
    },
    
    button: {
        backgroundColor: "#271a45",
        color: '#fff',
        border: 'none',
        borderRadius: 5,
        height: 45,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonTitle: {
        color: 'white',
        textAlign: 'center'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#04d361'
    }
})