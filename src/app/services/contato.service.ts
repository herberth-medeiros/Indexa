import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Contato {
  id: number;
  nome: string;
  avatar: string;
  telefone: string;
  email: string;
  aniversario: string;
  redes: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos'

  constructor(private http: HttpClient) {}

  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API)
  }

  salvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.API, contato)
  }

  buscarPorId(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.API}/${id}`);
  }

    excluirContato(id: number): Observable<Contato> {
    return this.http.delete<Contato>(`${this.API}/${id}`);
  }
    editarContato(contato: Contato): Observable<Contato> {
    const url = `${this.API}/${contato.id}`
    return this.http.put<Contato>(url, contato);
  }
    editarOuSalvarContato(contato: Contato): Observable<Contato> {
      if(contato.id){
        return this.editarContato(contato)
      }else {
        return this.salvarContato(contato)
      }
    }

}

