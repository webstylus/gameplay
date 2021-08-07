import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'

type Props = {
  image: string
}

export function GuildIcon({ image }: Props) {
  const guildImg = `../../assets/${image}`
// console.log(guildImg)

  return (
    <Image
      style={styles.image}
      source={require(`../../assets/league_of_legends.png`)}
    />
  )

}
