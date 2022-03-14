'use strict';

export const ada = { LINE_REGEX: /^--.*/ };
export const apl = { LINE_REGEX: /^⍝.*/ };

export const applescript = {
  BLOCK_OPEN_REGEX: /^\(\*/,
  BLOCK_CLOSE_REGEX: /^\*\)/
};

export const csharp = {
  LINE_REGEX: /^\/\/.*/
};

export const haskell = {
  BLOCK_OPEN_REGEX: /^\{-/,
  BLOCK_CLOSE_REGEX: /^-\}/,
  LINE_REGEX: /^--.*/
};

export const html = {
  BLOCK_OPEN_REGEX: /^\n*<!--(?!-?>)/,
  BLOCK_CLOSE_REGEX: /^(?<!(?:<!-))-->/,
  BLOCK_CLOSE_LOOSE_REGEX: /^(?<!(?:<!-))--\s*>/,
  BLOCK_CLOSE_STRICT_NEWLINE_REGEX: /^(?<!(?:<!-))-->(\s*\n+|\n*)/,
  BLOCK_CLOSE_STRICT_LOOSE_REGEX: /^(?<!(?:<!-))--\s*>(\s*\n+|\n*)/
};

export const javascript = {
  BLOCK_OPEN_REGEX: /^\/\*\*?(!?)/,
  BLOCK_CLOSE_REGEX: /^\*\/(\n?)/,
  LINE_REGEX: /^\/\/(!?).*/
};

export const lua = {
  BLOCK_OPEN_REGEX: /^--\[\[/,
  BLOCK_CLOSE_REGEX: /^\]\]/,
  LINE_REGEX: /^--.*/
};

export const matlab = {
  BLOCK_OPEN_REGEX: /^%{/,
  BLOCK_CLOSE_REGEX: /^%}/,
  LINE_REGEX: /^%.*/
};

export const perl = {
  LINE_REGEX: /^#.*/
};

export const php = {
  ...javascript,
  LINE_REGEX: /^(#|\/\/).*?(?=\?>|\n)/
};

export const python = {
  BLOCK_OPEN_REGEX: /^"""/,
  BLOCK_CLOSE_REGEX: /^"""/,
  LINE_REGEX: /^#.*/
};

export const ruby = {
  BLOCK_OPEN_REGEX: /^=begin/,
  BLOCK_CLOSE_REGEX: /^=end/,
  LINE_REGEX: /^#.*/
};

export const shebang = {
  LINE_REGEX: /^#!.*/
};

export const hashbang = shebang;
export const c = javascript;
export const css = javascript;
export const java = javascript;
export const js = javascript;
export const less = javascript;
export const pascal = applescript;
export const ocaml = applescript;
export const sass = javascript;
export const sql = ada;
export const swift = javascript;
export const ts = javascript;
export const typscript = javascript;
export const xml = html;
