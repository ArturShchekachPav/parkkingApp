import { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    Image,
} from 'react-native';
import CustomBottomSheet from '../CustomBottomSheet';
import GradientBorder from '../GradientBorder';
import { days } from './consts';
import { styles } from './styles';

export default function ParkingForm() {
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('23:59');
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
                            source={require('../../assets/images/close-icon.png')}
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