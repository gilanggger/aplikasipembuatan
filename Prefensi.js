import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';

class Prefensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: '1', judul: 'Pemrograman Web', gambar: require('./pemweb.jpg'), deskripsi: 'Buku ini berisi bagaimana pembuatan sebuah web dengan PHP' },
        { id: '2', judul: 'Sistem Operasi', gambar: require('./sisop.jpg'), deskripsi: 'Buku ini berisi untuk belajar sistem operasi dengan lengkap' },
        { id: '3', judul: 'Aplikasi Mobile', gambar: require('./Mobile.jpg'), deskripsi: 'Buku ini berisi cara pembuatan aplikasi pada mobile mulai dari dasar' },
        { id: '4', judul: 'Algoritma Pemrograman', gambar: require('./Alpro.jpeg'), deskripsi: 'Buku ini berisi untuk pengenalan sebelum melangkah lebih jauh pada pemrograman' },
        { id: '5', judul: 'Bahasa C++', gambar: require('./C++.jpeg'), deskripsi: 'Buku ini berisi sintaks lengkap mengenai bahasa pemrograman C++' },
      ],
      searchText: '',
    };
  }

  renderListItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Image source={item.gambar} style={styles.listItemImage} />
        <View style={styles.pilihanInfo}>
          <Text style={styles.pilihanTitle}>{item.judul}</Text>
          <Text style={styles.pilihanDescription}>{item.deskripsi}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const filteredData = this.state.data.filter(item =>
      item.judul.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF7F1" />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari preferensi..."
            onChangeText={(text) => this.setState({ searchText: text })}
            value={this.state.searchText}
          />
          {/* Tombol pencarian atau filter bisa ditambahkan di sini */}
        </View>
        <FlatList
          data={filteredData}
          renderItem={this.renderListItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
            <Image source={require('./beranda.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Prefensi')}>
            <Image source={require('./data.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notifikasi')}>
            <Image source={require('./notifikasi.png')} style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./profil.png')} style={styles.navIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F1',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  listItemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  pilihanInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  pilihanTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pilihanDescription: {
    fontSize: 14,
    color: '#555',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#E60635',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default Prefensi;
