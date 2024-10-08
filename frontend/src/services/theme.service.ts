import { Injectable } from '@angular/core';
import { THEMES } from '../../public/themes';
import { Piece } from '@models/pieces/piece.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private THEME_KEY = 'themeName';
  private PIECES_KEY = 'pieces';
  private currentTheme!: string;
  private currentPieces!: string;

  constructor() {
    this.loadTheme();
  }

  get lightColor() {
    return THEMES[this.currentTheme].light;
  }

  get darkColor() {
    return THEMES[this.currentTheme].dark;
  }

  changeTheme(themeName: string) {
    localStorage.setItem(this.THEME_KEY, themeName);
    this.loadTheme();
  }

  changePieces(pieces: string) {
    localStorage.setItem(this.THEME_KEY, pieces);
    this.loadTheme();
  }

  markClicked(color: string) {
    return `color-mix(in srgb, ${color}, rgba(0, 100, 0, 0.8))`;
  }

  markLastMove(color: string) {
    return `color-mix(in srgb, ${color}, rgba(127, 127, 0, 0.8))`;
  }

  markLegal(color: string) {
    return `color-mix(in srgb, ${color}, rgba(0, 0, 100, 0.7))`;
  }

  markChecked(): string {
    return 'rgb(178, 0, 0)';
  }

  getPiecePath(piece: Piece | undefined) {
    const path = `chess-pieces/${this.currentPieces}`;
    const color = piece?.color ?? 'w';
    const name = piece?.name ?? 'pawn';

    return `${path}/${color}-${name}.svg`;
  }

  private loadTheme() {
    this.currentTheme = localStorage.getItem(this.THEME_KEY) ?? 'brown';
    this.currentPieces = localStorage.getItem(this.PIECES_KEY) ?? 'Merida';
  }
}
