import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardcellComponent } from "../components/boardcell/boardcell.component";
import { BoardComponent } from "../components/board/board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardcellComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
