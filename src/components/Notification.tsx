import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(230, 146, 0, 0.8)',
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  indicator: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
  },
  text: {
    color: '#ffffff',
    fontWeight: 500,
    fontSize: 12,
    flex: 1
  }
});

export default function Notification() {

  return (
    <View style={styles.container}>
        <View style={styles.indicator}>
          <Image
            height={14}
            width={12}
            style={{margin: 'auto'}}
            source={require('../assets/images/warning.png')}
          />
        </View>
        <Text style={styles.text}>Участились случаи пожаров в Приморском крае</Text>
        <TouchableOpacity style={{alignSelf: 'flex-start'}}>
          <Image
            height={16}
            width={16}
            source={require('../assets/images/close-button-icon.png')}
            style={{ width: 16, height: 16 }}
          />
        </TouchableOpacity>
    </View>
  );
}