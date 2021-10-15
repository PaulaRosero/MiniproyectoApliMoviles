import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ReferenciaService } from './../shared/referencia.service';
@Component({
  selector: 'app-crear-ref',
  templateUrl: './crear-ref.page.html',
  styleUrls: ['./crear-ref.page.scss'],
})
export class CrearRefPage implements OnInit {

  bookingForm: FormGroup;
  constructor(
    private refService: ReferenciaService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      titulopub: [''],
      autores: [''],
      tipopub: [''],
      eventorevista: [''],
      doi: [''],
      anyopub: ['']
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.refService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}

