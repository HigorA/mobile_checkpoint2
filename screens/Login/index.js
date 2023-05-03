import { Button, Text, TextInput, View } from "react-native";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})


export default function Login() {
  
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    input: {
        marginBottom: 10,
        padding: 10,
        width: 300,
        borderRadius: 5,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'black'
    },

    button: {
        backgroundColor: "#d4cde8",
        color: '#fff',
        border: 'none',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: '500',
        fontSize: 20,
    }
});
