import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function Balance() {
    const [showBalance, setShowBalance] = useState(false);
    return (
        <Pressable onPress={() => setShowBalance(!showBalance)}>
          <Ionicons name={showBalance ? 'eye-off-outline' : 'eye-outline'} size={20} color='white' />
        </Pressable>
    )
}