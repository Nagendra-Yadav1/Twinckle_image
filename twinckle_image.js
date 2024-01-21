const btn = document.querySelector("#center")
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
btn.addEventListener("mousemove",
   throttleFunction((details) => {
    var div = document.createElement("div")
    div.classList.add("imagediv");
    div.style.left =details.x+"px"
    div.style.top=details.y+"px"
    document.body.appendChild(div)
    var img=document.createElement("img")
    img.setAttribute("src","https://i.pinimg.com/564x/4e/3d/31/4e3d3132d924f063846449230f0f9615.jpg");
    div.append(img)
    gsap.to(img,{
        y:"0",
        ease:Power1,
        duration:.6

    });
    gsap.to(img,{
        y:"100%",
        delay: .6,
        duration:.6

    })
    setTimeout(function(){
        div.remove();
    },2000)
}, 400)
);