import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){}
  
public getservice(){
  let data = this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  return data;
}
public postservice(data:any){
  console.log(data);
  return this.http.post("https://localhost:80/every/addenseignat.php",data);
}

}
