<script lang="ts">
    import { onMount } from 'svelte';
    import { baseConfiguration } from '$lib/baseConfiguration.js';
    
    onMount(() => {
        $baseConfiguration.pageName = data.pageTitle
    });
    
    interface Verses {
        arabics : string,
        transliteration : string
    }
    
    export let data;
    let pageChapters:number = Number(data.pageChapters);
    let verses:Verses[] = data.surah;
</script>

{#each verses as data,index }
    <div class="container container-md mx-auto">
        <div class="card w-full bg-base-100 shadow-xl my-5">
            <div class="card-body">
                <h1 class="text-4xl text-end arabic">{data.arabics}</h1>
                <p class="mt-7 text-end">{index + 1}. {data.transliteration}</p>
                <div class="card-actions justify-end">
                    <a href="/tafsir/{pageChapters}/{index + 1}" class="btn btn-sm btn-primary my-5">Lihat Tafsir</a>
                </div>
            </div>
        </div>
    </div>
{/each}