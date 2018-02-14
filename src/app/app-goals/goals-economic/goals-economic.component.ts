import { Component, OnInit } from '@angular/core';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const numberMask = createNumberMask({
  prefix: '$'
});

@Component({
  selector: 'app-goals-economic',
  templateUrl: './goals-economic.component.html',
  styleUrls: ['./goals-economic.component.css']
})
export class GoalsEconomicComponent implements OnInit {
  mask = numberMask;
  constructor() { }

  ngOnInit() {
  }

}
