<script lang="ts">
    export let data;
</script>

<div class="container mx-auto">
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
            <div class="card-actions justify-end">
            <button type="button" on:click={() => history.back()} class="btn btn-square btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </div>
            <p class="pre-line my-5">{@html data.meaning}</p>
        </div>
    </div>
</div>