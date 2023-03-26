import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dst',
  templateUrl: './dst.component.html',
  styleUrls: ['./dst.component.css']
})
export class DstComponent {
constructor(private router :Router){}
doc(){
  this.router.navigate(["/document"])
}
stage(){
  this.router.navigate(["/stage"])
}
transport(){
  this.router.navigate(["/transport"])
}
}
