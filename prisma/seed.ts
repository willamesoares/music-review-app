import { PrismaClient } from '@prisma/client'

import artists from './createManyArtists'
import songs from './createManySongs'
import reviews from './createManyReviews'
import albums from './createManyAlbums'
import users from './createManyUsers'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany(users);
  await prisma.artist.createMany(artists);
  await prisma.album.createMany(albums);
  await prisma.review.createMany(reviews);
  await prisma.song.createMany(songs);
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })