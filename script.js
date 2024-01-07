document.querySelector("#center")
.addEventListener("mousemove",function(dets){
    //console.log(dets.clientX,dets.clientY);
})

//throtling
//mouse har bar chle par image 8 bar aye , code ke no of exexutionko km kr dena 
//https://www.geeksforgeeks.org/javascript-throttling/


const btn=document.querySelector("#throttle");
     
    // Throttling Function- delay par chlaega
    const throttleFunction=(func, delay)=>{
     
      // Previously called time of the function
      let prev = 0;
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();
     
        // Logging the difference between previously
        // called and current called timings
        //console.log(now-prev, delay);
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){
          prev = now;
     
          // "..." is the spread operator here
          // returning the function with the
          // array of arguments
          return func(...args); 
        }
      }
    }
    document.querySelector("#center")
    .addEventListener("mousemove",throttleFunction((dets)=>{
//console.log('chala thodi thodi der me');
var div=document.createElement("div");
div.classList.add("imagediv");
div.style.left= dets.clientX + "px";
div.style.top=dets.clientY + "px";

// image add krna div mes
var img= document.createElement("img");
img.setAttribute("src","https://cdn.pixabay.com/photo/2023/09/10/00/49/lovebird-8244066_1280.jpg")

div.appendChild(img);

document.body.appendChild(div);

gsap.to(img,{
    y:"0",
    ease:Power1,
    duration:0.6
});

gsap.from(img,{
    y:"100",
    delay:0.6,
    ease:Power2,
    // duration:.2

})


// 2 second bad div ko hta dega.
setTimeout(function(){
div.remove();
},2000)

    },400));
