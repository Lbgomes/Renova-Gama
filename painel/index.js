

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

