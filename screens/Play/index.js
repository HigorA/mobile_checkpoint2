import { Pressable, Text } from "react-native";
import { View } from "react-native";

export default function Play({navigation}) {

    return (
        <View>
            <Text>Choose the level</Text>
            <Pressable onPress={() => navigation.navigate('Game')}>
                <Text>Easy</Text>
            </Pressable>
            <Pressable>
                <Text>Normal</Text>
            </Pressable>
            <Pressable>
                <Text>Hard</Text>
            </Pressable>
        </View>
    )
}