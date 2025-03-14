import { iosBlue } from "@/utils/constants";
import { Modal, StyleSheet, Text, View } from "react-native";

export interface AddExerciseModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const componentStyle = StyleSheet.create({
    header: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#BCBBBF",
    },
    text: {
        fontSize: 20,
        color: iosBlue,
    },
    main: {
        backgroundColor: "#F2F1F6",
        height: "100%",
    },
});

function AddExerciseModal(props: AddExerciseModalProps): React.ReactNode {
    return (
        <Modal
            animationType="slide"
            visible={props.visible}
            presentationStyle="formSheet"
            onRequestClose={() => props.setVisible(false)}
        >
            <View style={componentStyle.header}>
                <Text style={componentStyle.text} onPress={() => props.setVisible(false)}>
                    Cancel
                </Text>
                <Text style={[{ fontWeight: 500 }, componentStyle.text]}>Add</Text>
            </View>
            <View style={componentStyle.main}>
                <Text>This is a test for now</Text>
            </View>
        </Modal>
    );
}

export default AddExerciseModal;
