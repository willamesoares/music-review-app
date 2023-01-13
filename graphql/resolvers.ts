export const resolvers = {
    Query: {
      reviews: (_parent, _args, ctx) => {
        return ctx.prisma.review.findMany()
      },
    },
  }