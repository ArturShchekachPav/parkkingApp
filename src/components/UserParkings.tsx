import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientBorder from './GradientBorder';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 24,
  },
  wrapper: {
    padding: 20,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 18
  },
  linkIcon: {
    width: 16,
    height: 16
  },
  info: {
    borderRadius: 16,
    backgroundColor: '#EAEDF3',
    position: 'relative'
  },
  infoWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  carInfo: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    zIndex: 1,
    position: 'relative'
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 12
  },
  primaryText: {
    color: '#132351',
    fontWeight: 500
  },
  secondaryText: {
    color: '#8A8E9E',
    fontWeight: 400
  },
  invertedText: {
    color: '#FFFFFF',
    fontWeight: 500
  },
  carIcon: {
    width: 16,
    height: 16
  },
  parkingTimeInfo: {
    alignItems: 'flex-end',
    zIndex: 1,
    position: 'relative'
  },
  progress: {
    borderRadius: 16,
    width: '35%',
    height: '100%',
    position: 'absolute'
  },
  buttons: {
    flexDirection: 'row',
    gap: 8
  },
  button: {
    flex: 1,
    borderRadius: 20,
  },
  primaryButton: {
    backgroundColor: '#132351'
  },
  secondaryButton: {
    backgroundColor: '#EDF5FF'
  },
  buttonWrapper: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonIcon: {
    height: 16,
    width: 16
  }
});

export function UserParkings() {
    return (
        <View style={styles.container}>
          <GradientBorder
            gradientProps={{
              colors: ['rgba(237, 245, 255, 0.2)', 'rgba(17, 106, 223, 0.2)'],
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
            }}
            borderWidth={1}
            borderRadius={24}
          >
            <View style={styles.wrapper}>
              <View style={styles.header}>
                  <Text style={styles.title}>Мои парковки</Text>
                  <TouchableHighlight>
                      <Image
                          style={styles.linkIcon}
                          source={require('../assets/images/arrow-left.png')}
                      />
                  </TouchableHighlight>
              </View>
              <View style={styles.info}>
                  <View style={styles.infoWrapper}>
                    <View style={styles.carInfo}>
                        <Image
                            style={styles.carIcon}
                            source={require('../assets/images/car-icon.png')}
                        />
                        <Text style={{ ...styles.text, ...styles.primaryText }}>Х 125 ВУ 125</Text>
                    </View>
                    <View style={styles.parkingTimeInfo}>
                        <Text style={{ ...styles.text, ...styles.primaryText }}>13 минут</Text>
                        <Text style={{ ...styles.text, ...styles.secondaryText }}>до 20:00</Text>
                    </View>
                  </View>
                  <LinearGradient colors={['#EDF5FF','#C3E0FF']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.progress}>
                    <GradientBorder
                      gradientProps={{
                        colors: ['#EDF5FF', 'rgba(17, 106, 223, 0.4)'],
                        start: { x: 0, y: 0 },
                        end: { x: 1, y: 0 }
                      }}
                      borderWidth={1}
                      borderRadius={16}
                      style={{ flex: 1, width: '100%' }}
                    />
                  </LinearGradient>
              </View>
              <View style={styles.buttons}>
                  <TouchableOpacity style={{ ...styles.button, ...styles.primaryButton }}>
                    <GradientBorder
                      gradientProps={{
                        colors: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
                        start: { x: 0, y: 0 },
                        end: { x: 0, y: 1 },
                      }}
                      borderWidth={1}
                      borderRadius={20}
                    >
                      <View style={styles.buttonWrapper}>
                        <Image
                          style={styles.buttonIcon}
                          source={require('../assets/images/parking-icon.png')}
                        />
                        <Text style={{ ...styles.text, ...styles.invertedText }}>Припарковаться</Text>
                      </View>
                    </GradientBorder>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ ...styles.button, ...styles.secondaryButton }}>
                    <GradientBorder
                      gradientProps={{
                        colors: ['rgba(237, 245, 255, 1)', 'rgba(17, 106, 223, 0.2)'],
                        start: { x: 0, y: 0 },
                        end: { x: 0, y: 1 },
                      }}
                      borderWidth={1}
                      borderRadius={20}
                    >
                      <View style={styles.buttonWrapper}>
                        <Image
                          style={styles.buttonIcon}
                          source={require('../assets/images/scan-icon.png')}
                        />
                        <Text style={{ ...styles.text, ...styles.primaryText }}>Сканировать талон</Text>
                      </View>
                    </GradientBorder>
                  </TouchableOpacity>
              </View>
            </View>
          </GradientBorder>
        </View>
    );
}