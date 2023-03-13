import { Text, View } from 'react-native';
import {Entypo } from '@expo/vector-icons';
import styles from './style';
export default function entypo() {
    return (
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

    );}