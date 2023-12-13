function darkMode(){
    let element=document.body;
    element.dataset.bsTheme= element.dataset.bsTheme =="light" ? "dark" : "light" ;
}

const front=document.querySelector('#tabFront');
const back=document.querySelector('#tabBack');

function listarFront(){
    fetch('../../projetos.json')
    .then(response=>response.json())
    .then(dados =>{
        console.log(dados.front)
        dados.front.map((item)=>{
            const card=document.createElement('div')
            card.innerHTML=`
            <div class="card" style="width: 18rem;">
            <img src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div>
                <a href="#" class="btn btn-primary">Git Hub</a>
                <a href="#" class="btn btn-primary">Demo</a>
              </div>
            </div>
          </div>
            `
            front.appendChild(card)
        })
    })
}
listarFront()

function listarBack(){
    fetch('../../projetos.json')
    .then(response=>response.json())
    .then(dados =>{
        console.log(dados.back)
        dados.back.map((item)=>{
            const card=document.createElement('div')
            card.innerHTML=`
            <div class="card" style="width: 18rem;">
            <img src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div>
                <a href="#" class="btn btn-primary">Git Hub</a>
                <a href="#" class="btn btn-primary">Demo</a>
              </div>
            </div>
          </div>
            `
            back.appendChild(card)
        })
    })
}
listarBack()