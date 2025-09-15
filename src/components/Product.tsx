import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

interface Props {
  id: string;
  nome: string;
  completed: boolean;
  onRemove: () => void;
  onCheck: () => void;
}

export function Product({ nome, completed, onRemove, onCheck }: Props) {
  return (
    <View style={[styles.container, completed && { borderColor: "#D9D9D9" }]}>
      <TouchableOpacity style={styles.buttonCheckList} onPress={onCheck}>
        <Image
          source={
            completed
              ? require("../../assets/layerRoxo.png")
              : require("../../assets/layerVerde.png")
          }
          style={styles.iconeCheckList}
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.nome,
          completed && { textDecorationLine: "line-through", color: "#808080" },
        ]}
        numberOfLines={1}
      >
        {nome}
      </Text>
      <TouchableOpacity style={styles.botaoRemover} onPress={onRemove}>
        <Image
          source={require("../../assets/layerDelete.png")}
          style={styles.iconeDeletar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 56,
},
  iconeCheckList: {
    height: 24,
    width: 24,
  },
  buttonCheckList: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  nome: {
    marginHorizontal: 8,
    fontWeight: "400",
    color: "#262626",
    flex: 1,
    fontSize: 16,
    lineHeight: 19.2,
  },
  iconeDeletar: {
    height: 14,
    width: 12.5,
  },
  botaoRemover: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
  }
});
