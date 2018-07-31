import {Listitem} from "./listitem.model";
import {UserModel} from "./user.model";

export interface List {
  id: number;
  user_id: number;
  type: string;
  user: UserModel;
  listitems:  Listitem[];
  
}
 
 