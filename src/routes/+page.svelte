<script lang="ts">
	import * as Blockly from 'blockly';

	import hljs from 'highlight.js';
	import 'highlight.js/styles/androidstudio.css';

	import Fa from 'svelte-fa';
	import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

	import { onMount } from 'svelte';
	import { toolbox } from '$lib/blockly/toolbox';
	import Fab from '$lib/Fab.svelte';
	import { Fetcher } from '$lib/fetcher';
	import { readable } from 'svelte/store';
	import { JavaScriptGenerator } from '$lib/blockly/generator';

	let outputCode: string = '';
	let fetcher: Fetcher | undefined;
	$: fetcherDone = fetcher?.done ?? readable(true);
	$: fetcherContent = fetcher?.content ?? readable('');

	let blocklyRoot: HTMLElement;
	let codeOutputDiv: HTMLElement;
	let resultOutputDiv: HTMLElement;
	let workspace: Blockly.Workspace;

	onMount(() => {
		workspace = Blockly.inject(blocklyRoot, {
			toolbox,
		});

		workspace.addChangeListener(onChange);
	});

	const onChange = () => {
		outputCode = JavaScriptGenerator.workspaceToCode(workspace);
		if (codeOutputDiv) codeOutputDiv.textContent = outputCode;
	};

	const onExec = async () => {
		fetcher?.stop();
		fetcher = new Fetcher({
			url: '/run',
			body: outputCode
		});
	};

	$: codeOutputDiv && hljs.highlightElement(codeOutputDiv);
</script>

<main>
	<div class="workspace" bind:this={blocklyRoot} />
	<div class="code-output language-typescript" bind:this={codeOutputDiv} />
	<div class="result-output" bind:this={resultOutputDiv}>{$fetcherContent}</div>
	<div class="execute-fab">
    {#if $fetcherDone}
		  <Fab on:click={onExec}><Fa icon={faPlay} /></Fab>
    {:else}
      <Fab on:click={() => fetcher?.stop()}><Fa icon={faStop} /></Fab>
    {/if}
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
			min-width: 400px;
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
