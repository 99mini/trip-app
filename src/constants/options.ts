export type BaseSelectType = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type SelectTravelType = BaseSelectType & { people: string };
export type SelectBudgetType = BaseSelectType;

export const SelectTravelesList: SelectTravelType[] = [
  {
    id: 1,
    title: "Solo",
    description: "Traveling solo can be a great way to explore the world on your own terms and at your own pace. It can be a liberating and empowering experience.",
    icon: "🚶‍♂️",
    people: "1",
  },
  {
    id: 2,
    title: "Couple",
    description: "Traveling as a couple can be a great way to strengthen your relationship and create lasting memories together.",
    icon: "👫",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    description: "Traveling with your family is a great way to bond and create lasting memories together. It can be a fun and rewarding experience for everyone involved.",
    icon: "👨‍👩‍👧",
    people: "3+ people",
  },
  {
    id: 4,
    title: "Friends",
    description:
      "Traveling with friends is a great way to create lasting memories and strengthen your friendships. It can be a fun and rewarding experience for everyone involved.",
    icon: "👨‍👨‍👧‍👧",
    people: "4+ people",
  },
];

export const SelectBudgetOptions: SelectBudgetType[] = [
  {
    id: 1,
    title: "Cheap",
    description: "Traveling on a budget doesn't mean you have to sacrifice comfort or fun. There are plenty of ways to save money while still having a great trip.",
    icon: "💰",
  },
  {
    id: 2,
    title: "Moderate",
    description: "Traveling on a moderate budget allows you to enjoy a mix of comfort and adventure without breaking the bank.",
    icon: "💸",
  },
  {
    id: 3,
    title: "Luxury",
    description: "Traveling in luxury is all about indulging in the finer things in life. From 5-star hotels to private jets, the sky's the limit.",
    icon: "🥂",
  },
];
