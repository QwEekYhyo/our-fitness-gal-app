import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarLabelPosition: "below-icon" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="workout"
                options={{
                    title: "Active Workout",
                    tabBarIcon: ({ color }) => (
                        <AntDesign size={28} name="pluscircleo" color={color} />
                    ),
                    tabBarShowLabel: false,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color }) => <AntDesign size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}

export default TabLayout;
