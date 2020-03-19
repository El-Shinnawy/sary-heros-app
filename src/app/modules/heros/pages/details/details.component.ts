import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details: any;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private herosService: HerosService) {
    this.activatedRoute.params.subscribe(parameter => {
      if (parameter.id) {
        this.setHeroDetails(parameter.id);
      }
      else {
        this.router.navigate(['heros/list']);
      }
    });
  }

  ngOnInit() { }

  setHeroDetails(id) {
    this.details = this.herosService.getHeroByID(id);
    if (!this.details) {
      this.router.navigate(['heros/list']);
    }
  }
}
