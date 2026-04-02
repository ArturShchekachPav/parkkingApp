import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import GradientBorder from '../GradientBorder';
import { styles } from './styles';

export default function Header() {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <GradientBorder
            gradientProps={{
              colors: ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)'],
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
            }}
            borderWidth={1}
            borderRadius={100}
          >
            <View style={styles.profileButtonWrapper}>
              <View style={styles.profileIconContainer}>
                <Image
                  style={styles.profileIcon}
                  source={require('../../assets/images/profile-icon.png')}
                />
              </View>
              <Text style={styles.profileButtonText}>Иван И.</Text>
            </View>
          </GradientBorder>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <GradientBorder
              gradientProps={{
                colors: ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)'],
                start: { x: 0, y: 0 },
                end: { x: 0, y: 1 },
              }}
              borderWidth={1}
              borderRadius={100}
            >
              <View style={styles.infoButtonWrapper}>
                <Image
                  style={styles.infoIcon}
                  source={require('../../assets/images/info-icon.png')}
                />
              </View>
            </GradientBorder>
        </TouchableOpacity>
    </View>
  );
}