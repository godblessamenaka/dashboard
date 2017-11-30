import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Client } from './client';
import { CLIENTS } from './mock-clients';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {
	private clientsUrl = 'https://moda-operandi-admin-stage.herokuapp.com/admin/stylist_portal/api/v1/clients';

	private headers = new Headers ({'Content-Type': 'application/json', 'Authorization': 'Bearer 9f83725de11eac54e1b01ff6c64f43779a3d8859b17379dd2ecef048fab02884'})

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