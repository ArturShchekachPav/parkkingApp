import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native';
import CustomBottomSheet from './CustomBottomSheet';
import GradientBorder from './GradientBorder';

const styles = StyleSheet.create({
    form: {
        gap: 16,
    },
    days: {
        flexDirection: 'row',
        gap: 2,
        padding: 4,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: '#EDF5FF'
    },
    day: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayText: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 500,
        color: '#116ADF'
    },
    selectedDay: {
        backgroundColor: '#116ADF',
    },
    selectedDayText: {
        color: '#FFFFFF'
    },
    time: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    label: {
        fontFamily: 'Inter',
        fontSize: 16,
        color: '#8A8E9E',
        fontWeight: 500,
    },
    inpitWrapper: {
        flex: 1,
        backgroundColor: '#EDF5FF',
        borderRadius: 16,
    },
    input: {
        textAlign: 'center',
        color: '#116ADF',
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        fontWeight: 500,
        flex: 1,
        paddingVertical: 16,
    },
    button: {
        backgroundColor: '#EDF5FF',
        borderRadius: 16,
    },
    buttonText: {
        padding: 16,
        color: '#116ADF',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center'
    },
    sheetContent: {
        paddingHorizontal: 20,
        paddingVertical: 24,
        marginBottom: 200,
    },
    sheetHeader: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#DFE2E8',
        borderBottomWidth: 1,
        paddingBottom: 12,
        paddingHorizontal: 20,
    },
    sheetTitle: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 600,
        color: '#132351'
    },
    sheetCloseIcon: {
        width: 24,
        height: 24
    },
    sheetBlock: {
        boxShadow: '0px 0px 8px 0px #00000033',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 41,
        borderRadius: 24,
        marginBottom: 24,
    },
    sheetChip: {
        backgroundColor: '#EDF5FF',
        color: '#116ADF',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 400,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginBottom: 4,
        alignSelf: 'flex-start'
    },
    sheetBlockSubtitle: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        color: '#8A8E9E',
        marginBottom: 24
    },
    sheetBlockButton: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#116ADF',
        marginBottom: 24,
    },
    sheetBlockButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center'
    },
    sheetAddButton: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: '#EDF5FF',
        alignSelf: 'center'
    },
    sheetAddButtonText: {
        color: '#116ADF',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 500,
    }
});

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

export default function ParkingForm() {
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [startTime, setStartTime] = useState('12:00');
    const [endTime, setEndTime] = useState('14:00');
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    return (
        <View style={styles.form}>
            <View style={styles.days}>
                {days.map(day => {
                    const isSelected = selectedDays.includes(day);

                    const Component = isSelected ? TouchableOpacity : TouchableHighlight;

                    return (
                        <Component
                            key={day}
                            style={{ ...styles.day, ...(isSelected ? styles.selectedDay : {}) }}
                            onPress={() => {
                                if (isSelected) {
                                    setSelectedDays(selectedDays.filter(d => d !== day));
                                } else {
                                    setSelectedDays([...selectedDays, day]);
                                }
                            }}
                        >
                            <Text
                                style={{ ...styles.dayText, ...(isSelected ? styles.selectedDayText : {}) }}
                            >{day}</Text>
                        </Component>
                    );
                })}
            </View>
            <View style={styles.time}>
                <Text style={styles.label}>С</Text>
                <View style={styles.inpitWrapper}>
                    <GradientBorder
                        gradientProps={{
                        colors: ['#EDF5FF', 'rgba(17, 106, 223, 0.2)'],
                        start: { x: 0, y: 0 },
                        end: { x: 0, y: 1 },
                        }}
                        borderWidth={1}
                        borderRadius={16}
                    >
                        <TextInput value={startTime} onChangeText={setStartTime} style={styles.input} />
                    </GradientBorder>
                </View>
                <Text style={styles.label}>До</Text>
                <View style={styles.inpitWrapper}>
                    <GradientBorder
                        gradientProps={{
                        colors: ['#EDF5FF', 'rgba(17, 106, 223, 0.2)'],
                        start: { x: 0, y: 0 },
                        end: { x: 0, y: 1 },
                        }}
                        borderWidth={1}
                        borderRadius={16}
                    >
                        <TextInput value={endTime} onChangeText={setEndTime} style={styles.input} />
                    </GradientBorder>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setIsBottomSheetOpen(true)}>
                <GradientBorder
                    gradientProps={{
                    colors: ['#EDF5FF', 'rgba(17, 106, 223, 0.2)'],
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 1 },
                    }}
                    borderWidth={1}
                    borderRadius={16}
                >
                    <Text style={styles.buttonText}>Нажми на меня!</Text>
                </GradientBorder>
            </TouchableOpacity>
            <CustomBottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)}>
                <View style={styles.sheetHeader}>
                    <Text style={styles.sheetTitle}>Всплывающее окошко</Text>
                    <TouchableOpacity onPress={() => setIsBottomSheetOpen(false)}>
                        <Image
                            style={styles.sheetCloseIcon}
                            source={require('../assets/images/close-icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.sheetContent}>
                    <View style={styles.sheetBlock}>
                        <Text style={styles.sheetChip}>тест</Text>
                        <Text style={[styles.sheetTitle, { marginBottom: 4 }]}>Тест</Text>
                        <Text style={styles.sheetBlockSubtitle}>Тестовые данные</Text>
                        <TouchableOpacity style={styles.sheetBlockButton}>
                            <Text style={styles.sheetBlockButtonText}>Кнопка</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.sheetAddButton}>
                        <Text style={styles.sheetAddButtonText}>Тестовая кнопка</Text>
                    </TouchableOpacity>
                </View>
            </CustomBottomSheet>
        </View>
    );
}