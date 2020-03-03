class Board {
    //constructor
    constructor (grid) {
        this.grid = [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]

        this.play();
        this.nextMove = 'X';
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
                box.textContent =  '';
                box.setAttribute('style', 'border: 2px solid')
                box.setAttribute('height', '50')
                box.setAttribute('width', '50')
                box.setAttribute('id', x + '.' + y);
                box.setAttribute('value', '')
                box.setAttribute('align', 'center')
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

    move () {
        let playBox = document.getElementById(event.target.id);
        if (!playBox.textContent) {
            if (this.nextMove === 'X') {
                playBox.textContent = 'X'
                this.nextMove = 'O'
            } else {
                playBox.textContent = 'O';
                this.nextMove = 'X'
            }
        }
    }
    //checking for conflicts 
        //
}

var board = new Board();