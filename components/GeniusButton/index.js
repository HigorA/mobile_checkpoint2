import { StyleSheet, View } from "react-native";

export default function GeniusButton() {

    return (
        <View style={styles.GeniusButton}></View>
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