import { useState } from "react";
import { View } from "react-native";
import { Button, Text, StyleSheet} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(email, password);
  };

  return (
    <View>
      <Text>Login</Text>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>
          Email:
          <input style={styles.input}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input style={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <Button style={styles.button} type="submit">Login</Button>
      </form>
    </View>
  );
}
