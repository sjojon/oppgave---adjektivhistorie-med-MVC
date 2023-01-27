//model
const tekst = "";
let ord1 = "________";
let ord2 = "________";
let ord3 = "________";
let ord4 = "________";
let ord5 = "________";
let ord6 = "________";
let ord7 = "________";

//view
updateView()

function updateView() {
    document.getElementById('app').innerHTML = /*html*/`
        <h1> Adjektiv historie</h1>
        <br>
        <br>
        <div id="tekst">
        Dette er en ${ord1} dag som alle de ${ord2} gjestene har gledet seg til,
        <br> 
        for i dag skal de gjøre stas på den ${ord3} Marita. 
        <br><br>
        Mange har gitt Marita ${ord4} gaver, og disse ${ord5} gavene er Marita veldig glad for.
        <br>
        Hun vil gjerne takke alle ${ord6} gjester for at hun fikk så mye ${ord7}.</div>
        <br><br>
        <div style="text-align: center;">
        <button onclick="ordEn(this)" class="button">gledens</button>
        <button onclick="ordEn(this)" class="button">kjedelig</button>
        <button onclick="ordEn(this)" class="button">uutholdelig</button>
        <br>
        <button onclick="ordTo(this)" class="button">feststemte</button>
        <button onclick="ordTo(this)" class="button">triste</button>
        <button onclick="ordTo(this)" class="button">sprudlende</button>
        <br>
        <button onclick="ordTre(this)" class="button">grusomme</button>
        <button onclick="ordTre(this)" class="button">snille</button>
        <button onclick="ordTre(this)" class="button">lystige</button>
        <br><br>
        <button onclick="ordFire(this)" class="button">nyttige</button>
        <button onclick="ordFire(this)" class="button">billige</button>
        <button onclick="ordFire(this)" class="button">dyre</button>
        <br>
        <button onclick="ordFem(this)" class="button">små</button>
        <button onclick="ordFem(this)" class="button">store</button>
        <button onclick="ordFem(this)" class="button">ubrukelige</button>
        <br>
        <button onclick="ordSeks(this)" class="button">slitsomme</button>
        <button onclick="ordSeks(this)" class="button">snille</button>
        <button onclick="ordSeks(this)" class="button">oppfinnsomme</button>
        <br>
        <button onclick="ordSyv(this)" class="button">gaver</button>
        <button onclick="ordSyv(this)" class="button">oppmerksomhet</button>
        <button onclick="ordSyv(this)" class="button">søppel</button>
        </div>
    `;
}

//controller
function ordEn(valg) {
    ord1 = valg.innerHTML;
    updateView();
}

function ordTo(valg) {
    ord2 = valg.innerHTML;
    updateView();
}

function ordTre(valg) {
    ord3 = valg.innerHTML;
    updateView();
}

function ordFire(valg) {
    ord4 = valg.innerHTML;
    updateView();
}

function ordFem(valg) {
    ord5 = valg.innerHTML;
    updateView();
}

function ordSeks(valg) {
    ord6 = valg.innerHTML;
    updateView();
}

function ordSyv(valg) {
    ord7 = valg.innerHTML;
    updateView();
}