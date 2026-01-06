import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewEnquiryComponent } from './pages/new-enquiry/new-enquiry.component';
import { EnquiryListComponent } from './pages/enquiry-list/enquiry-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet]  ,
    templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EnquireApp_Angular';
}
