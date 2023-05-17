import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import GeniusButton from "../GeniusButton";

export default function Game({ route }) {

    const [sequence, setSequence] = useState([]);
    const [randomSequence, setRandomSequence] = useState([]);
    const [highlightedButton, setHighlightedButton] = useState(null);
    const [disableButtons, setDisableButtons] = useState(false);
    const [isPlayingSequence, setIsPlayingSequence] = useState(false); // Variável de estado para controlar a reprodução da sequência
    const [isPlayerTurn, setIsPlayerTurn] = useState(false);
    const {currentValue, currentQuantity} = route.params;
    const buttons = new Array(currentQuantity).fill(0);
    const colors = [
        '#FF0000', // Vermelho 1
        '#00FF00', // Verde 2
        '#0000FF', // Azul  3
        '#FFFF00', // Amarelo 4
        '#FF00FF', // Rosa 5
        '#ff6741', // Laranja 6
        '#A52A2A', // Marron
        '#808080', // Cinza
    ];

    const buttonColor = currentValue === 'hard' ? '#808080' : undefined;

    const handleButtonPress = (index) => {
        // Verifique se o valor do botão está definido corretamente
        setSequence([...sequence, index]);
        console.log(sequence)
        console.log(index)
    };

    useEffect(() => {
        generateRandomSequence(currentQuantity)
    }, [])

    useEffect(() => {
        console.log(randomSequence);
    }, [randomSequence]);

    useEffect(() => {
        if (sequence.length === currentQuantity) {
          checkSequence();
        }
      }, [sequence]
    );
    
    const checkSequence = () => {
        const isMatch = compareSequences(sequence, randomSequence);
        if (isMatch) {
          console.log('Vitória! A sequência corresponde!');
          alert('Vitória! A sequência corresponde!')
          // Exibir mensagem de vitória ou executar ação desejada
        } else {
          console.log('Derrota! A sequência não corresponde!');
          alert('Derrota! A sequência não corresponde!')
          // Exibir mensagem de derrota ou executar ação desejada
        }
    };
    
    const generateRandomSequence = (length) => {
        const randomS = [];
        for (let i = 0; i < length; i++) {
          const randomValue = Math.floor(Math.random() * currentQuantity);
          randomS.push(randomValue);
        }
        setRandomSequence(randomS)
        playSequence(randomS)
    };
    
    const compareSequences = (sequence1, sequence2) => {
        if (sequence1.length !== sequence2.length) {
          return false;
        }
        for (let i = 0; i < sequence1.length; i++) {
          if (sequence1[i] !== sequence2[i]) {
            return false;
          }
        }
        return true;
    };

    const highlightButton = (index) => {
        setHighlightedButton(index); // Define o botão destacado
        setTimeout(() => {
          setHighlightedButton(null); // Remove o destaque após 2 segundos
        }, 2000);
    };

    const playSequence = async (sequence) => {
        setDisableButtons(true);
        setIsPlayingSequence(true);
        for (let i = 0; i < sequence.length; i++) {
          await delay(3500); // Aguarda 2 segundos antes de destacar o próximo botão
          highlightButton(sequence[i]);
        }
        setDisableButtons(false);
        setIsPlayingSequence(false)
    };
    
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    

    return (
        <View style={styles.container}>       
            {isPlayingSequence ? <Text style={styles.title}>Reproduzindo</Text> : <Text style={styles.title}>Pode jogar</Text>}    
            {buttons.map((_, index) => 
                <Pressable 
                    key={index}  
                    onPress={() => {if (!disableButtons) {
                        handleButtonPress(index);
                        highlightButton(index);
                    }}} 
                    style={({ pressed }) => [{
                      borderWidth: highlightedButton === index ? 3 : 0,
                      borderColor: highlightedButton != null ? "white" : 'black',
                      borderRadius: 50,
                      opacity: pressed ? 0.5 : 1
                    }]}
                >
                    <GeniusButton color={buttonColor || colors[index % colors.length]} />
                </Pressable>
                )
            }
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
        backgroundColor: '#121214',
        flexWrap: 'wrap'
    },

    title: {
        color: '#04d361',
        fontSize: 20
    }
})