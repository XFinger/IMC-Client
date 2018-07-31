
import {Status} from "./status.model";

export interface Listitem {
    id: number;
    listable_id: number;
    listable_type: string;
    item: string;
    item_url: string;
    more?: string;
    suggested_by?: number;
    selected_by?: number;
    selected_from?: number;
    status: Status;
    };
