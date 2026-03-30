import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';

export default function Notification() {

  return (
    <View>
        <View>
            <Text>Всплывающее окошко</Text>
            <TouchableOpacity>
                <Image />
            </TouchableOpacity>
        </View>
        <View>
            <Text>тест</Text>
            <Text>Тест</Text>
            <Text>Тестовые данные</Text>
            <Button title='Кнопка' />
        </View>
        <Button title='Тестовая кнопка' />
    </View>
  );
}