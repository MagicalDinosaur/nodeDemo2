


/**
 * 
 * @function getRealWay 输出一条通路
 * @param num String 二进制的字符串
 * @param row Number 矩阵的一行有几个数字
 * @param col Number 矩阵的一列有几个数字
 */

function getRealWay(num, row, col) {
    let arrs = [] // 存放当前二维宫格
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            arrs[i][j] = num.pop()
        }
    }
    return arrs;
}


function test() {
    // 获取命令行的参数
    var arguments = process.argv.splice(2);
    console.log(arguments);
}

test()

// console.log(getRealWay('00111010101010', 3, 3));

