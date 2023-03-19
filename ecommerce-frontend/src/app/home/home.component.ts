import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../shared/services/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booklist: string[] = [];
  constructor(private bookService: BookServiceService) {
    
  }

  ngOnInit(): void {
    this.bookService.getBookList().subscribe((list) => {
      this.booklist = list;
    })
  }

}
