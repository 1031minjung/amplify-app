import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  public addressForm: FormGroup = new FormGroup({
    streetAddress: new FormControl(''),
    unitNumber: new FormControl(''),
    city: new FormControl(''),
    province: new FormControl(''),
    country: new FormControl(''),
    postalCode: new FormControl('')
  });
  selectedAddress: any;

  constructor() {}
  
  ngOnInit(): void {
    this.selectedAddress = {
      streetAddress: '',
      city: '',
      province: '',
      country: '',
      postalCode: ''
    };
  }
  
  public AddressChange(address: any) {
    this.selectedAddress = {
      streetAddress: address.formatted_address.split(",")[0],
      city: address.address_components[2].long_name,
      province: address.address_components[5].short_name,
      country: address.address_components[6].long_name,
      postalCode: address.address_components[7].short_name
    };
    console.log(this.selectedAddress)
  }
}
