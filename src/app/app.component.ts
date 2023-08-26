import { Component } from '@angular/core';
import { BookServiceService } from './book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';

  getData:any=""

  constructor(private getServ:BookServiceService){   this.bookApi()  }


  bookApi(){
    return this.getServ.fetchApi().subscribe((Response:any)=>{console.log(Response);
      this.getData=Response.items
    })
  }
}
