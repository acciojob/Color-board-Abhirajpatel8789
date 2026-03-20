//your JS code here. If required.
let container_box = document.querySelector(".container");
        
        
        for(let i = 1; i <=800; i++){

            let div = document.createElement("div");
            div.className = "square";
            container_box.append(div);
            
            let randomColor  =()=> Math.floor(Math.random()*256);
            
            div.addEventListener("mouseover",()=>{
                div.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`

                
            })
            div.addEventListener("mouseout",()=>{
                
                div.style.transition="1s ease" ;
                    div.style.backgroundColor = ""
                
                })


        }