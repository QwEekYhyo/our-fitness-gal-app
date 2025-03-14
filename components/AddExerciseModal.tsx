import { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { iosBlue } from "@/utils/constants";
import SearchBar, { SearchBarScreen } from "./SearchBar";
import ExerciseWidget from "./ExerciseWidget";

export interface AddExerciseModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const testExercises = [
    "Squat",
    "Cardio at home",
    "Incline dumbbell press",
    "Leg press",
    "Biceps curl",
    "Triceps extension",
    "Skull crushers",
    "Pec fly",
];

function AddExerciseModal(props: AddExerciseModalProps): React.ReactNode {
    const [searchValue, setSearchValue] = useState("");
    const [selectedExercises, setSelectedExercises] = useState<number[]>([]);

    const toggleSelection = (id: number) => {
        setSelectedExercises((prevSelectedExercises) => {
            if (prevSelectedExercises.includes(id)) {
                return prevSelectedExercises.filter((itemId) => itemId !== id);
            } else {
                return [...prevSelectedExercises, id];
            }
        });
    };

    return (
        <Modal
            animationType="slide"
            visible={props.visible}
            presentationStyle="formSheet"
            onRequestClose={() => props.setVisible(false)}
        >
            <SearchBarScreen>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            props.setVisible(false);
                            setSelectedExercises([]);
                        }}
                        activeOpacity={0.4}
                    >
                        <Text style={styles.headerText}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "black", fontSize: 20 }}>Add exercise</Text>
                    <Text style={[{ fontWeight: 500 }, styles.headerText]}> Add </Text>
                </View>
                <View style={styles.main}>
                    <SearchBar
                        placeholder="Search exercise"
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        onCancel={() => setSearchValue("")}
                    />
                    <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
                        <Text style={styles.sectionText}>All exercises</Text>
                        {testExercises.map((name, index) => (
                            <ExerciseWidget
                                name={name}
                                key={index}
                                selected={selectedExercises.includes(index)}
                                setSelected={() => toggleSelection(index)}
                            />
                        ))}
                    </ScrollView>
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
    headerText: {
        fontSize: 20,
        color: iosBlue,
    },
    sectionText: {
        fontSize: 20,
        color: "grey",
        marginLeft: 16, // this has to be the same as SearchBar padding
        marginVertical: 10,
    },
    main: {
        paddingTop: 5,
        backgroundColor: "#F2F1F6",
        flexDirection: "column",
    },
});

export default AddExerciseModal;
