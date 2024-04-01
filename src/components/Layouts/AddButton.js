import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function  AddButton({nameIcon, sizeIcon, colorIcon, TextIcon, onpress, margin}){ //Esses parametros são as props. Elas permitem você editar as informações e personalizar o elemento em outras páginas.
    return(
        <TouchableOpacity style={styles.Button} onPress={onpress}>
            <View> 
                <Icon name={nameIcon} size={sizeIcon} color={colorIcon} marginTop={margin}/>
            </View>
            <Text style={styles.TextIcon}>{TextIcon}</Text>
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
    Button: {
        color: '#fff',
        width: 120,
        height: 120,
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
      TextIcon: {
        fontSize: 16,
        fontWeight: '500'
      },
})