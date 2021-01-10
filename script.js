 $(function(){
     
    const NUM_ROWS = 3;
    const NUM_COLS = 5;
    let rows = [];
    
    for (let r = 0; r < NUM_ROWS; r = r + 1) {
        
        let cols = [];
        
        for (let c = 0; c < NUM_COLS; c = c + 1) {
            
            cols.push('');
            
        }
        
        rows.push(cols);
        
    }
        
    function checkForWinner() {
        
        let winningVal = '';
        
        for (let r = 0; r < NUM_ROWS; r = r + 1) {
            
            for (let c = 0; c < NUM_COLS; c = c + 1) {
                
                let currVal = rows[r][c];
                let buttonNum = r*NUM_COLS + c;
                
                console.log('currVal: ', currVal);
                
                if (currVal) {
                
                    //check if leftmost of horizontal
                    let second = rows[r][c+1];
                    let third = rows[r][c+2];
                    
                    if (currVal === second && currVal === third) {
                        
                        winningVal = currVal;
                        $(`.btn-${buttonNum}`).addClass('winner');
                        $(`.btn-${buttonNum+1}`).addClass('winner');
                        $(`.btn-${buttonNum+2}`).addClass('winner');
                        
                    }
                    
                    if (r === 0) {
                        //check if topmost of vertical
                        second = rows[r+1][c];
                        third = rows[r+2][c];
                        
                        if (currVal === second && currVal === third) {
                            
                            winningVal = currVal;
                            $(`.btn-${buttonNum}`).addClass('winner');
                            $(`.btn-${buttonNum+(1*5)}`).addClass('winner');
                            $(`.btn-${buttonNum+(2*5)}`).addClass('winner');
                            
                        }
                        
                        //check if topleft of diagonal down right
                        second = rows[r+1][c+1];
                        third = rows[r+2][c+2];
                        
                        if (currVal === second && currVal === third) {
                            
                            winningVal = currVal;
                            $(`.btn-${buttonNum}`).addClass('winner');
                            $(`.btn-${buttonNum+(1*5)+1}`).addClass('winner');
                            $(`.btn-${buttonNum+(2*5)+2}`).addClass('winner');
                            
                        }
                        
                    } else if (r === 2) {
                        
                        //check if bottomleft of diagonal up right
                        second = rows[r-1][c+1];
                        third = rows[r-2][c+2];
                        
                        if (currVal === second && currVal === third) {
                        
                            winningVal = currVal;
                            $(`.btn-${buttonNum}`).addClass('winner');
                            $(`.btn-${buttonNum-(1*5)+1}`).addClass('winner');
                            $(`.btn-${buttonNum-(2*5)+2}`).addClass('winner');
                            
                        }
                        
                    }
                    
                }
                
            }
        }
        
        if (winningVal) {
            
            $('.game-title').text('WINNING TEAM IS: ' + winningVal);
            
        }
    }

    $(".dropdown-menu li").click(function(){
        
        var dropdown = this.parentElement.parentElement;
        var cellNum = dropdown.getAttribute('data-idx');
        
        console.log('cellNum: ', cellNum);
        
        var row = Math.floor(cellNum / NUM_COLS);
        var col = cellNum % NUM_COLS;
        
        console.log('row: ', row);
        console.log('col: ', col);
        
        rows[row][col] = this.innerText;
        
        console.log('rows: ', rows);
        
        dropdown.firstElementChild.innerText = this.innerText;

      
      checkForWinner();

   });

});