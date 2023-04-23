import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connecte',
  templateUrl: './connecte.component.html',
  styleUrls: ['./connecte.component.css']
})
export class ConnecteComponent {
  constructor(private router :Router){}
  onSubmit(){
    this.router.navigate(["/dst"])
  }
  inscri(){
    this.router.navigate(["/inscription"])
  }
}
