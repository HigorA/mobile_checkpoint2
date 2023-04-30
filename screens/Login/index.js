import { useState } from "react";
import { View, Button, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>Login</Text>
      <View style={styles.form}>
        <View>
            <Text>E-mail</Text>
            <TextInput style={styles.input} />
        </View>
        <View>
            <Text>Password</Text>
            <TextInput style={styles.input}/>
        </View>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Login</Text></Pressable>
      </View>
      {/* <form style={styles.form} onSubmit={handleSubmit}>
        <label>
          Email:
          <input style={styles.input}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Senha:
          <input style={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <Button style={styles.button} type="submit" title="Login" />
      </form> */}
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
