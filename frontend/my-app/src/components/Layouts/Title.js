import { SafeAreaView, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style'

export default function  Title({usuario, valor, cifrao, image}){
    return(
        <SafeAreaView>
            <View style={styles.Figure}>
                <Image style={styles.Logo} source={image}/>
                <Text style={styles.LogoTittle}>Gerenciador de Patrimônios</Text>
            </View>
            <View style={styles.Section}>
                <View style={styles.User}>
                    <Icon name='user-circle-o' size={40} color={'#fff'} style={styles.Icon}/>
                    <Text style={styles.titleText}>{usuario}</Text>
                </View>
                <Text style={styles.titleNumber}>{cifrao}{valor}</Text>
            </View>
        </SafeAreaView>   
    )
}