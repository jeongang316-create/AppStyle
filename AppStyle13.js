import { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const categories = ['전체', '한식', '카페', '일식', '중식'];

const menuByCategory = {
  한식: [
    { id: 'k1', title: '김치찌개', price: '8,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Korean_stew_dish_-_Kimchi-jjigae_Kimchi_Stew_2019_%2801%29.jpg/330px-Korean_stew_dish_-_Kimchi-jjigae_Kimchi_Stew_2019_%2801%29.jpg' },
    { id: 'k2', title: '된장찌개', price: '7,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Doenjang_jjigae.jpg/330px-Doenjang_jjigae.jpg' },
    { id: 'k3', title: '제육볶음', price: '9,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/%EC%A0%9C%EC%9C%A1_%EB%B3%B6%EC%9D%8C.jpg/330px-%EC%A0%9C%EC%9C%A1_%EB%B3%B6%EC%9D%8C.jpg' },
    { id: 'k4', title: '떡볶이', price: '4,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Tteokbokki.JPG/330px-Tteokbokki.JPG' },
    { id: 'k5', title: '잔치국수', price: '6,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Janchiguksu.jpg/330px-Janchiguksu.jpg' },
  ],
  카페: [
    { id: 'c1', title: '아이스/핫 아메리카노', price: '4,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Espresso_Americano.jpeg/330px-Espresso_Americano.jpeg' },
    { id: 'c2', title: '아이스/핫 바닐라라떼', price: '5,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Cup_of_coffee_with_latte_art_2016.jpg/500px-Cup_of_coffee_with_latte_art_2016.jpg' },
    { id: 'c3', title: '아이스/핫 카페라떼', price: '4,800원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Latte_art_3.jpg/330px-Latte_art_3.jpg' },
    { id: 'c4', title: '아이스티', price: '4,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Iced_Tea_Marie_Catrib%27s_7-8-09_3.jpg/330px-Iced_Tea_Marie_Catrib%27s_7-8-09_3.jpg' },
    { id: 'c5', title: '초코라떼', price: '5,200원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Dark_Hot_Chocolate%2C_San_Churro_Leederville%2C_2026_%2801%29.jpg/500px-Dark_Hot_Chocolate%2C_San_Churro_Leederville%2C_2026_%2801%29.jpg' },
    { id: 'c6', title: '딸기라떼', price: '5,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Strawberry_milk_shake.jpg/500px-Strawberry_milk_shake.jpg' },
  ],
  일식: [
    { id: 'j1', title: '오늘의 초밥', price: '12,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/330px-Sushi_platter.jpg' },
    { id: 'j2', title: '연어초밥', price: '15,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Salmon_Nigiri_Sushi%2C_2008.jpg/500px-Salmon_Nigiri_Sushi%2C_2008.jpg' },
    { id: 'j3', title: '광어초밥', price: '14,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Paralichthys-olivaceus-Federal-Way-3583.jpg/330px-Paralichthys-olivaceus-Federal-Way-3583.jpg' },
    { id: 'j4', title: '와규초밥', price: '22,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Wagyu.jpg/330px-Wagyu.jpg' },
    { id: 'j5', title: '우동', price: '8,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Kakeudon.jpg/330px-Kakeudon.jpg' },
    { id: 'j6', title: '돈코츠라멘', price: '9,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg/330px-Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg' },
  ],
  중식: [
    { id: 'z1', title: '짜장면', price: '6,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Jajangmyeon.jpg/330px-Jajangmyeon.jpg' },
    { id: 'z2', title: '짬뽕', price: '7,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Jjampong.JPG/330px-Jjampong.JPG' },
    { id: 'z3', title: '짬짜면', price: '7,500원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Jajangmyeon.jpg/330px-Jajangmyeon.jpg' },
    { id: 'z4', title: '탕수육', price: '18,000원', img: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Tangsuyuk_%28Korean_Chinese_sweet_and_sour_pork%29.jpg/330px-Tangsuyuk_%28Korean_Chinese_sweet_and_sour_pork%29.jpg' },
  ],
};

const allItems = [
  ...menuByCategory.한식,
  ...menuByCategory.카페,
  ...menuByCategory.일식,
  ...menuByCategory.중식,
];

const bestIds = ['k3', 'j1', 'z3', 'j4'];
const bestMenu = bestIds.map((id) => allItems.find((item) => item.id === id));
const restMenu = allItems.filter((item) => !bestIds.includes(item.id));

function ProductCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.img }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );
}

