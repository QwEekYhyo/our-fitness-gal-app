import { Text, TextProps, View } from "react-native";

import { onGoingExerciseStyle as style } from "@/styles/OnGoingExercise";

export interface OnGoingExerciseProps {
    exerciseName: string;
}

interface CustomTextProps extends TextProps {
    header?: boolean;
}

function CustomText({ children, style, header, ...props }: CustomTextProps): React.ReactNode {
    const color = header ? { color: "grey" } : {};
    return (
        <Text style={[color, { fontSize: 20 }, style]} {...props}>
            {children}
        </Text>
    );
}

function OnGoingExercise(props: OnGoingExerciseProps): React.ReactNode {
    return (
        <View style={style.container}>
            <CustomText style={style.exerciseName}>{props.exerciseName}</CustomText>
            <View style={style.setsGrid}>
                <View style={style.setsColumn}>
                    <CustomText header>Set</CustomText>
                    <CustomText>1</CustomText>
                </View>
                <View style={style.setsColumn}>
                    <CustomText header>KG</CustomText>
                    <CustomText>100</CustomText>
                </View>
                <View style={style.setsColumn}>
                    <CustomText header>Reps</CustomText>
                    <CustomText>3</CustomText>
                </View>
            </View>
        </View>
    );
}

export default OnGoingExercise;
