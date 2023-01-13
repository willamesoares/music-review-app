import { enumType, extendType, objectType } from 'nexus'

export const Review = objectType({
  name: 'Review',
  definition(t) {
    t.string('id')
    t.string('createdAt')
    t.string('text')
    t.float('rating')
    t.string('userId')
    t.string('songId')
    t.string('albumId')
    t.string('artistId')
    t.field('reviewType', { type: ReviewType })
  },
})

const ReviewType = enumType({
  name: 'ReviewType',
  members: ['ALBUM', 'ARTIST', 'SONG'],
})

export const ReviewsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('reviews', {
      type: 'Review',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.review.findMany()
      },
    })
  },
})