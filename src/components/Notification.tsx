import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import GradientBorder from './GradientBorder';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(230, 146, 0, 0.8)',
    borderRadius: 16,
  },
  wrapper: {
    padding: 8,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12
  },
  indicatorWrapper: {
    width: 40,
    height: 40,
    display: 'flex',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 12,
    flex: 1
  }
});

export default function Notification() {
  const [isOpen, setIsOpen] = useState(true);

  if(!isOpen) {
    return null;
  }

  return (
    <View style={styles.container}>
      <GradientBorder
        gradientProps={{
          colors: ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)'],
          start: { x: 0, y: 0 },
          end: { x: 0, y: 1 },
        }}
        borderWidth={1}
        borderRadius={16}
      >
        <View style={styles.wrapper}>
          <View style={styles.indicator}>
            <GradientBorder
              gradientProps={{
                colors: ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)'],
                start: { x: 0, y: 0 },
                end: { x: 0, y: 1 },
              }}
              borderWidth={1}
              borderRadius={12}
            >
              <View style={styles.indicatorWrapper}>
                <Image
                  style={{margin: 'auto', height: 16, width: 16}}
                  source={require('../assets/images/warning.png')}
                  resizeMode='contain'
                />
              </View>
            </GradientBorder>
          </View>
          <Text style={styles.text}>Участились случаи пожаров в Приморском крае</Text>
          <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => setIsOpen(false)}>
            <Image
              height={16}
              width={16}
              source={require('../assets/images/close-icon.png')}
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>
        </View>
      </GradientBorder>
    </View>
  );
}