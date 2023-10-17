import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import Home from '../screens/Home'
import Games from '../screens/Games'
import FirstGame from '../screens/FirstGame'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import LoginScreen from '../screens/Login'
import SignInScreen from '../screens/SignIn'

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
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={24} color={color}/>
        },
        tabBarActiveTintColor: '#FFE03D',
        tabBarInactiveTintColor: '#1E1E1E',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#000000',
          borderTopWidth: 2,
        },
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarLabelPosition: 'below-icon',
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile}/>
      <Tab.Screen name='Settings' component={Settings}/>
    </Tab.Navigator>
  )
}

// const Drawer = createDrawerNavigator()

// function DrawerGroup() {
//   return (
//     <Drawer.Navigator
//     screenOptions={{ 
//       headerShown: false,
//       drawerActiveTintColor: '#FFE03D',
//       drawerInactiveTintColor: 'gray',
//       drawerStyle: {
//         backgroundColor: '#1A1A19',
//         width: 200,
//       },
//     }}
//     >
//       <Drawer.Screen name='StakGroup' component={StakGroup} />
//       <Drawer.Screen name='Score' component={Score}/>
//     </Drawer.Navigator>
//   )
// }

export default function Navigate() {
  return (
      <StakGroup />
  )
}

