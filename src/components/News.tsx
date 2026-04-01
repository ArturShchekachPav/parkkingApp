import { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity ,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    gap: 16,
  },
  slide: {
    flexDirection: 'row',
    gap: 16,
    marginRight: 20
  },
  image: {
    width: 108,
    borderRadius: 16
  },
  content: {
    flex: 1,
    gap: 16,
  },
  link: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: '#EAEDF3',
    alignSelf: 'flex-start'
  },
  linkText: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 12,
    color: '#132351'
  },
  linkIcon: {
    width: 10,
    height: 10
  },
  info: {
    gap: 4
  },
  pubDate: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 10,
    color: '#8A8E9E'
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 12,
    color: '#132351'
  },
  dots: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DFE2E8'
  },
  activeDot: {
    width: 12,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8A8E9E'
  }
});

const news = [
  {
    pubDate: '13 минут назад',
    text: 'Дожди в Приморском крае усилились. Жители Приморья вынуждены проверять подвалы'
  },
  {
    pubDate: '13 минут назад',
    text: 'Дожди в Приморском крае усилились. Жители Приморья вынуждены проверять подвалы'
  },
  {
    pubDate: '13 минут назад',
    text: 'Дожди в Приморском крае усилились. Жители Приморья вынуждены проверять подвалы'
  },
  {
    pubDate: '13 минут назад',
    text: 'Дожди в Приморском крае усилились. Жители Приморья вынуждены проверять подвалы'
  },
  {
    pubDate: '13 минут назад',
    text: 'Дожди в Приморском крае усилились. Жители Приморья вынуждены проверять подвалы'
  },
]

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
        renderItem={({ item }: { item: { pubDate: string; text: string }; index: number }) => (
          <View style={[styles.slide]}>
            <View style={styles.content}>
              <TouchableOpacity  style={styles.link}>
                  <Text style={styles.linkText}>Новости</Text>
                  <Image
                    style={styles.linkIcon}
                    source={require('../assets/images/share-icon.png')}
                  />
              </TouchableOpacity>
              <View style={styles.info}>
                <Text style={styles.pubDate}>{item.pubDate}</Text>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require('../assets/images/news-picture.png')}
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