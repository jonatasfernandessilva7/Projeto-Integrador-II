import React from 'react'

import { SafeAreaView, ScrollView, View, StatusBar, StyleSheet, Text} from 'react-native';

import Title from '../src/components/Layouts/Title.js'
import Button from '../src/components/Layouts/RouterButton.js'
import AddButton from '../src/components/Layouts/AddButton.js'
import Navbar from '../src/components/Layouts/Navbar.js'


export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#000"/>
        
        <View style={styles.Title}>
          <Title usuario={'Robertinho'} cifrao={'R$ '} valor={'14000,00'} />
        </View>

        <View style={styles.Section}>

          <View style={styles.Div}>
              <View style={styles.Options}>
                <Button nameIcon={'user'} sizeIcon={40} colorIcon={'#fff'} TextIcon={'Perfil'} onpress={ () => navigation.navigate('Perfil')}/>
              </View>
            
              <View style={styles.Options}>
                  <Button nameIcon={'home'} sizeIcon={40} colorIcon={'#fff'} TextIcon={'Patrimônios'} onpress={ () => navigation.navigate('Patrimonio')}/>
              </View>
          </View>

          <View style={styles.Div}>
              <View style={styles.Options}>
                <Button nameIcon={'bar-chart'} sizeIcon={40} colorIcon={'#fff'} TextIcon={'Simulações'} onpress={ () => navigation.navigate('Simulacao')}/>
              </View>

              <View style={styles.Options}>
                <Button nameIcon={'question'} sizeIcon={40} colorIcon={'#fff'} TextIcon={'Ajuda'} onpress={ () => navigation.navigate('Ajuda')}/> 
              </View>
          </View>

        </View>

        <Text style={styles.TitleAddButtons}>Criar Simulação</Text> 
        <AddButton nameIcon={'plus'} sizeIcon={45}  colorIcon={'#003E52'} margin={25} onpress={ () => navigation.navigate('Simulacao')}/>

        
        <Text style={styles.TitleAddButtons}>Adicionar Bens</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <AddButton nameIcon={'home'} sizeIcon={60} colorIcon={'#fff'} TextIcon={'Imóvel'} onpress={ () => navigation.navigate('Addpatrimonio')}/>
            <AddButton nameIcon={'home'} sizeIcon={60} colorIcon={'#000'} TextIcon={'Imóvel'}/>
            <AddButton nameIcon={'home'} sizeIcon={60} colorIcon={'#fff'} TextIcon={'Imóvel'}/>
            <AddButton nameIcon={'home'} sizeIcon={60} colorIcon={'#fff'} TextIcon={'Imóvel'}/>
            <AddButton nameIcon={'home'} sizeIcon={60} colorIcon={'#fff'} TextIcon={'Imóvel'}/>
            <AddButton nameIcon={'home'} sizeIcon={60} colorIcon={'#fff'} TextIcon={'Imóvel'}/>
            <AddButton nameIcon={'home'} sizeIcon={60} colorIcon={'#fff'} TextIcon={'Imóvel'}/>
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
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
    height: 130,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 30,
  },
  Section: {
    flexDirection: 'colum',
    padding: 10,
    marginTop: 30
  },
  Div: {
    flexDirection: 'row',
    marginBottom: 30
  },
  Options: {
    alignItems: 'center',
    flex: 1
  },
  TextOpt:{
    fontSize: 17,
    color: '#005A7D',
    fontWeight: '500',
    lineHeight: 25,
    textAlign: 'justify'
  },
  TitleAddButtons: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600'
  }
});

//https://oblador.github.io/react-native-vector-icons/