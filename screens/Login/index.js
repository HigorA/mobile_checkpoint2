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
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <Button type="submit">Login</Button>
      </form>
    </View>
  );
}
