<script lang="ts">
    import { onMount } from 'svelte';
    import { allChapters } from '../lib/surah';
    import { baseConfiguration } from '$lib/baseConfiguration';

    onMount(() => {
        $baseConfiguration.pageName = 'Fatiha';
    });

</script>
<div class="container mx-auto">
    {#each allChapters as data }
        <div class="card w-full bg-base-100 shadow-xl my-5">
            <div class="card-body">
                <h2 class="card-title">{data.transliteration} </h2>
                <p class="arabic text-2xl">{data.name}</p>
                <div class="card-actions justify-end">
                    <a href="/surah/{data.id}" class="btn btn-sm btn-primary">Baca</a>
                </div>
            </div>
        </div>
    {/each}
</div>