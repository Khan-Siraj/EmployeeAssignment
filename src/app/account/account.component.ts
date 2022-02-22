import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  visibility: boolean = true;
  signupForm: any = this.fb.group({
    sellerName: ['', [Validators.required, Validators.pattern('[a-zA-ZW -]*')]],
    shopName: ['', [Validators.required]],
    productType: ['', [Validators.required]],
    shopAddress: ['', [Validators.required]],
    sellerEmail: ['', [Validators.email]],
    sellerMobile: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('[0-9]*'),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
    ],
  });
  checkError(key: string): any {
    return this.signupForm.get(key);
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  visibilityToggle(): void {
    this.visibility = !this.visibility;
  }
}
