const Nav = document.getElementsByClassName('Nav')[0];
const VID = document.getElementsByClassName('main_Vid')[0];
const Music = document.getElementById("music");
const PImg = document.getElementById('pImage');
const muteIMG = document.getElementsByClassName('mute')[0];
const langlist = document.querySelectorAll("#langs > li");

Music.muted = true;

let text = {
            'FR':"Vous êtes en quête d’une expérience totalement inédite et singulière en pleine nature ? … Alors laissez-vous emporter par des expériences 100 % nature avec DAWYA NATURES pour le plaisir d’un retour au source en profitant intelligemment et avec respect l’arrière pays Jbala et ses espaces ! Un trésors du monde rural, le Douar Boujmil est un village pittoresque qui s’offrent à vous ; ces espaces naturels exceptionnels, ces habitants Al-Houz restés traditionnellement paysans et simple, ces montages calcaires facturés et majestueuses, sa(ses) source(s) d’eau clair et résurgences permanente(s), ces rochers comme des statuts millénaires, sa faune - singe Mangot , corneille, épervier et autres rapaces, sa flore luxuriante au printemps e ces olivier géants mufti-centenaire , son panorama unique sur la méditerranée et les montagne du Rif ! Dans le prolongement de la chaîne Monte Blanco, Boujmil est à 150 mètre d’altitude et le pic du mont Boujmil à 681 m avec une vue magnifique sur la mer méditerranée. Le Douar Boujmil, un site encore méconnue et à préserver, est espace idéal pour un retour à la nature dont nous avons tous besoin !",
            'EN':"Are you looking for a completely new and unique experience in the heart of nature? … So let yourself be carried away by 100% nature experiences with DAWYA NATURES for the pleasure of a return to the source by intelligently and respectfully enjoying the Jbala hinterland and its spaces! A treasure of the rural world, the Douar Boujmil is a picturesque village available to you; these exceptional natural spaces, these Al-Houz inhabitants who have traditionally remained peasants and simple, these steep and majestic limestone mountains, its source(s) of clear water and permanent resurgence(s), these rocks like millennial statutes, its fauna - Mangot monkey, crow, sparrowhawk and other birds of prey, its luxuriant flora in spring and these giant centuries-old olive trees, its unique panorama of the Mediterranean and the Rif mountains! In the extension of the Monte Blanco chain, Boujmil is 150 meters above sea level and the peak of Mount Boujmil at 681 m with a magnificent view of the Mediterranean Sea. The Douar Boujmil, a site still unknown and to be preserved, is an ideal space for a return to nature that we all need!",
            'ES':"¿Está buscando una experiencia completamente nueva y única en el corazón de la naturaleza? … ¡Así que déjese llevar por experiencias 100% naturales con DAWYA NATURES por el placer de volver a la fuente disfrutando de manera inteligente y respetuosa del interior de Jbala y sus espacios! Un tesoro del mundo rural, el Douar Boujmil es un pueblo pintoresco a su disposición; estos espacios naturales excepcionales, estos habitantes de Al-Houz que han permanecido tradicionalmente campesinos y sencillos, estas montañas calizas escarpadas y majestuosas, su(s) fuente(s) de agua clara y resurgimiento(s) permanente(s), estas rocas como estatutos milenarios, su fauna - Mangot mono, corneja, gavilán y otras rapaces, su exuberante flora en primavera y estos gigantes olivos centenarios, ¡su panorama único del Mediterráneo y las montañas del Rif! En la extensión de la cadena Monte Blanco, Boujmil se encuentra a 150 metros sobre el nivel del mar y la cima del Monte Boujmil a 681 m con una magnífica vista del mar Mediterráneo. ¡El Douar Boujmil, un sitio aún desconocido y por preservar, es un espacio ideal para el regreso a la naturaleza que todos necesitamos!",
            'AR':"هل تبحث عن تجربة جديدة تمامًا وفريدة من نوعها في قلب الطبيعة؟ ... لذا دع نفسك تنجرف بتجارب الطبيعة 100٪ مع DAWYA NATURES من أجل متعة العودة إلى المصدر من خلال الاستمتاع بذكاء واحترام بجبالة النائية ومساحاتها! كنز من العالم الريفي ، دوار بوجميل هي قرية خلابة متاحة لك ؛ هذه المساحات الطبيعية الاستثنائية ، سكان الحوز الذين ظلوا تقليديًا فلاحين وبسيطين ، هذه الجبال الجيرية شديدة الانحدار والمهيب ، مصدر (مصادر) المياه الصافية والانبعاث الدائم (ق) ، هذه الصخور مثل تماثيل الألفية ، وحيواناتها - مانجوت القرد والغراب والباشق والطيور الجارحة الأخرى ، ونباتاتها المترفة في الربيع وأشجار الزيتون العملاقة هذه التي يبلغ عمرها قرونًا ، وبانوراماها الفريدة للبحر الأبيض المتوسط ​​وجبال الريف! في امتداد سلسلة مونتي بلانكو ، يبلغ ارتفاع بوجميل 150 مترًا فوق مستوى سطح البحر وقمة جبل بوجميل على ارتفاع 681 مترًا مع إطلالة رائعة على البحر الأبيض المتوسط. يعتبر دوار بوجميل ، وهو موقع لا يزال مجهولاً ويجب الحفاظ عليه ، مساحة مثالية للعودة إلى الطبيعة التي نحتاجها جميعًا!"
        }
