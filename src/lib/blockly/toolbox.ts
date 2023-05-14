import type { ToolboxInfo } from 'blockly/core/utils/toolbox';

export const toolbox: ToolboxInfo = {
	kind: 'categoryToolbox',
	contents: [
		{
			kind: 'category',
			name: 'Control',
			contents: [
				{
					kind: 'block',
					type: 'controls_if'
				}
			]
		},
		{
			kind: 'category',
			name: 'Logic',
			contents: [
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
			name: 'Variables',
			custom: 'VARIABLE'
		},
		{
			kind: 'category',
			name: 'Functions',
			custom: 'PROCEDURE'
		}
	]
};
