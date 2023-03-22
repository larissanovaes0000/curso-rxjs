import { Component, OnInit } from '@angular/core';
import { from, map, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  resultadosFiltrados1: any
  resultadosFiltrados2: any

  constructor() { }

  ngOnInit(): void {
    this.pluckOperator()
  }

  pluckOperator() {
    const arr$ = from([
      { name: 'Herculano', age: 40, profissao: { title: 'Pedreiro' } },
      { name: 'Joaquim', age: 50, profissao: { title: 'Cozinheiro' } },
      { name: 'Humberto', age: 60, profissao: { title: 'Jornalista' } },
    ])

    const resultadosFiltrados$ = arr$.pipe(
      // pluck('name')
      pluck('profissao', 'title')
    )

    // pluck está depreciado, esta seria uma alternativa
    const resultadosFiltrados2$ = arr$
      .pipe(
        map((res: any) => res.profissao.title)
      )

    resultadosFiltrados$.subscribe(res => this.resultadosFiltrados1 = res)
    resultadosFiltrados2$.subscribe(res => this.resultadosFiltrados2 = res)
  }
}
