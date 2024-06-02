<script>
    import { _ } from "$lib/i18n";
</script>

<main class="h-auto w-full">
    <header class="flex justify-center items-center flex-col h-screen w-full">
        <h1
            class="text-4xl mx-1 font-bold font-sans lg:text-left text-center sm:text-5xl md:text-6xl"
        >
            {$_("landing.hero.title")}
        </h1>
        <h3
            class="mt-5 text-xl md:text-[1.4rem] font-semibold font-serif md:max-w-[70%] max-w-[98%] text-center"
        >
            {$_("landing.hero.subtitle")}
        </h3>
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSff47cNt3l5i-8qfiaxC3I6npp_oxN27r6alL_T-J6csBz7KQ/viewform?usp=send_form"
            class="uppercase px-10 mt-7 rounded-xl bg-primary font-bold py-3 text-white/[0.9]"
            >{$_("landing.hero.button")}</a
        >
    </header>
    <section class="w-full lg:h-screen border-[0.3vw] border-black">
        <div class="max-h-screen w-full flex">
            <img
                src="https://images.unsplash.com/photo-1695003834079-f9ca8d25ca9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoaWxkcmVuJTIwdmlldG5hbXxlbnwwfDF8MHx8fDA%3D"
                alt="vietnam 1"
                class="min-w-[50%] h-[99.4vh] object-cover hidden lg:block"
            />
            <div
                id="about"
                class="lg:w-[50%] w-full flex flex-col justify-start items-center md:py-20 md:px-10 p-4 py-8 font-serif bg-primary text-white/[0.9]"
            >
                <h1 class="text-4xl font-bold uppercase font-mono">
                    {$_("landing.about.title")}
                </h1>
                <p class="mt-5 lg:text-[1.2vw] text-[2.3vw]">
                    {$_("landing.about.content1")}
                    <br /><br />
                    {$_("landing.about.content2")}
                </p>
            </div>
        </div>
    </section>
</main>
