import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: {backgroundColor: "#000"}}}>
      <Tabs.Screen name='map' options={{title: "Map"}}/>
      <Tabs.Screen name='pulse' options={{title: "Pulse"}}/>
      <Tabs.Screen name='profile' options={{title: "Profile"}}/>
    </Tabs>
  )
}