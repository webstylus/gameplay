import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Guild, GuildProps } from '../Guild'
import { ListDivider } from '../ListDivider'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    {
      id: '2',
      name: 'Yeah, Boy',
      icon: null,
      owner: false
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered/>}
        style={styles.guilds}
        contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
      />
    </View>
  )

}
