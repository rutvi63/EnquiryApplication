import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import { Enquiry } from '../../models/enquiry.model';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-enquiry-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent implements OnInit{

  loadingSpinner:boolean = true;
  enquiryList:Enquiry[] = [];
  masterSer = inject(MasterService);
  typeList: Observable<any> = new Observable<any>();
  statusList: Observable<any> = new Observable<any>();
  selectedEnquiryType: number = -1;
  selectedStatusType: number = -1;
  enquiryId: string|null = "";
  
    //enquiryList : Observable<an y> = new Observable<any>();
  
  constructor(){
      this.selectedEnquiryType = -1;
      this.selectedStatusType = -1;
      this.typeList = this.masterSer.getTypes();
      this.statusList = this.masterSer.getStatus();
      
  }
  ngOnInit(): void {
    this.loadEnquiries(); 
    
  }
  loadEnquiries() : void
  {
    this.loadingSpinner = false;
   this.masterSer.getAllEnquiries().subscribe((res: any)=>
      {
        this.enquiryList = res;
      });
    
  }
  deleteEnquiry(id: number): void{
    this.masterSer.DeleteEnquiryById(id);      
  }
  
}
