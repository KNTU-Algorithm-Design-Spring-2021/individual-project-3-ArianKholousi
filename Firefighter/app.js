let solutions;

function Try(map, pos, fire, move, move_no) {
    let i, j;

    if (pos == fire) {
        solutions++;
        let str = ''
        for (i = 0; i < move_no; i++)
            str += move[i] + '  '
        console.log(str);
        return;
    }

    for (i = 0; i < 22; i++) {
        if (map[pos][i]) {
            for (j = 0; j < move_no; j++) {
                if (move[j] == i)
                    break;
            }
            if (j == move_no) {
                move[move_no] = i;
                Try(map, i, fire, move, move_no + 1);
            }
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.on('SIGINT', function () {
    let cases = stdin_input.split('0 0\r\n')
    for (let i = 0; i < cases.length - 1; i++) {
        let fire;
        let map = new Array(22).fill(0).map(() => new Array(22).fill(0))
        let move = new Array(22)

        let elements = cases[i].split('\r\n')
        fire = parseInt(elements[0])
        for (let j = 1; j < elements.length - 1; j++) {
            let coordinates = elements[j].split(' ')
            let x = parseInt(coordinates[0])
            let y = parseInt(coordinates[1])
            map[x][y] = 1;
            map[y][x] = 1;
        }

        move[0] = 1;
        solutions = 0;
        console.log("CASE ", (i + 1));
        Try(map, 1, fire, move, 1);
        console.log(`There are ${solutions} routes from the firestation to streetcorner ${fire}`);
    }

    process.exit();
});

