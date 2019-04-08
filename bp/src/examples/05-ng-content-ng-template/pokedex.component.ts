import { Component, OnInit, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'bp-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  @ContentChild(TemplateRef)
  public child: TemplateRef<void>;

  public toggle = false;

  constructor() { }

  ngOnInit() {
  }

}






















// @ContentChild(TemplateRef)
// public child: TemplateRef<void>;
