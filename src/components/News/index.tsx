import { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity ,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { news } from './consts';
import { styles } from './styles';

const { width: screenWidth } = Dimensions.get('window');

export default function News() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={screenWidth-20}
        height={110}
        data={news}
        onSnapToItem={setActiveIndex}
        renderItem={(
          { item }: {
            item: { pubDate: string; text: string };
            index: number
          }
        ) => (
          <View style={[styles.slide]}>
            <View style={styles.content}>
              <TouchableOpacity  style={styles.link}>
                  <Text style={styles.linkText}>Новости</Text>
                  <Image
                    style={styles.linkIcon}
                    source={require('../../assets/images/share-icon.png')}
                  />
              </TouchableOpacity>
              <View style={styles.info}>
                <Text style={styles.pubDate}>{item.pubDate}</Text>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require('../../assets/images/news-picture.png')}
            />
          </View>
        )}
      />
      <View style={styles.dots}>
        {news.map((_, index) => (
          <View
            key={index}
            style={index === activeIndex ? styles.activeDot : styles.dot}
          />
        ))}
      </View>
    </View>
  );
}