import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

import { iosBlue } from "@/utils/constants";
import SearchBar, { SearchBarScreen } from "./SearchBar";

export interface AddExerciseModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddExerciseModal(props: AddExerciseModalProps): React.ReactNode {
    const [searchValue, setSearchValue] = useState("");

    return (
        <Modal
            animationType="slide"
            visible={props.visible}
            presentationStyle="formSheet"
            onRequestClose={() => props.setVisible(false)}
        >
            <SearchBarScreen>
                <View style={styles.header}>
                    <Text style={styles.text} onPress={() => props.setVisible(false)}>
                        Cancel
                    </Text>
                    <Text style={{ color: "black", fontSize: 20 }}>Add exercise</Text>
                    <Text style={[{ fontWeight: 500 }, styles.text]}> Add </Text>
                </View>
                <View style={styles.main}>
                    <SearchBar
                        placeholder="Search exercise"
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        onCancel={() => setSearchValue("")}
                    />
                    <Text>This is a test for now</Text>
                </View>
            </SearchBarScreen>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
        paddingTop: 5,
        backgroundColor: "#F2F1F6",
        height: "100%",
        flexDirection: "column",
    },
});

export default AddExerciseModal;
