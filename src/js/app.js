async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(target + '.html');
}

async function importPage(path,target) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(path+target + '.html');
}