import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Notifikasi = ({ navigation, route }) => {
  const { user, peminjaman, deadline } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifikasi</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.avatarContainer}>
          <Image source={require('./profil.png')} style={styles.avatar} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.labelNotification}>
            {peminjaman
              ? `Anda Berhasil Meminjam Buku "${peminjaman}" dengan Tenggat Waktu ${deadline}`
              : "Tidak ada notifikasi"}
          </Text>
        </View>
        {user && (
          <>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Nama:</Text>
              <Text style={styles.value}>{user.nama}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>NPM:</Text>
              <Text style={styles.value}>{user.npm}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{user.email}</Text>
            </View>
          </>
        )}
      </View>
      <View style={styles.barnavigasi}>
        <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
          <Image source={require('./beranda.png')} style={styles.ikonNavigasi} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Prefensi')}>
          <Image source={require('./data.png')} style={styles.ikonNavigasi} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifikasi')}>
          <Image source={require('./notifikasi.png')} style={styles.ikonNavigasi} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })}>
          <Image source={require('./profil.png')} style={styles.ikonNavigasi} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F1',
    paddingTop: 30,
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
    justifyContent: 'flex-start',
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
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 20,
  },
  labelNotification: {
    fontSize: 18,
    color: '#E60635',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E60635',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFE6E9',
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    width: 80,
  },
  value: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#E60635',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  barnavigasi: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E60635',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  ikonNavigasi: {
    width: 30,
    height: 30,
  },
});

export default Notifikasi;