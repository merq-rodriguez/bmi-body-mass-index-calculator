import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  bmi: number = 0;
  result: string = '';
  description: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bmi = +params["bmi"];
      this.getResultado()
    })
  }

  getResultado(): void {
    console.log(this.bmi)
    if (this.bmi >= 25) {
      this.result = 'Exceso de peso';
      this.description = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio.';
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal';
      this.description = 'Tienes un peso corporal normal. ¡Buen trabajo!';
    } else {
      this.result = 'Bajo peso';
      this.description = 'Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más.';
    }
  }




}
