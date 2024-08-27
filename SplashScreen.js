import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { StackActions } from '@react-navigation/native';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./1.png')} style={styles.logo} resizeMode="contain" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    marginBottom: -10,
  },
});

export default SplashScreen;
