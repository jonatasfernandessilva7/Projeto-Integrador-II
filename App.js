import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Addpatrimonio from './screens/Addpatrimonio';
import Addsimulacao from './screens/Addsimulacao';
import TelaLoading from './screens/TelaLoading';
import Patrimonio from './screens/Patrimonio'
import Simulacao from './screens/Simulacao'
import Perfil from './screens/Perfil'
import Ajuda from './screens/Ajuda'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaLoading'>
        <Stack.Screen name='TelaLoading' component={TelaLoading} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Addpatrimonio' component={Addpatrimonio}
          options={
                    {
                      headerShown: true, 
                      title: 'Adicionar Patrimônio',
                      headerTitleAlign: 'center',
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      headerStyle: {
                        backgroundColor: '#005A7D'
                      }
                    }
                  }/>
        <Stack.Screen name='Addsimulacao' component={Addsimulacao}
          options={
                      {
                        headerShown: true, 
                        title: 'Adicionar Simulação',
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: '500',
                        },
                        headerStyle: {
                          backgroundColor: '#005A7D'
                        }
                      }
                    }/>
        <Stack.Screen name='Patrimonio' component={Patrimonio}
          options={
                      {
                        headerShown: true, 
                        title: 'Patrimônios',
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerStyle: {
                          backgroundColor: '#005A7D'
                        }
                      }
                    }/>
        <Stack.Screen name='Simulacao' component={Simulacao}
          options={
                      {
                        headerShown: true, 
                        title: 'Simulações',
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerStyle: {
                          backgroundColor: '#005A7D'
                        }
                      }
                    }/>
        <Stack.Screen name='Perfil' component={Perfil}
          options={
                      {
                        headerShown: true, 
                        title: 'Perfil',
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerStyle: {
                          backgroundColor: '#005A7D'
                        }
                      }
                    }/>
        <Stack.Screen name='Ajuda' component={Ajuda}
          options={
                      {
                        headerShown: true, 
                        title: 'Ajuda',
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerStyle: {
                          backgroundColor: '#005A7D'
                        }
                      }
                    }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