let blobtext = {
            'FR':"Depuis des années, le blob fascine les scientifiques. Dépourvu de cerveau mais doué pour apprendre, quasiment immortel, capable de se déplacer... Cet organisme à l'apparence visqueuse et aux airs d'éponge intrigue également le grand public.",
            'EN':"For years, the blob has fascinated scientists. Brainless but gifted to learn, almost immortal, able to move... This viscous-looking, sponge-like organism also intrigues the general public.",
            'ES':"Durante años, la mancha ha fascinado a los científicos. Sin cerebro pero dotado para aprender, casi inmortal, capaz de moverse... Este organismo viscoso y esponjoso también intriga al público en general.",
            'AR':"لسنوات ، أذهلت هذه النقطة العلماء. بلا عقل لكنه موهوب للتعلم ، خالٍ تقريبًا ، قادر على الحركة ... هذا الكائن اللزج الشبيه بالإسفنج يثير اهتمام عامة الناس أيضًا."
}

PImg.src = `Media/C${Math.ceil(Math.random()*7)}.png`

muteIMG.addEventListener('click',()=>{
    let child = muteIMG.children[0];
    if (`${child.src}`.includes("unmute")){
        Music.muted = true;
        child.src = `${child.src}`.replace("unmute","mute");        
    }
    else{
        Music.muted = false;
        child.src = `${child.src}`.replace("mute","unmute");
    }
})

Array.from(langlist).forEach((e)=>{e.addEventListener('click',()=>changeLang(e))});

window.addEventListener('scroll',()=>{
    let Y = window.scrollY;
    let opacity = 100-(Y/4) > 0 ? 100-(Y/4) : 0;
    let vid_width = 20-(Y/4) > 0 ? 20-(Y/4) : 0;
    Nav.style.opacity = `${100-opacity}%`;
    VID.style.width = `${80+vid_width}%`;
    VID.style.marginLeft = `${(100-(80+vid_width))/2}%`;
});

function changeLang(e){
    let tolang = e;
    let oldlang = document.getElementById("checkedlang");
    if(tolang.innerText === oldlang.innerText){
        return
    }
    else{
        oldlang.removeAttribute("id");
        e.id = 'checkedlang';
        document.getElementById("parag").innerText = text[tolang.innerText];
        document.getElementById("paragblob").innerText = blobtext[tolang.innerText];
    }
}
function MobileMenu() {
    var x = document.getElementById("menus");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function changeIcon(x) {
    if(x.innerText === '☰'){
        x.innerHTML = '&#9747;';
    }
    else{
        x.innerHTML = '&#9776;';
    }
}