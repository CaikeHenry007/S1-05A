import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.textFooter}>Esse é o Rodapé!</Text>
    </View>
  );
}
