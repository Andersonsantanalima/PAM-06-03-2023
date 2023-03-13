import {  Text, View } from 'react-native';
import { AntDesign  } from '@expo/vector-icons';
import styles from './style'; 
export default function antDesign () {
    return (

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
        );}  