import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router, ParamMap} from "@angular/router";
import {List} from "../model/list.model";
import {Observable} from "rxjs/Observable";
import {WishlistService} from "./wishlist.service";
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';


@Injectable()
export class WishlistResolver implements Resolve<List> {

    constructor(private service: WishlistService) {
        
    } 
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<List> {
        var id = route.paramMap.get('id');
        return this.service.getWishlist(id);
    }
}