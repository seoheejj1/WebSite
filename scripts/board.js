URL = "https://https://script.google.com/macros/s/AKfycbwXYS-iGP31pGNhVXDHEv22xdUOWylECZp5D4EyOCvWMAoLBij2bW6fJjkowHnmq36N/exec";
var uniquenumber= [0,0,0,0,0];
var boardlist = ['board1','board2','board3','board4','board5'];
var numberlist = ['number1','number2','number3','number4','number5'];
var userlist = ['user1','user2','user3','user4','user5'];
var datelist = ['date1','date2','date3','date4','date5'];
var toplist = ['toplist1','toplist2','toplist3','toplist4','toplist5'];

function makeboard()
{   
    document.getElementById('makeBUTTON').disabled = true;
    let today = new Date();     
    let year = today.getFullYear(); 
    let month = today.getMonth() + 1;  
    let date = today.getDate();  
  $.ajax({
    type: "POST",
    url: URL,
    data: {
      "type": "makeboard",
      "name": localStorage.getItem('name'),
      "title": document.getElementById('titleinput').value,
      "content": document.getElementById('contentinput').value,
      "date" : year + '.' + month + '.' + date
    },  success :  function(resp){
        alert(resp);
        if(resp == "업로드 완료")
        {
            location.href = 'board.html';
        }
    }
   
  });
}

function loadboard()
{ 
    var a = 0;
    var i = 0;
  $.ajax({
    type: "POST",
    url: URL,
    data: {
      "type": "loadboard",
    },  success :  function(resp){
       console.log(JSON.parse(resp));

       while(a < JSON.parse(resp).length)
       {
       document.getElementById(boardlist[a]).textContent = JSON.parse(resp)[a].title[0];
       document.getElementById(datelist[a]).textContent = JSON.parse(resp)[a].date[0];
       document.getElementById(userlist[a]).textContent = JSON.parse(resp)[a].name[0];
       uniquenumber[a] = JSON.parse(resp)[a].uniquenumber[0];
       a++;
       }
       while(i < 5)
       {
           if(document.getElementById(datelist[i]).textContent == "")
           {
                document.getElementById(toplist[i]).remove();
           }
        i++
       }
       //document.getElementById(toplist.slice(a-1,5)).remove();
    }
  });
}

function clickboard(A)
{
  location.href = 'view.html'+'?uniquenumber='+uniquenumber[A]+'&title='+document.getElementById(boardlist[A]).textContent+'&number='+document.getElementById(numberlist[A]).textContent;
}

function enterboard()
{
  var params = new URLSearchParams(location.search);
  document.title = params.get('title');
  document.getElementById('numberIN').textContent = params.get('number');
  $.ajax({
    type: "POST",
    url: URL,
    data: {
      "type": "enterboard",
      "uniquenumber": params.get('uniquenumber'),
    },  success :  function(resp){
      document.getElementById('title').textContent = JSON.parse(resp)[0].title[0];
      document.getElementById('writer').textContent = JSON.parse(resp)[0].name[0];
      document.getElementById('date').textContent = JSON.parse(resp)[0].date[0];
      document.getElementById('contents').textContent = JSON.parse(resp)[0].content[0];
    }
   
  });
}

function loadname()
{ 
  document.getElementById('user_name1').textContent = localStorage.getItem('name');
}
