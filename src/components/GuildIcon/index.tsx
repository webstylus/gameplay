import React from 'react'
import { Image } from 'react-native'
import { styles } from './styles'

type Props = {
  image: null
}

export function GuildIcon({ image }: Props) {

  return (
    <Image
      style={styles.image}
      source={{ uri: `../../assets/${image}` }}
    />
  )

}
