import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Genius</Text>
            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Play')}>
                    <Text style={styles.buttonTitle}>Play</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Ranking')}>
                    <Text style={styles.buttonTitle}>Ranking</Text>
                </Pressable>
            </View>
        </View>
    )
};

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
});
