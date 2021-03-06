import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{padding: 16, backgroundColor: 'green'}}>
          <Text>Search</Text>
        </View>
        <View style={{padding: 16, backgroundColor: 'blue', flex: 1}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
