import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
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
