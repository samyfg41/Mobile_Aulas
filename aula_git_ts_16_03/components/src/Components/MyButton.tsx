import { Button } from "react-native";
import { View } from "react-native";

const MyButton = () => {
  return (
    <View style={{ paddingHorizontal: 60 }}>
      <Button
        title="My custom button"
        onPress={() => console.log("Button clicked")}
      />
    </View>
  );
};

export default MyButton;
