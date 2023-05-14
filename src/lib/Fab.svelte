<script lang="ts">
	export let type: 'regular' | 'mini' | 'extended' = 'regular';
	export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right';
	export let margin = 10;
</script>

{#if type === 'regular'}
	<button class="mdc-fab {position}" style:--margin="{margin}px" on:click>
		<div class="mdc-fab__ripple" />
		<span class="mdc-fab__icon"><slot /></span>
	</button>
{:else if type === 'mini'}
	<button
		class="mdc-fab mdc-fab--mini mdc-fab--touch {position}"
		style:--margin="{margin}px"
		on:click
	>
		<div class="mdc-fab__ripple" />
		<div class="mdc-fab__focus-ring" />
		<span class="mdc-fab__icon"><slot /></span>
		<div class="mdc-fab__touch" />
	</button>
{:else if type === 'extended'}
	<button class="mdc-fab mdc-fab--extended {position}" style:--margin="{margin}px" on:click>
		<div class="mdc-fab__ripple" />
		<span class="mdc-fab__icon"><slot /></span>
		<span class="mdc-fab__label"><slot name="label" /></span>
	</button>
{/if}

<style lang="scss">
	@use '@material/fab';
	@include fab.core-styles;

	button {
		position: absolute !important;
	}
	.top-left,
	.top-right {
		top: var(--margin);
	}
	.bottom-left,
	.bottom-right {
		bottom: var(--margin);
	}
	.top-left,
	.bottom-left {
		left: var(--margin);
	}
	.top-right,
	.bottom-right {
		right: var(--margin);
	}
</style>
