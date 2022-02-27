export interface Category {
    id:string;
    name: string;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    image: string[];
    description: string;
    category:Category;

}