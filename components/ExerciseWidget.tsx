import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { iosBlue } from "@/utils/constants";

export interface ExerciseWidgetProps {
    name: string;
    selected: boolean;
    setSelected: () => void;
}

function ExerciseWidget({ name, selected, setSelected }: ExerciseWidgetProps): React.ReactNode {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={setSelected}>
            <View style={styles.container}>
                <View
                    style={{
                        backgroundColor: iosBlue,
                        height: "90%",
                        width: selected ? 4 : 0,
                        borderRadius: 5,
                    }}
                />
                <Image source={require("@/assets/images/icon.png")} style={styles.image} />
                <Text style={styles.exName}>{name}</Text>
            </View>
            <View style={styles.separator} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
        margin: "auto",
        paddingRight: 20,
    },
    image: {
        width: 100,
        height: 100,
    },
    exName: {
        width: "70%",
        fontSize: 22,
        marginLeft: 20,
    },
    separator: {
        width: "90%",
        margin: "auto",
        height: 1,
        backgroundColor: "lightgrey",
        borderRadius: 32,
    },
});

export default ExerciseWidget;
