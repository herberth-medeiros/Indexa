import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: String = ''
  @Input() telefone: String = ''
  @Input() id?: number;
  @Input() avatar: string | ArrayBuffer = ''
}
