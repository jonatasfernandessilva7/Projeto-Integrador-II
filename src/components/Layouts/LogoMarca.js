import { View, Text, Image} from 'react-native'
import styles from './Style'

export default function  Title(){
    return(
        <View style={styles.Figure}>
            <Image style={styles.Logo} source={require('../../../Image/Logo-4.png')}/>
            <Text style={styles.LogoTittle}>Gerenciador de Patrimônios</Text>
        </View>
    )
}