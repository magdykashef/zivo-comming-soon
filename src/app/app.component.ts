import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  birthday = '\'May\' 24, 2021 00:00:00';
  countDown: number = new Date(this.birthday).getTime();

  constructor() {
  }

  ngOnInit(): void {
    this.counter();
  }

  counter(): void {
    const second = 1000;
    const minute: number = second * 60;
    const hour: number = minute * 60;
    const day: number = hour * 24;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countDown - now;

      this.days = Math.floor(distance / (day));
      this.hours = Math.floor((distance % (day)) / (hour));
      this.minutes = Math.floor((distance % (hour)) / (minute));
      this.seconds = Math.floor((distance % (minute)) / second);

      // do something later when date is reached
      if (distance <= 0) {
        clearInterval(timer);
      }
      // seconds
    }, 0);
  }


}
