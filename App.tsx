import Constants from 'expo-constants';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Platform,
  SafeAreaView,
  Dimensions,
  StatusBar
} from 'react-native';

const windowWidth = Dimensions.get('window').width;


export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          {/* Barra de búsqueda */}
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput 
              style={styles.searchInput}
              placeholder="Buscar en Amazon.com.mx"
              placeholderTextColor="#666"
            />
            <Text style={styles.cameraIcon}>📷</Text>
          </View>

          {/* Barra de navegación secundaria */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.locationBar}
            contentContainerStyle={styles.locationBarContent}
          >
            <TouchableOpacity style={styles.locationItem}>
              <Text>📍</Text>
              <Text style={styles.locationText}>43000</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Listas de Alexa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Prime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Video</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Banner principal */}
          <View style={styles.mainBanner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>Esenciales{'\n'}para tu hogar{'\n'}desde $299</Text>
              <View style={styles.shippingInfo}>
                <View style={styles.shippingBadge}>
                  <Text style={styles.whiteText}>🚚 Envíos gratis</Text>
                </View>
              </View>
            </View>
            <View style={styles.bannerImageContainer}>
              <View style={styles.productsPreview}>
                <Image
                  source={require('./assets/colores.jpeg')}
                  style={styles.previewImage}
                />
              </View>
              <TouchableOpacity style={styles.verMasButton}>
                <Text style={styles.verMasText}>Ver más</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Grid de productos */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.productGrid}
          >
            <TouchableOpacity style={styles.productCard}>
              <Text style={styles.cardTitle}>Comprar{'\n'}nuevamente</Text>
              <Image
                source={require('./assets/img1.jpeg')}
                style={styles.productImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <Text style={styles.cardTitle}>Seguir{'\n'}comprando...</Text>
              <Image
                source={require('./assets/img2.jpeg')}
                style={styles.productImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.productCard}>
              <Text style={styles.cardTitle}>Oferta{'\n'}recomendada</Text>
              <Image
                source={require('./assets/img3.jpeg')}
                style={styles.productImage}
              />
            </TouchableOpacity>
          </ScrollView>

          {/* Banner naranja */}
          <TouchableOpacity style={styles.orangeBanner}>
            <Text style={styles.orangeTitle}>Pide hoy, recibe mañana</Text>
            <Text style={styles.orangeSubtitle}>*En pedidos elegibles, consulta términos y condiciones</Text>
          </TouchableOpacity>

          {/* Producto patrocinado */}
          <TouchableOpacity 
            style={styles.sponsoredProduct}
            onPress={handleAddToCart}
          >
            <View style={styles.sponsoredContent}>
              <Image
                source={require('./assets/crema.jpeg')}
                style={styles.sponsoredImage}
              />
              <View style={styles.sponsoredInfo}>
                <Text style={styles.productTitle} numberOfLines={2}>
                  DOVE Sérum Corporal en Crema Dermo Hidratante con...
                </Text>
                <Text style={styles.productPrice}>$115.00</Text>
                <View style={styles.sponsoredBadge}>
                  <Text style={styles.sponsoredText}>Patrocinado</Text>
                  <Text style={styles.infoIcon}>ⓘ</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Ofertas para ti</Text>
        </ScrollView>

        {/* Navegación inferior */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>👤</Text>
            <Text style={styles.navText}>Cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <View style={styles.cartContainer}>
              <Text style={styles.navIcon}>🛒</Text>
              {cartCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartCount}>{cartCount}</Text>
                </View>
              )}
              <Text style={styles.navText}>Carrito</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>☰</Text>
            <Text style={styles.navText}>Menú</Text>
          </TouchableOpacity>
        </View>

        <StatusBar barStyle="dark-content" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  contentContainer: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'white',
    margin: 10,
    padding: 12,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#666',
  },
  cameraIcon: {
    fontSize: 18,
    color: '#666',
    padding: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: Platform.OS === 'ios' ? 10 : 5,
  },
  locationBar: {
    backgroundColor: '#adf0e5',
    paddingVertical: 12,
  },
  locationBarContent: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  navButton: {
    marginRight: 15,
  },
  locationText: {
    fontWeight: '500',
    marginHorizontal: 4,
  },
  dropdownIcon: {
    fontSize: 12,
  },
  navText: {
    color: '#333',
  },
  mainBanner: {
    backgroundColor: '#ff5722',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
  },
  bannerImageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  productsPreview: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  verMasButton: {
    backgroundColor: '#e6ff99',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  verMasText: {
    color: '#000',
    fontWeight: '500',
  },
  shippingInfo: {
    marginTop: 15,
  },
  shippingBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  whiteText: {
    color: 'white',
  },
  productGrid: {
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  productCard: {
    backgroundColor: 'white',
    width: windowWidth * 0.4,
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 4,
  },
  cardTitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20,
  },
  orangeBanner: {
    backgroundColor: '#ff5722',
    padding: 16,
    alignItems: 'center',
    marginVertical: 15,
  },
  orangeTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  orangeSubtitle: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  sponsoredProduct: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 8,
  },
  sponsoredContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  sponsoredImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 15,
  },
  sponsoredInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sponsoredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sponsoredText: {
    color: 'gray',
    fontSize: 12,
    marginRight: 4,
  },
  infoIcon: {
    color: 'gray',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
  },
  bottomNav: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  cartContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#ff5722',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});