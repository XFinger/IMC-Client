import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Listitem} from "../model/listitem.model";
import {Observable} from "rxjs/Observable";
import {ListitemService} from "./listitem.service";
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';


@Injectable()
export class ListitemResolver implements Resolve<Listitem> {
id: number;
    constructor(private service: ListitemService) {
        
    } 
    
    resolve(
         route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot
        
    ): Observable<Listitem> {
        console.log('from resolver ' + route.params.id);

       // var id: number = route.params.id;
        var id  = route.paramMap.get('id');
        return this.service.getListitems(id);
    }
}
