import { Component } from '@angular/core';
import { Client } from './client';

const CLIENTS: Client[] = [
  { id: 10, firstName: 'Menaka', lastName: 'Sampath', email: 'menakasampath@gmail.com', phone: '215-280-1707', country: 'United States of America', dob: '07/16/1988', stylist: 'None', status: 'Customer', receivesInvoice: false, trackCustomer: false, dailyEmail: 0, specialEmail: false, shoppingBagEmail: false, vipEmail: false, designers: ['Dolce & Gabbana', 'Johanna Ortiz', 'Mansur Gavriel'] },
  { id: 11, firstName: 'Kristin', lastName: 'Kane', email: 'kakane2@gmail.com', phone: '607-592-8409', country: 'United States of America', dob: '06/02/1975', stylist: 'None', status: 'Customer', receivesInvoice: false, trackCustomer: false, dailyEmail: 0, specialEmail: false, shoppingBagEmail: false, vipEmail: false, designers: [] },
  { id: 12, firstName: 'BamBam', lastName: 'Sampath', email: 'bambamthedog@gmail.com', phone: '215-280-1707', country: 'United States of America', dob: '12/02/2009', stylist: 'None', status: 'Customer', receivesInvoice: false, trackCustomer: false, dailyEmail: 0, specialEmail: false, shoppingBagEmail: false, vipEmail: false, designers: [] }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Client Dashboard';
  clients = CLIENTS;
  selectedClient: Client;


  onSelect(client: Client): void {
  	this.selectedClient = client;
  }
}
