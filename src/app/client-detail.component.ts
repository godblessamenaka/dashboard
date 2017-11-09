import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';


@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  providers: [ ClientService ]
})

export class ClientDetailComponent {
	@Input() client: Client;
	@Output() onMatch: EventEmitter<any> = new EventEmitter();

	constructor(
		private clientService: ClientService
	) {}


	public allDesigners: string[] = ['A.L.C.','Alberta Ferretti', 'Alice McCall', 'Alison Lou', 'Acler','Adeam','Adriana Degreas','Dolce & Gabbana', 'Johanna Ortiz', 'Mansur Gavriel','Alberta Ferreti','Ellery','Monse','Brock Collection','Marni','Brandon Maxwell','Charlotte Olympia','Elie Saab'];
	public matches: any = [];
	public inputValue: string = "";
  	private selectedDesigner: boolean = false

  	public onAutoComplete(value: string): void {
    this.matches = [];
	    if (this.selectedDesigner) {
	      this.selectedDesigner = false;
	      return;
	    }
	    if (value.length >= 3) {
	      this.updateMatches(value.toLowerCase());
	    }
  	}

  	public updateMatches(value: string) {

     this.matches = this.allDesigners.filter(function(el){
     	return el.indexOf(this.inputValue) > -1;
     }.bind(this));
     console.log(this.matches);
  	}

  	public selectMatch(match: any): void {
    this.selectedDesigner = true;
    this.onMatch.emit(match);
    console.log(this);
    if (this.client.designers.indexOf(match) > -1){
    	console.log ('already exists in client list')
    }else {
    	this.client.designers.push(match);
    }
  	}


	public removeDesigner(event) {
	  let deselected = event.target.innerText;
	  console.log(this);
	  this.client.designers = this.client.designers.filter(function(designer) {
		return designer != deselected
	  });
	}



	public clearDesigners() {
	  this.client.designers = [];
	}


	public addDesigner(event) {
	  let selected = event.target.innerText;
	  if (this.client.designers.indexOf(selected)>-1) {
	  	this.client.designers.push(selected);
	  }
	}
}

