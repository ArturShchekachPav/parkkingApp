import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
  },
  infoButton: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
  }
});

export default function Header() {

  return (
    <View style={styles.container}>
        <View style={styles.profileButton}>
            <Image />
            <Text>Иван И.</Text>
        </View>
        <View style={styles.infoButton}>
            <Image />
        </View>
    </View>
  );
}