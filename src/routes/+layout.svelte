<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import "../global.css";
    import {
        _,
        setupI18n,
        isLocaleLoaded,
        changeLocale,
        json,
        locale,
    } from "$lib/i18n";
    import DropdownMenu from "$lib/components/DropdownMenu.svelte";
    import { turnOffNav } from "$lib";
    import LanguageSwitch from "$lib/components/LanguageSwitch.svelte";

    let lastScrollY = 0;
    let navVisible = true;
    let iconVisible = true;

    setupI18n({ withLocale: "vi" });

    const handleScroll = () => {
        if (window.scrollY > lastScrollY + 5 && window.scrollY > 100) {
            // Scrolling down
            navVisible = false;
        } else if (window.scrollY + 20 < lastScrollY || window.scrollY < 100) {
            // Scrolling up
            navVisible = true;
        }
        if (window.scrollY > window.innerHeight - 100) {
            iconVisible = false;
        } else {
            iconVisible = true;
        }
        lastScrollY = window.scrollY;
    };

    let about = writable<string[]>([]);
    let story = writable<string[]>([]);

    $: console.log($about);

    $: $isLocaleLoaded
        ? about.set(($json("navigation.about") as string[]) ?? [])
        : about.set([]);
    $: $isLocaleLoaded
        ? story.set(($json("navigation.story") as string[]) ?? [])
        : story.set([]);

    onMount(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Cactus+Classical+Serif&family=Playfair+Display&display=swap"
        rel="stylesheet"
    />
</svelte:head>

{#if $about.length > 0}
    <nav
        class="fixed w-full bg-background shadow-md h-[7vh] flex items-center justify-center max-h-[7vh]"
        class:hidden={!navVisible || $turnOffNav}
    >
        <ul class="flex justify-around items-center w-full my-3 text-[1.2vw]">
            <a
                href="/"
                class="uppercase tracking-wide md:w-[33%] w-[50%] text-center text-[6vw] md:text-2xl font-bold"
            >
                {$_("title.title")}
                <span
                    class="hidden md:inline text-background text-xl bg-primary px-1 lowercase"
                    >{$_("title.subtitle")}</span
                >
            </a>
            <a href="/#about" class="font-semibold uppercase md:block hidden"
                >{$json("navigation.about.0")}</a
            >
            <a href="/blog" class="font-semibold uppercase md:block hidden"
                >{$_("navigation.about.1")}</a
            >
            <a href="/projects" class="font-semibold uppercase md:block hidden"
                >{$_("navigation.about.2")}</a
            >
            <DropdownMenu options={$story} paths={["story"]} />
            <LanguageSwitch
                value={$locale}
                on:locale-changed={(e) => {
                    console.log(e);
                    changeLocale(e.detail);
                }}
            />
        </ul>
    </nav>
    <div class="min-h-screen flex justify-center flex-col items-center">
        <slot />
    </div>
    <footer
        id="contact"
        class="-z-5 min-h-[14vh] lg:px-10 px-3 flex justify-between bg-primary text-white items-center"
    >
        <h1 class="text-4xl font-bold hidden lg:block">{$_("footer.title")}</h1>
        <div
            class="flex lg:text-[1.2vw] text-[4vw] text-center lg:w-auto w-full"
        >
            <a class="font-bold" href="mailto:vanessagaming007@gmail.com"
                ><span class="font-semibold underline">E-Mail</span> - Mrs. Thảo</a
            >
            <h3 class="ml-10 font-bold">
                <span class="font-semibold underline">0973162404</span> - Mr. Vũ
            </h3>
        </div>
    </footer>
    <img
        class="-z-10 select-none w-full h-screen fixed top-0 bottom-0 left-0 right-0"
        src="/background_old.png"
        alt="Background"
    />
    <img
        class="-z-10 select-none max-h-[33vh] fixed bottom-0 left-0"
        src="/favicon.png"
        alt="Favicon"
        class:hidden={!iconVisible}
    />
{:else}
    <p>Loading...</p>
{/if}
