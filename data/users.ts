import { Role } from "@prisma/client";

export default [
  {
    id: "a43d2664-bcf4-46ba-a06b-13f02fa34176",
    email: "willamesoares65@gmail.com",
    username: `soawillb`,
    role: Role.ADMIN,
  },
  {
    id: "99e38226-b7f2-483d-863b-2aa06840f348",
    email: "foo@bar.com",
    username: `foobar`,
    role: Role.USER,
  }
];
