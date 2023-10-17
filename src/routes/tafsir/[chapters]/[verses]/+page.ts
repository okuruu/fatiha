export const load = async ({fetch,params}) => {
    const getSurah = await fetch('/surah/' + params.chapters + '.json');
    const surahContents = await getSurah.json();
    const data = surahContents[params.chapters];

    const getTafsir = data.tafsir.id.kemenag.text[params.verses]
    return {
        meaning : getTafsir,
    }
}