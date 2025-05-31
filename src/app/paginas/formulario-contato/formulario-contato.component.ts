import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { SeparadorComponent } from '../../components/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm!: FormGroup;

  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('Herberth'),
      telefone: new FormControl('93 99999-9999'),
      email: new FormControl('herberth@gmail'),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }
}
