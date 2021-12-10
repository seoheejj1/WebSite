function login()
{   console.log("a");
    $.ajax({
    type: "POST",
    url: "https://script.google.com/macros/s/AKfycbwXYS-iGP31pGNhVXDHEv22xdUOWylECZp5D4EyOCvWMAoLBij2bW6fJjkowHnmq36N/exec",
    data: {
      "type": "login",
      "id": document.getElementById('id').value,
      "pass": document.getElementById('pw').value
    },
    success :  function(resp){
            alert(resp);
            if (resp == '로그인 성공...이동중입니다.')
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
    url: "https://script.google.com/macros/s/AKfycbwXYS-iGP31pGNhVXDHEv22xdUOWylECZp5D4EyOCvWMAoLBij2bW6fJjkowHnmq36N/exec",
    data: {
      "type": "register",
      "id": document.getElementById('id').value,
      "pass": document.getElementById('pw').value
    },  success :  function(resp){
        alert(resp);
    }
   
  });
}
