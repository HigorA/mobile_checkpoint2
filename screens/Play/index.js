import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function Play( {navigation} ) {

    const values = ['easy', 'normal', 'hard'];
    const [currentValue, setCurrentValue] = useState('easy');

    const quantity = [4, 5, 6, 7, 8]
    const [currentQuantity, setCurrentQuantity] = useState(4);

    const handlePrevious = () => {
        const currentIndex = values.indexOf(currentValue);
        const previousIndex = (currentIndex - 1 + values.length) % values.length;
        setCurrentValue(values[previousIndex]);
      };
    
      const handleNext = () => {
        const currentIndex = values.indexOf(currentValue);
        const nextIndex = (currentIndex + 1) % values.length;
        setCurrentValue(values[nextIndex]);
      };

      const handlePreviousQuantity = () => {
        const currentIndex = quantity.indexOf(currentQuantity);
        const previousIndex = (currentIndex - 1 + quantity.length) % quantity.length;
        setCurrentQuantity(quantity[previousIndex]);
      };
    
      const handleNextQuantity = () => {
        const currentIndex = quantity.indexOf(currentQuantity);
        const nextIndex = (currentIndex + 1) % quantity.length;
        setCurrentQuantity(quantity[nextIndex]);
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose the level</Text>
            <View style={styles.selectorsView}>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={handlePrevious} style={styles.button}>
                        <Text style={styles.buttonText}>{'<'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.value}>{currentValue}</Text>
                    <TouchableOpacity onPress={handleNext} style={styles.button}>
                        <Text style={styles.buttonText}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={handlePreviousQuantity} style={styles.button}>
                        <Text style={styles.buttonText}>{'<'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.value}>{currentQuantity}</Text>
                    <TouchableOpacity onPress={handleNextQuantity} style={styles.button}>
                        <Text style={styles.buttonText}>{'>'}</Text>
                    </TouchableOpacity>
                </View>
                <Pressable 
                    onPress={() => navigation.navigate('Game', 
                        {
                            currentQuantity: currentQuantity
                            ,currentValue: currentValue
                        })
                    }
                    style={styles.playButton}>
                    <Text style={styles.buttonTitle}>Play !</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
        backgroundColor: '#121214'
    },

    selectorsView: {
        gap: 30,
        height: 400,
        flexDirection: 'column'
    },

    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    buttonTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#04d361'
    },

    button: {
        paddingHorizontal: 10,
    },

    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#271a45',
    },
    
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
        color: 'white'
    },

    playButton: {
        backgroundColor: '#271a45',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    }
})