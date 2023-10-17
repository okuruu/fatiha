<script lang="ts">
    import '../app.css';
    import { baseConfiguration } from '$lib/baseConfiguration';
</script>

<svelte:head>
    <title>Fatiha - { $baseConfiguration.pageName }</title>
</svelte:head>

<div class="container mx-auto">
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <label tabindex="0" for="navigationBar" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/">Belajar Al-Qur'an</a></li>
                <li><a href="/">Tafsir & Hadits</a></li>
                <li><a href="/about">Tentang</a></li>
            </ul>
            </div>
        </div>
        <div class="navbar-center">
            <a href="/" class="btn btn-ghost normal-case text-xl">{ $baseConfiguration.pageName }</a>
        </div>
        <div class="navbar-end">
            <button type="button" class="btn btn-ghost btn-circle">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> -->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
                </svg> -->
            </button>
        </div>
    </div>
</div>
<slot/>