<script>
    import { onMount } from "svelte";
    import "../global.css";
    import { _, setupI18n, isLocaleLoaded, locale, changeLocale } from "$lib/i18n";
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
        if(window.scrollY > window.innerHeight - 100) {
            iconVisible = false;
        } else {
            iconVisible = true;
        }
        lastScrollY = window.scrollY;
    };

    // Add scroll event listener on mount and clean up on destroy
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

{#if $isLocaleLoaded}
    <nav
        class="fixed w-full bg-background bg-opacity-95 shadow-md"
        class:hidden={!navVisible}
    >
        <ul class="flex justify-around items-center my-3 text-[1.2vw]">
            <a
                href="/"
                class="uppercase tracking-wide md:w-[33%] w-[50%] text-center text-[6vw] md:text-2xl font-bold"
            >
                {$_("title.title")}
                <span class="hidden md:inline text-background text-xl bg-primary px-1 lowercase"
                    >{$_("title.subtitle")}</span
                >
            </a>
            <a href="/#about" class="font-semibold uppercase md:block hidden"
                >{$_("navigation.about")}</a
            >
            <a href="/#contact" class="font-semibold uppercase md:block hidden"
                >{$_("navigation.contact")}</a
            >
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSff47cNt3l5i-8qfiaxC3I6npp_oxN27r6alL_T-J6csBz7KQ/viewform?usp=send_form"
                class="font-semibold uppercase md:w-auto text-center w-[50%] md:block hidden"
                >{$_("navigation.join")}</a
            >
            <LanguageSwitch
                value={$locale}
                on:locale-changed={(e) => {
                    console.log(e)
                    changeLocale(e.detail)
                }}
            />
        </ul>
    </nav>
    <slot />
    <footer id="contact" class="-z-5 min-h-[10vh] lg:px-10 px-3 flex justify-between bg-primary text-white items-center">
        <h1 class="text-4xl font-bold hidden lg:block">{$_("footer.title")}</h1>
        <div class="flex lg:text-[1.2vw] text-[4vw] text-center lg:w-auto w-full">
            <a class="font-bold" href="mailto:vanessagaming007@gmail.com"><span class="font-semibold underline">E-Mail</span> - Mrs. Thảo</a>
            <h3 class="ml-10 font-bold"><span class="font-semibold underline">0973162404</span> - Mr. Vũ</h3>
        </div>
    </footer>
    <img
        class="-z-10 select-none w-full h-screen fixed top-0 bottom-0 left-0 right-0"
        src="background.png"
        alt="Background"
    />
    <img class="-z-10 select-none max-h-[33vh] fixed bottom-0 left-0" src="/favicon.png" alt="Favicon" class:hidden={!iconVisible}
    />
{:else}
    <p>Loading...</p>
{/if}
