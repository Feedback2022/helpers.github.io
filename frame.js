
            document.getElementById('buy3').onclick = function() {
              document.getElementById('greetings').hidden = true;   
              document.getElementById("rap").style.display = "block";
              document.getElementById("helper").style.display = "block";
              document.getElementById("footer").style.display = "none";
              document.getElementById('welcome').hidden = true;       
              document.getElementById('table').hidden = true;
              document.getElementById('container').hidden = true;
              document.getElementById('main').hidden = true;
      document.getElementById('www').hidden = true;
      document.getElementById('title').hidden = true;
      

      
     
    
    }
 
    document.getElementById('buy2').onclick = function() {
      document.getElementById('greetings').hidden = true;   
      document.getElementById("rap").style.display = "block";
      document.getElementById('greetings').hidden = true;
      document.getElementById("helper").style.display = "block";
      document.getElementById("footer").style.display = "none";
      document.getElementById('welcome').hidden = true;
      document.getElementById('table').hidden = true;
      document.getElementById('container').hidden = true;
      document.getElementById('main').hidden = true;
      document.getElementById('www').hidden = true;
      document.getElementById('title').hidden = true;
     
      

      
    
    }
    document.getElementById('bts').onclick = function() {
      document.getElementById('greetings').hidden = false;
      document.getElementById("rap").style.display = "none";
      document.getElementById("helper").style.display = "none";
      document.getElementById("footer").style.display = "block";
      document.getElementById('welcome').hidden = false;
      document.getElementById('www').hidden = false;
      document.getElementById('shape').hidden = false;
      document.getElementById('boy').hidden = false;
      document.getElementById('table').hidden = false;
      document.getElementById('container').hidden = false;
      document.getElementById('main').hidden = false;
      document.getElementById('title').hidden = false;
      
    }
   
    // document.getElementById('button-are').onclick = function() {
      
    //   document.getElementById("www").style.display = "block";
    //   document.getElementById('welcome').hidden = true;
    //   document.getElementById('greetings').hidden = true;
      
      
    // }

       function random_bg_color(){
         
          let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
          let a;
      
          function populate(a){
              for(let i=0; i<6; i++){
                  let x = Math.round(Math.random() * 14);
                  let y = hex[x];
                  a += y;
              }
              return a;
          }
          let Color1 = populate('#');
          let Color2 = populate('#');
          var angle = 'to right';
      
          let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
          let roma = 'linear-gradient(' + Color2 + ','  + Color1 + ")"
          // www.style.background = gradient;
          document.body.style.background = gradient;
          
          
          





         
        
      }
      random_bg_color()    
  
      var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');

function start() {
  var random = Math.floor(Math.random() * 25)+1; // От 0 до 8
  cards_block.style.left = -random * 100 + 'px';
  setTimeout(function() {
    random++;
    cards[random].style.background = '#7B90F7';
    cards[random].style.color = 'white';
  }, 5000)
}
  
     
  
   
      setTimeout(function(){
      document.getElementById('welcome').style.display = 'none';
      document.getElementById('greetings').style.display = 'block';
      },5000)
  
    
    setTimeout(function(){
        document.getElementById('greetings').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
    },15000)
  
   
   

      const day = document.querySelector(".day .numb");
      const hour = document.querySelector(".hour .numb");
      const min = document.querySelector(".min .numb");
      const sec = document.querySelector(".sec .numb");
      var timer = setInterval(()=>{
        var currentDate = new Date().getTime();
        var launchDate = new Date('Sep 1, 2022 7:00:00').getTime();
        var duration = launchDate - currentDate;
        var days = Math.floor(duration / (1000 * 60 * 60 * 24));
        var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((duration % (1000 * 60)) / 1000);
        day.innerHTML = days;
        hour.innerHTML = hours;
        min.innerHTML = minutes;
        sec.innerHTML = seconds;
        if(days < 10){
          day.innerHTML = '0' + days;
        }
        if(hours < 10){
          hour.innerHTML = '0' + hours;
        }
        if(minutes < 10){
          min.innerHTML = '0' + minutes;
        }
        if(seconds < 10){
          sec.innerHTML = '0' + seconds;
        }
        if(duration < 0){
          clearInterval(timer);
        }
        if(days==0 && hours==0 && minutes==0 && seconds==0){
          document.getElementById('welcome').style.display = 'none';
        }
      }, 1000);
  
  let arrow1=document.getElementById('arrow1')
  arrow1.addEventListener('click',function(){
  document.getElementById('welcome').style.display = 'none';
    document.getElementById('greetings').style.display = 'block';
   
  })

  // let arrow2=document.getElementById('arrow2')
  // arrow2.addEventListener('click',function(){
  //   document.getElementById('greetings').style.display = 'none';
  //   document.getElementById('welcome').style.display = 'block';
    
  // })
  
  let arrowlf=document.getElementById('arrowlf')
  arrowlf.addEventListener('click',function(){
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('greetings').style.display = 'none';
  })
  let arrowlf1=document.getElementById('arrowlf1')
  arrowlf1.addEventListener('click',function(){
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('greetings').style.display = 'none';
  })
  let arrowlf2=document.getElementById('arrowlf2')
  arrowlf2.addEventListener('click',function(){
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('greetings').style.display = 'none';
  })
  let arrowlf3=document.getElementById('arrowlf3')
  arrowlf3.addEventListener('click',function(){
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('greetings').style.display = 'none';
  })
  let arrowlf4=document.getElementById('arrowlf4')
  arrowlf4.addEventListener('click',function(){
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('greetings').style.display = 'none';
  })
  let cancel=document.getElementById('cancelbtn')
  cancel.addEventListener('click',function(){
    document.getElementById('www').style.display = 'none';
    document.getElementById('welcome').hidden = false;
    document.getElementById('greetings').hidden = false;
  })
  setTimeout(function(){
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('wr').style.display = 'block';
    document.getElementById('greetings').hidden = true;  
    document.getElementById("helper").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById('welcome').hidden = true;       
    document.getElementById('table').hidden = true;
    document.getElementById('container').hidden = true;
document.getElementById('www').hidden = true;
document.getElementById('title').hidden = true;
},5000)

// let btnpl=document.getElementById('btnpl')
// btnpl.addEventListener('click',function(){
//   document.getElementById('wr').style.display = 'none';
//   document.getElementById("rap").style.display = "none";
//   document.getElementById("helper").style.display = "none";
//   document.getElementById("footer").style.display = "block";
//   document.getElementById('welcome').hidden = false;
//   document.getElementById('www').hidden = false;
//   document.getElementById('shape').hidden = false;
//   document.getElementById('boy').hidden = false;
//   document.getElementById('table').hidden = false;
//   document.getElementById('container').hidden = false;
//   document.getElementById('main').hidden = false;
//   document.getElementById('title').hidden = false;
// })