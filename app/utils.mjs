
/** @constant {number} */
export const N = 4;

/** @constant {number} */
export const NN = N * N;

/** @constant {string} */
export const W = 'W';

/** @constant {string} */
export const B = 'B';

/** @constant {string} */
export const EMPTY = ' ';

/**
 * @param {string} board
 */
export function dumpBoard(board) {
  for (let i = 0; i < NN; i += N) {
    console.log(board.substr(i, N));
  }
}

/**
 * @param {string} player
 * @returns {string} opponent
 */
export function opponent(player) {
  return player === W ? B : W;
}

/**
 * @param {string} player
 * @returns {number} direction
 */
export function direction(player) {
  return player === W ? -1 : 1;
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
export function isValid(x, y) {
  return (x >= 0 && x < N && y >= 0 && y < N);
}

/**
 * @param {string} board
 * @param {number} x
 * @param {number} y
 * @returns {string}
 */
export function pieceAt(board, x, y) {
  return board.substr(y * N + x, 1);
}

/**
 * @param {string} board
 * @param {number} x
 * @param {number} y
 * @param {string} piece
 */
export function setPiece(board, x, y, piece) {
  let pos = y * N + x;
  return board.substr(0, pos) + piece + board.substr(pos + 1);
}

/**
 * @param {string} board
 * @param {number} x
 * @param {number} y
 */
export function move(board, fromX, fromY, toX, toY) {
  let piece = pieceAt(board, fromX, fromY);
  let b = setPiece(board, toX, toY, piece);
  return setPiece(b, fromX, fromY, EMPTY);
}

/**
 * @param {string} board
 * @param {string} player
 * @returns {number[]} moves as [[x1, y1, x2, y2], ...]
 */
export function validMoves(board, player) {
  const d = direction(player);
  let moves = [];
  let o = opponent(player);

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (isValid(x, y) && pieceAt(board, x, y) === player) {
        if (isValid(x, y + d) && pieceAt(board, x, y + d) === EMPTY) {
          moves.push([x, y, x, y + d]);
        }
        if (isValid(x - 1, y + d) && pieceAt(board, x - 1, y + d) === o) {
          moves.push([x, y, x - 1, y + d]);
        }
        if (isValid(x + 1, y + d) && pieceAt(board, x + 1, y + d) === o) {
          moves.push([x, y, x + 1, y + d]);
        }
      }
    }
  }
  return moves;
}
