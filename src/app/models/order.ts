import { Cart } from './cart';
import { User } from './user';

export interface Order {
  // @ts-ignore
  date: Date;
  cart: Cart[];
  user: User;
}
