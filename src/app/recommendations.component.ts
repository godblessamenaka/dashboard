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

export class RecommendationsComponent {
	@Input() client: Client;
	recs: any[];
	recInfo: any;
	fullRecs: any[] = [];

	constructor(
		private recommendationsService: RecommendationsService
	) {}


	ngOnChanges(): void {
		this.getRecs();
		console.log(this);
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
	}

	getRecInfo(rec): any {
		var self = this;
		this.recommendationsService.getRecInfo(rec).then(res => {
			self.fullRecs.push({
				id: res.data.attributes.product_id, 
				name: res.data.attributes.name,
				image: res.data.attributes.variants_data[0].primary_image_urls.small_url,
				description: res.data.attributes.description
			});
		});
	}

	logIt(): void {
		console.log(this);
	}


}

