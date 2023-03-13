import {  Text, View } from 'react-native';
import { Feather   } from '@expo/vector-icons'; 
import styles from './style';
export default function  feather() {
    return (

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

        );}  