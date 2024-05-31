export interface Product {
    name: 'String';
    price: number;
    id: number;

}

export interface CartDetail{
    productId: number;
    quantity: number
}

export interface Category{
    id: number;
    nome: string;

}