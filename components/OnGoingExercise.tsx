import { useState } from "react";
import { Text, TextInput, TextInputProps, TextProps, View } from "react-native";

import { onGoingExerciseStyle as componentStyle } from "@/styles/OnGoingExercise";

export interface OnGoingExerciseProps {
    exerciseName: string;
}

interface CustomTextProps extends TextProps {
    header?: boolean;
}

function CustomText({ children, style, header, ...props }: CustomTextProps) {
    const color = header ? { color: "grey" } : {};
    return (
        <Text style={[color, componentStyle.customText, style]} {...props}>
            {children}
        </Text>
    );
}

function CustomTextInput({ style, onChangeText, ...props }: TextInputProps) {
    return (
        <TextInput
            autoComplete="off"
            inputMode="decimal"
            placeholderTextColor="grey"
            style={[componentStyle.CustomTextInput, style]}
            onChangeText={onChangeText}
            {...props}
        />
    );
}

function OnGoingExercise(props: OnGoingExerciseProps): React.ReactNode {
    const [sets, setSets] = useState([{ kg: "", reps: "" }]);

    const handleInputChange = (index: number, field: "kg" | "reps", value: string) => {
        const updatedSets = [...sets];
        updatedSets[index] = { ...updatedSets[index], [field]: value };

        if (
            updatedSets.length > 1 &&
            updatedSets[index].kg === "" &&
            updatedSets[index].reps === ""
        ) {
            updatedSets.splice(index, 1);
        }

        setSets(updatedSets);

        if (index === sets.length - 1 && updatedSets[index].kg && updatedSets[index].reps) {
            setSets([...updatedSets, { kg: "", reps: "" }]);
        }
    };

    return (
        <View style={componentStyle.container}>
            <CustomText style={componentStyle.exerciseName}>{props.exerciseName}</CustomText>
            <View style={componentStyle.setsGrid}>
                <View style={componentStyle.setsColumn}>
                    <CustomText header>Set</CustomText>
                    {sets.map((_, i) => (
                        <CustomText key={`set-${i}`}>{i + 1}</CustomText>
                    ))}
                </View>
                <View style={componentStyle.setsColumn}>
                    <CustomText header>KG</CustomText>
                    {sets.map((set, i) => (
                        <CustomTextInput
                            key={`kg-${i}`}
                            placeholder="100"
                            value={set.kg}
                            onChangeText={(value) => handleInputChange(i, "kg", value)}
                        />
                    ))}
                </View>
                <View style={componentStyle.setsColumn}>
                    <CustomText header>Reps</CustomText>
                    {sets.map((set, i) => (
                        <CustomTextInput
                            key={`reps-${i}`}
                            placeholder="3"
                            inputMode="numeric"
                            value={set.reps}
                            onChangeText={(value) => handleInputChange(i, "reps", value)}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}

export default OnGoingExercise;
