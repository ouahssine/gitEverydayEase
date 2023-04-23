import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  //constructor(private route:Router ,private apiservice : ApiService){}
  public logi : Login;
  constructor(private apiservice : ApiService){
    this.logi=new Login();
  }
  onSubmit(form:NgForm) {
    this.apiservice.postservice(this.logi).subscribe((res)=>{
      console.log(res);
    })
  }
  public table:any=[];
  ngOnInit(): void {
   // this.getapi();
  }
  /*getapi(){
    this.apiservice.getservice().subscribe(
      res=>{
        this.table=res;
        console.log("api:",res);
      }
    )
    console.log("api:",this.table);
  }*/

}
