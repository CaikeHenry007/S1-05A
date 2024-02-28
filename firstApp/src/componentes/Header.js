import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Esse é o Cabeçalho!</Text>
    </View>
  );
}
