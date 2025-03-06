import { Tabs } from "expo-router";

function TabLayout() {
  return (
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="account" options={{ title: "Account" }} />
      </Tabs>
  );
}

export default TabLayout;
