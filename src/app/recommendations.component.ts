import { Component, Input, OnChanges } from '@angular/core';
import { Client } from './client';
import { Recommendation } from './recommendation';

import { RecommendationsService } from './recommendations.service'

@Component({
  selector: 'recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
  providers: [ RecommendationsService ]
})

export class RecommendationsComponent implements OnChanges{
	@Input() client: any;
	recs: any[] = [];
	fullRecs: any[] = [];
	currentDate: any;

	constructor(
		private recommendationsService: RecommendationsService
	) {}


	ngOnChanges(): void {
		// this.fullRecs = [];
		// this.recs = [];
		this.getRecs();
		console.log(this);
		this.currentDate = Date.now();
	}

	getRecs(): void {
		this.recommendationsService.getRecs(this.client.id).then(resp => this.setRecs(resp));
	}
	

	setRecs(recs): void {
		this.recs = recs;
		this.loadRecs(10);
	}

	loadRecs(num): void {
		this.recs.slice(0, num).forEach((reco) => {
			this.getRecInfo(reco);
		});
		this.recs = this.recs.slice(num,this.recs.length);
	}

	getRecInfo(rec): any {
		
		this.recommendationsService.getRecInfo(rec).then(res => {
			this.fullRecs.push({
				id: res.data.attributes.product_id, 
				name: res.data.attributes.name,
				price: res.data.attributes.retail_price_usd,
				image: res.data.attributes.variants_data[0].primary_image_urls.small_url,
				description: res.data.attributes.description,
				url: res.data.attributes.variants_data[0].href,
				designer: res.data.attributes.designer_names[0],
				available: res.data.attributes.active_in_shop
			});
		});
	}

	logIt(pid): void {
		console.log(pid);
	}



}

