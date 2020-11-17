fetch("https://smtl.gama.academy/leads/1ccc7f61-25e3-11eb-bf8d-0d63c80760d2")
.then(function (resp) {
  leads = resp.data;
});


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
  }