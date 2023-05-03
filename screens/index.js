import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text>Play</Text></Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}><Text>Register</Text></Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text>Login</Text></Pressable>
            <Pressable style={styles.button} ><Text>Ranking</Text></Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    },
    
    button: {
        backgroundColor: "#0077ff",
        color: '#fff',
        border: 'none',
        borderRadius: 5,
        padding: 10,
        paddingRight: 20,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
