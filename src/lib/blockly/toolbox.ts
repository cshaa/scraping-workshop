import type { ToolboxInfo } from 'blockly/core/utils/toolbox';
import type { ConnectionState } from 'blockly/core/serialization/blocks';
import './blocks.ts';

const text = (defaultText?: string): ConnectionState => ({
  shadow: {
    type: 'text',
    fields: {
      TEXT: defaultText,
    },
  },
  block: undefined,
});

const number = (n?: number): ConnectionState => ({
  shadow: {
    type: 'math_number',
    fields: {
      NUM: n,
    },
  },
  block: undefined,
});

export const toolbox: ToolboxInfo = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'General',
      colour: '230',
      contents: [
        {
          kind: 'block',
          type: 'print',
          inputs: { MSG: text() },
        },
        {
          kind: 'block',
          type: 'println',
          inputs: { MSG: text() },
        },
        {
          kind: 'block',
          type: 'math_arithmetic',
          inputs: {
            A: number(),
            B: number(),
          },
        },
        {
          kind: 'block',
          type: 'string_concat',
          inputs: {
            A: text(),
            B: text(),
          },
        },
        {
          kind: 'block',
          type: 'controls_if',
        },
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_boolean',
        },
        {
          kind: 'block',
          type: 'text',
        },
        {
          kind: 'block',
          type: 'math_number',
        },
        {
          kind: 'block',
          type: 'js_void',
        },
        {
          kind: 'block',
          type: 'js_return',
        },
        {
          kind: 'block',
          type: 'js_expression',
        },
        {
          kind: 'block',
          type: 'js_statement',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Puppeteer',
      colour: '65',
      contents: [
        {
          kind: 'block',
          type: 'print',
          inputs: { MSG: text() },
        },
        {
          kind: 'block',
          type: 'println',
          inputs: { MSG: text() },
        },
        {
          kind: 'block',
          type: 'pup_goto',
          inputs: { URL: text('https://google.com') },
        },
        {
          kind: 'block',
          type: 'pup_click',
          inputs: { SELECTOR: text('button') },
        },
        {
          kind: 'block',
          type: 'pup_wait_for_element',
          inputs: { SELECTOR: text() },
        },
        {
          kind: 'block',
          type: 'js_void',
          inputs: {
            VALUE: {
              shadow: undefined,
              block: {
                type: 'pup_eval',
                inputs: {
                  BODY: {
                    shadow: undefined,
                    block: {
                      type: 'js_return',
                    },
                  },
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'dom_document_query_selector',
          inputs: { SELECTOR: text('') },
        },
        {
          kind: 'block',
          type: 'dom_document_query_selector_all',
          inputs: { SELECTOR: text('') },
        },
        {
          kind: 'block',
          type: 'dom_text_content',
          inputs: {
            ELEMENT: {
              block: undefined,
              shadow: {
                type: 'dom_document_query_selector',
                inputs: { SELECTOR: text('') },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'dom_get_attribute',
          inputs: {
            ATTR: text('href'),
            ELEMENT: {
              block: undefined,
              shadow: {
                type: 'dom_document_query_selector',
                inputs: { SELECTOR: text('') },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'dom_element_query_selector',
        },
        {
          kind: 'block',
          type: 'dom_element_query_selector_all',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Arrays',
      colour: '120',
      contents: [
        {
          kind: 'block',
          type: 'print',
          inputs: { MSG: text() },
        },
        {
          kind: 'block',
          type: 'println',
          inputs: { MSG: text() },
        },
        {
          kind: 'block',
          type: 'array_range',
        },
        {
          kind: 'block',
          type: 'array_index_accessor',
          inputs: {
            INDEX: number(1),
          },
        },
        {
          kind: 'block',
          type: 'length',
        },
        {
          kind: 'block',
          type: 'array_map',
          inputs: {
            VALUE: {
              shadow: undefined,
              block: {
                type: 'variables_get',
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'array_filter',
          inputs: {
            VALUE: {
              shadow: undefined,
              block: {
                type: 'logic_compare',
                fields: { OP: 'GT' },
                inputs: {
                  A: {
                    shadow: undefined,
                    block: {
                      type: 'variables_get',
                    },
                  },
                  B: number(0),
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'controls_repeat',
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        {
          kind: 'block',
          type: 'controls_for',
        },
        {
          kind: 'block',
          type: 'controls_forEach',
        },
        {
          kind: 'block',
          type: 'controls_flow_statements',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Variables',
      colour: '330',
      custom: 'VARIABLE',
    },
    {
      kind: 'category',
      name: 'Functions',
      colour: '290',
      custom: 'PROCEDURE',
    },
  ],
};
