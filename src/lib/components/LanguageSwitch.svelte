<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value;

    const dispatch = createEventDispatcher();

    function handleLocaleChange(event: any) {
        event.preventDefault();

        dispatch("locale-changed", event.target.value);
    }
</script>

<select class="bg-background text-[4vw] md:text-[1.2vw] font-semibold text-primary" {value} on:change={handleLocaleChange}>
    <option value="en">English</option>
    <option value="vi">Tiếng Việt</option>
</select>
