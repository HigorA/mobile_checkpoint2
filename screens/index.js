import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button 
                title="Login"
                onPress={() => navigation.navigate('Login')}/>
            <Button 
                title="Register"
                onPress={() => navigation.navigate('Register')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

        input: {
            marginBottom: 10,
            padding: 10,
            width: 300,
            borderRadius: 5,
            borderWidth: 5,
            borderStyle: 'solid',
            borderColor: 'black'
        },

        button: {
            backgroundColor: "#0077ff",
            color: '#fff',
            border: 'none',
            borderRadius: 5,
            padding: 10,
            paddingRight: 20,
        },

    }

  
    
  });