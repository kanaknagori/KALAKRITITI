var ctrh, ctrw;
if(Window.innerWidth>500){
  ctrh= 1.5;
  ctrw= .7;
}
else{
  ctrh=.7;
  ctrw=2.2;
}

document.querySelector("#dotclick").addEventListener("click",function(){
    document.querySelector("#logoclick").style.display="block";
})
function textanim(){
    var h1= document.querySelector("#fp h1");
      var clutter="";
      var j=0;
      for(var i=0; j<=Math.floor(h1.textContent.length/2); i++){
          clutter+=`<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
              j++;
      }
      for(var i=Math.floor(h1.textContent.length/2)-1; i>=0; i--){
          clutter+=`<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
              j++;
      }
      document.querySelector("h1").innerHTML=clutter;
      document.querySelectorAll("h1 span").forEach(function(elem) {
          gsap.to(elem,{
              ease:Expo.easeInOut,
              duration: 1,
              y:0,
              delay: elem.dataset.delay*.1
          })
          
      });
  }
  textanim();
  function cubeAnimation(){
    gsap.to("#fp img",{
      duration:1,
      stagger: 1,
      ease:"power3.easeInout",
      delay:0.8,
      display:"initial",
      
      
    })
    var t1= gsap.timeline();
  t1.to("#cube",{
    height:`${40*ctrh}%`,
    duration:1.0,
    ease: "power3.easeInout",
    delay:0.2
  
  })
  .to("#cube",{
    width: `${20 * ctrh}%`,
    height: `${25 * ctrw}%`,
    duration:1.0,
    ease: "power3.easeInout",
    delay:0.2
  
  })
  .to("#cube",{
    width: `${20 * ctrw}%`,
    height: `${50 * ctrh}%`,
    duration:1.0,
    ease: "power3.easeInout",
    delay:0.5
    
  
  })
  
  .to("#fp h1 span",{
    duration:1,
    ease: Expo.easeInOut,
    y:"-200%"
  })
  
  .to("#cube",{
     height: "100%",
     width:"100%",
    ease:"circ.Inout",
    delay:0,
    duration:0.5,
    onComplete: function(){
       
      document.querySelector("#fp").style.display="none";
      document.querySelector("#main").style.display="initial";
      counter();
  
    }
    
   
  })
  };
  cubeAnimation();
