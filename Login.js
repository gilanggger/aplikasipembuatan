import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotAccount = () => {
    navigation.navigate('LupaPassword');
  };

  const handleBeranda = () => {
    if (!npm || !password) {
      Alert.alert('Perhatian', 'Harap isi NPM dan kata sandi.');
    } else if (npm.length !== 11) {
      Alert.alert('Perhatian', 'NPM harus terdiri dari 11 digit.');
    } else if (password.length < 6) {
      Alert.alert('Perhatian', 'Password harus terdiri dari minimal 6 karakter.');
    } else {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.124.1/reactnative/loginnw.php?op=create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `npm=${npm}&password=${password}`,
      });
      const jsonResponse = await response.json();
      if (jsonResponse.data.result === "Berhasil menambahkan data") {
        navigation.navigate('Beranda');
      } else {
        Alert.alert('Error', jsonResponse.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./1.png')} style={styles.smallLogo} />
      <Text style={styles.title}>Perpustakaan Fasilkom</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NPM</Text>
        <TextInput
          style={styles.input}
          placeholder="NPM"
          value={npm}
          onChangeText={(text) => setNpm(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleForgotAccount} style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Lupa Akun?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBeranda}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  smallLogo: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 48,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: '#E60635',
    textShadowOffset: { width: 3, height: 1 },
    textShadowRadius: 1,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF7F1',
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: -10,
    marginBottom: 15,
  },
  button: {
    width: '90%',
    backgroundColor: '#E60635',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  forgotText: {
    fontSize: 16,
    color: '#E60635',
    textDecorationLine: 'underline',
  },
});

export default Login;
