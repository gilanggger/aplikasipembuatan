import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Profile = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Halaman Profil</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.avatarContainer}>
          <Image source={require('./1.png')} style={styles.avatar} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.box}>{user.nama}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>NPM:</Text>
          <Text style={styles.box}>{user.npm}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.box}>{user.email}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Keluar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
          <Image source={require('./beranda.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Prefensi')}>
          <Image source={require('./data.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifikasi', { user })}>
          <Image source={require('./notifikasi.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })}>
          <Image source={require('./profil.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F1',
  },
  header: {
    backgroundColor: '#E60635',
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  body: {
    flex: 1,
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  box: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#E60635',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 100,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E60635',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  navigationIcon: {
    width: 30,
    height: 30,
  },
});

export default Profile;
