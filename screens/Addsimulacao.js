import React from 'react'

import { SafeAreaView, ScrollView, View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default function Addsimulacao({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#000"/>
            <SafeAreaView>

                <View style={styles.Subtitle}>
                    <Text style={styles.TitleAddPatrimonios}>Adicione seu Imóvel</Text> 
                </View>

                <View style={styles.Div}>
                    <View style={styles.Options}>
                        <TouchableOpacity style={styles.Button}>
                            <Text style={{fontSize: 18, fontWeight: '500'}}>Casa</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Options}>
                        <TouchableOpacity style={styles.Button}>
                            <Text style={{fontSize: 16, fontWeight: '500'}}>Apartamento</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.Section}>
                    <View style={styles.inputs}>
                        <TextInput
                            style={[styles.input, {borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}]}
                            placeholder="Qual o valor atual do imóvel em reais?"
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={[styles.input, {borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}]}
                            placeholder="Qual o ano de compra do imóvel?"
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={[styles.input, {borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}]}
                            placeholder="Faça uma breve descrição do imóvel"
                            keyboardType="ascii-capable"
                        />
                        <TextInput
                            style={[styles.input, {borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}]}
                            placeholder="Qual o valor atual do imóvel em reais?"
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={[styles.input, {borderWidth: 1, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0}]}
                            placeholder="Qual o valor atual do imóvel em reais?"
                            keyboardType="ascii-capable"
                        />
                    </View>
                </View>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={styles.AddButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={{fontSize: 17, fontWeight: '600', color: '#fff'}}>Adicionar</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F6F6F6',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      flex: 1,
      flexDirection: 'row'
    },
    Title: {
      backgroundColor: '#005A7D',
      height: 80,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      elevation: 30,
    },
    Subtitle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Div: {
        flexDirection: 'row',
        marginBottom: 30,
        paddingHorizontal: 10
    },
    Options: {
        alignItems: 'center',
        flex: 1
    },
    TitleAddPatrimonios: {
        marginHorizontal: 20,
        marginVertical: 60,
        fontSize: 24,
        fontWeight: '600',
    },
    Section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    AddButton: {
        width: 110, 
        height: 60,
        borderRadius: 20,
        margin: 20,
        marginBottom: 40,
        elevation: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#005A7D'
    },
    Button: {
        width: 110, 
        height: 100,
        borderRadius: 20,
        elevation: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    input: {
        fontSize: 19,
        color: '#000',
        marginVertical: 25
    },
    inputs:{
        textAlign: 'justify'
    }
})