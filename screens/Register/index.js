import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";


export default function Register() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>Register</Text>
            <View style={styles.form}>
                <View>
                    <Text>E-mail</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>

            <View>
                <Text>Password</Text>
                <TextInput style={styles.input}/>
            </View>
            <Pressable style={styles.button}><Text style={styles.buttonText}>Register</Text></Pressable>
        </View>    
        
  );
}

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
    },

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
        backgroundColor: "#d4cde8",
        color: '#fff',
        border: 'none',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: '500',
        fontSize: 20,
    }
});
