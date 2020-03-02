class Board {
    //constructor
    constructor (grid) {
        this.grid = [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]

        this.play();
        this.move = this.move.bind(this)

    }
    /////////////METHODS///////////////////
    
    //initialize new game
    
    play () {

        let table = document.createElement('table');
        
        for (var x = 0; x < this.grid.length; x++) {
            let rows = document.createElement('tr');
            for (var y = 0; y < this.grid.length; y ++) {
                let box = document.createElement('td');
                box.textContent =  'hello';
                box.setAttribute('style', 'border: 2px solid')
                box.setAttribute('height', '50')
                box.setAttribute('width', '50')
                box.setAttribute('id', x + '.' + y);
                box.setAttribute('value', '')
                rows.appendChild(box);
            }
        table.appendChild(rows);
        }        

        table.setAttribute('width', '200')
        table.setAttribute('height', '200')
        table.setAttribute('style', 'border: 3px solid')
        
        document.getElementById('app').appendChild(table)
        document.getElementById('app').addEventListener('click', this.move)
    }

    //onclick functionality

    move () {
        console.log(event.target)
        document.getElementById(event.target.id).textContent = 'X'
    }



    //checking for conflicts 

    
}


//////////Player/////////////////
class Player {
    constructor (symbol) {
        this.symbol = symbol;
    }
}
//////////GAME///////////////////

class Game {
    constructor () {
        this.board = new Board();
        this.players = [
            new Player ('x'),
            new Player ('o')
        ]
    }
}
var too = new Board();