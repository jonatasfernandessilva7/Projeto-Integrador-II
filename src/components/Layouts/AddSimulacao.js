import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function  AddSimulacao({nameIcon, sizeIcon, colorIcon}){ //Esses parametros são as props. Elas permitem você editar as informações e personalizar o elemento em outras páginas.
    return(
        <TouchableOpacity style={styles.Button}>
            <View style={styles.BackgroundIcon}> 
                <Icon name={nameIcon} size={sizeIcon} color={colorIcon}/>
            </View>
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
    Button: {
        color: '#fff',
        width: 110,
        height: 100,
        borderRadius: 20,
        elevation: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 40
      }
})