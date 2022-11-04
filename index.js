
    let score=0
    let Score= setInterval(()=>{
      score++;
      document.getElementById("count").innerHTML = score;
    },1000)
  
  var bol="false"
  
  function up(){
    clearInterval(f)
    if (bol=="true"){
      clearInterval(h)
    }
    document.getElementById("flappy").style.top=`${document.getElementById("flappy").offsetTop-100}px`;
    setTimeout(()=>{h=setInterval(down,1);bol="true"},200)
  }

  function down(){
    const element = document.getElementById("flappy");
    let pos = element.offsetTop;
    document.getElementById("flappy").style.top=`${pos+100}px`;
    
  }

function gen_blocks(counter){
  let b_block =document.createElement("div");
  b_block.classList.add("b-block");
  b_block.setAttribute('id',`b${counter}`)
  document.getElementById('1').appendChild(b_block);
  let w_block =document.createElement("div");
  w_block.classList.add("w-block");
  w_block.setAttribute('id',`w${counter}`)
  document.getElementById('1').appendChild(w_block);
}
let counter=0;
let life=setInterval(() => {
  counter++
  gen_blocks(counter);
  move_blocks(counter);
}, 2000);


function move_blocks(counter){
    let i=-20;
    let Random= Math.floor(Math.random()*60);
    let o=setInterval(()=>{document.getElementById(`b${counter}`).setAttribute('style',`right:${i}%;`);
    document.getElementById(`w${counter}`).setAttribute('style',`right:${i}%; top:${Random}%`);
    i++;
    if (i>112){
      clearInterval(o);
    }
    if (!(document.getElementById("flappy").offsetTop > document.getElementById(`w${counter}`).offsetTop &&
      document.getElementById("flappy").offsetTop < document.getElementById(`w${counter}`).offsetTop +180)&&
      (190 > document.getElementById(`w${counter}`).offsetLeft && document.getElementById(`w${counter}`).offsetLeft > 180))
      {
      document.querySelector('game').remove();
      }
  },50);
}
f= setInterval(down,1)
