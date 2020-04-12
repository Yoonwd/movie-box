import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleError = (error) => console.log(error);

  const handleLoaded = () => setLoaded(true);

  const loadAssets = async() => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    // await Asset.loadAsync([
    //   require("images/icon.png")
    // ])
  }
  
  if (loaded) {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadAssets} 
        onFinish={handleLoaded} 
        onError={handleError}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
