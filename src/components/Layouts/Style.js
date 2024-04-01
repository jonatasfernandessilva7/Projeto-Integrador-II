import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    Section: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 80
      },
    titleText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10
    },
    titleNumber: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderRadius: 20,
      backgroundColor: '#003E52',
      elevation: 20,
      marginRight: 15
    },
    Button: {
      color: '#fff',
      width: 120,
      height: 120,
      borderRadius: 20,
      elevation: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      margin: 10
    },
    BackgroundIcon: {
      backgroundColor: '#003E52',
      width: 90,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },
    TextIcon: {
      marginTop: 5,
      fontSize: 15,
      fontWeight: '500'
    },
    Figure: {
      alignItems: 'center',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingRight: 24,
      elevation: 30
    },
    Logo:{
      width: 90,
      height: 90,
      borderRadius: 100
    },
    LogoTittle: {
      fontSize: 23,
      color: '#fff',
      fontWeight: '300'
    },
    User: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    Icon: {
      marginLeft: 15
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 28,
      color: '#005A7D',
      fontWeight: '800',
      marginBottom: 10
    },
    descrition: {
      fontSize: 17,
      color: '#002A33',
      fontWeight: '500',
      lineHeight: 25,
      textAlign: 'justify'
    }

})

export default styles