import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ArtistCard = ({ artist }: { artist: {name: string, image: string} }) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: artist.image }} style={styles.image} />
        </View>
        <Text style={styles.name}>{artist.name}</Text>
    </View>
  )
}

export default ArtistCard

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})