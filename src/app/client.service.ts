import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Client } from './client';
import { CLIENTS } from './mock-clients';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {
	private recsUrl = 'https://morecs.modaoperandi.com/variants?user_id=';
	private recInfoUrl = 'https://api-integration.modaoperandi.com/public/v3.3/variants/';
	private headers = new Headers ({'Content-Type': 'application/json'})
	constructor(private http: Http) { };
	
	getClients(): Promise<Client[]> {
		return Promise.resolve(CLIENTS);
	}

	getRecs(id: number): Promise<string[]> {
		const recUrl = `${this.recsUrl}${id}`;
		return this.http.get(recUrl)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	getRecInfo(pid:string): Promise<any> {
		const recInfo = `${this.recInfoUrl}${pid}`;
		return this.http.get(recInfo)
			.toPromise()
			.then(response => this.handleResponse(response.json()))
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	private handleResponse(resp) {
		console.log(resp);
	}

}