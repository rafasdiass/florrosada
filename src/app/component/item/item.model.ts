export class Item {
  id: string;
  name: string;
  description: string;
  unit_price: number;
  product_url: string;
  quantity: number;
  quantityCart: number;

  constructor(
    id: string,
    name: string,
    description: string,
    unit_price: number,
    product_url: string,
    quantity: number,
    quantityCart: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.unit_price = unit_price;
    this.product_url = product_url;
    this.quantity = quantity;
    this.quantityCart = quantityCart;
  }
}
