// 1. Singular Types
type Name = string;
type RollNo = number;
type IsActive = boolean;
type Emails = string[];
type RollNos = number[];

// Using above
const firstName: Name = "Apsara";
const emails: Emails = ["hello", "hi", "1"];
const names: Name[] = ["Apsara", "Saya"]; // <= best practice

// 2. Mixed types
type Id = number | string; // || => evaluate, | type or union or enum like
type Cat = "black" | "white" | "grey" | "nepali"; // <= Important
type Mixed = "black" | "red" | 1 | 2 | false;

const cats: Cat[] = ["black"];
const ids: Id[] = [1, "hehe", "hello", "red"];
const mixedThings: Mixed[] = ["black", 1, false];

// Object Types
type NameObject = {
  firstName: string;
  lastName: string;
};
interface NameObjectI {
  firstName: string;
  lastName: string;
}

const nameObj: NameObject = {
  firstName: "Apsara",
  lastName: "Bishwokarma",
};

// Complex type of object
// type Product = {
//   id: number | string;
//   name: string;
//   price: number;
//   category: "category1" | "category2";
//   rating: {
//     count: number;
//     rate: number;
//   };
// };

// const product1: Product = {
//   id: 1,
//   name: "book",
//   price: 200,
//   category: "category1",
//   rating: {
//     count: 5,
//     rate: 4,
//   },
// };

type Category = "category1" | "category2";
type Rating = {
  count: number;
  rate: number;
};
type Variant = {
  price: number;
  color: string;
};

type Product = {
  id: number | string;
  name: string;
  price: number;
  category: Category;
  rating: Rating;
  variants?: Variant[];
  reviews: {
    user: string;
    rating: number;
  }[];
};

const product1: Product = {
  id: 1,
  name: "book",
  price: 200,
  category: "category1",
  rating: {
    count: 5,
    rate: 4,
  },
  variants: [
    {
      color: "red",
      price: 200,
    },
  ],
  reviews: [
    {
      user: "Ram",
      rating: 2,
    },
  ],
};

const rating1: Rating = {
  rate: 2,
  count: 5,
};

const category: Product["category"] = "category1";
const review: Product["reviews"][number] = {
  rating: 10,
  user: "hey",
};
const variant: NonNullable<Product["variants"]>[0] = {
  color: "red",
  price: 100,
};
