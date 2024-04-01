import { StyleSheet } from "react-native";

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
    height: 200,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 30,
  },
  Section: {
    flexDirection: 'colum',
    padding: 10,
    marginTop: 30
  },
  Div: {
    flexDirection: 'row',
    marginBottom: 30
  },
  Options: {
    alignItems: 'center',
    flex: 1
  },
  TextOpt:{
    fontSize: 17,
    color: '#005A7D',
    fontWeight: '500',
    lineHeight: 25,
    textAlign: 'justify'
  },
  TitleAddPatrimonios: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600'
  }
})