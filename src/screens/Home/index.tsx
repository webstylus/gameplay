import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Brackground'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: { id: '1', name: 'Lendários', icon: 'league_of_legends.png', owner: true },
      category: '1',
      date: '22/06 à 20:40h'
    },
    {
      id: '2',
      guild: { id: '1', name: 'Yeah, boy', icon: 'read_dead_redemption_2.png', owner: false },
      category: '3',
      date: '22/06 à 20:40h'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category
      ? setCategory('')
      : setCategory(categoryId)
  }

  function handleAppointmentDetail() {
    navigation.navigate('AppointmentDetail')
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <ListHeader title={'Partidas agendadas'} subtitle={'Total 6'} />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={handleAppointmentDetail} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 69}}
      />
    </Background>
  )
}
