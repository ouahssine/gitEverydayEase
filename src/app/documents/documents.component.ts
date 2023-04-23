import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit{
	constructor(private apiservice : ApiService,private http: HttpClient){}

  firstListValue: string = "";
	secondListOptions: string[] = [];

	
	secondListOptionsMap: { [key: string]: string[] } = {
		option1: ["GLASI", "LAII", "LISI","LT"],
		option2: ["GLASI", "LAII", "LISR","LSE_IOT","LT"],
		option3: ["GLASI", "LAII", "LISR","LSE_IOT","LT"]
	};


	onFirstListChange(event: any) {
		this.firstListValue = event.target.value;

		
		if (this.firstListValue in this.secondListOptionsMap) {
			this.secondListOptions = this.secondListOptionsMap[this.firstListValue];
		}
		
		else {
			this.secondListOptions = [];
		}
	}
	search(){
		
	}
	onSubmit(){

	}
	table:any[];
	ngOnInit() {
		
	  }
}
