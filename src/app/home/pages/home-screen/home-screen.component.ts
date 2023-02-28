import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Hammer from 'hammerjs';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements AfterViewInit {

  @ViewChild('carousel', { static: false }) carouselElement!: ElementRef<HTMLDivElement>;
  currentSlide: number = 0;
  constructor() { }

  ngAfterViewInit(): void {
    const carousel = this.carouselElement.nativeElement;
    const hammer = new Hammer.Manager(carousel);
    const swipe = new Hammer.Swipe();
    hammer.add(swipe);

    hammer.on('pan', (event: any) => {
      const direction = event.offsetDirection;
      if (direction === Hammer.DIRECTION_LEFT) {
        this.currentSlide = (this.currentSlide + 1) % 3; // avanza al siguiente slide
      } else if (direction === Hammer.DIRECTION_RIGHT) {
        this.currentSlide = (this.currentSlide + 2) % 3; // retrocede al slide anterior
      }
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 3;
  }
  
  previousSlide() {
    this.currentSlide = (this.currentSlide + 2) % 3;
  }
}


