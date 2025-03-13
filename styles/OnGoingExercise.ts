import { StyleSheet } from "react-native";

export const onGoingExerciseStyle = StyleSheet.create({
    container: {
        width: "70%",
        marginTop: 30,
    },
    exerciseName: {
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 10,
    },
    setsGrid: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    setsColumn: {
        flexDirection: "column",
        gap: 10,
    },
});
