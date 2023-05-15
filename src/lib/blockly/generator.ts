import type { Block, CodeGenerator } from 'blockly';
import { javascriptGenerator as _jsg } from 'blockly/javascript';

const LF = '\n';

const js: CodeGenerator & {
	[codeName: string]: (block: Block) => string | [code: string, order: number];
} & {
	ORDER_ATOMIC: number;
	ORDER_NEW: number;
	ORDER_MEMBER: number;
	ORDER_FUNCTION_CALL: number;
	ORDER_INCREMENT: number;
	ORDER_DECREMENT: number;
	ORDER_BITWISE_NOT: number;
	ORDER_UNARY_PLUS: number;
	ORDER_UNARY_NEGATION: number;
	ORDER_LOGICAL_NOT: number;
	ORDER_TYPEOF: number;
	ORDER_VOID: number;
	ORDER_DELETE: number;
	ORDER_AWAIT: number;
	ORDER_EXPONENTIATION: number;
	ORDER_MULTIPLICATION: number;
	ORDER_DIVISION: number;
	ORDER_MODULUS: number;
	ORDER_SUBTRACTION: number;
	ORDER_ADDITION: number;
	ORDER_BITWISE_SHIFT: number;
	ORDER_RELATIONAL: number;
	ORDER_IN: number;
	ORDER_INSTANCEOF: number;
	ORDER_EQUALITY: number;
	ORDER_BITWISE_AND: number;
	ORDER_BITWISE_XOR: number;
	ORDER_BITWISE_OR: number;
	ORDER_LOGICAL_AND: number;
	ORDER_LOGICAL_OR: number;
	ORDER_CONDITIONAL: number;
	ORDER_ASSIGNMENT: number;
	ORDER_YIELD: number;
	ORDER_COMMA: number;
	ORDER_NONE: number;
} = _jsg;

js['print'] = (block) => {
	const msg = js.valueToCode(block, 'MSG', js.ORDER_NONE);
	return `print(${msg});` + LF;
};

js['pup_goto'] = (block) => {
	const url = js.valueToCode(block, 'URL', js.ORDER_NONE);
	return `await page.goto(${url});` + LF;
};

js['pup_click'] = (block) => {
	const selector = js.valueToCode(block, 'SELECTOR', js.ORDER_NONE);
	return `await page.click(${selector});` + LF;
};

js['pup_wait_for_element'] = (block) => {
	const selector = js.valueToCode(block, 'SELECTOR', js.ORDER_NONE);
	return `await page.waitForSelector(${selector});` + LF;
};

js['pup_eval'] = (block) => {
	const body = js.statementToCode(block, 'BODY');
	return `await page.evaluate(async () => {${LF + body}}});` + LF;
};

export const JavaScriptGenerator = js;
