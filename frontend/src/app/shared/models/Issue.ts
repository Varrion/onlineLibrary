import {User} from "./User";
import {Book} from "./Book";

export class Issue {

  id: number;

  book: Book;

  users: User[];

  takeDate: Date;

  returnDate: Date;

  description: String;
}
