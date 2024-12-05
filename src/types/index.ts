export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  specs?: {
    [key: string]: string | number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}