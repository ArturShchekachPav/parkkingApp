import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { ReactNode, useCallback, useEffect, useRef } from 'react';
import {
    StyleSheet
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

const styles = StyleSheet.create({
    sheet: {
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: '#FFFFFF',
    }
});

export default function CustomBottomSheet({isOpen, onClose, children}: {isOpen: boolean, onClose: () => void, children: ReactNode}) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    useEffect(() => {
        if (isOpen) {
            bottomSheetRef.current?.present();
        } else {
            bottomSheetRef.current?.dismiss();
        }
    }, [isOpen]);

    const handleClose = useCallback(() => {
        bottomSheetRef.current?.dismiss();
        onClose?.();
    }, [onClose]);

    const renderBackdrop = useCallback(
		(props: BottomSheetBackdropProps) => (
			<BlurView
                style={StyleSheet.absoluteFill}
                blurType="dark"
                blurAmount={8}
                reducedTransparencyFallbackColor="rgba(24, 25, 28, 0.6)"
            >
                <BottomSheetBackdrop
                    {...props}
                    onPress={handleClose}
                    disappearsOnIndex={-1}
                    appearsOnIndex={2}
                    style={[props.style, { backgroundColor: 'transparent' }]}
                />
            </BlurView>
		),
		[handleClose]
	);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
        onDismiss={handleClose}
    >
        <BottomSheetView style={styles.sheet}>
            {children}
        </BottomSheetView>
    </BottomSheetModal>
  );
}