import React from "react";

import { SafeAreaView, ScrollView, View, StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Simulacao({ navigation }) {
    return(
        <SafeAreaView>
            <StatusBar/>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
                            <Text>Simulação</Text>
                        </TouchableOpacity>
                        
                    </View>
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
    }
})