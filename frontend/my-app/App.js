import React from 'react'

import { SafeAreaView, ScrollView, View, StatusBar, StyleSheet, Text} from 'react-native';

import Title from './src/components/Layouts/Title.js'
import Button from './src/components/Layouts/Button.js'
import AddPatrimonio from './src/components/Layouts/AddPatrimonio.js';
import AddSimulacao from './src/components/Layouts/AddSimulacao.js';

export default function App() {
  const sigUser = () => {
    alert('Você entrou no Perfil')
  }
  const sigHome = () => {
    alert('Você entrou no Patrimonio')
  }
  const sigSimu = () => {
    alert('Você entrou na Simulação')
  }
  const sigHelp = () => {
    alert('Você entrou no Ajuda')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#000"/>
        
        <View style={styles.Title}>
          <Title usuario={'Robertinho'} image={require('./Image/Logo-4.png')} cifrao={'R$ '} valor={'0,00'} />
        </View>

        <View style={styles.Section}>

          <View style={styles.Div}>
              <View style={styles.Options}>
                <Button nameIcon={'user'} sizeIcon={40} colorIcon={'#fff'} onpress={sigUser} TextIcon={'Perfil'}/>
              </View>
            
              <View style={styles.Options}>
                  <Button nameIcon={'home'} sizeIcon={40} colorIcon={'#fff'} onpress={sigHome} TextIcon={'Patrimônios'}/>
              </View>
          </View>

          <View style={styles.Div}>
              <View style={styles.Options}>
                <Button nameIcon={'bar-chart'} sizeIcon={40} colorIcon={'#fff'} onpress={sigSimu} TextIcon={'Simulações'}/>
              </View>

              <View style={styles.Options}>
                <Button nameIcon={'question'} sizeIcon={40} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Ajuda'}/> 
              </View>
          </View>

        </View>

        <Text style={styles.TitleAddPatrimonios}>Criar Simulação</Text> 
        <AddSimulacao nameIcon={'plus'} sizeIcon={45}  colorIcon={'#000'}/>

        
        <Text style={styles.TitleAddPatrimonios}>Adicionar Bens</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <AddPatrimonio nameIcon={'home'} sizeIcon={70} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Imóvel'}/>
            <AddPatrimonio nameIcon={'home'} sizeIcon={70} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Imóvel'}/>
            <AddPatrimonio nameIcon={'home'} sizeIcon={70} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Imóvel'}/>
            <AddPatrimonio nameIcon={'home'} sizeIcon={70} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Imóvel'}/>
            <AddPatrimonio nameIcon={'home'} sizeIcon={70} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Imóvel'}/>
            <AddPatrimonio nameIcon={'home'} sizeIcon={70} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Imóvel'}/>
            <AddPatrimonio nameIcon={'home'} sizeIcon={70} colorIcon={'#fff'} onpress={sigHelp} TextIcon={'Imóvel'}/>
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
    height: 200,
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
  TitleAddPatrimonios: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600'
  }
});

//https://oblador.github.io/react-native-vector-icons/