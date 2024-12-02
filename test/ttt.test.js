'use strict';

const Rules = require('../src/rules');

test('.checkWinner returns [Rules.PLAY] when new game', () => {
  const r = new Rules
  expect(r.checkWinner()).toEqual([Rules.PLAY]);
});

test('.checkWinner returns array with winner and winning cell-indexes if win top-row', () => {
  const r = new Rules
  r.cells = [1,1,1, 0,0,1, 0,1,null]
  expect(r.checkWinner()).toEqual([Rules.WIN, 1, 0, 1, 2]);
});

test('.checkWinner returns array with winner and winning cell-indexes if win diagonal', () => {
  const r = new Rules
  r.cells = [0,1,1, 1,0,1, 1,1,0];
  expect(r.checkWinner()).toEqual([Rules.WIN, 0, 0, 4, 8]);
});

test('.checkWinner returns [Rules.DRAW] if draw', () => {
  const r = new Rules
  r.cells = [1,0,1, 1,0,1, 0,1,0]
  expect(r.checkWinner()).toEqual([Rules.DRAW]);
});
