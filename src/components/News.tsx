import {
    View,
    Text,
    Image,
    Button
} from 'react-native';

export default function News() {

  return (
    <View>
        <View>
            <Button title='Новости' />
            <Text>13 минут назад</Text>
            <Text>Дожди в Приморском крае усилились. Жители Приморья вынуждены проверять подвалы </Text>
        </View>
        <Image />
    </View>
  );
}