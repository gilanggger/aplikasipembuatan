import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Home = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./1.png')} style={styles.smallLogo} />
      <Text style={styles.title}>Perpustakaan Fasilkom</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
    width: 200,
    height: 200,
    marginBottom: 20, // Adjust the margin as needed
    alignSelf: 'center'
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
    marginBottom: 40,
  },
  button: {
    width: '80%',
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

export default Home;

