import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Preguntas } from '../../../models/mortalidad/mortalidad.request';
import {  FormGroup  } from '@angular/forms';
// import { Slides } from 'ionic-angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-mortalidadpreguntas',
  templateUrl: './mortalidadpreguntas.component.html',
  styleUrls: ['./mortalidadpreguntas.component.scss'],
})
export class MortalidadpreguntasComponent implements OnInit { 


  col: number = 2
  lista =[] =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  rangoTemperatura : any[] = [9,10,11,12,13,14,15,16]
  @Input() preguntas: Preguntas;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  constructor(
    
  ) { }

  ngOnInit() {

 

  }


}