function boxes(){
    document.querySelector(".box1").addEventListener("mouseover",function(){
        document.querySelector("#content").innerHTML=`<h2>Wood Work</h2>
        <p>The wooden handicraft of India is draped with a vast cultural and ethnic diversity which is applied to a range of themes, techniques and crafts. These wooden handicrafts are unique in their own style and are claimed to be an absolute personification of the Indian heritage. India Woodwork Industry has not only specialized in serving architectural purpose but also manufactures furniture both in traditional as well as ultramodern style.</p>`;
        document.querySelector(".box2").style.filter=blur="blur(8Px)";
        document.querySelector(".box3").style.filter=blur="blur(8Px)";
        document.querySelector(".box4").style.filter=blur="blur(8Px)";
        document.querySelector(".box5").style.filter=blur="blur(8Px)";
        document.querySelector(".box6").style.filter=blur="blur(8Px)";
        document.querySelector(".box7").style.filter=blur="blur(8Px)";
    })
    document.querySelector(".box1").addEventListener("mouseout",function(){
        document.querySelector("#content").innerHTML=`<h2>Kalakriti : work of art</h2>
        <p>Art refers to human creation that is appealing to the finer senses of the individual; while a craft is a skill, especially involving performing arts. When it comes to India, there is an abundance of both. Arts and crafts in India, as everywhere else, define the cultural layers of the country, community, and race. India is famously a multicultural nation, and thus it has a huge variety of different traditions.</p>
        `;
       document.querySelector(".box2").style.filter=blur="blur(0Px)";
       document.querySelector(".box3").style.filter=blur="blur(0Px)";
       document.querySelector(".box4").style.filter=blur="blur(0Px)";
       document.querySelector(".box5").style.filter=blur="blur(0Px)";
       document.querySelector(".box6").style.filter=blur="blur(0Px)";
       document.querySelector(".box7").style.filter=blur="blur(0Px)";
    })
    document.querySelector(".box2").addEventListener("mouseover",function(){
        document.querySelector("#content").innerHTML=`<h2>Pottery</h2>
        <p>It is a cultural art form that is still widely practiced in India today. Pottery is significant in the study of culture and the reconstruction of the past.
        The style of pottery has evolved over time in response to different cultures. It represents the social, economic, and environmental conditions in which civilizations flourished, aiding archaeologists and historians in comprehending our history.
        It is useful for deciphering cultures where there's no script or where the script hasn't been decoded</p>`;
        document.querySelector(".box1").style.filter=blur="blur(8Px)";
        document.querySelector(".box3").style.filter=blur="blur(8Px)";
        document.querySelector(".box4").style.filter=blur="blur(8Px)";
        document.querySelector(".box5").style.filter=blur="blur(8Px)";
        document.querySelector(".box6").style.filter=blur="blur(8Px)";
        document.querySelector(".box7").style.filter=blur="blur(8Px)";
    })
    document.querySelector(".box2").addEventListener("mouseout",function(){
        document.querySelector("#content").innerHTML=`<h2>Kalakriti : work of art</h2>
        <p>Art refers to human creation that is appealing to the finer senses of the individual; while a craft is a skill, especially involving performing arts. When it comes to India, there is an abundance of both. Arts and crafts in India, as everywhere else, define the cultural layers of the country, community, and race. India is famously a multicultural nation, and thus it has a huge variety of different traditions.</p>
        `;
       document.querySelector(".box1").style.filter=blur="blur(0Px)";
       document.querySelector(".box3").style.filter=blur="blur(0Px)";
       document.querySelector(".box4").style.filter=blur="blur(0Px)";
       document.querySelector(".box5").style.filter=blur="blur(0Px)";
       document.querySelector(".box6").style.filter=blur="blur(0Px)";
       document.querySelector(".box7").style.filter=blur="blur(0Px)";
    })
    document.querySelector(".box3").addEventListener("mouseover",function(){
        document.querySelector("#content").innerHTML=`<h2>Jute work</h2>
        <p>We use various things made by jute in our daily life. Jute is used to make clothes, bags, carpets, rugs, ropes, sacks, and more. Jute is in demand and used all over the world. Bangladesh produces 80% of the world’s jute.</p>
        <p>The importance of jute is very great in Bangladesh. It brings foreign exchange for us. Jute and goods of jute are greatly demandable in the world fashion market. The income that we get by exporting jute is used to develop our poor economy. So, proper steps should be taken to increase the standard of jute.</p>`;
        document.querySelector(".box1").style.filter=blur="blur(8Px)";
        document.querySelector(".box2").style.filter=blur="blur(8Px)";
        document.querySelector(".box4").style.filter=blur="blur(8Px)";
        document.querySelector(".box5").style.filter=blur="blur(8Px)";
        document.querySelector(".box6").style.filter=blur="blur(8Px)";
        document.querySelector(".box7").style.filter=blur="blur(8Px)";
    })
    document.querySelector(".box3").addEventListener("mouseout",function(){
        document.querySelector("#content").innerHTML=`<h2>Kalakriti : work of art</h2>
        <p>Art refers to human creation that is appealing to the finer senses of the individual; while a craft is a skill, especially involving performing arts. When it comes to India, there is an abundance of both. Arts and crafts in India, as everywhere else, define the cultural layers of the country, community, and race. India is famously a multicultural nation, and thus it has a huge variety of different traditions.</p>`;
       document.querySelector(".box1").style.filter=blur="blur(0Px)";
       document.querySelector(".box2").style.filter=blur="blur(0Px)";
       document.querySelector(".box4").style.filter=blur="blur(0Px)";
       document.querySelector(".box5").style.filter=blur="blur(0Px)";
       document.querySelector(".box6").style.filter=blur="blur(0Px)";
       document.querySelector(".box7").style.filter=blur="blur(0Px)";
    })
    document.querySelector(".box4").addEventListener("mouseover",function(){
        document.querySelector("#content").innerHTML=`<h2>Shell work</h2>
        <p>These shell crafts are very adorable because of its rich look with elegant colour combination and natural design. Plywood sheet, reflective glass sheet and seashells are the basic raw materials, which plays a very important role in making seashell mirror. Initially the plywood sheet is cut using handsaw according to the required shape to make a frame for the mirrror. Then the pre-cut and shaped glass sheet is glued at the centre of the plywood sheet.</p>
        `
        document.querySelector(".box1").style.filter=blur="blur(8Px)";
        document.querySelector(".box2").style.filter=blur="blur(8Px)";
        document.querySelector(".box3").style.filter=blur="blur(8Px)";
        document.querySelector(".box5").style.filter=blur="blur(8Px)";
        document.querySelector(".box6").style.filter=blur="blur(8Px)";
        document.querySelector(".box7").style.filter=blur="blur(8Px)";
    })
    document.querySelector(".box4").addEventListener("mouseout",function(){
        document.querySelector("#content").innerHTML=`<h2>Kalakriti : work of art</h2>
        <p>Art refers to human creation that is appealing to the finer senses of the individual; while a craft is a skill, especially involving performing arts. When it comes to India, there is an abundance of both. Arts and crafts in India, as everywhere else, define the cultural layers of the country, community, and race. India is famously a multicultural nation, and thus it has a huge variety of different traditions.</p>`;
       document.querySelector(".box1").style.filter=blur="blur(0Px)";
       document.querySelector(".box2").style.filter=blur="blur(0Px)";
       document.querySelector(".box3").style.filter=blur="blur(0Px)";
       document.querySelector(".box5").style.filter=blur="blur(0Px)";
       document.querySelector(".box6").style.filter=blur="blur(0Px)";
       document.querySelector(".box7").style.filter=blur="blur(0Px)";
    })
    document.querySelector(".box5").addEventListener("mouseover",function(){
        document.querySelector("#content").innerHTML=`<h2>Bamboo work</h2>
        <p>The history of cane and bamboo craft goes back to the 2nd century AD. There are no precise chronicles in the history of Indian craft that talk about the origin, history and genesis of this handicraft.  However, it is believed that this craft has existed since the dawn of civilization.  he most common Bamboo craft since time immoral has been baskets.</p>
        `
        document.querySelector(".box1").style.filter=blur="blur(8Px)";
        document.querySelector(".box2").style.filter=blur="blur(8Px)";
        document.querySelector(".box3").style.filter=blur="blur(8Px)";
        document.querySelector(".box4").style.filter=blur="blur(8Px)";
        document.querySelector(".box6").style.filter=blur="blur(8Px)";
        document.querySelector(".box7").style.filter=blur="blur(8Px)";
    })
    document.querySelector(".box5").addEventListener("mouseout",function(){
        document.querySelector("#content").innerHTML=`<h2>Kalakriti : work of art</h2>
        <p>Art refers to human creation that is appealing to the finer senses of the individual; while a craft is a skill, especially involving performing arts. When it comes to India, there is an abundance of both. Arts and crafts in India, as everywhere else, define the cultural layers of the country, community, and race. India is famously a multicultural nation, and thus it has a huge variety of different traditions.</p>
        `;
       document.querySelector(".box1").style.filter=blur="blur(0Px)";
       document.querySelector(".box2").style.filter=blur="blur(0Px)";
       document.querySelector(".box3").style.filter=blur="blur(0Px)";
       document.querySelector(".box4").style.filter=blur="blur(0Px)";
       document.querySelector(".box6").style.filter=blur="blur(0Px)";
       document.querySelector(".box7").style.filter=blur="blur(0Px)";
    })
    document.querySelector(".box6").addEventListener("mouseover",function(){
        document.querySelector("#content").innerHTML=`<h2>Brass work</h2>
        <p>Every Indian festival celebrates the coming together of people to embrace their cultures and traditions. Brass, a traditional metal, has been used since time immemorial in various auspicious occasions for serving sweets, fruits and offerings to the deities.</p>
        <p>food is considered as one of the key components in every festival and there are often special items prepared for every occasion. Brass and copper are considered to add benefits and reap good luck, hence these cookware and tableware items complement every Indian celebration.</p>
        `
        document.querySelector(".box1").style.filter=blur="blur(8Px)";
        document.querySelector(".box2").style.filter=blur="blur(8Px)";
        document.querySelector(".box3").style.filter=blur="blur(8Px)";
        document.querySelector(".box4").style.filter=blur="blur(8Px)";
        document.querySelector(".box5").style.filter=blur="blur(8Px)";
        document.querySelector(".box7").style.filter=blur="blur(8Px)";
    })
    document.querySelector(".box6").addEventListener("mouseout",function(){
        document.querySelector("#content").innerHTML=`<h2>Kalakriti : work of art</h2>
        <p>Art refers to human creation that is appealing to the finer senses of the individual; while a craft is a skill, especially involving performing arts. When it comes to India, there is an abundance of both. Arts and crafts in India, as everywhere else, define the cultural layers of the country, community, and race. India is famously a multicultural nation, and thus it has a huge variety of different traditions.</p>
        `;
       document.querySelector(".box1").style.filter=blur="blur(0Px)";
       document.querySelector(".box2").style.filter=blur="blur(0Px)";
       document.querySelector(".box3").style.filter=blur="blur(0Px)";
       document.querySelector(".box4").style.filter=blur="blur(0Px)";
       document.querySelector(".box5").style.filter=blur="blur(0Px)";
       document.querySelector(".box7").style.filter=blur="blur(0Px)";
    })
    document.querySelector(".box7").addEventListener("mouseover",function(){
        document.querySelector("#content").innerHTML=`<h2>Carpet work</h2>
        <p> When it comes to striking the best first impression of luxury and elegance, carpets are a notch above everything else. Yet, carpets still remain as one of the most underrated home furnishings in India. Though carpets have been around for thousands of years, not many Indian homes use them even today. A well-designed, high-quality carpet adds a luxurious style statement to any room. Carpets add a whimsical fairytale-sque touch to your interiors. They make you feel like royalty, and melt away your stresses every time you sink your legs into a lush carpet</p>
        
        `
        document.querySelector(".box1").style.filter=blur="blur(8Px)";
        document.querySelector(".box2").style.filter=blur="blur(8Px)";
        document.querySelector(".box3").style.filter=blur="blur(8Px)";
        document.querySelector(".box4").style.filter=blur="blur(8Px)";
        document.querySelector(".box5").style.filter=blur="blur(8Px)";
        document.querySelector(".box6").style.filter=blur="blur(8Px)";
    })
    document.querySelector(".box7").addEventListener("mouseout",function(){
        document.querySelector("#content").innerHTML=`<h2>Kalakriti : work of art</h2>
        <p>Art refers to human creation that is appealing to the finer senses of the individual; while a craft is a skill, especially involving performing arts. When it comes to India, there is an abundance of both. Arts and crafts in India, as everywhere else, define the cultural layers of the country, community, and race. India is famously a multicultural nation, and thus it has a huge variety of different traditions.</p>
        `;
       document.querySelector(".box1").style.filter=blur="blur(0Px)";
       document.querySelector(".box2").style.filter=blur="blur(0Px)";
       document.querySelector(".box3").style.filter=blur="blur(0Px)";
       document.querySelector(".box4").style.filter=blur="blur(0Px)";
       document.querySelector(".box5").style.filter=blur="blur(0Px)";
       document.querySelector(".box6").style.filter=blur="blur(0Px)";
    })
}
boxes();

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector("#logoclick").style.display="none";
})
// document.querySelector(".chat").addEventListener("click",function(){
//     document.querySelector("#chatbox").style.display="block";
// })



