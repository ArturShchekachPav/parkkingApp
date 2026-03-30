import {
    View,
    Text,
    Image
} from 'react-native';

export default function Navigation() {

  return (
    <View>
        <View>
            <Image />
            <Text>Главная</Text>
        </View>
        <View>
            <Image />
            <Text>История парковок</Text>
        </View>
    </View>
  );
}