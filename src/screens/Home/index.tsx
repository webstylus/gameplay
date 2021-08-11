import React, { useState, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Brackground'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../config/database'
import { Load } from '../../components/Load'

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation()
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])
  const [loading, setLoading] = useState(true)

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []
    if (category) {
      setAppointments(storage.filter(item => item.category === category))
    } else {
      setAppointments(storage)
    }
    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments().then()
  }, [category]))

  function handleCategorySelect(categoryId: string) {
    categoryId === category
      ? setCategory('')
      : setCategory(categoryId)
  }

  function handleAppointmentDetail(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetail', { guildSelected })
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

      {
        loading
          ? <Load />
          : <>
            <ListHeader
              title={'Partidas agendadas'}
              subtitle={`Total ${appointments.length}`} />

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetail(item)} />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 69 }}
            />
          </>
      }
    </Background>
  )
}
