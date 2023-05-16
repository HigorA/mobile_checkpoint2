import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { auth } from './../../firebase/firebase-api'
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/loginSlice";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})


export default function Login({ navigation }) {
  
  const dispatch = useDispatch();

  const { control, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        email: '',
        password: ''
    }
  })

  const onSubmit = async data => {
      console.log(data)
      await signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email.split('@')[0])
          dispatch(setUser(user));
        })
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)
      })
  }

  return (
      <View style = {styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
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
        </View>
        <View style={styles.inputView}>
          <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonTitle}>Submit</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonTitle}>Google</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonTitle}>Register</Text>
          </Pressable>
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121214',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputView: {
      gap: 30
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
        borderColor: '#04d361',
        color: 'white',
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
