import Button from "@/components/Button";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Auth() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(auth)/sign-in"} asChild>
        <Button text="Sign in" />
      </Link>
      <Link href={"/(auth)/sign-up"} asChild>
        <Button text="Sign up" />
      </Link>
    </View>
  );
}
