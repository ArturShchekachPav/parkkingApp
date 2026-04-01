import {
  View,
  StyleSheet
} from 'react-native';
import Hotification from '../components/Notification';
import Header from '../components/Header';
import { UserParkings } from '../components/UserParkings';
import News from '../components/News';
import ParkingForm from '../components/ParkingForm';

const styles = StyleSheet.create({
  container: {
    gap: 16
  },
});

export default function HomeScreen() {

  return (
    <View style={styles.container}>
        <Hotification />
        <Header />
        <UserParkings />
        <News />
        <ParkingForm />
    </View>
  );
}