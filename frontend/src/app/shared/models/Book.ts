import {Author} from "./Author";
import {Category} from "./Category";
import {Publisher} from "./Publisher";

export class Book {

  id: number;

  title: String;

  description: String;

  pages: number;

  price: number;

  stock: number;

  author: Author;

  category: Category;

  publisher: Publisher;

}
