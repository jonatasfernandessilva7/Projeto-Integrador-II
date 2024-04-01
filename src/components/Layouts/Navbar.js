import { View, Text, Image} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native'

export default function Navbar({text, onpress}){
    return(
        <View style={styles.Figure}>
            <View>
                <Icon name='arrowleft' size={40} color='#fff'/>
            </View>
            <Text style={styles.LogoTittle}>{text}</Text>
            <View>
                <Icon name='arrowright' size={40} color='#005A7D' onPress={onpress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Figure: {
        alignItems: 'center',
        marginTop: 20,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        elevation: 30
    },
    LogoTittle: {
        fontSize: 23,
        color: '#fff',
        fontWeight: '300'
    }
})