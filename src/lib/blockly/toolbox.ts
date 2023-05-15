import type { ToolboxInfo } from 'blockly/core/utils/toolbox';
import './blocks.ts';
import type { ConnectionState } from 'blockly/core/serialization/blocks';

const text = (defaultText?: string): ConnectionState => ({
	shadow: {
		type: 'text',
		fields: {
			TEXT: defaultText
		}
	},
	block: undefined
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
					inputs: { MSG: text() }
				},
				{
					kind: 'block',
					type: 'controls_if'
				},
				{
					kind: 'block',
					type: 'logic_compare'
				},
				{
					kind: 'block',
					type: 'logic_operation'
				},
				{
					kind: 'block',
					type: 'logic_boolean'
				}
			]
		},
		{
			kind: 'category',
			name: 'Puppeteer',
			colour: '65',
			contents: [
				{
					kind: 'block',
					type: 'print',
					inputs: { MSG: text() }
				},
				{
					kind: 'block',
					type: 'pup_goto',
					inputs: { URL: text('https://google.com') }
				},
				{
					kind: 'block',
					type: 'pup_click',
					inputs: { SELECTOR: text('button') }
				},
				{
					kind: 'block',
					type: 'pup_wait_for_element',
					inputs: { SELECTOR: text() }
				},
				{
					kind: 'block',
					type: 'pup_eval'
				}
			]
		},
		{
			kind: 'category',
			name: 'Variables',
			colour: '330',
			custom: 'VARIABLE'
		},
		{
			kind: 'category',
			name: 'Functions',
			colour: '290',
			custom: 'PROCEDURE'
		}
	]
};
