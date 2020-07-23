import { Component, OnInit } from '@angular/core';
import { ShoesServiceService } from '../services/shoes-service.service';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  shoes: any;
  constructor(private ShoesServiceService:ShoesServiceService) { }

  ngOnInit(): void {
this.retrieveshoes();
}


retrieveshoes(): void {
  this.ShoesServiceService.getAllShoes().subscribe(shoesFromServer => {

        this.shoes = shoesFromServer;
})

}
}
