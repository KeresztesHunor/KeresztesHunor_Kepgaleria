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
let kisKepek = null;

function init()
{
    nagyKep = document.querySelector("#nagyKep");
    kisKepek = document.querySelector("#kisKepek");
    const BAL_GOMB = document.querySelectorAll(".bal")[0];
    const JOBB_GOMB = document.querySelectorAll(".jobb")[0];
    BAL_GOMB.addEventListener("click", () => nagyKepetBetolt(KEPEK_INFO[(() =>
    {
        if (--kepIndex < 0)
        {
            kepIndex = KEPEK_INFO.length - 1;
        }
        return kepIndex;
    })()]));
    JOBB_GOMB.addEventListener("click", () => nagyKepetBetolt(KEPEK_INFO[(() =>
    {
        if (++kepIndex > KEPEK_INFO.length - 1)
        {
            kepIndex = 0;
        }
        return kepIndex;
    })()]));
    nagyKepetBetolt(KEPEK_INFO[0]);
    for (let i = 0; i < KEPEK_INFO.length; i++)
    {
        const KEP_INFO = KEPEK_INFO[i];
        letezoTagekhezIr(kisKepek, kepetIr(KEP_INFO.kep, KEP_INFO.alt, "class='korvonalas'"))
    }
    const KIS_KEPEK_LISTA = document.querySelectorAll("#kisKepek img");
    KIS_KEPEK_LISTA.forEach((kisKep, index) => kisKep.addEventListener("click", () =>
    {
        if (index !== kepIndex)
        {
            nagyKepetBetolt(KEPEK_INFO[index]);
            kepIndex = index;
        }
    }));
}

function nagyKepetBetolt(kepInfo)
{
    letezoTagekKozeIr(nagyKep, (() =>
    {
        let txt = "";
        txt += ujTagekKozeIr("h2", null, kepInfo.cim);
        txt += kepetIr(kepInfo.kep, kepInfo.alt);
        txt += ujTagekKozeIr("p", null, kepInfo.leiras);
        return txt;
    })());
}

function kepetIr(kep, alt, parameterek = null)
{
    return paratlanTagetIr("img", `${parameterek ? parameterek + " " : ""}src="kepek/${kep}" alt="${alt}"`);
}

function paratlanTagetIr(tag, parameterek)
{
    return `<${tag} ${parameterek}>`;
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