function chatbox(){
    var temp=1;
    document.querySelector("#close2").addEventListener("click",function(){
        console.log("click huaaa");
        document.querySelector("#chatbox").style.display="none";
    })

    if(temp===1){
        document.querySelector("#minimize").addEventListener("click",function(){
            document.querySelector("#chatbox").style.height='10px';
            document.querySelector("#chatbox").style.display="block";
            document.querySelector("#chatbox").style.zindex='1000';  
        })
        temp=0;
    }else{
        document.querySelector("#minimize").addEventListener("click",function(){
            document.querySelector("#chatbox").style.height='500px';
        })
        temp=1;
    }


}
// chatbox();


function counter(){
        
$(document).ready(function(){
    $('.counter').each(function(){
        $(this).prop('counter',0).animate({
            counter:$(this).text()
        },{
            duration:3500,
            easing:'swing',
            delay:60,
            step:function(now){
                $(this).text(Math.ceil(now)+'+');
            }
        })
    });

});
}

function map(){
    var tooltipspan=document.getElementById("details-box");
        document.addEventListener('mouseover',function(e){
            if(e.target.tagName=='path'){
                var content=e.target.dataset.name;
                document.getElementById("details-box").innerHTML=content;
                document.getElementById("details-box").style.opacity="100%";
            }
            else{
                document.getElementById("details-box").style.opacity="0%";
            }
        });
        window.onmousemove=function(e){
            var x=e.clientX,
            y=e.clientY;
            tooltiSpan.style.top=(y+20)+'px';
            tooltipspan.style.left=(x)+'px';
        };
}
map();

var a=document.querySelector("#map-text h1");
var clutter="";
var j=0;
for(var i=0;i<=Math.floor(a.textContent.length/2);i++){
    clutter+=`<span data-delay="${i}">${a.textContent.charAt(j)}</span>`
    console.log(i);
    j++;

}
for(var i=Math.floor(a.textContent.length/2);i>=0;i--){
    clutter+=`<span data-delay="${i}">${a.textContent.charAt(j)}</span>`
    console.log(i);
    j++;

}
document.querySelector("#map-text h1").innerHTML=clutter;
document.querySelectorAll("#map-text h1 span").forEach(function(eleme){

    gsap.to(eleme,{
        y:0,
        opacity:1,
        duration:1,
        ease:Expo.easeInOut,
        display:"inline",
        delay:eleme.dataset.delay*.1
    })
   
})
  
