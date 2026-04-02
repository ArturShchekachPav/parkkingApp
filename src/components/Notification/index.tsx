import { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import GradientBorder from '../GradientBorder';
import { BlurView } from '@react-native-community/blur';
import { styles } from './styles';

export default function Notification() {
  const [isOpen, setIsOpen] = useState(true);

  if(!isOpen) {
    return null;
  }

  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blur}
        blurAmount={8}
        blurType='light'
        overlayColor="rgba(230, 146, 0, 0.8)"
      />
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
                  source={require('../../assets/images/warning.png')}
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
              source={require('../../assets/images/close-icon.png')}
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>
        </View>
      </GradientBorder>
    </View>
  );
}