async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(target + '.html');
}
 
async function importMainPage(path,target) {
    document.querySelector('#' + 'main').innerHTML = await fetchHtmlAsText(path+target + '.html');
}
function Navigation(element)
{
    console.log(element + element.innerText.toLowerCase());
    target = element.innerText.toLowerCase();
    path ='./src/html/pages/';
    importMainPage(path,target);
}