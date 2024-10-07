import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myapp';
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Set background color using Renderer2 for better Angular practices
    this.renderer.setStyle(document.body, 'margin', 0);
    this.renderer.setStyle(document.body, 'padding', 0);
    this.renderer.setStyle(document.body, 'box-sizing', 'border-box');

    this.renderer.setStyle(
      document.body,
      'background-image',
      'linear-gradient(45deg, rgba(255, 255, 255, 1) 0%, rgba(142, 255, 215, 1)'
    );
    this.renderer.setStyle(document.body, 'height', '100vh');
  }
}
