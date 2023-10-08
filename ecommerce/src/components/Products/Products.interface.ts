import { FormEvent } from "react";

export interface productModel {
  category: string;
  title: string;
  id: number;
  price: number;
  image: string;
  description: string;
  rating: rateModel;
}

interface rateModel {
  count: number;
  rate: number;
}

export type eventType = FormEvent<HTMLInputElement | HTMLSelectElement>;
