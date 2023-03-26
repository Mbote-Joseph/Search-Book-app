import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      description: 'Description 1',
      price: 9.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      description: 'Description 2',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description:
        'A Pulitzer Prize-winning novel set in the 1930s American South, focusing on issues of racism and moral growth.',
      price: 14.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description:
        'A classic romantic novel exploring the themes of love, marriage, and social status in early 19th-century England.',
      price: 11.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description:
        'A portrayal of the American Dream in the Roaring Twenties, with themes of decadence, idealism, and excess.',
      price: 12.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      description:
        'A dystopian novel exploring the consequences of totalitarianism, mass surveillance, and repressive government control.',
      price: 13.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description:
        'A coming-of-age novel that deals with themes of innocence, identity, and the loss of innocence in the adult world.',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      description:
        "A sailor's narrative of the obsessive quest to hunt down the great white whale Moby-Dick.",
      price: 15.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      description:
        'A psychological novel that explores the moral dilemmas and mental anguish of a desperate young man who commits murder.',
      price: 14.49,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      description:
        'A dystopian novel that envisions a technologically advanced future society driven by hedonism and the pursuit of happiness.',
      price: 12.49,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      title: 'The Odyssey',
      author: 'Homer',
      description:
        'An epic poem following the adventures of the Greek hero Odysseus as he attempts to return home after the Trojan War.',
      price: 16.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoevsky',
      description:
        'A philosophical novel that explores themes of faith, doubt, and morality through the story of a troubled Russian family.',
      price: 18.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }
}
