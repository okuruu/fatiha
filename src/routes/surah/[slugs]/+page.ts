export const load = async ({fetch,params}) => {
    const getSurah = await fetch('/surah/' + params.slugs + '.json');
    const surahContents = await getSurah.json();
    const data = surahContents[params.slugs];

    let surahChapters:any = [];
    for(let i = 0; i < Object.values(data.text).length;i++){
        surahChapters = [...surahChapters,{
            arabics : data.text[i + 1],
            transliteration : data.translations.id.text[i + 1]
        }];
        surahChapters = surahChapters;
    }
    
    return {
        pageChapters : params.slugs,
        pageTitle : data.name_latin,
        surah : surahChapters,
    }
}