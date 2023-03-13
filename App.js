import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import entypo from './componets/Entypo';
import antDesign from './componets/AntDesing';
import fontAwesome5 from './componets/FontAwesome5';
import fontisto from './componets/Fontisto';
import feather from './componets/Feather';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='entypo' component={entypo}/>
        <Drawer.Screen name='AntDesign' component={antDesign}/>
        <Drawer.Screen name='FontAwesome5' component={fontAwesome5}/>
        <Drawer.Screen name='Fontisto' component={fontisto}/>
        <Drawer.Screen name='Feather' component={feather}/>
      </Drawer.Navigator>
  </NavigationContainer>

    );   
}

  

