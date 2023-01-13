import { enumType, extendType, objectType } from 'nexus'

import { Review } from './Review'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('createdAt')
    t.string('username')
    t.string('email')
    t.string('imageUrl')
    t.field('role', { type: Role })
    t.list.field('reviews', {
      type: Review,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .reviews()
      },
    })
  },
})

const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
})

export const UsersQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('users', {
        type: 'User',
        resolve(_parent, _args, ctx) {
          return ctx.prisma.user.findMany()
        },
      })
    },
  })