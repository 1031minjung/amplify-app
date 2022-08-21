import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  constructor() {}
  newAddress: any;
  ngOnInit(): void {}
  test="testttt"

  formattedAddress = '';
  public AddressChange(address: any) {
    //setting address from API to local variable
    this.formattedAddress = address.formatted_address;
    console.log(address);
    this.newAddress = address;
    console.log(this.newAddress);
    console.log(this.newAddress.address_components);
    console.log(this.newAddress.address_components[0].long_name);
  }

  public AddressChange2(address: any) {
    console.log("2222")
  }

  
}
