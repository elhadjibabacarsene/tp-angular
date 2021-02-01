import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-biens',
  templateUrl: './add-biens.component.html',
  styleUrls: ['./add-biens.component.css']
})
export class AddBiensComponent implements OnInit {
  bienForm: FormGroup;
  options: string[] = ['Location', 'Vente'];
  private forbidenTitles: any;

  constructor() {
  }

  ngOnInit(): void {
    // Creating the form
    this.bienForm = new FormGroup({
      title: new FormControl(null),
      price: new FormControl(null, null, this.lastPriceValidator),
      description: new FormControl(null, null),
      category: new FormControl(null),
      image: new FormControl(null)
    });
  }

  onAddSecImage() {
    const control = new FormControl(null, Validators.required);
    // (<FormArray>this.bienForm.get('imagesec').push(control));
  }

  // Validation function
  forbiddenValidator(ctrl: FormControl): { [Key: string]: boolean } {
    if (this.forbidenTitles.indexOf(ctrl.value)) {
      return {titleforbidden: true};
    }
  }

  //Async validation
  lastPriceValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value > 10000000) {
          resolve({lastPrice: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

}
