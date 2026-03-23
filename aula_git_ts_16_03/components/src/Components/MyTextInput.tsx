import React from "react";

import { View, TextInput, Text } from "react-native";

const MyTextInput = () => {
  const [text, onChangeText] = React.useState("Useless text");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={{ paddingTop: 40 }}>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1 }}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Text: {text}</Text>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1 }}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Number: {number}</Text>
    </View>
  );
};

export default MyTextInput;
