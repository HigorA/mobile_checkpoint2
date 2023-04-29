import { useState } from "react";
import { View } from "react-native";
import { Button, Text, StyleSheet} from "react-native";


export default function Register() {
    

    return (
        <View>
            <Text>Cadastro</Text>
            <form onSubmit={handleRegisterSubmit}>
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
                <Button type="submit">Cadastro</Button>
            </form>
        </View>
  );
}