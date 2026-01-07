import { FormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-enquiry',
  imports: [FormsModule, CommonModule, AsyncPipe],
  templateUrl: './new-enquiry.component.html',
  styleUrl: './new-enquiry.component.css'
})
export class NewEnquiryComponent implements OnInit{

  newEnquiryObj: any = {
    enquiryId : 0,
    enquiryTypeId: 0,
    enquiryStatusId: 0,
    customerName: '',
    mobileNo: '',
    email: '',
    message: '',
    createdDate: new Date(),
    resolution: ''
}
res: any;
errorMessage: string = '';
isSubmitting:boolean = false;
submitSuccess:boolean = false;
submitError: boolean = false;
c: boolean = true;
isDisabled : boolean = true;
masterService = inject(MasterService);

typeList: Observable<any> = new Observable<any>();
statusList: Observable<any> = new Observable<any>();
route = inject(ActivatedRoute);
enquiryId: string|null = "";
  onSave()
  {
    console.log(this.c);
    if(this.c)
    {
      this.newEnquiryObj.enquiryStatusId = 1;
      this.masterService.createEnquiry(this.newEnquiryObj);
      window.alert("Data saved successfully");
    }
    else{
      this.masterService.UpdateEnquiry(this.newEnquiryObj);
      window.alert("Data saved successfully");
    }
   
  }
  constructor()
  {
    this.typeList = this.masterService.getTypes();
    this.statusList = this.masterService.getStatus();
    
    
    this.isSubmitting = false;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';
    this.enquiryId = this.route.snapshot.paramMap.get('id');
    window.alert("Id:" + this.enquiryId)
    
   
  }
  ngOnInit(): void {
    this.typeList = this.masterService.getTypes();

    if(!this.c){
      this.onEdit(Number(this.enquiryId));
      
    }
  }

  onReset(){
    
  }
  onEdit(id: number): void{
    
     this.masterService.getEnquiryById(Number(this.enquiryId)).subscribe((res: any)=>
      {
        this.newEnquiryObj = res;
      });
      
  }
  
}
