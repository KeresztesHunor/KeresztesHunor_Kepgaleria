window.addEventListener("load", init);

let kepIndex = 0;

const KEPEK_INFO = [
    {
        kep: "DSC7025.jpg",
        cim: "Kép cím 1",
        alt: "Kép alt 1",
        leiras: "Kép leírás 1"
    },
    {
        kep: "DSC7365.jpg",
        cim: "Kép cím 2",
        alt: "Kép alt 2",
        leiras: "Kép leírás 2"
    },
    {
        kep: "DSC7444.jpg",
        cim: "Kép cím 3",
        alt: "Kép alt 3",
        leiras: "Kép leírás 3"
    },
    {
        kep: "DSC7515.jpg",
        cim: "Kép cím 4",
        alt: "Kép alt 4",
        leiras: "Kép leírás 4"
    },
    {
        kep: "DSC73711.jpg",
        cim: "Kép cím 5",
        alt: "Kép alt 5",
        leiras: "Kép leírás 5"
    }
];

let nagyKep = null;

function init()
{
    nagyKep = document.querySelectorAll(".nagyKep")[0];
    const balGomb = document.querySelectorAll(".bal")[0];
    const jobbGomb = document.querySelectorAll(".jobb")[0];
    letezoTagekKozeIr(nagyKep, KEPEK_INFO[0]);
    balGomb.addEventListener("click", () => letezoTagekKozeIr(nagyKep, kepetBetolt(KEPEK_INFO[indexetCsokkent()])));
    jobbGomb.addEventListener("click", () => letezoTagekKozeIr(nagyKep, kepetBetolt(KEPEK_INFO[indexetNovel()])));
}

function kepetBetolt(kepInfo)
{
    let txt = "";
    txt += ujTagekKozeIr("h2", null, kepInfo.cim);
    txt += kepetIr(kepInfo.kep, kepInfo.alt);
    txt += ujTagekKozeIr("p", null, kepInfo.leiras);
    return txt;
}

function indexetCsokkent()
{
    if (--kepIndex < 0)
    {
        kepIndex = KEPEK_INFO.length - 1;
    }
    return kepIndex;
}

function indexetNovel()
{
    if (++kepIndex > KEPEK_INFO.length - 1)
    {
        kepIndex = 0;
    }
    return kepIndex;
}

function letezoTagekKozeIr(szuloElem, tartalom = "")
{
    szuloElem.innerHTML = tartalom;
}

function letezoTagekhezIr(szuloElem, tartalom = "")
{
    szuloElem.innerHTML += tartalom;
}

function ujTagekKozeIr(tag, parameterek = null, tartalom = "")
{
    return `<${tag}${parameterek ? " " + parameterek : ""}>${tartalom}</${tag}>`;
}

function paratlanTagetIr(tag, parameterek)
{
    return `<${tag} ${parameterek}>`;
}

function kepetIr(kep, alt, parameterek = null)
{
    return paratlanTagetIr("img", `${parameterek ? parameterek + " " : ""}src="kepek/${kep}" alt="${alt}"`);
}