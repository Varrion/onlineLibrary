import {Author} from "./Author";
import {Category} from "./Category";
import {Publisher} from "./Publisher";

export class Book {

  id: number;

  name: String;

  description: String;

  price: number;

  stock: number;

  author: Author;

  category: Category;

  publisher: Publisher;

}
