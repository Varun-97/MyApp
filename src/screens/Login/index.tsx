import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {increment, decrement, selectCount} from '../../redux/slice/loginSlice';
import { setUserPref } from '../../utils/storageUtils';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}: any) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const handleFormSubmit = (value: any) => {
    setUserPref('user', value?.email)
    navigation.navigate('HomeListing')
};

  return (
    <View style={styles.container}>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Redux Example</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment('temp'))} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View> */}
      <Text style={styles.title}>Login</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={(values: any) => handleFormSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }: any) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                name="email"
                placeholder="Email Address"
                placeholderTextColor={'black'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.input}
                name="password"
                placeholder="Password"
                placeholderTextColor={'black'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: 'red',
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 7,
    color: 'black'
  },
  //   rememberView: {
  //     width: '100%',
  //     paddingHorizontal: 50,
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     flexDirection: 'row',
  //     marginBottom: 8,
  //   },
  //   switch: {
  //     flexDirection: 'row',
  //     gap: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   rememberText: {
  //     fontSize: 13,
  //   },
  //   forgetText: {
  //     fontSize: 11,
  //     color: 'red',
  //   },
  button: {
    backgroundColor: 'red',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },

  //   footerText: {
  //     textAlign: 'center',
  //     color: 'gray',
  //   },
  //   signup: {
  //     color: 'red',
  //     fontSize: 13,
  //   },
});
