import { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

const DATA = Array.from({ length: 200 }, (x, index) => {
  return {
    id: index,
    title: `Item ${index}`,
    description: `Qualquer coisa ${index}`,
  };
});

const Item = ({ title }: { title: string }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log(`Cliquei no item ${title}`)}>
        <Text>{title}</Text>
        <Text>Segunda linha: {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const MyList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const simulateRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 3000);
  };

  return (
    <FlatList
      onRefresh={simulateRefresh}
      refreshing={isRefreshing}
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MyList;
