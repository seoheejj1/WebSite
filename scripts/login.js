function login()
{   console.log("a");
    $.ajax({
    type: "POST",
    url: "https://script.google.com/macros/s/AKfycbwfq3ZFaAEqzcg-iJyGUKsChqQP8-4WCpzOWn2rFCpiWRVhyOP9uEUvi1Y5hIqIocGu/exec",
    data: {
      "type": "login",
      "id": document.getElementById('id').value,
      "pass": document.getElementById('pw').value
    },
    success :  function(resp){
            alert(resp);
            if (resp == '로그인 성공')
            {
              localStorage.setItem('name',document.getElementById('id').value);
              location.href = 'board.html';
            }
        }

  });
}

function register()
{ 
    console.log("a");
    $.ajax({
    type: "POST",
    url: "https://script.google.com/macros/s/AKfycbwfq3ZFaAEqzcg-iJyGUKsChqQP8-4WCpzOWn2rFCpiWRVhyOP9uEUvi1Y5hIqIocGu/exec",
    data: {
      "type": "register",
      "id": document.getElementById('id').value,
      "pass": document.getElementById('pw').value
    },  success :  function(resp){
        alert(resp);
    }
   
  });
}
