
import {N, B, W, setPiece, move, dumpBoard, validMoves} from './utils.mjs'

let b = '                ';
for (let x = 0; x < N; x++) {
  b = setPiece(b, x, 0, B);
  b = setPiece(b, x, N - 1, W);
}

var vm = validMoves(b, W);

while (vm.length > 0) {
  if (vm.length > 0) {
    let m = vm[0];
    b = move(b, m[0], m[1], m[2], m[3]);
    dumpBoard(b);
  }
  let vm = validMoves(b, B);
  if (vm.length > 0) {
    let m = vm[0];
    b = move(b, m[0], m[1], m[2], m[3]);
    dumpBoard(b);
  }
}

/*
  console.log(validMoves(b, 'W'));
  console.log('-------');
  console.log(validMoves(b, 'B'));
}
*/
/*
{
  let b = '    BBBBWWWW    ';

  console.log(validMoves(b, 'W'));
  console.log('-------');
  console.log(validMoves(b, 'B'));
}
*/
