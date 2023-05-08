import { Home } from '../screens/Home'
import { ProductsScreen } from '../screens/Products'
import { Icons } from '../components/Icon';

export const ScreensArray = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Home, notification: 0, },
  { route: 'Verduras', label: 'Verduras', type: Icons.MaterialCommunityIcons, icon: 'grass', component: ProductsScreen, notification: 0, },
  { route: 'Legumes', label: 'Legumes', type: Icons.MaterialCommunityIcons, icon: 'carrot', component: ProductsScreen, notification: 0, },
  { route: 'Frutas', label: 'Frutas', type: Icons.MaterialCommunityIcons, icon: 'fruit-grapes', component: ProductsScreen, notification: 0, },
  { route: 'Cereais', label: 'Cereais', type: Icons.MaterialCommunityIcons, icon: 'barley', component: ProductsScreen, notification: 0, },
  { route: 'Pedido', label: 'Sacola', type: Icons.Feather, icon: 'shopping-cart', component: Home, notification: 4, },
];

export const ProfileMenu = [
  { label: 'Pedidos', icon: 'history', iconType: Icons.MaterialIcons },
  { label: 'Favoritos', icon: 'star', iconType: Icons.MaterialIcons },
  { label: 'Sair', icon: 'logout', iconType: Icons.MaterialIcons },
]
export const ProfileUser = {
  name: 'Kelsey Van',
  category: 'VIP',
  profile: require('../../../assets/avatar.png'),
  email: 'kelseyvan@fiap.com.br'
}