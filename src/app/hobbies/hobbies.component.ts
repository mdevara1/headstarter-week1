import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements AfterViewInit {

  private currentSlide: number = 0;
  private slides: NodeListOf<Element> | undefined;

  ngAfterViewInit() {
    this.slides = document.querySelectorAll('.carousel-item');
    this.showSlide(this.currentSlide);
    setInterval(() => this.nextSlide(), 5000);
  }

  showSlide(index: number): void {
    if (this.slides) {
      const totalSlides = this.slides.length;

      if (index >= totalSlides) {
        this.currentSlide = 0;
      } else if (index < 0) {
        this.currentSlide = totalSlides - 1;
      } else {
        this.currentSlide = index;
      }

      const offset = -this.currentSlide * 100;
      const inner = document.querySelector('.carousel-inner');
      if (inner) {
        (inner as HTMLElement).style.transform = `translateX(${offset}%)`;
      }
    }
  }

  nextSlide(): void {
    this.showSlide(this.currentSlide + 1);
  }

  prevSlide(): void {
    this.showSlide(this.currentSlide - 1);
  }
}
