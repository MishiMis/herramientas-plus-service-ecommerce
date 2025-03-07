import { Component,OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-inicio',
  imports: [CardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
