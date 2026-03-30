import {
  View,
} from 'react-native';
import Hotification from '../components/Notification';
import Header from '../components/Header';
import { UserParkings } from '../components/UserParkings';
import News from '../components/News';
import ParkingForm from '../components/ParkingForm';
import Navigation from '../components/Navigation';

export default function HomeScreen() {

  return (
    <View>
        <Hotification />
        <Header />
        <UserParkings />
        <News />
        <ParkingForm />
        <Navigation />
    </View>
  );
}