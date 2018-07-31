import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Friends} from "../model/friend.model";
import {Observable} from "rxjs/Observable";
import {FriendService} from "./friend.service";
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';


@Injectable()
export class FriendResolver implements Resolve<Friends> {

    constructor(private service: FriendService) {
        
    } 
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Friends> {
        var id = route.paramMap.get('id');
        return this.service.getFriends();
    }
}