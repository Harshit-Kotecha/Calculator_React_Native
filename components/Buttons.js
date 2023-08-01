import { Pressable, Text } from "react-native";
import styles from "../styles";
import { useState } from "react";

export default Buttons = ({ text, onPress, size, operator }) => {
  const [isPressed, setIsPressed] = useState(false);

  textStyles = [styles.textStyles];
  btn = isPressed
    ? [styles.btn, operator, styles.btnPressed]
    : [styles.btn, operator];

  const pressIn = () => {
    setIsPressed(true);
  };
  const pressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      style={btn}
      onPressIn={pressIn}
      onPressOut={pressOut}
    >
      <Text style={textStyles}>{text}</Text>
    </Pressable>
  );
};
