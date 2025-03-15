import { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "expo-router";

import KoolButton from "@/components/KoolButton";
import OnGoingExercise, { ExerciseTotals } from "@/components/OnGoingExercise";
import AddExerciseModal from "@/components/AddExerciseModal";

interface TextWithValueProps {
    text: string;
    value: number;
    unit?: string;
}

function TextWithValue({ text, value, unit }: TextWithValueProps): React.ReactNode {
    return (
        <View>
            <Text style={{ fontSize: 20, color: "grey" }}>{text}</Text>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {unit ? `${value} ${unit}` : value}
            </Text>
        </View>
    );
}

function WorkoutSession() {
    const navigation = useNavigation();

    const [addExModalVisible, setAddExModalVisible] = useState(false);
    const [activeExercises, setActiveExercises] = useState<string[]>([]);
    const [allTotals, setAllTotals] = useState<ExerciseTotals[]>([]);

    const cancelWorkoutAlert = () =>
        Alert.alert(
            "Cancel Workout",
            "Are you sure you want to cancel your workout? This will delete all entered sets.",
            [
                {
                    text: "No",
                    style: "cancel",
                },
                { text: "Yes", onPress: navigation.goBack },
            ],
        );

    return (
        <>
            <AddExerciseModal
                visible={addExModalVisible}
                setVisible={setAddExModalVisible}
                setChoosenExercises={(exs) =>
                    setActiveExercises((prevActiveExercises) => [...prevActiveExercises, ...exs])
                }
            />
            <ScrollView
                contentContainerStyle={{ alignItems: "center", paddingTop: 20, paddingBottom: 100 }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "90%",
                        margin: "auto",
                    }}
                >
                    <TextWithValue
                        text="Sets"
                        value={allTotals.reduce((acc, total) => acc + total.sets, 0)}
                    />
                    <TextWithValue
                        text="Volume"
                        value={allTotals.reduce((acc, total) => acc + total.volume, 0)}
                        unit="kg"
                    />
                </View>

                {activeExercises.map((exName, index) => (
                    <OnGoingExercise
                        exerciseName={exName}
                        key={index}
                        setTotals={(totals) => {
                            setAllTotals((prevTotals) => {
                                const res = [...prevTotals];
                                res[index] = totals;
                                return res;
                            });
                        }}
                    />
                ))}

                <View style={{ gap: 10, marginTop: 40 }}>
                    <KoolButton
                        title="Add exercise"
                        theme="blue"
                        onPress={() => {
                            setAddExModalVisible(true);
                        }}
                    />
                    <KoolButton title="Cancel" theme="red" onPress={cancelWorkoutAlert} />
                </View>
            </ScrollView>
        </>
    );
}

export default WorkoutSession;
