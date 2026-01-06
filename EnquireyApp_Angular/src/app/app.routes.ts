import { Routes } from '@angular/router';
import { EnquiryListComponent } from './pages/enquiry-list/enquiry-list.component';
import { NewEnquiryComponent } from './pages/new-enquiry/new-enquiry.component';
import { ActivatedRoute } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "list",
        pathMatch: 'full'
    },
     
    {
        path: 'createNew',
        component: NewEnquiryComponent

    },
    {
        path: 'createNew/:id',
        component: NewEnquiryComponent
    },
    {
        path: "list",
        component: EnquiryListComponent
    }
    
];
