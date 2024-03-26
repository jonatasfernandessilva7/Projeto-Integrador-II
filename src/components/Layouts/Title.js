import { SafeAreaView, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style'

export default function  Title({usuario, valor, cifrao, image}){
    return(
        <SafeAreaView>
            <View style={styles.Section}>
                <View style={styles.User}>
                    <Icon name='user-circle-o' size={35} color={'#fff'} style={styles.Icon}/>
                    <Text style={styles.titleText}>{usuario}</Text>
                </View>
                <Text style={styles.titleNumber}>{cifrao}{valor}</Text>
            </View>
        </SafeAreaView>   
    )
}