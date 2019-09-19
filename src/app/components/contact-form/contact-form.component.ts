import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public name = 'Felix';
  public isDisabled = true;
  public dangerClass = 'danger';
  public successClass = 'success';
  public hasErrors = true;
  public airline = 'skyblue';

  public toggleClasses = {
    'danger': this.hasErrors,
    'success': !this.hasErrors
  };

  public componentStyles = {
    color: 'purple'
  }
  constructor() { }

  ngOnInit() {
  }

  toggleError(e: Event): void {
    e.preventDefault();
    this.hasErrors = !this.hasErrors;
    this.isDisabled = !this.isDisabled;
  }

}
