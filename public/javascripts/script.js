const container= document.querySelector("#bottom");
let scrollLine = document.querySelector(".line1");

container.addEventListener('wheel',(e)=>{
    e.preventDefault();
    container.scrollLeft+=e.deltaY;
    scrollLine.style.width = container.scrollLeft / 2 + 'px';
})

function customs(){
    document.querySelector("#Jute").addEventListener("click",function(){
        document.querySelector("#custom-form").style.display="none";
        document.querySelector("#Jute-items").style.display="initial";
        document.querySelector("#jute-images").style.display="flex";
        document.querySelector("#Required").style.display="block";
        document.querySelector("#custom-img").style.display="none";
        document.querySelector("#custom-back").style.display="initial";
        
    })
    document.querySelector("#Wood").addEventListener("click",function(){
        document.querySelector("#custom-form").style.display="none";
        document.querySelector("#Wood-items").style.display="initial";
        document.querySelector("#wood-images").style.display="flex";
        document.querySelector("#Required").style.display="block";
        document.querySelector("#custom-img").style.display="none";
        document.querySelector("#custom-back").style.display="initial";
    })
    document.querySelector("#Shell").addEventListener("click",function(){
        document.querySelector("#custom-form").style.display="none";
        document.querySelector("#Shell-items").style.display="initial";
        document.querySelector("#shell-images").style.display="flex";
        document.querySelector("#Required").style.display="block";
        document.querySelector("#custom-img").style.display="none";
        document.querySelector("#custom-back").style.display="initial";
    })
    document.querySelector("#Brass").addEventListener("click",function(){
        document.querySelector("#custom-form").style.display="none";
        document.querySelector("#Brass-items").style.display="initial";
        document.querySelector("#brass-images").style.display="flex";
        document.querySelector("#Required").style.display="block";
        document.querySelector("#custom-img").style.display="none";
        document.querySelector("#custom-back").style.display="initial";
    })
    document.querySelector("#Bamboo").addEventListener("click",function(){
        document.querySelector("#custom-form").style.display="none";
        document.querySelector("#Bamboo-items").style.display="initial";
        document.querySelector("#bamboo-images").style.display="flex";
        document.querySelector("#Required").style.display="block";
        document.querySelector("#custom-img").style.display="none";
        document.querySelector("#custom-back").style.display="initial";
    })
   
    document.querySelector("#custom-back").addEventListener("click",function(){
      document.querySelector("#Jute-items").style.display="none";
      document.querySelector("#Wood-items").style.display="none";
      document.querySelector("#Brass-items").style.display="none";
      document.querySelector("#Bamboo-items").style.display="none";
      document.querySelector("#Shell-items").style.display="none";
      document.querySelector("#jute-images").style.display="none";
      document.querySelector("#wood-images").style.display="none";
      document.querySelector("#shell-images").style.display="none";
      document.querySelector("#brass-images").style.display="none";
      document.querySelector("#bamboo-images").style.display="none";
      document.querySelector("#custom-img").style.display="initial";
      document.querySelector("#Required").style.display="none";
      document.querySelector("#custom-form").style.display="initial";
      document.querySelector("#custom-back").style.display="none";
      
  })
  
    
}
customs();


document.querySelector("#anything-submit").addEventListener("click",function(){
    document.querySelector("#anything-text").textContent="";
})


function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  tablet: { smooth: true },

  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }},

ScrollTrigger.addEventListener("refresh", () => locoScroll.update()));

ScrollTrigger.refresh();

}
loco();
