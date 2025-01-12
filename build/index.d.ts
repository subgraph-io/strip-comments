// Type definitions for strip-comments 2.0
// Project: https://github.com/subgraph-io/strip-comments

/**
 * Strip all code comments from the given `input`, including protected
 * comments that start with `!`, unless disabled by setting `options.keepProtected`
 * to true.
 *
 * ```js
 * const str = strip('const foo = "bar";// this is a comment\n /* me too *\/');
 * console.log(str);
 * // => 'const foo = "bar";'
 * ```
 * @param string - string from which to strip comments
 * @param [options] - passed to [extract-comments][extract-comments]
 */
declare function strip(input: string, options?: strip.Options): string;

declare namespace strip {

    /**
     * Strip only block comments.
     *
     * ```js
     * const str = strip.block('const foo = "bar";// this is a comment\n /* me too *\/');
     * console.log(str);
     * // => 'const foo = "bar";// this is a comment'
     * ```
     * @param `input` string from which to strip comments
     * @param  [`options`] pass `opts.keepProtected: true` to keep ignored comments (e.g. `/*!`)
     */
    export function block(input: string, options?: Options): string;

    /**
     * Strip only line comments.
     *
     * ```js
     * const str = strip.line('const foo = "bar";// this is a comment\n /* me too *\/');
     * console.log(str);
     * // => 'const foo = "bar";\n/* me too *\/'
     * ```
     * @param  `input` string from which to strip comments
     * @param  [`options`] pass `opts.keepProtected: true` to keep ignored comments (e.g. `//!`)
     */
    export function line(input: string, options?: Options): string;

    /**
     * Strip the first comment from the given `input`. Or, if `opts.keepProtected` is true,
     * the first non-protected comment will be stripped.
     *
     * ```js
     * const output = strip.first(input, { keepProtected: true });
     * console.log(output);
     * // => '//! first comment\nfoo; '
     * ```
     * @param  `input` string from which to strip comments
     * @param [`options`] pass `opts.keepProtected: true` to keep comments with `!`
     */
    export function first(input: string, options?: Options): string;

    /**
     * Parses a string and returns a basic CST (Concrete Syntax Tree).
     *
     * ```js
     * const strip = require('..');
     * const str = strip.block('const foo = "bar";// this is a comment\n /* me too *\/');
     * console.log(str);
     * // => 'const foo = "bar";// this is a comment'
     * ```
     * @name  .block
     * @param  {String} `input` string from which to strip comments
     * @param  {Object} `options` pass `opts.keepProtected: true` to keep ignored comments (e.g. `/*!`)
     * @return {String} modified string
     */
    export function parse(input: string, options?: Options): Block;

    export interface Options {
        /**
         * if `false` strip only block comments
         * @default true
         */
        line?: boolean | undefined;
        /**
         * if `false` strip only line comments
         * @default true
         */
        block?: boolean | undefined;
        /**
         * Keep ignored comments (e.g. `/*!` and `//!`)
         */
        keepProtected?: boolean | undefined;
        /**
         * Preserve newlines after comments are stripped
         */
        preserveNewlines?: boolean | undefined;
        /**
         * @default 'javascript'
         */
        language?: string | undefined;
    }

    export class Node {
        type: string;
        match: boolean;
        newline: string;
        value: string;
        nodes: [];
        readonly protected: boolean;
        constructor(node: Node);
    }

    export class Block extends Node {
        readonly protected: boolean;
        constructor(node: Node);
        push(node: Node): void;
    }
}

export default strip;
