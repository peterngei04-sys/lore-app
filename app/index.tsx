import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LORE</Text>
      <Text style={styles.subtitle}>Your world, your stories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
  },
  subtitle: {
    marginTop: 10,
    color: "#94A3B8",
    fontSize: 14,
  },
});