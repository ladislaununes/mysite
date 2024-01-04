import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  ngOnInit(): void {
    const typed = new Typed('#element', {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });
  }
 
}
