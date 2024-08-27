import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

const LupaPassword = ({ navigation }) => {
  const [npm, setNpm] = useState('');
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = () => {
    // Validasi apakah semua input telah diisi
    if (!npm || !name || !oldPassword || !newPassword) {
      Alert.alert('Error', 'Semua kolom harus diisi.');
      return;
    }

    // Kirim data ke server PHP
    fetch('http://192.168.124.1/reactnative/lupapassword.php?op=create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        npm: npm,
        name: name,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.data.result === 'Password berhasil diubah.') {
        Alert.alert(
          'Password telah diubah',
          'Password anda berhasil diubah. Silahkan login',
          [
            { text: 'OK', onPress: () => navigation.navigate('Login') }
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Gagal',
          data.data.result,
          [
            { text: 'OK' }
          ],
          { cancelable: false }
        );
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat menghubungi server.');
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./1.png')} style={styles.smallLogo} />
      <Text style={styles.title}>Lupa Akun</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NPM</Text>
        <TextInput
          style={styles.input}
          placeholder="NPM"
          value={npm}
          onChangeText={(text) => setNpm(text)}
        />
        <Text style={styles.label}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>Password Lama</Text>
        <TextInput
          style={styles.input}
          placeholder="Password Lama"
          value={oldPassword}
          onChangeText={(text) => setOldPassword(text)}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Password Baru</Text>
        <TextInput
          style={styles.input}
          placeholder="Password Baru"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
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
});

export default LupaPassword;
