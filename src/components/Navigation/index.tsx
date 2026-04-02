import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';

export default function Navigation() {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.navItem}>
            <Image
                style={styles.icon}
                source={require('../../assets/images/home-icon.png')}
            />
            <Text style={styles.text}>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Image
                style={styles.icon}
                source={require('../../assets/images/grey-parking-icon.png')}
            />
            <Text style={styles.text}>История парковок</Text>
        </TouchableOpacity>
    </View>
  );
}