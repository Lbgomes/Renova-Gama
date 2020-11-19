

function getLeads() {
    fetch(`https://smtl.gama.academy/leads/1ccc7f61-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        leads = resp;
      })
      .then((responseJson) => {
        print()
      })
  }

  getLeads()


  function print() {
      document.getElementById('count').innerText += ` ${leads.length}`
      const board = document.getElementById('board')
      for (let index = 0; index < leads.length; index++) {
        let cardCount = document.createElement("div")
        let countBtn = document.createElement("button")
        countBtn.innerText = index + 1
        cardCount.appendChild(countBtn)  
        board.appendChild(cardCount)  


        let cardId = document.createElement("div")
        cardId.innerText = leads[index].id
        board.appendChild(cardId)  

        let cardName = document.createElement("div")
        cardName.innerText = leads[index].name
        board.appendChild(cardName)  

        let cardEmail = document.createElement("div")
        cardEmail.innerText = leads[index].email
        board.appendChild(cardEmail)  

        let cardIp = document.createElement("div")
        cardIp.innerText = leads[index].ip
        board.appendChild(cardIp)  
      }
      
     

  }



    
    //Grupo 1
    
    fetch(`https://smtl.gama.academy/leads/1cbdb250-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo1 = resp;
      })
      .then((responseJson) => {
        // print(grupo1, 'grupo1')

        createRank(grupo1, 'chart1', 'Grupo 1')
      })



    //Grupo 2
    
    fetch(`https://smtl.gama.academy/leads/1ccc5850-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo2 = resp;
      })
      .then((responseJson) => {
        // print(grupo2, 'grupo2')

        createRank(grupo2, 'chart2', 'Grupo 2')
      })



    //Grupo 3
    
    fetch(`https://smtl.gama.academy/leads/1ccc5851-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo3 = resp;
      })
      .then((responseJson) => {
        // print(grupo3, 'grupo3')

        createRank(grupo3, 'chart3', 'Grupo 3')
      })



    //Grupo 4
    
    fetch(`https://smtl.gama.academy/leads/1ccc7f60-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo4 = resp;
      })
      .then((responseJson) => {
        // print(grupo4, 'grupo4')

        createRank(grupo4, 'chart4', 'Grupo 4')
      })



    //Grupo 5
    
    fetch(`https://smtl.gama.academy/leads/1ccc7f61-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo5 = resp;
      })
      .then((responseJson) => {
        // print(grupo5, 'grupo5')

        createRank(grupo5, 'chart5', 'Grupo 5')
      })

    
    //Grupo 6
    
    fetch(`https://smtl.gama.academy/leads/1ccc7f62-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo6 = resp;
      })
      .then((responseJson) => { 
        // print(grupo6, 'grupo6')

        createRank(grupo6, 'chart6', 'Grupo 6')
      })

  
  
  //Grupo 7
    
    fetch(`https://smtl.gama.academy/leads/1ccc7f63-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo7 = resp;
      })
      .then((responseJson) => {
        // print(grupo7, 'grupo7')

        createRank(grupo7, 'chart7', 'Grupo 7')
      })


    //Grupo 8
    
    fetch(`https://smtl.gama.academy/leads/1ccc7f64-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo8 = resp;
      })
      .then((responseJson) => {
        // print(grupo8, 'grupo8')

        createRank(grupo8, 'chart8', 'Grupo 8')
      })



    //Grupo 9
    
    fetch(`https://smtl.gama.academy/leads/1ccccd80-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo9 = resp;
      })
      .then((responseJson) => {
        // print(grupo9, 'grupo9')

        createRank(grupo9, 'chart9', 'Grupo 9')
      })


    //Grupo 10
    
    fetch(`https://smtl.gama.academy/leads/1ccccd81-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo10 = resp;
      })
      .then((responseJson) => {
        // print(grupo10, 'grupo10')
        createRank(grupo10, 'chart10', 'Grupo 10')
      })


    //Grupo 11
    
    fetch(`https://smtl.gama.academy/leads/1ccccd82-25e3-11eb-bf8d-0d63c80760d2`, {
        method: "get",
      }
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        grupo11 = resp;
      })
      .then((responseJson) => {
        // print(grupo11, 'grupo11')
        createRank(grupo11, 'chart11', 'Grupo 11')
      })



    function createRank(grupo, chart, nome) {
        //ranking[ranking.length].leads

        let dados = {
            "name": nome,
            "leads": grupo.length,
            "id": chart
          }
          ranking.unshift(dados);

          ranking.sort((a, b) => (a.leads > b.leads) ? -1 : 1)

          if (ranking.length >= 11) {
              printBars()
          }


    }

    function printBars() {

        for (let index = 0; index < ranking.length; index++) {
            
            if(ranking[index].leads < 1) {
                let title = document.createElement("div")
                let bar = document.createElement("div")
                bar.style.background = 'transparent'
                bar.style.opacity = '0.3'
                title.innerText = `${ranking[index].name}`
                bar.innerText = `Sem leads`
                document.getElementById('main').appendChild(title)  
                document.getElementById('main').appendChild(bar)  
    
            } else {
                let title = document.createElement("div")
                title.innerText = `${index+1}°. ${ranking[index].name}`
                let bar = document.createElement("div")
                bar.innerText = `${ranking[index].leads} leads`
                bar.style.width = `${ranking[index].leads/10}%`
                bar.setAttribute("id", ranking[index].id)

                document.getElementById('main').appendChild(title) 
                document.getElementById('main').appendChild(bar)  

                if (ranking[index].leads > 1000) {
                    document.getElementById(chart).style.width = `100%`
                } }
    


            
        }


    }



    let ranking = []

function changeTab(id) {
    const tabItens = document.getElementsByClassName('tab')
    for (let index = 0; index < tabItens.length; index++) {
      tabItens[index].classList.add('hidden')
      
    }
    document.getElementById(id).classList.remove('hidden')
}

function changeActive(id) {
  const tabButtons = document.getElementsByClassName('btn-tab')
  for (let index = 0; index < tabButtons.length; index++) {
   tabButtons[index].classList.remove('active')
    
  }
  document.getElementById(id).classList.add('active')
}