<script lang="ts">
	import * as Blockly from 'blockly';
	import { javascriptGenerator as _jsg } from 'blockly/javascript';
	const javascriptGenerator: Blockly.CodeGenerator = _jsg;

	import hljs from 'highlight.js';
	import 'highlight.js/styles/androidstudio.css';

	import Fa from 'svelte-fa';
	import { faPlay } from '@fortawesome/free-solid-svg-icons';

	import { onMount } from 'svelte';
	import { toolbox } from '$lib/blockly/toolbox';
	import Fab from '$lib/Fab.svelte';

	let outputCode: string = '';

	let blocklyRoot: HTMLElement;
	let codeOutputDiv: HTMLElement;
	let resultOutputDiv: HTMLElement;
	let workspace: Blockly.Workspace;

	onMount(() => {
		workspace = Blockly.inject(blocklyRoot, {
			toolbox
		});

		workspace.addChangeListener(onChange);
	});

	const onChange = () => {
		outputCode = javascriptGenerator.workspaceToCode();
		codeOutputDiv.textContent = outputCode;
	};

	$: codeOutputDiv && hljs.highlightElement(codeOutputDiv);
</script>

<main>
	<div class="workspace" bind:this={blocklyRoot} />
	<div class="code-output language-typescript" bind:this={codeOutputDiv} />
	<div class="result-output" bind:this={resultOutputDiv} />
	<div class="execute-fab">
		<Fab><Fa icon={faPlay} /></Fab>
	</div>
</main>

<style lang="scss">
	:global(body),
	main {
		padding: 0;
		margin: 0;
	}

	main {
		width: 100vw;
		height: 100vh;

		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: 2fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'workspace code-output'
			'result-output result-output';

		.workspace {
			grid-area: workspace;
		}

		.code-output {
			grid-area: code-output;
			min-width: 350px;
			padding: 2em;
			font-family: 'Courier New', Courier, monospace;
			white-space: pre;
		}

		.result-output {
			grid-area: result-output;
		}

		.execute-fab {
			grid-area: code-output;
			position: relative;
		}
	}
</style>
