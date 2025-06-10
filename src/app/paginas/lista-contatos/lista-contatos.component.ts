import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../components/container/container.component';
import { ContatoComponent } from '../../components/contato/contato.component';
import { SeparadorComponent } from '../../components/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

import agenda from '../../agenda.json'
import { RouterLink } from '@angular/router';

interface Contato {
  id: number
  nome: string
  telefone: string 
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda

  filtroPorTexto: string = ''

  filtrarContatosPorTexto (): Contato[] {
    if(!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra: string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contatos => {
      return contatos.nome.toLowerCase().startsWith(letra)
    })
  }
}
