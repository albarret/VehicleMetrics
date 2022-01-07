import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { Posicao, TempoPermanencia } from './model/tempo-permanencia.model';
import { TempoPermanenciaService } from './service/tempo-permanencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'VehicleMetricsBeckend';

  validateForm!: FormGroup;
  selectedDate = null;
  selectedPlaca = null;
  
  dataSet: TempoPermanencia[] = [];
  placas: string[] = [];

  controlArray: Array<{ index: number; label: string; fieldName: string }> = [
    { index: 1, label: "Data", fieldName: "data" },
    { index: 2, label: "Placa do Veículo", fieldName: "placa" }
  ];
  
  constructor(private fb: FormBuilder, private tpService: TempoPermanenciaService) {}

  ngOnInit(): void {

    this.validateForm = this.fb.group({});
    this.controlArray.forEach(control => {
      this.validateForm.addControl(control.fieldName, new FormControl());
    })

    this.tpService.getOpcoesSelect().subscribe((opcoes) => {
      console.log(opcoes);
      if(opcoes) {
        this.placas = opcoes.map((opcao: any) => opcao.placaVeiculo);
      } else {
        this.placas = [];
      }
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  compareFn = (o1: string, o2: string): boolean => (o1 === o2);

  submitForm() {
    if (this.validateForm.valid) {
      this.tpService.getTempoPermanencia(this.validateForm.value)
        .then((receivedData) => {
          if(receivedData) {
            this.dataSet = receivedData.map((tp) => {
              tp.dia = new Date(tp.dia);
              return tp
            });
          } else {
            this.dataSet = [];
          }
        });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
