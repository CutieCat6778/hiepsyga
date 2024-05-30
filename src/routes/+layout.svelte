<script>
    import { onMount } from "svelte";
    import "../global.css";

    let lastScrollY = 0;
    let navVisible = true;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY + 5 && window.scrollY > 100) {
            // Scrolling down
            navVisible = false;
        } else if (window.scrollY + 20 < lastScrollY || window.scrollY < 100) {
            // Scrolling up
            navVisible = true;
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

<nav
    class="fixed w-full bg-background bg-opacity-95 shadow-md"
    class:hidden={!navVisible}
>
    <ul class="flex justify-around items-center my-3 text-[1.2rem]">
        <a
            href="/"
            class="uppercase tracking-wide md:w-[33%] w-[50%] text-center text-2xl font-bold"
        >
            Hiệp Sĩ Gà <span class="text-background bg-primary px-1 lowercase"
                >charity</span
            >
        </a>
        <a href="/#about" class="font-semibold uppercase md:block hidden"
            >Chúng tôi</a
        >
        <a href="/#contact" class="font-semibold uppercase md:block hidden"
            >Liên Hệ</a
        >
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSff47cNt3l5i-8qfiaxC3I6npp_oxN27r6alL_T-J6csBz7KQ/viewform?usp=send_form"
            class="font-semibold uppercase md:w-auto text-center w-[50%]"
            >Tham Gia</a
        >
    </ul>
</nav>
<slot />
<img
    class="-z-10 select-none w-screen h-screen fixed top-0 bottom-0 left-0 right-0"
    src="background.png"
    alt="Background"
/>
