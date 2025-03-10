import { View, Text, ScrollView } from "react-native";

import KoolButton from "@/components/KoolButton";

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
    return (
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
            <View style={{ gap: 10, marginTop: 40 }}>
                <KoolButton title="Add exercise" theme="blue" />
                <KoolButton title="Cancel" theme="red" />
            </View>
        </ScrollView>
    );
}

export default WorkoutSession;
