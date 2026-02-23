/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rowMap = {}
    let columnMap = {}
    let blockMap = {}
    let flag = true
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            //row
            if (rowMap[i] && rowMap[i].includes(board[i][j]) && board[i][j] != ".") {
                flag = false

            } else {
                rowMap[i] = rowMap[i] ? rowMap[i].concat(board[i][j]) : rowMap[i] = [board[i][j]];
            }
            // column
            if (columnMap[i] && columnMap[i].includes(board[j][i]) && board[j][i] != ".") {
                flag = false;
            } else {
                columnMap[i] = columnMap[i] ? columnMap[i].concat(board[j][i]) : columnMap[i] = [board[j][i]];
            }
            //block-----------------
            let blockIndex = getBlockIndex(i, j);
            console.log('blockIndex',blockIndex);
            if (blockMap[blockIndex] && blockMap[blockIndex].includes(board[i][j]) && board[i][j] != ".") {
                flag = false;
            }
            else {
                console.log('i,j',i,j);
                console.log(blockMap);
                blockMap[blockIndex] = blockMap[blockIndex] ? blockMap[blockIndex].concat(board[i][j]) : blockMap[blockIndex] = [board[i][j]];
            }
        }


    }


    console.log('flag', flag);
    console.log('rowMap', rowMap);
    console.log('columnMap', columnMap)
    console.log('blockMap', columnMap)
    return flag;
};


const getBlockIndex = (i, j) => {
    let blockIndex = ''
    //row 1
    if (i < 3 && j <= 2) {
        blockIndex = 0
    }
    if (i < 3 && (j > 2 && j < 6)) {
        blockIndex = 1
    }
    if (i < 3 && (j > 5 && j < 9)) {
        blockIndex = 2
    }

    //row 2
    if ((i > 2 && i < 6) && j <= 2) {
        blockIndex = 3
    }
    if ((i > 2 && i < 6) && (j > 2 && j < 6)) {
        blockIndex = 4
    }
    if ((i > 2 && i < 6) && (j > 5 && j < 9)) {
        blockIndex = 5
    }
    //row 3
    if ((i > 5 && i < 9) && j <= 2) {
        blockIndex = 6
    }
    if ((i > 5 && i < 9) && (j > 2 && j < 6)) {
        blockIndex = 7
    }
    if ((i > 5 && i < 9) && (j > 5 && j < 9)) {
        blockIndex = 8
    }
    return blockIndex;
    
}