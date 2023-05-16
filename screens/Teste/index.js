import { Button, Text, TextInput, View } from "react-native";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; 


const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})


export default function Formulario() {
    
    const { control, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => (
        console.log(data)
        );

    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value}}) => (
                    <TextInput
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
                    <TextInput
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            {errors.password && <Text>This is required.</Text>}
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
};