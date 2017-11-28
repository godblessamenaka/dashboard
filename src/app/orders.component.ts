import { Component, Input, OnChanges } from '@angular/core';
import { Client } from './client';
// import { Order } from './order';

import { OrdersService } from './orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ OrdersService ]
})

export class OrdersComponent {
	@Input() client: any;
	orders: any[];
	orderItems: any[];
	orderList: any[] = [];

	constructor(
		private ordersService: OrdersService
	) {}


	ngOnChanges(): void {
		this.orders = [];
		this.orderItems = [];
		this.orderList = [];
		this.getOrders();
		console.log(this);
	}

	getOrders(): void {
		this.ordersService.getOrders(this.client.id).then(resp => this.setOrders(resp));
	}
	

	setOrders(orders): void {
		this.orders = orders;
		this.orderItems = this.orders.map((order) => {
			return order.order_items
		})
		var self=this;
		this.orderItems.forEach((order) => {
			order.map((item) => { 
				self.orderList.push({
					id: item.product.id,
					name: item.product.name,
					price: item.retail_price,
					image: item.product.images.primary.medium,
					designer: item.product.designer_name
				});
			})
		});
		console.log(this);
	}

	loadOrders(num): void {
		this.orderList = this.orderList.slice(num,this.orderList.length);
	}



}

