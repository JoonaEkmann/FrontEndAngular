import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { FinnkinoService } from '../services/finnkino.service';
import { AppFilterPipe } from '../pipes/app-filter.pipe';

@Component({
  selector: 'app-finnkino-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatExpansionModule, 
    AppFilterPipe
  ],
  templateUrl: './finnkino-list.component.html',
  styleUrls: ['./finnkino-list.component.css'],
})
export class FinnkinoListComponent {
  cinemaData$: Observable<any>;
  searchTerm: string = ''; 

  constructor(private finnkinoService: FinnkinoService) {
    this.cinemaData$ = this.finnkinoService.getData();
  }
}
