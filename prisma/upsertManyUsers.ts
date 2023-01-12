import { ReviewType, Role } from "@prisma/client";

export default [
  {
    where: {
      email: "willamesoares65@gmail.com"
    },
    update: {},
    create: {
      id: "3f2eb13e-8a8c-48df-844d-fa5e6edff281",
      email: "willamesoares65@gmail.com",
      username: `soawillb`,
      role: Role.ADMIN,
    }
  },
  {
    where: {
      email: "foo@bar.com"
    },
    update: {
      reviews: {
        createMany: {
          data: [
            {
              id: "a43d2664-bcf4-46ba-a06b-13f02fa34176",
              text: "Amazing mexican artist with deep lyrics in her songs.",
              rating: 5,
              reviewType: ReviewType.ARTIST
            },
            {
              id: "99e38226-b7f2-483d-863b-2aa06840f348",
              text: "One of the best hyperpop albums out there. Just wished it could be longer :)",
              rating: 4.8,
              reviewType: ReviewType.ALBUM
            }
          ]
        }
      }
    },
    create: {
      id: "a109ffb1-3d54-47ba-afec-08e609578bcd",
      email: "foo@bar.com",
      username: `foobar`,
      role: Role.USER,
    }
  }
];
