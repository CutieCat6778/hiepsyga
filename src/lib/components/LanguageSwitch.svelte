<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value: string | null | undefined;

    const dispatch = createEventDispatcher();

    function handleLocaleChange(event: any) {
        event.preventDefault();
        dispatch("locale-changed", value == "en" ? "vi" : "en");
    }
</script>

<div>
    <button on:click={handleLocaleChange}
        ><img class="max-w-8" src="/language.svg" alt="Language" /></button
    >
</div>
