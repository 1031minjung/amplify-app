import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APIService } from './API.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'amplify-app';
  public createForm: FormGroup;

  // public todos: Array<Todo> = [];

  constructor(private api: APIService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private subscription: Subscription | null = null;

  async ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToDoctor() {
    this.router.navigate(['/', 'doctors']);
  }

  goToInventory() {
    this.router.navigate(['/', 'inventory']);
  }
  goToAboutUs() {
    this.router.navigate(['/', 'about-us']);
  }
}
