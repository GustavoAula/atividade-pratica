import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.txtTop}> Lista de Compras </Text>
      </View>
    </View>
    );
}