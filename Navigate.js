import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import Home from './screens/Home'
import Games from './screens/Games'
import FirstGame from './screens/FirstGame'
import Settings from './screens/Settings'
import Score from './screens/Score'

const Stack = createNativeStackNavigator()

function StakGroup() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: 'fullScreenModal',
    }}
    >
      <Stack.Screen name='TabGroup' component={TabGroup} />
      <Stack.Screen name='Games' component={Games}/>
      <Stack.Screen name='FirstGame' component={FirstGame}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: '#FFE03D',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1A1A19',
          borderTopColor: '#1A1A19',
          borderTopWidth: 2,
        },
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Settings' component={Settings}/>
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()

function DrawerGroup() {
  return (
    <Drawer.Navigator
    screenOptions={{ 
      headerShown: false,
      drawerActiveTintColor: '#FFE03D',
      drawerInactiveTintColor: 'gray',
      drawerStyle: {
        backgroundColor: '#1A1A19',
        width: 200,
      },
    }}
    >
      <Drawer.Screen name='StakGroup' component={StakGroup} />
      <Drawer.Screen name='Score' component={Score}/>
    </Drawer.Navigator>
  )
}

export default function Navigate() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
};
