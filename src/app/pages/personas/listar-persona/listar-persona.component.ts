import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/servicio/personas.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {

  title= "Listar Personas existentes";

  lstProducts= new Array()

  persona:any

  constructor(private router: Router,
    private personaService: PersonasService) {}

  ngOnInit(): void {
    this.loadPersonas()
  }

  loadPersonas(){
    
    this.persona = this.personaService.getPersonaFire()
    console.log(this.lstProducts)
  }

}
