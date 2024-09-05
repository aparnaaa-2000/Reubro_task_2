import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet,Image} from 'react-native';
import axios from 'axios';

const PostListScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.org/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Render each post item
  const renderPostItem = ({ item }) => (
    <View style={styles.postItem}>
      <Text style={styles.title}>{item.title}</Text> 
      <View style={styles.flex}>
  <Text style={styles.publishedText}>Published at: {item.publishedAt}</Text>
  <Text style={styles.updatedText}>Updated at: {item.updatedAt}</Text>
</View>
<View style={styles.flex}>
<Text > Category Name: {item.category}</Text>
<Text>Slug: {item.slug}</Text>
</View>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.content}</Text>

      
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPostItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  flex: {
    flexDirection: 'row',         
    justifyContent: 'space-between', 
    alignItems: 'center',         
    marginTop: 10,                
  },
  publishedText: {
    flex: 1,                      
    textAlign: 'left',            
  },
  updatedText: {
    flex: 1,                      
    textAlign: 'right',         
  },

  postItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default PostListScreen;
