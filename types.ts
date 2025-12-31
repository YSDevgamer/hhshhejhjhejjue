
export interface Product {
  id: string;
  name: string;
  price: number;
  comparePrice: number;
  currency: string;
  images: string[];
  description: string;
}

export interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Ingredient {
  number: string;
  title: string;
  description: string[];
  image: string;
}
