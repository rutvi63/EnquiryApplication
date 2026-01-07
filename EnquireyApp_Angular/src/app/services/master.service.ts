import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
import { Enquiry } from '../models/enquiry.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  createEnquiry(obj: any){
    return this.http.post("https://localhost:7124/api/EnquiryMaster/CreateNewEnquiry", obj).subscribe();
   
  }

  UpdateEnquiry(obj: any){
    return this.http.put("https://localhost:7124/api/EnquiryMaster/UpdateEnquiry", obj).subscribe();
   
  }

  getStatus(){
    return this.http.get("https://localhost:7124/api/EnquiryMaster/GetAllStatus")
  }

  getTypes(){
    return this.http.get("https://localhost:7124/api/EnquiryMaster/GetAllTypes")
  }
  getAllEnquiries():Observable<Enquiry[]>{
    return this.http.get<Enquiry[]>("https://localhost:7124/api/EnquiryMaster/GetAllEnquiry");
  }

  getEnquiryById(id : number):Observable<Enquiry>{
    return this.http.get<Enquiry>("https://localhost:7124/api/EnquiryMaster/getEnquiryById/" + id);
  }

  DeleteEnquiryById(id: number): Observable<boolean>{
    return this.http.delete<boolean>("https://localhost:7124/api/EnquiryMaster/DeleteEnquiryById?id=" + id);
  }
}

