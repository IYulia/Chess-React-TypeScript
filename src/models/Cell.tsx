import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board : Board; 
    available: boolean; // Можеш рухатися ?
    id : number; // для реакт ключів

    constructor(board: Board, x: number, y: number, colors: Colors, figure: Figure | null){
        this.x = x
        this.y = y
        this.color = colors
        this.figure = figure
        this.board = board
        this.available = false
        this.id = Math.random()
    }
}