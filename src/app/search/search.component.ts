import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  books: Book[];
  searchText: string = '';
  filteredBooks: Book[];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
    this.filteredBooks = this.books;
  }

  ngOnInit(): void {}

  onSearch() {
    this.filteredBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
