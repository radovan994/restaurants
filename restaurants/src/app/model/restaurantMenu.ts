import { Menu } from './menu';
export class RestaurantMenu {
    count:number;
    results:Menu;

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results || [];
	}
}