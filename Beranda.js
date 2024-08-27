import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoBanners: [
        require('./1.png'),
        require('./2.png'),
        require('./3.jpg'),
      ],
      rekomendasi: [
        { id: '1', judul: 'Aplikasi Mobile', gambar: require('./Mobile.jpg'), deskripsi: 'Buku ini berisi cara pembuatan aplikasi pada mobile mulai dari dasar' },
        { id: '2', judul: 'Algoritma Pemrograman', gambar: require('./Alpro.jpeg'), deskripsi: 'Buku ini berisi untuk pengenalan sebelum melangkah lebih jauh pada pemrograman' },
        { id: '3', judul: 'My SQL', gambar: require('./MySql.jpg'), deskripsi: 'Buku ini berisi query lengkap pada pembuatan database My Sql' },
        { id: '4', judul: 'Bahasa Java', gambar: require('./BahasaJava.jpg'), deskripsi: 'Buku ini berisi sintaks - sintaks dari bahasa pemrograman java' },
        { id: '5', judul: 'Bahasa C++', gambar: require('./C++.jpeg'), deskripsi: 'Buku ini berisi sintaks lengkap mengenai bahasa pemrograman C++' },
        { id: '6', judul: 'Sistem Operasi', gambar: require('./sisop.jpg'), deskripsi: 'Buku ini berisi untuk belajar sistem operasi dengan lengkap' },
        { id: '7', judul: 'Pemrograman Web', gambar: require('./pemweb.jpg'), deskripsi: 'Buku ini berisi bagaimana pembuatan sebuah web dengan PHP' },
        { id: '8', judul: 'Kecerdasan Buatan', gambar: require('./kcb.png'), deskripsi: 'Buku ini berisi penjelasan beserta cara pembuatan AI yang mudah dipahami' },
        { id: '9', judul: 'Analisis Citra', gambar: require('./Ancit.jpg'), deskripsi: 'Buku ini berisi penjelasan mengenai proses - proses dari analisis citra' },
        { id: '10', judul: 'Cyber Security', gambar: require('./cyber.jpeg'), deskripsi: 'Buku ini berisi penjelasan mengenai materi - materi dari cyber security' },
      ],
    };
  }

  handlePinjamBuku = (judul) => {
    const newNotification = {
      message: `Anda telah meminjam buku "${judul}".`,
      timestamp: new Date().toLocaleString(),
    };

    this.setState(prevState => ({
      notifications: [...prevState.notifications, newNotification]
    }), () => {
      Alert.alert(
        "Peminjaman Buku",
        `Anda telah meminjam buku "${judul}".`,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    });
  }

  renderPromoBannerItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.promoBanner}>
        <Image source={item} style={styles.gambarPromo} />
      </TouchableOpacity>
    );
  };

  renderRekomendasiItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.itemRekomendasi}
        onPress={() => navigation.navigate('DetailBuku', {
          judul: item.judul,
          gambar: item.gambar,
          deskripsi: item.deskripsi,
        })}
      >
        <Image source={item.gambar} style={styles.gambarItemRekomendasi} />
        <View style={styles.infoBuku}>
          <Text style={styles.judulBuku}>{item.judul}</Text>
          <Text style={styles.deskripsiBuku}>{item.deskripsi}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF7F1" />
        <Text style={styles.teksSelamatDatang}>Selamat Datang di Perpustakaan Fakultas Ilmu Komputer</Text>
        <FlatList
          data={this.state.promoBanners}
          renderItem={this.renderPromoBannerItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={width - 40}
          contentContainerStyle={styles.containerPromoBanner}
        />
        <Text style={styles.judulBagian}>Rekomendasi Buku</Text>
        <FlatList
          data={this.state.rekomendasi}
          renderItem={this.renderRekomendasiItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          contentContainerStyle={styles.daftarRekomendasi}
        />
        <View style={styles.barnavigasi}>
          <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
            <Image source={require('./beranda.png')} style={styles.ikonNavigasi} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Prefensi')}>
            <Image source={require('./data.png')} style={styles.ikonNavigasi} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notifikasi', { notifications: this.state.notifications })}>
            <Image source={require('./notifikasi.png')} style={styles.ikonNavigasi} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./profil.png')} style={styles.ikonNavigasi} />
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
  teksSelamatDatang: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
  },
  containerPromoBanner: {
    paddingHorizontal: 20,
    height: 200,
  },
  promoBanner: {
    width: width - 40,
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  gambarPromo: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  judulBagian: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  daftarRekomendasi: {
    paddingHorizontal: 10,
  },
  itemRekomendasi: {
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
  gambarItemRekomendasi: {
    width: 60,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
  },
  infoBuku: {
    flex: 1,
    justifyContent: 'center',
  },
  judulBuku: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deskripsiBuku: {
    fontSize: 14,
    color: '#555',
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

export default Beranda;
