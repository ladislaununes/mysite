import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CapaComponent } from './componentes/capa/capa.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ServicosComponent } from './componentes/servicos/servicos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    CapaComponent, 
    SobreComponent, 
    HabilidadesComponent, 
    ServicosComponent, 
    RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
