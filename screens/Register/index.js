import { useState } from "react";
import { View } from "react-native";


export default function Register() {
    

    return (
        <View>
            <h2>Cadastro</h2>
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
                <button type="submit">Cadastro</button>
            </form>
        </View>
  );
}