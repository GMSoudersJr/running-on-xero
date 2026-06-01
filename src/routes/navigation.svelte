<script lang="ts">
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// @ts-expect-error -- startViewTransition is not yet in the TS DOM lib
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-expect-error -- startViewTransition is not yet in the TS DOM lib
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>
