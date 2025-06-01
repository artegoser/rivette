<script>
	import Rivette from '$lib/Rivette.svelte';
</script>

<title>RIVETTE - rive for svelte</title>

<div class="mx-auto my-6 flex flex-col items-center">
	<h1 class="text-4xl font-bold">RIVETTE</h1>
	<p>Unofficial rive-svelte library</p>
	<div class="m-4 flex flex-wrap items-center justify-center gap-2">
		<Rivette
			class="h-60 rounded-xl max-sm:h-auto max-sm:w-full"
			src="/rive/made_of_love.riv"
			stateMachines="State Machine"
			autoplay
		/>
		<Rivette
			class="h-60 rounded-xl max-sm:h-auto max-sm:w-full"
			src="/rive/anime_girl_mouse.riv"
			stateMachines="State Machine 1"
			autoplay
		/>
		<Rivette
			class="h-60 rounded-xl max-sm:h-auto max-sm:w-full"
			src="/rive/little_boy.riv"
			stateMachines="State Machine 1"
			autoplay
		/>
	</div>
</div>
