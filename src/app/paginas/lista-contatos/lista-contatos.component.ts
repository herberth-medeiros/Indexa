import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../components/container/container.component';
import { ContatoComponent } from '../../components/contato/contato.component';
import { SeparadorComponent } from '../../components/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { PerfilContatoComponent } from '../perfil-contato/perfil-contato.component';

interface Contato {
    id?: number
    nome: string
    avatar: string | ArrayBuffer
    telefone: string
    email: string
    aniversario?:string
    redes?: string
    observacoes?: string
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
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];
  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.contatoService.obterContatos().subscribe(listaContatos => {
      this.contatos = listaContatos;
    });
  }

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.contatos.filter(contato =>
      contato.nome.toLowerCase().startsWith(letra)
    );
  }
}
