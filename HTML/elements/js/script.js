window.onload = ()=>{
    let elem=document.getElementsByTagName('li');
    //elem.forEach(cuadro => {
    for(let x=0;x<elem.length;x++){

        elem[x].addEventListener('click',(e)=>{
            let nom=elem[x].getAttribute("data-name");
            let des=elem[x].getAttribute("data-descr");
            let sim=elem[x].getAttribute("data-sim");
            document.getElementById("txtElemento").innerText=nom;
            document.getElementById("txtSimbolo").innerText=sim;
            document.getElementById("txtDescr").innerText=des;

        });
        
    };
    //console.log(elem.length);
}