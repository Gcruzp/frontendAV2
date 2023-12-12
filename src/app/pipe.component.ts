import { Component } from '@angular/core';
 
@Component({
  selector: 'AppPipeComponent',
  template: `
  <h1>
    <span>{{ 'lucro,' | titlecase }} </span>
    <span>{{ 'venda,' | titlecase }} </span>
    <span>{{ 'compra,' | titlecase }} </span>
    <span>{{ 'alugueis' | titlecase }} </span>
    e
    <span>{{ 'dividendos:' | titlecase }} </span>
  </h1>
`
})
export class PipeComponent { }
