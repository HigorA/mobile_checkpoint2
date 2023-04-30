import { useState } from "react";
import { View } from "react-native";
import { Button, Text, StyleSheet} from "react-native";


export default function Register() {
    

    return (
        <View>
            <Text>Cadastro</Text>
            <form style={styles.form} onSubmit={handleRegisterSubmit}>
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
                <Button style={styles.button} type="submit">Cadastro</Button>
            </form>
        </View>
  );
}