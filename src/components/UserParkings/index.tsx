import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientBorder from '../GradientBorder';
import { styles } from './styles';

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
                          source={require('../../assets/images/arrow-left.png')}
                      />
                  </TouchableHighlight>
              </View>
              <View style={styles.info}>
                  <View style={styles.infoWrapper}>
                    <View style={styles.carInfo}>
                        <Image
                            style={styles.carIcon}
                            source={require('../../assets/images/car-icon.png')}
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
                          source={require('../../assets/images/parking-icon.png')}
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
                          source={require('../../assets/images/scan-icon.png')}
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