import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style'

export default function  RouterButton({ nameIcon, sizeIcon, colorIcon, onpress, TextIcon}){ //Esses parametros são as props. Elas permitem você editar as informações e personalizar o elemento em outras páginas.
    return(
        <TouchableOpacity style={styles.Button} onPress={onpress}>
            <View style={styles.BackgroundIcon}> 
                <Icon name={nameIcon} size={sizeIcon} color={colorIcon}/>
            </View>
            <Text style={styles.TextIcon}>{TextIcon}</Text>
        </TouchableOpacity>   
    )
}