import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Client } from './client';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrdersService {
	private ordersUrl = `https://pink.adminmoda.com/admin/stylist_portal/api/v1/orders?user_id=`;
	private orderInfoUrl = `https://api-integration.modaoperandi.com/public/v3.3/variants/`;

	private headers = new Headers ({'Content-Type': 'application/json', 'Authorization': 'Bearer e92bf7088a11c2b07caf54b60a7561e22a0ff7ccf061ad1fa2e701f4c066b980'});
	constructor(private http: Http) { };


	getOrders(id: number): Promise<string[]> {
		const orderUrl = `${this.ordersUrl}${id}`;
		return this.http.get(orderUrl, { headers: this.headers})
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}



	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}


}