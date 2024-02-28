import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Body() {
  return (
    <View style={styles.body}>
      <Text style={styles.textBody}>Esse é o Corpo!</Text>
    </View>
  );
}
