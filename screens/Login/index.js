import { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function Login( { navigation } ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <View>
            <Text style={styles.buttonTitle}>E-mail</Text>
            <TextInput style={styles.input} />
        </View>
        <View>
            <Text style={styles.buttonTitle}>Password</Text>
            <TextInput style={styles.input}/>
        </View>
        <Pressable 
          
          style={styles.button}>
          <Text style={styles.buttonTitle}>Login</Text>
        </Pressable>
        <Pressable 
          
          style={styles.button}>
          <Text style={styles.buttonTitle}>Google</Text>
        </Pressable>
        <Pressable 
          onPress={() => navigation.navigate('Register')}
          style={styles.button}>
          <Text style={styles.buttonTitle}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 15
    },

    input: {
        marginBottom: 10,
        padding: 10,
        width: 300,
        borderRadius: 5,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#04d361'
    },

    button: {
      backgroundColor: "#271a45",
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
