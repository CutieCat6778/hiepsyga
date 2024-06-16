<script lang="ts">
    import { _, _activeLocale } from "$lib/i18n";

    export let options: string[] = [];
    export let paths: string[] = [];

    let toggleMenu = false;

    console.log(options);
</script>

<li class="relative">
    <button
        on:click={() => (toggleMenu = !toggleMenu)}
        class="font-semibold uppercase md:block hidden"
        >{$_("navigation.storyTitle")}
        <span class="inline-block"
            ><svg
                data-baseweb="icon"
                viewBox="0 0 24 24"
                class="ml-1 w-4 h-4 fill-current chevron"
                ><title>Chevron Down</title><path
                    transform="rotate(270, 12, 12)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                ></path></svg
            >
        </span>
    </button>
    {#if toggleMenu}
        <ul
            class="bg-primary text-white border-1 border-primary border-t-0 w-full text-sm absolute"
        >
            {#each options as option, i}
                <li>
                    <a
                        href={paths[i]}
                        class="font-semibold uppercase md:block my-3 mx-2"
                        >{option}</a
                    >
                </li>
            {/each}
        </ul>
    {/if}
</li>
