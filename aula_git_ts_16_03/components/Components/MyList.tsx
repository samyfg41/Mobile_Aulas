import { FlatList, View, Text } from "react-native";

const DATA = Array.from({ length: 120 }, (x, index) => {
  return {
    id: index,
    title: `Item ${index}`,
    description: `Qualquer coisa ${index}`,
  };
});

const Item = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>Segunda linha: {title}</Text>
    </View>
  );
};

const MyList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MyList;
