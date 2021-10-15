import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ReferenciaService } from './../shared/referencia.service';
@Component({
  selector: 'app-editar-ref',
  templateUrl: './editar-ref.page.html',
  styleUrls: ['./editar-ref.page.scss'],
})
export class EditarRefPage implements OnInit {

  updateBookingForm: FormGroup;
  id: any;

  constructor(
    private refService: ReferenciaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.refService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      titulopub: [''],
      autores: [''],
      tipopub: [''],
      eventorevista: [''],
      doi: [''],
      anyopub: ['']
    })
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.refService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

}
