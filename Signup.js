import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

const Signup = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    fetch('http://192.168.124.1/reactnative/signup.php?op=create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `nama=${nama}&email=${email}&npm=${npm}&password=${password}`
    })
    .then(response => response.json())
    .then(json => {
      if (json.data.result === "Berhasil menambahkan data") {
        Alert.alert(
          "Sukses",
          "Mulailah login untuk masuk ke halaman utama Perpustakaan FASILKOM",
          [
            {
              text: "Oke",
              onPress: () => navigation.navigate('Notifikasi', {
                user: { nama, email, npm }
              })
            }
          ]
        );
      } else {
        Alert.alert("Error", json.data.result);
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('./1.png')} style={styles.logo} />
        <Text style={styles.title}>Perpustakaan Fasilkom</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
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
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF7F1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
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
  button: {
    backgroundColor: '#E60635',
    paddingVertical: 15,
    paddingHorizontal: 60,
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
});

export default Signup;