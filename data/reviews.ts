import { ReviewType } from "@prisma/client";

export default [
  {
    text: "Amazing mexican artist with deep lyrics in her songs.",
    rating: 5,
    reviewType: ReviewType.ARTIST,
    userId: "99e38226-b7f2-483d-863b-2aa06840f348",
    artistId: "52eca073-e7b7-4bd5-9927-20bf4e1201ed",
  },
  {
    text: "One of the best hyperpop albums out there. Just wished it could be longer :)",
    rating: 4.8,
    reviewType: ReviewType.ALBUM,
    userId: "99e38226-b7f2-483d-863b-2aa06840f348",
    albumId: "02c37b91-0a5f-4f3f-a2ab-095f9569bfb0",
  }
];
