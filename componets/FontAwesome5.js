import {  Text, View } from 'react-native';
import { FontAwesome5   } from '@expo/vector-icons'; 
import styles from './style';
export default function fontAwesome5() {
    return (
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

        );}  