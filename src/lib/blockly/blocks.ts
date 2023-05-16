import * as Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    type: 'print',
    message0: 'Print %1',
    args0: [
      {
        type: 'input_value',
        name: 'MSG',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'println',
    message0: 'Print line %1',
    args0: [
      {
        type: 'input_value',
        name: 'MSG',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'js_void',
    message0: '%1',
    args0: [
      {
        type: 'input_value',
        name: 'VALUE',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    tooltip: 'Just perform the action and forget the result',
    helpUrl: '',
  },
  {
    type: 'js_return',
    message0: 'Return %1',
    args0: [
      {
        type: 'input_value',
        name: 'VALUE',
      },
    ],
    previousStatement: null,
    tooltip: 'Return value from a function',
    helpUrl: '',
  },
  {
    type: 'js_code',
    message0: '%1',
    args0: [
      {
        type: 'field_input',
        name: 'RAW_JS_CODE',
        text: '// js code',
      },
    ],
  },
  {
    type: 'pup_goto',
    message0: 'Go to URL: %1',
    args0: [
      {
        type: 'input_value',
        name: 'URL',
        check: 'String',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 65,
    tooltip: 'Make the browser navigate to the given website and wait until it loads.',
    helpUrl: '',
  },
  {
    type: 'pup_click',
    message0: 'Click on element with selector %1',
    args0: [
      {
        type: 'input_value',
        name: 'SELECTOR',
        check: 'String',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 65,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'pup_wait_for_element',
    message0: "Wait until there's element with selector %1",
    args0: [
      {
        type: 'input_value',
        name: 'SELECTOR',
        check: 'String',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 65,
    tooltip:
      "Search for an element with the given selector, and if there's none, wait until there is.",
    helpUrl: '',
  },
  {
    type: 'pup_eval',
    message0: 'Evaluate in the browser %1 %2',
    args0: [
      {
        type: 'input_dummy',
      },
      {
        type: 'input_statement',
        name: 'BODY',
      },
    ],
    output: null,
    colour: 65,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'js_let',
    message0: 'To variable %1 save %2',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'item',
      },
      {
        type: 'input_value',
        name: 'VALUE',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Save to a local variable',
    helpUrl: '',
  },
  {
    type: 'dom_document_query_selector',
    message0: 'element matching selector %1',
    args0: [
      {
        type: 'input_value',
        name: 'SELECTOR',
        check: 'String',
      },
    ],
    output: 'Element',
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'dom_document_query_selector_all',
    message0: 'all elements matching selector %1',
    args0: [
      {
        type: 'input_value',
        name: 'SELECTOR',
        check: 'String',
      },
    ],
    output: 'Array',
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'dom_text_content',
    message0: 'text content of %1',
    args0: [
      {
        type: 'input_value',
        name: 'ELEMENT',
        check: 'Element',
      },
    ],
    output: null,
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'dom_get_attribute',
    message0: 'value of attribute %1 of element %2',
    args0: [
      {
        type: 'input_value',
        name: 'ATTR',
        check: 'String',
      },
      {
        type: 'input_value',
        name: 'ELEMENT',
        check: 'Element',
      },
    ],
    output: null,
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'dom_element_query_selector',
    message0: 'descendant of %1 matching selector %2',
    args0: [
      {
        type: 'input_value',
        name: 'ANCESTOR',
        check: 'Element',
      },
      {
        type: 'input_value',
        name: 'SELECTOR',
        check: 'String',
      },
    ],
    inputsInline: true,
    output: 'Element',
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'dom_element_query_selector_all',
    message0: 'all descendants of %1 matching the selector %2',
    args0: [
      {
        type: 'input_value',
        name: 'ANCESTOR',
        check: 'Element',
      },
      {
        type: 'input_value',
        name: 'SELECTOR',
        check: 'String',
      },
    ],
    inputsInline: true,
    output: 'Array',
    colour: 330,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'array_range',
    message0: 'array of numbers from %1 to %2',
    args0: [
      {
        type: 'field_number',
        name: 'FROM',
        value: 1,
        precision: 1,
      },
      {
        type: 'field_number',
        name: 'TO',
        value: 5,
        precision: 1,
      },
    ],
    inputsInline: false,
    output: 'Array',
    colour: 120,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'array_index_accessor',
    message0: '%1th value from %2',
    args0: [
      {
        type: 'input_value',
        name: 'INDEX',
        check: 'Number',
      },
      {
        type: 'input_value',
        name: 'ARRAY',
        check: 'Array',
      },
    ],
    inputsInline: true,
    output: 'Array',
    colour: 120,
    tooltip: '',
  },
  {
    type: 'length',
    message0: 'length of %1',
    args0: [
      {
        type: 'input_value',
        name: 'VALUE',
        check: ['String', 'Array'],
      },
    ],
    output: 'Array',
    colour: 120,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'array_map',
    message0: 'go over array %1 and map %2 to %3',
    args0: [
      {
        type: 'input_value',
        name: 'ARRAY',
      },
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'item',
      },
      {
        type: 'input_value',
        name: 'VALUE',
      },
    ],
    inputsInline: false,
    output: 'Array',
    colour: 120,
    tooltip: '',
    helpUrl: '',
  },
  {
    type: 'array_filter',
    message0: 'go over array %1 and include %2 such that %3',
    args0: [
      {
        type: 'input_value',
        name: 'ARRAY',
      },
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'item',
      },
      {
        type: 'input_value',
        name: 'VALUE',
        check: 'Boolean',
      },
    ],
    inputsInline: false,
    output: 'Array',
    colour: 120,
    tooltip: '',
    helpUrl: '',
  },
]);
