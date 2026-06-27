import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    this.httpClientService.post({
      controller: "products"
    }, {
      name: "Kalem",
      stock: 100,
      price: 50
    });

    this.httpClientService.put({
      controller: "products"
    }, {
      id: "...",
      name: "Kalem",
      stock: 200,
      price: 75
    }).subscribe();

    this.httpClientService.delete({
      controller: "products"
    }, "...").subscribe();
  }

}
