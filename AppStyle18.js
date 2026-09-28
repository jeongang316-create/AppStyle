import { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';

const categories = ['전체', '카페', '자연', '맛집', '액티비티'];

const PLACES = [
  { id: 1, title: '제주 애월 카페거리', location: '제주 애월읍', category: '카페', rating: '4.7', img: 'https://picsum.photos/id/1060/400/300' },
  { id: 2, title: '남해 죽방렴 일몰', location: '경남 남해군', category: '자연', rating: '4.8', img: 'https://picsum.photos/id/1015/400/300' },
  { id: 3, title: '전주 한옥마을 맛집', location: '전북 전주시', category: '맛집', rating: '4.5', img: 'https://picsum.photos/id/292/400/300' },
  { id: 4, title: '강릉 안목해변 서핑', location: '강원 강릉시', category: '액티비티', rating: '4.6', img: 'https://picsum.photos/id/1080/400/300' },
  { id: 5, title: '부산 haeundae 카페', location: '부산 해운대구', category: '카페', rating: '4.4', img: 'https://picsum.photos/id/1074/400/300' },
  { id: 6, title: '지리산 둘레길 트레킹', location: '전남 구례군', category: '액티비티', rating: '4.9', img: 'https://picsum.photos/id/1043/400/300' },
];

export default function AppStyle18() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredPlaces = selectedCategory === '전체'
    ? PLACES
    : PLACES.filter((p) => p.category === selectedCategory);

  return (
    <View style={styles.container}>

      {/* 1. 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.logo}>TripLog</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.iconText}>🔍</Text>
          <Text style={styles.iconText}>🔔</Text>
          <Text style={styles.iconText}>🛒</Text>
        </View>
      </View>

      {/* 2. 배너 (flex 비율로 높이 지정) */}
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://picsum.photos/id/1018/800/500' }}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        />
        <View style={styles.bannerBadge}>
          <Text style={styles.bannerBadgeText}>HOT</Text>
        </View>
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>이번 주말, 새로운 여행지를 만나보세요</Text>
          <View style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>자세히 보기</Text>
          </View>
        </View>
      </View>

      {/* 3. 카테고리 칩 목록 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryRow}
        contentContainerStyle={styles.categoryRowContent}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, selectedCategory === cat && styles.chipActive]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.likeButtonRow}>
        <Button
          title="찜한 장소 보기"
          color="#3478f6"
          onPress={() => alert('찜 목록으로 이동')}
        />
      </View>

      {/* 4. 카드 그리드 */}
      <ScrollView style={styles.grid}>
        <View style={styles.gridInner}>
          {filteredPlaces.map((place) => (
            <View key={place.id} style={styles.card}>
              <Image source={{ uri: place.img }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{place.title}</Text>
              <Text style={styles.cardLocation}>{place.location}</Text>
              <Text style={styles.cardRating}>★ {place.rating}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* 5. 하단 탭바 */}
      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <Text style={[styles.tabIcon, styles.tabIconActive]}>🏠</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>홈</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>🔍</Text>
          <Text style={styles.tabLabel}>검색</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>♥</Text>
          <Text style={styles.tabLabel}>저장</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>프로필</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', backgroundColor: '#ffffff' },

  header: {
    height: 56,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0',
  },
  logo: { fontSize: 20, fontWeight: 'bold', color: '#222222' },
  headerIcons: { flexDirection: 'row', gap: 14 },
  iconText: { fontSize: 18 },

  banner: {
    flex: 3,
    margin: 16, marginBottom: 8,
    borderRadius: 12, overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  bannerBadge: {
    position: 'absolute', top: 12, left: 12,
    backgroundColor: '#ff5252', borderRadius: 10,
    paddingVertical: 3, paddingHorizontal: 10,
  },
  bannerBadgeText: { color: '#ffffff', fontSize: 11, fontWeight: 'bold' },
  bannerOverlay: { position: 'absolute', bottom: 14, left: 14, right: 14 },
  bannerTitle: {
    color: '#ffffff', fontSize: 17, fontWeight: 'bold', marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.6)', textShadowRadius: 4,
  },
  bannerButton: {
    backgroundColor: '#ffffff', borderRadius: 18,
    paddingVertical: 7, paddingHorizontal: 14, alignSelf: 'flex-start',
  },
  bannerButtonText: { color: '#222222', fontWeight: '600', fontSize: 12 },

  categoryRow: { flexGrow: 0, marginTop: 4 },
  categoryRowContent: { paddingHorizontal: 16 },
  chip: {
    backgroundColor: '#f0f0f0', borderRadius: 18,
    paddingVertical: 7, paddingHorizontal: 16, marginRight: 8,
    height: 34, justifyContent: 'center',
  },
  chipActive: { backgroundColor: '#3478f6' },
  chipText: { color: '#555555', fontWeight: '600', fontSize: 13 },
  chipTextActive: { color: '#ffffff' },

  likeButtonRow: { paddingHorizontal: 16, marginTop: 10, marginBottom: 4 },

  grid: { flex: 5 },
  gridInner: {
    flexDirection: 'row', flexWrap: 'wrap',
    justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 8,
  },
  card: {
    width: '48%', marginBottom: 16,
    borderRadius: 10, overflow: 'hidden',
    backgroundColor: '#ffffff',
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardImage: { width: '100%', height: 110 },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#222222', marginTop: 6, marginHorizontal: 8 },
  cardLocation: { fontSize: 11, color: '#888888', marginTop: 2, marginHorizontal: 8 },
  cardRating: { fontSize: 12, fontWeight: 'bold', color: '#f5a623', marginTop: 2, marginBottom: 8, marginHorizontal: 8 },

  tabBar: {
    height: 60,
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
    borderTopWidth: 0.5, borderTopColor: '#e0e0e0',
  },
  tabItem: { alignItems: 'center' },
  tabIcon: { fontSize: 20, color: '#999999' },
  tabIconActive: { color: '#3478f6' },
  tabLabel: { fontSize: 11, color: '#999999', marginTop: 2 },
  tabLabelActive: { color: '#3478f6', fontWeight: 'bold' },
});
