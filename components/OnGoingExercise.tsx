import { Text, TextInput, TextInputProps, TextProps, View } from "react-native";

import { onGoingExerciseStyle as componentStyle } from "@/styles/OnGoingExercise";

export interface OnGoingExerciseProps {
    exerciseName: string;
}

interface CustomTextProps extends TextProps {
    header?: boolean;
}

function CustomText({ children, style, header, ...props }: CustomTextProps): React.ReactNode {
    const color = header ? { color: "grey" } : {};
    return (
        <Text style={[color, componentStyle.customText, style]} {...props}>
            {children}
        </Text>
    );
}

function CustomTextInput({ style, ...props }: TextInputProps): React.ReactNode {
    return (
        <TextInput
            autoComplete="off"
            inputMode="decimal"
            placeholderTextColor="grey"
            style={[componentStyle.CustomTextInput, style]}
            {...props}
        />
    );
}

function OnGoingExercise(props: OnGoingExerciseProps): React.ReactNode {
    return (
        <View style={componentStyle.container}>
            <CustomText style={componentStyle.exerciseName}>{props.exerciseName}</CustomText>
            <View style={componentStyle.setsGrid}>
                <View style={componentStyle.setsColumn}>
                    <CustomText header>Set</CustomText>
                    <CustomText>1</CustomText>
                    <CustomText>2</CustomText>
                </View>
                <View style={componentStyle.setsColumn}>
                    <CustomText header>KG</CustomText>
                    <CustomText>100</CustomText>
                    <CustomTextInput placeholder="90" />
                </View>
                <View style={componentStyle.setsColumn}>
                    <CustomText header>Reps</CustomText>
                    <CustomText>3</CustomText>
                    <CustomTextInput placeholder="6" inputMode="numeric" />
                </View>
            </View>
        </View>
    );
}

export default OnGoingExercise;
