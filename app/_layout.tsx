import { Stack, useNavigation } from "expo-router";
import { Pressable, Text } from "react-native";

function RootLayout() {
    const navigation = useNavigation();

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="workout-session"
                options={{
                    title: "Active Workout",
                    headerTitleAlign: "center",
                    headerBackButtonDisplayMode: "minimal",
                    headerRight: () => (
                        <Pressable
                            style={{ justifyContent: "center", alignItems: "flex-end" }}
                            onPress={navigation.goBack}
                        >
                            <Text style={{ fontSize: 16 }}>Done</Text>
                        </Pressable>
                    ),
                }}
            />
        </Stack>
    );
}

export default RootLayout;
