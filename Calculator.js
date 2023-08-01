import { Text, View } from "react-native";
import Row from "./components/Row";
import Buttons from "./components/Buttons";
import { useState } from "react";
import styles from "./styles";

export default Calculator = () => {
  const [calculate, setCalculate] = useState({
    first: "0",
    operator: null,
    second: null,
  });
  const [resultVal, setResultVal] = useState(0);
  const [displayVal, setDisplayVal] = useState(0);

  const handlePress = (val) => {
    if (isNaN(val)) {
      calculate.operator = val;
      calculate.second = null;
    } else if (calculate.operator == null) {
      calculate.first = calculate.first == 0 ? val : `${calculate.first}${val}`;
      setDisplayVal(calculate.first);
    } else {
      calculate.second =
        calculate.second == null ? val : `${calculate.second}${val}`;
      setDisplayVal(calculate.second);
    }

    setCalculate(calculate);
    console.log(calculate);
  };

  const onResultPress = () => {
    switch (calculate.operator) {
      case "+": {
        const ans =
          Number.parseFloat(calculate.first) +
          Number.parseFloat(calculate.second);
        setDisplayVal(ans);
        calculate.first = ans;
        setCalculate(calculate);
        break;
      }
      case "-": {
        const ans =
          Number.parseFloat(calculate.first) -
          Number.parseFloat(calculate.second);
        setDisplayVal(ans);
        calculate.first = ans;
        setCalculate(calculate);
        break;
      }
      case "*": {
        const ans =
          Number.parseFloat(calculate.first) *
          Number.parseFloat(calculate.second);
        setDisplayVal(ans);
        calculate.first = ans;
        setCalculate(calculate);
        break;
      }
      case "/": {
        if (Number.parseFloat(calculate.second) == 0) {
          setDisplayVal("NaN");
          calculate.first = 0;
          calculate.second = null;
          calculate.operator = null;
          break;
        }
        const ans =
          Number.parseFloat(calculate.first) /
          Number.parseFloat(calculate.second);
        setDisplayVal(ans);
        calculate.first = ans;
        setCalculate(calculate);
        break;
      }

      default:
        // setDisplayVal("NaN");
        break;
    }
  };

  const onClear = () => {
    calculate.first = 0;
    calculate.second = null;
    calculate.operator = null;
    setCalculate(calculate);
    setDisplayVal(0);
  };

  const onPercent = () => {
    setDisplayVal(Number.parseFloat(displayVal) / 100);
  };

  const onPlusMinus = () => {
    if (calculate.operator == null) {
      calculate.first = Number.parseFloat(calculate.first) * -1;
      setDisplayVal(calculate.first);
      setCalculate(calculate);
    } else {
      calculate.second = Number.parseFloat(calculate.second) * -1;
      setDisplayVal(calculate.second);
      setCalculate(calculate);
    }
  };

  const onDecimal = () => {
    if (calculate.operator == null) {
      if (calculate.first.includes(".")) return;

      calculate.first += ".";
      setCalculate(calculate);
      setDisplayVal(calculate.first);
    } else {
      if (calculate.first.includes(".")) return;

      calculate.second += ".";
      setCalculate(calculate);
      setDisplayVal(calculate.second);
    }
  };

  const row1 = (
    <View style={styles.row}>
      <Buttons text={7} onPress={() => handlePress("7")} />
      <Buttons text={2} onPress={() => handlePress("2")} />
      <Buttons text={9} onPress={() => handlePress("9")} />
      <Buttons
        text={"*"}
        onPress={() => handlePress("*")}
        operator={styles.btnOperator}
      />
    </View>
  );
  const row2 = (
    <View style={styles.row}>
      <Buttons text={4} onPress={() => handlePress("4")} />
      <Buttons text={5} onPress={() => handlePress("5")} />
      <Buttons text={6} onPress={() => handlePress("6")} />
      <Buttons
        text={"-"}
        onPress={() => handlePress("-")}
        operator={styles.btnOperator}
      />
    </View>
  );
  const row3 = (
    <View style={styles.row}>
      <Buttons text={1} onPress={() => handlePress("1")} />
      <Buttons text={2} onPress={() => handlePress("2")} />
      <Buttons text={3} onPress={() => handlePress("3")} />
      <Buttons
        text={"+"}
        onPress={() => handlePress("+")}
        operator={styles.btnOperator}
      />
    </View>
  );

  const equal = (
    <View style={styles.row}>
      <Buttons text={"C"} onPress={onClear} operator={styles.btnOperator} />
      <Buttons
        text={"+/-"}
        onPress={onPlusMinus}
        operator={styles.btnOperator}
      />
      <Buttons text={"%"} onPress={onPercent} operator={styles.btnOperator} />
      <Buttons
        text={"/"}
        onPress={() => handlePress("/")}
        operator={styles.btnOperator}
      />
    </View>
  );

  const lastEqual = (
    <View style={styles.row}>
      <Buttons text={"0"} onPress={() => handlePress("0")} />
      <Buttons text={"."} onPress={onDecimal} />
      <Buttons text={"="} onPress={onResultPress} />
    </View>
  );

  return (
    <>
      <View>
        <Text style={styles.result}>{displayVal}</Text>
      </View>
      <Row children={equal} />
      <Row children={row1} />
      <Row children={row2} />
      <Row children={row3} />
      <Row children={lastEqual} />
    </>
  );
};
