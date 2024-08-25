export interface Pditem {
  _id: string;
  Id: number;
  Brand: string;
  Model: string;
  Color: string;
  Price: number;
  Performance: string;
  Description: string;
  ImageURL: string;
  Type: string;
  IsFeatured: boolean;
  ProductionYear: number;
}

export interface PdProps {
  pditems: Pditem[];
}

export interface ContentProps {
  id: number;
  brand: string;
  model: string;
  color: string;
  price: number;
  performance: string;
  description: string;
  image: string;
  type: string;
  year: number;
}

export interface ItemProps {
  id: number;
  brand: string;
  model: string;
  color: string;
  price: number;
  performance: string;
  description: string;
  image: string;
  type: string;
  year: number;
}
