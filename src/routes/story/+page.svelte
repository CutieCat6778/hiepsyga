<script lang="ts">
    import { _, _activeLocale, json } from "$lib/i18n";

    let datas = $json("story") as string[];
</script>

<div
    class="min-h-screen w-full bg-primary flex flex-col justify-center items-center text-white pt-[7vh]"
>
    <h1 class="mt-[10vh] text-4xl font-bold uppercase">{$_("storyTitle")}</h1>
    <br />
    <div class="px-[10vw] w-full text-mono">
        {#each datas as data}
            {#each data.split("\n") as line}
                <p class="text-[1.2rem] px-[10vw]">{line}</p>
            {/each}
            <br />
        {/each}
    </div>
</div>
