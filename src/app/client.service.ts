import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Client } from './client';
import { CLIENTS } from './mock-clients';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {
	private clientsUrl = 'https://moda-operandi-admin-stage.herokuapp.com/admin/stylist_portal/api/v1/clients';

	private headers = new Headers ({'Content-Type': 'application/json', 'Authorization': 'Bearer 97e904aae0ee89dafe63ed45781f715e0b5bc239728d7f5333ad3c52cbb0535d'})

	constructor(private http: Http) { };

	getClients(): Promise<any[]> {
		const clientUrl = `${this.clientsUrl}`;
		return this.http.get(clientUrl, { headers: this.headers})
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}
	
	// getClients(): Promise<Client[]> {
	// 	return Promise.resolve(CLIENTS);
	// }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}