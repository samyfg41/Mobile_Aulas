import { SectionList, View, Text } from "react-native";

const DATA = [
  {
    id: 1,
    title: "Main Dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    id: 2,
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    id: 3,
    title: "Drinks",
    data: ["Water", "Coke", "Beer", "Apple Juice"],
  },
];

const Header = ({ title }: { title: string }) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 48 }}>{title}</Text>
    </View>
  );
};

const Item = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const MySectionList = () => {
  return (
    <SectionList
      sections={DATA}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={(item) => <Header title={item.section.title} />}
    />
  );
};

export default MySectionList;
