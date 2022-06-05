window.addEventListener('load', init)

function ID(elem) {
    return document.getElementById(elem);
  }
  function CLASS(elem) {
    return document.getElementsByClassName(elem);
  }
  function $(elem) {
    return document.querySelectorAll(elem)
  }

const Tema = [];
const Kepek = [];
const Cikkek =[];
function init() {
    let tema = "cikkek.json";
    fetch(tema)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.cikk)
             data.tema.forEach((elem) => {
                 Tema.push(elem);
             });
            //console.log(cikkek)
            feldolgoz(Tema)
        })
        .catch((err) => {
            console.log(err);
        });
    let kepek="kepek.json";
    fetch(kepek)
    .then((res) => res.json())
    .then((data) => {
       // console.log(data.kepek)
         data.kepek.forEach((elem)=> {
             Kepek.push(elem);
         });
        //console.log(kepek)
        kiirKepek();
    })
    .catch((err) => {
        console.log(err);
    });
    let cikk = "cikkek.json";
    fetch(cikk)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.cikk)
             data.cikk.forEach((elem) => {
                 Cikkek.push(elem);
             });
            //console.log(cikkek)
             kiirCikk(cikk)
        })
        .catch((err) => {
            console.log(err);
        });
}
 function feldolgoz(Tema) {
    /*  console.log(Tema) */
     var txt = '<div id="fo_div">';
        Tema.forEach(function (tema){
           /*  console.log(tema) */
            for (const key in tema) {
                if(key.includes("cim")){
                    txt += `<h1>${tema[key]}</h1>`
                }else if (key.includes("szov")){
                    txt += `<p>${tema[key]}</p>`
                }else if (key.includes("al")){
                    txt += `<h3>${tema[key]}</h3>`
                }else if(key.includes("kep")){
                    txt += `<img src="${tema[key]}" alt="">`

                }                
            }
        })
    txt += "</div>"
     $("article")[0].innerHTML = txt}

     
      function kiirKepek() {
        var txt = " ";
        for (let i = 0; i < Kepek.length; i++) {
          txt =
            txt +
            "<img id='"+i+"' src='" +
            Kepek[i].utv +
            "' class='kepek' alt='képek'/>" +
            "<div>" +
            "<p>" +"Fotós: " +
            Kepek[i].fotos +
            "</p>" +
            "<p>" +"Modell: "+
            Kepek[i].modell +
            "</p> </div>";
        }
        ID("aside").innerHTML = txt;
      }

function kiirCikk(){
    var txt = '<div id="mellek_div">' ;
    for (const key in Cikkek) {
        if(key.includes("cim")){
            txt += `<h1>${Cikkek[key]}</h1>`
        }else if (key.includes("szov")){
            txt += `<p>${Cikkek[key]}</p>`}
   }  
   ID("article").innerHTML = txt;
 } 
      
            