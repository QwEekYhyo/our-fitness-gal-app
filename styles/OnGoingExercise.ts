import { StyleSheet } from "react-native";

export const onGoingExerciseStyle = StyleSheet.create({
    container: {
        width: "80%",
        marginTop: 30,
    },
    exerciseName: {
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 10,
        textAlign: "left",
    },
    customText: {
        fontSize: 20,
        textAlign: "center",
    },
    CustomTextInput: {
        width: "100%",
        fontSize: 20,
        textAlign: "center",
    },
    setsGrid: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    setsColumn: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
    },
});
