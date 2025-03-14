import { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "expo-router";

import KoolButton from "@/components/KoolButton";
import OnGoingExercise from "@/components/OnGoingExercise";
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
            <AddExerciseModal visible={addExModalVisible} setVisible={setAddExModalVisible} />
            <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "90%",
                        margin: "auto",
                    }}
                >
                    <TextWithValue text="Sets" value={3} />
                    <TextWithValue text="Volume" value={1280} unit="kg" />
                </View>

                <OnGoingExercise exerciseName="Bench Press" />

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
