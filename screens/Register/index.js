import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Button, Text, TextInput, View } from "react-native";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; 


const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})


export default function Register() {
    
    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => (
        console.log(data)
        );

    return (
        <View style = {styles.container}>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value}}) => (
                    <TextInput style = {styles.input}
                        placeholder="email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            {errors.email && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value}}) => (
                    <TextInput style = {styles.input}
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={true}
                    />
                )}
                name="password"
            />
            {errors.password && <Text>This is required.</Text>}
            <Button style = {styles.button} title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 15
    },

    input: {
        marginBottom: 10,
        padding: 10,
        width: 300,
        borderRadius: 5,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#04d361'
    },

    button: {
      backgroundColor: "#271a45",
      border: 'none',
      borderRadius: 5,
      height: 45,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },

    buttonTitle: {
        color: 'white',
        textAlign: 'center'
    },

    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#04d361'
  }

});

