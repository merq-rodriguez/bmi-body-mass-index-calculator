import { Genre } from './types/genre.enum';
import { IPerson } from './interfaces/person.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  stopCounter = true;
  initInterval: any;

  genresList = [
    { id: 1, name: Genre.MALE, icon: 'fas fa-mars genre' },
    { id: 2, name: Genre.FEMALE, icon: 'fas fa-venus genre' },
  ];

  person = {
    age: 18,
    higth: 170,
    genre: Genre.MALE,
    weight: 40,
  } as IPerson;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getCounterWeight(op: string) {
    console.log(op)
    if (op == 'substract') this.person.weight--;
    else if (op == 'sum') this.person.weight++;
  }

  getCounterHigth(op: string) {
    if (op == 'substract') this.person.age--;
    else if (op == 'sum') this.person.age++;
  }

  sumWeight(event: any) {
    if (event.type == 'mousedown') this.stopCounter = false;
    else if (event.type == 'mouseup') this.stopCounter = true;
    else if (event.type == 'click') this.person.weight++;

    if (this.stopCounter) {
      this.stopCounterInterval();
    } else {
      this.initInterval = setInterval(() => {
        this.getCounterWeight('sum');
      }, 100);
    }
  }

  substractWeight(event: Event) {
    if (event.type == 'mousedown') this.stopCounter = false;
    else if (event.type == 'mouseup') this.stopCounter = true;
    else if (event.type == 'click') this.person.weight--;

    if (this.stopCounter) {
      this.stopCounterInterval();
    } else {
      this.initInterval = setInterval(() => {
        this.getCounterWeight('substract');
      }, 100);
    }
  }

  stopCounterInterval() {
    clearInterval(this.initInterval);
  }

  sumHigth(event: Event) {
    if (event.type == 'mousedown') this.stopCounter = false;
    else if (event.type == 'mouseup') this.stopCounter = true;
    else if (event.type == 'click') this.person.age++;

    if (this.stopCounter) {
      this.stopCounterInterval();
    } else {
      this.initInterval = setInterval(() => {
        this. getCounterHigth('sum');
      }, 100);
    }
  }

  substractHigth(event: Event) {
    if (event.type == 'mousedown') this.stopCounter = false;
    else if (event.type == 'mouseup') this.stopCounter = true;
    else if (event.type == 'click') this.person.age--;

    if (this.stopCounter) {
      this.stopCounterInterval();
    } else {
      this.initInterval = setInterval(() => {
        this. getCounterHigth('substract');
      }, 100);
    }
  }

  setGenre(genre: number) {
    if (genre == 1) this.person.genre = Genre.MALE;
    if (genre == 2) this.person.genre = Genre.FEMALE;
  }

  calculate() {
    const bmi = this.person.weight / Math.pow(this.person.higth / 100, 2);
    const result: string = bmi.toFixed(1);
    this.router.navigate(['/result', { bmi: result }]);
  }
}
