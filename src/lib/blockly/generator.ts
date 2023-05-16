import type { Block, CodeGenerator, FieldVariable } from 'blockly';
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

js['js_void'] = (block) => {
	const value = js.valueToCode(block, 'VALUE', js.ORDER_NONE);
	return `${value};` + LF;
};

js['js_return'] = (block) => {
	const value = js.valueToCode(block, 'VALUE', js.ORDER_ATOMIC);
	return `return ${value};` + LF;
};

js['print'] = (block) => {
	const msg = js.valueToCode(block, 'MSG', js.ORDER_NONE);
	return `print(${msg});` + LF;
};

js['println'] = (block) => {
	const msg = js.valueToCode(block, 'MSG', js.ORDER_ADDITION);
	return `print(${msg} + '\\n');` + LF;
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
	return [`await page.evaluate(async () => {${LF + body}})`, js.ORDER_AWAIT];
};

js['dom_document_query_selector'] = (block) => {
	const selector = js.valueToCode(block, 'SELECTOR', js.ORDER_NONE);
	return [`document.querySelector(${selector})`, js.ORDER_FUNCTION_CALL];
};

js['dom_document_query_selector_all'] = (block) => {
	const selector = js.valueToCode(block, 'SELECTOR', js.ORDER_NONE);
	return [`document.querySelectorAll(${selector})`, js.ORDER_FUNCTION_CALL];
};

js['dom_text_content'] = (block) => {
	const element = js.valueToCode(block, 'ELEMENT', js.ORDER_MEMBER);
	return [`${element}.textContent`, js.ORDER_MEMBER];
};

js['dom_get_attribute'] = (block) => {
	const attr = js.valueToCode(block, 'ATTR', js.ORDER_NONE);
	const element = js.valueToCode(block, 'ELEMENT', js.ORDER_MEMBER);
	return [`${element}.getAttribute(${attr})`, js.ORDER_FUNCTION_CALL];
};

js['dom_element_query_selector'] = (block) => {
	const element = js.valueToCode(block, 'ELEMENT', js.ORDER_MEMBER);
	const selector = js.valueToCode(block, 'SELECTOR', js.ORDER_NONE);
	return [`${element}.querySelector(${selector})`, js.ORDER_FUNCTION_CALL];
};

js['dom_element_query_selector_all'] = (block) => {
	const element = js.valueToCode(block, 'ELEMENT', js.ORDER_MEMBER);
	const selector = js.valueToCode(block, 'SELECTOR', js.ORDER_NONE);
	return [`${element}.querySelectorAll(${selector})`, js.ORDER_FUNCTION_CALL];
};

js['array_map'] = (block) => {
	const arr = js.valueToCode(block, 'ARRAY', js.ORDER_MEMBER);
	const body = js.valueToCode(block, 'VALUE', js.ORDER_ATOMIC);
	const varField = block.getField('VAR') as FieldVariable;
	const varName = varField.getVariable()?.name ?? '_';
	return [`${arr}.map((${varName}) => ${body})`, js.ORDER_FUNCTION_CALL];
};

js['array_range'] = (block) => {
	const from = +block.getFieldValue('FROM');
	const to = +block.getFieldValue('TO');
	const arr = [];
	for (let i = from; i <= to; i++) arr.push(i);
	return [JSON.stringify(arr), js.ORDER_NONE];
};

export const JavaScriptGenerator = js;
