/**
 * @typedef {import('unified').Parser} Parser
 * @typedef {import('unified').Compiler} Compiler
 * @typedef {import('unist').Literal} Literal
 */

// Make references to the above types visible in VS Code.
''

/** @type {Parser} */
export class SimpleParser {
  /** @param {string} doc */
  constructor(doc) {
    /** @type {string} */
    this.value = doc
  }

  /** @returns {Literal} */
  parse() {
    return {type: 'text', value: this.value}
  }
}

/** @type {Compiler} */
export class SimpleCompiler {
  /** @param {Literal} node */
  constructor(node) {
    /** @type {Literal} */
    this.node = node
  }

  compile() {
    return this.node.value
  }
}
