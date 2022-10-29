import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_service/api.service';
import { ControllerService } from 'src/app/_service/controller.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  ngOnInit(): void {}
}
