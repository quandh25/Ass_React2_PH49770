import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Register Info:', { name, email, phone, password });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Background image */}
      <View style={styles.topBackground}>
        <ImageBackground
          source={{
            uri: 'https://haycafe.vn/wp-content/uploads/2022/03/anh-nen-iPhone-11-Pro-Max-4k.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Create Account</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Form phía dưới */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          placeholder="Họ và tên"
          placeholderTextColor="#999"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Số điện thoại"
          placeholderTextColor="#999"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Mật khẩu"
          placeholderTextColor="#999"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>


        {/* Icon */}
        <View style={styles.socialButtons}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff', borderColor: '#ddd', borderWidth: 1 }]}>
            <FontAwesome name="google" size={20} color="#db4437" />
            <Text style={[styles.socialButtonText, { color: '#333', marginLeft: 10 }]}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
            <FontAwesome name="facebook" size={20} color="#fff" />
            <Text style={[styles.socialButtonText, { marginLeft: 10 }]}></Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginText} onPress={() => navigation.navigate('Login')}>
          <Text>Đã có tài khoản?</Text>
          <Text style={styles.login1}>Đăng nhập</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBackground: {
    height: '35%',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 15,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  formContainer: {
    flexGrow: 1,
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
  loginText:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  login1: {
    color: '#66CC33',
    margin: 5
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
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
});
