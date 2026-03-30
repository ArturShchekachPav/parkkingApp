import {
    View,
    Text,
    Image
} from 'react-native';

export function UserParkings() {
    return (
        <View>
            <View>
                <Text>Мои парковки</Text>
                <Image />
            </View>
            <View>
                <View>
                    <Image />
                    <Text>Х 125 ВУ 125</Text>
                </View>
                <View>
                    <Text>13 минут</Text>
                    <Text>до 20:00</Text>
                </View>
            </View>
            <View>
                <View>
                    <Image />
                    <Text>Припарковаться</Text>
                </View>
                <View>
                    <Image />
                    <Text>Сканировать талон</Text>
                </View>
            </View>
        </View>
    );
}