export default function AppStyle13() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.iconText}>☰</Text>
        <Text style={styles.headerTitle}>ShopApp</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.iconText}>🔍</Text>
          <Text style={styles.iconText}>🛒</Text>
        </View>
      </View>

      <ScrollView style={styles.body}>

        <View style={styles.banner}>
          <Image
            source={{ uri: 'https://picsum.photos/id/1015/800/500' }}
            style={styles.bannerImage} />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>가을 신메뉴 출시</Text>
            <View style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>자세히 보기</Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.chip, selectedCategory === cat && styles.chipActive]}
              onPress={() => { setSelectedCategory(cat); setShowMore(false); }}
            >
              <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedCategory === '전체' ? (
          <>
            <Text style={styles.sectionTitle}>BEST 메뉴</Text>
            <View style={styles.grid}>
              {bestMenu.map((item) => <ProductCard key={item.id} item={item} />)}
            </View>

            {showMore && (
              <>
                <Text style={styles.sectionTitle}>전체 메뉴</Text>
                <View style={styles.grid}>
                  {restMenu.map((item) => <ProductCard key={item.id} item={item} />)}
                </View>
              </>
            )}

            <TouchableOpacity style={styles.moreButton} onPress={() => setShowMore(!showMore)}>
              <Text style={styles.moreButtonText}>{showMore ? '상품 접기' : '상품 더보기'}</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.sectionTitle}>{selectedCategory} 메뉴</Text>
            <View style={styles.grid}>
              {menuByCategory[selectedCategory].map((item) => <ProductCard key={item.id} item={item} />)}
            </View>
          </>
        )}

      </ScrollView>

      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <Text style={[styles.tabIcon, styles.tabIconActive]}>🏠</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>홈</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>♥</Text>
          <Text style={styles.tabLabel}>찜</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>🛒</Text>
          <Text style={styles.tabLabel}>장바구니</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>마이페이지</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 14,
    borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#222222' },
  headerIcons: { flexDirection: 'row', gap: 14 },
  iconText: { fontSize: 20 },

  body: { flex: 1 },

  banner: { margin: 16, borderRadius: 12, overflow: 'hidden' },
  bannerImage: { width: '100%', height: 180 },
  bannerOverlay: {
    position: 'absolute', bottom: 16, left: 16,
  },
  bannerTitle: {
    color: '#ffffff', fontSize: 20, fontWeight: 'bold',
    marginBottom: 10, textShadowColor: 'rgba(0,0,0,0.5)', textShadowRadius: 4,
  },
  bannerButton: {
    backgroundColor: '#ffffff', borderRadius: 20,
    paddingVertical: 8, paddingHorizontal: 16, alignSelf: 'flex-start',
  },
  bannerButtonText: { color: '#222222', fontWeight: '600', fontSize: 13 },

  categoryRow: { paddingLeft: 16, marginBottom: 8 },
  chip: {
    backgroundColor: '#f0f0f0', borderRadius: 20,
    paddingVertical: 8, paddingHorizontal: 18, marginRight: 8,
    height: 36, justifyContent: 'center',
  },
  chipActive: { backgroundColor: '#3478f6' },
  chipText: { color: '#555555', fontWeight: '600', fontSize: 14 },
  chipTextActive: { color: '#ffffff' },

  sectionTitle: {
    fontSize: 18, fontWeight: 'bold', color: '#222222',
    paddingHorizontal: 16, marginTop: 16, marginBottom: 10,
  },

  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    justifyContent: 'space-between', paddingHorizontal: 16,
  },
  card: { width: '48%', marginBottom: 16 },
  cardImage: { width: '100%', height: 130, borderRadius: 8 },
  cardTitle: { fontSize: 15, fontWeight: '600', color: '#222222', marginTop: 6 },
  cardPrice: { fontSize: 14, fontWeight: 'bold', color: '#ff7043', marginTop: 2 },

  moreButton: {
    marginHorizontal: 16, marginTop: 4, marginBottom: 20,
    borderRadius: 8, borderWidth: 1, borderColor: '#3478f6',
    paddingVertical: 10, alignItems: 'center',
  },
  moreButtonText: { color: '#3478f6', fontWeight: 'bold', fontSize: 14 },

  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    paddingVertical: 10, borderTopWidth: 0.5, borderTopColor: '#e0e0e0',
  },
  tabItem: { alignItems: 'center' },
  tabIcon: { fontSize: 20, color: '#999999' },
  tabIconActive: { color: '#3478f6' },
  tabLabel: { fontSize: 11, color: '#999999', marginTop: 2 },
  tabLabelActive: { color: '#3478f6', fontWeight: 'bold' },
});
