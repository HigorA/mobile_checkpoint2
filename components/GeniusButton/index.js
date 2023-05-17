import { StyleSheet, View } from "react-native";

export default function GeniusButton({color}) {

    return (
        <View style={[styles.GeniusButton, {backgroundColor: color}]}></View>
    )
};

const styles = StyleSheet.create({
    GeniusButton: {
        backgroundColor: '#232323',
        width: 100,
        height: 100,
        borderRadius: 50
    }
});