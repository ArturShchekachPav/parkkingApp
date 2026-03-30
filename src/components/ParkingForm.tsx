import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';

export default function ParkingForm() {
    return (
        <View>
            <View>
                <View>
                    <TouchableOpacity>
                        <Text>ПН</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>ВТ</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>СР</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>ЧТ</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>ПТ</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>СБ</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>ВС</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text>С</Text>
                <TextInput value='12:00' />
                <Text>До</Text>
                <TextInput value='14:00' />
            </View>
            <Button title='Нажми на меня!' />
        </View>
    );
}