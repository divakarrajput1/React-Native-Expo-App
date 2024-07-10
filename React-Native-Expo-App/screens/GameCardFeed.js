//D2
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const games = [
  // Array of game objects with title, description, and image
  {
    id: '1',
    title: 'Game 1',
    description: 'Description of Game 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Game 2',
    description: 'Description of Game 2',
    image: 'https://via.placeholder.com/150',
  },
  // Add more game objects as needed
];

export default function GameCardFeed({ navigation }) {
  const [page, setPage] = useState(1);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    setGameData(games.slice(0, page * 10));
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('GameDetail', { game: item })}>
      <View>
        <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={gameData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
}
