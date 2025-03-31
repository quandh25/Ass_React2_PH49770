import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handerLogin = () => {
    navigation.navigate('Home')
  }

  const handerRegister=()=>{
    navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      {/* Nửa trên */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1499419865879-453926ae8a72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBpcGhvbmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80',
        }}
        style={styles.topBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome Back!</Text>
        </View>
      </ImageBackground>

      {/* Nửa dưới */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        {/* Nhớ tài khoản & Quên mật khẩu */}
        <View style={styles.optionRow}>
          <View style={styles.rememberMe}>
            <Checkbox
              value={rememberMe}
              onValueChange={setRememberMe}
              color={rememberMe ? '#000' : undefined}
            />
            <Text style={styles.rememberText}>Nhớ tài khoản</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handerLogin} >Login</Text>
        </TouchableOpacity>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff', borderColor: '#ddd', borderWidth: 1 }]}>
            <FontAwesome name="google" size={20} color="#db4437" />
            <Text style={[styles.socialButtonText, { color: '#333', marginLeft: 10 }]}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
            <FontAwesome name="facebook" size={20} color="#fff" />
            <Text style={[styles.socialButtonText, { marginLeft: 10 }]}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginText} onPress={() => navigation.navigate('Login')}>
            <Text>Đã có tài khoản?</Text>
            <Text style={styles.login1} onPress={handerRegister} >Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

// Styles giữ nguyên

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    color: '#333',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    color: '#333',
  },
  forgotText: {
    color: '#007bff',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  socialButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  loginText:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  login1: {
    color: '#66CC33',
    margin: 5
  },
});
