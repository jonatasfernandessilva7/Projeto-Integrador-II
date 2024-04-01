import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LogoMarca from '../src/components/Layouts/LogoMarca';

export default function TelaLoading({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#000"/>
                <View style={{alignItems: 'center'}}>
                    <LogoMarca style={{elevation: 30}}/>
                    <TouchableOpacity style={{width: 100, height: 50, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 40, elevation: 30}} onPress={ () => navigation.navigate('Home')}>
                        <Text style={{fontSize: 22, fontWeight: '500'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#005A7D',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      flex: 1,
      flexDirection: 'row'
    }
  });