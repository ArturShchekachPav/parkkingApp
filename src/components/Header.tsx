import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import GradientBorder from './GradientBorder';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 100,
  },
  profileButtonWrapper: {
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileButtonText: {
    fontFamily: 'Inter Regular',
    fontWeight: 500,
    fontSize: 16,
    color: '#132351'
  },
  profileIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: '50%',
  },
  profileIcon: {
    width: 16,
    height: 16,
    margin: 'auto'
  },
  infoButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
  },
  infoButtonWrapper: {
    width: 40,
    height: 40,
  },
  infoIcon: {
    width: 16,
    height: 16,
    margin: 'auto'
  }
});

export default function Header() {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.profileButton}>
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
                  source={require('../assets/images/profile-icon.png')}
                />
              </View>
              <Text style={styles.profileButtonText}>Иван И.</Text>
            </View>
          </GradientBorder>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
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
                source={require('../assets/images/info-icon.png')}
              />
            </View>
          </GradientBorder>
        </TouchableOpacity>
    </View>
  );
}