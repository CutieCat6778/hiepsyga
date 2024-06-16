<script>
    const posts = [
        {
            title: "Why is Pluto No Longer Classified as a Planet?",
            slug: "why-is-pluto-no-longer-a-planet",
        },
        {
            title: "Should Pluto Still Be Considered a Planet?",
            slug: "should-pluto-still-be-a-planet",
        },
    ];
</script>

<ul class="flex flex-col gap-12 text-blue-300">
    {#each posts as post}
        <li>
            <a
                class="outline outline-1 outline-white p-2 rounded-xl hover:text-red-300 hover:bg-[#b8b8b856]"
                href={"/blog/" + post.slug}
            >
                {post.title}
            </a>
        </li>
    {/each}
</ul>
