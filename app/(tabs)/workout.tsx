import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";

function Workout() {
    const navigation = useNavigation();
    const router = useRouter();

    useFocusEffect(
        useCallback(() => {
            navigation.goBack();

            setTimeout(() => {
                router.push("/workout-session");
            }, 5);
        }, []),
    );

    return <View />;
}

export default Workout;
