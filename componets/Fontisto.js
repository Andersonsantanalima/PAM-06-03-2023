import { Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import styles from './style';
export default function  fontisto () {
    return (

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
        );}  
