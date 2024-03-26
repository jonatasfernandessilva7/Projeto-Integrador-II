import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function  AddPatrimonio({nameIcon, sizeIcon, colorIcon, TextIcon}){ //Esses parametros são as props. Elas permitem você editar as informações e personalizar o elemento em outras páginas.
    return(
        <TouchableOpacity style={styles.Button}>
            <View style={styles.BackgroundIcon}> 
                <Icon name={nameIcon} size={sizeIcon} color={colorIcon}/>
            </View>
            <Text style={styles.TextIcon}>{TextIcon}</Text>
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
    Button: {
        color: '#fff',
        width: 140,
        height: 140,
        borderRadius: 20,
        elevation: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 40
      },
      BackgroundIcon: {
        backgroundColor: '#003E52',
        width: 110,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
      },
      TextIcon: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600'
      },
})