import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {

    return (
        <View>
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