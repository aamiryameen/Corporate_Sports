import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Sign Up</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
