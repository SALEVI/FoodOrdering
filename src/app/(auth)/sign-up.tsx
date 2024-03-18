import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const validateInput = () => {
    setErrors("");
    if (!email) {
      setErrors("Name is required");
      return false;
    }
    if (!password) {
      setErrors("Price is required");
      return false;
    }
    return true;
  };

  const onSignIn = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Signed in with:", email, password);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="john@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry={true}
      />
      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onSignIn} text={"Create account"} />
      <Link href="/(auth)/sign-up" asChild>
        <Text style={styles.textButton}>Sign in</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default SignInScreen;
