import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo, FontAwesome5, AntDesign, Feather, Fontisto    } from '@expo/vector-icons'; 

export default function App() {
  return (
  <View style={styles.container}>
    {/*1ª primeira família*/}
    <View style={styles.familia_icones}>
    <Text>Entypo</Text>
      <View style={styles.lista_icones}> 
        <Entypo style={styles.espaco_icones} name="add-to-list" size={24} color="black" />
        <Entypo style={styles.espaco_icones} name="adjust" size={24} color="black" />
        <Entypo style={styles.espaco_icones} name="500px" size={24} color="black" />
        <Entypo style={styles.espaco_icones} name="cake" size={24} color="black" />
        <Entypo style={styles.espaco_icones} name="baidu" size={24} color="black" />
      </View>
    </View>

    {/*2ª segunda família*/}
    <View style={styles.familia_icones}>
      <Text>FontAwesome5</Text>
      <View style={styles.lista_icones}> 
        <FontAwesome5 style={styles.espaco_icones} name="500px" size={24} color="black" />
        <FontAwesome5 style={styles.espaco_icones} name="accessible-icon" size={24} color="black" />
        <FontAwesome5 style={styles.espaco_icones} name="airbnb" size={24} color="black" />
        <FontAwesome5 style={styles.espaco_icones} name="baby" size={24} color="black" />
        <FontAwesome5 style={styles.espaco_icones} name="atom" size={24} color="black" />
      </View>
    </View>

     {/*3ª terceira família*/}
    <View style={styles.familia_icones}>
      <Text>AntDesign </Text>
      <View style={styles.lista_icones}> 
        <AntDesign style={styles.espaco_icones} name="customerservice" size={24} color="black" />
        <AntDesign style={styles.espaco_icones} name="barschart" size={24} color="black" />
        <AntDesign style={styles.espaco_icones} name="creditcard" size={24} color="black" />
        <AntDesign style={styles.espaco_icones} name="frown" size={24} color="black" />
        <AntDesign style={styles.espaco_icones} name="meho" size={24} color="black" />
      </View>
    </View>

     {/*4ª quarta família*/}
    <View style={styles.familia_icones}>
      <Text>Feather </Text>
      <View style={styles.lista_icones}> 
        <Feather style={styles.espaco_icones} name="dollar-sign" size={24} color="black" />
        <Feather style={styles.espaco_icones} name="eye" size={24} color="black" />
        <Feather style={styles.espaco_icones} name="feather" size={24} color="black" />
        <Feather style={styles.espaco_icones} name="frown" size={24} color="black" />
        <Feather style={styles.espaco_icones} name="github" size={24} color="black" />
      </View>
    </View>

     {/*5ª quinta família*/}
    <View style={styles.familia_icones}>
      <Text>Fontisto </Text>
      <View style={styles.lista_icones}> 
        <Fontisto style={styles.espaco_icones} name="snapchat" size={24} color="black" />
        <Fontisto style={styles.espaco_icones} name="bower" size={24} color="black" />
        <Fontisto style={styles.espaco_icones} name="mysql" size={24} color="black" />
        <Fontisto style={styles.espaco_icones} name="apple" size={24} color="black" />
        <Fontisto style={styles.espaco_icones} name="playstation" size={24} color="black" />
      </View>
    </View>

     {/*6ª sexta família*/}
    <View style={styles.familia_icones}>
      <Text>FontAwesome5</Text>
      <View style={styles.lista_icones}> 
        <FontAwesome5 style={styles.espaco_icones} name="500px" size={24} color="black" />
        <FontAwesome5 style={styles.espaco_icones} name="accessible-icon" size={24} color="black" />
        <FontAwesome5 style={styles.espaco_icones} name="airbnb" size={24} color="black" />
      </View>
    </View>

    </View>);      
}
  

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  familia_icones:{
  backgroundColor: '#ccc',
  borderRadius:5,
  width:'90%',
  marginBottom: 20,
  padding: 15
  },
  lista_icones:{
    flexDirection: "row",
    marginTop: 20
  },
  espaco_icones:{
    margin: 5
  }
});
