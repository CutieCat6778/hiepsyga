<script lang="ts">
    import Svelecte from "svelecte";
    import { _, _activeLocale } from "$lib/i18n";
    import languagePack from "$lib/_locales/dropdown";
    import { createEventDispatcher } from "svelte";
    
    export let options: string[] = [];
    export let id: string = "";
    export let style: string = "";

    let selection: { value: string, text: string } | string[] | null = null;

    const selectionDispatcher = createEventDispatcher();

    function handleSelectionChange(event: CustomEvent<{ value: string, text: string } | string[] | null>) {
        selection = event.detail;
        selectionDispatcher("selection", selection);
    }

</script>

<Svelecte {options} searchable={false} clearable={false} class={`${style}`} value={options[0]} inputId={id}  on:change={handleSelectionChange} placeholder={id} i18n={languagePack[_activeLocale]}/>