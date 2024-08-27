import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const DetailBuku = ({ route, navigation }) => {
  const { judul, gambar, deskripsi } = route.params;

  const handleAjukanPinjaman = () => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7); // Set the deadline to 1 week from now
    const deadlineStr = deadline.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
    navigation.navigate('Notifikasi', { peminjaman: judul, deadline: deadlineStr });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={gambar} style={styles.gambarBuku} />
        <View style={styles.infoContainer}>
          <Text style={styles.judul}>{judul}</Text>
          <Text style={styles.deskripsi}>{deskripsi}</Text>
          <TextInput style={styles.input} placeholder="Tambahkan catatan (opsional)" />
          <TouchableOpacity style={styles.button} onPress={handleAjukanPinjaman}>
            <Text style={styles.buttonText}>Ajukan Pinjaman</Text>
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
  },
  content: {
    flex: 1,
  },
  gambarBuku: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  judul: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deskripsi: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E60635',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
  body: {
    flex: 1,
    padding: 20,
  },
});

export default DetailBuku;