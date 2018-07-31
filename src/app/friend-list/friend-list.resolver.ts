import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {FriendList} from "../model/friend-list.model";
import {Observable} from "rxjs/Observable";
import {FriendListService} from "./friend-list.service";
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';


@Injectable()
export class FriendListResolver implements Resolve<FriendList> {

    constructor(private service: FriendListService) {
        
    } 
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<FriendList> {
        var id = route.paramMap.get('id');
        return this.service.getFriendList(id);
    }
}
