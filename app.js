let count = 10
function myFunction(){
  alert("hello")
}
console.log("the code for darkmode is AI only JS")
const themeSwitch = document.getElementById("theme-switch");

    
        const darkmode = localStorage.getItem("darkmode");

        
        if (darkmode === "enabled") {
            document.body.classList.add("darkmode");
        }
 

        themeSwitch.addEventListener("click", () => {
            if (document.body.classList.contains("darkmode")) {
                document.body.classList.remove("darkmode");
                localStorage.setItem("darkmode", "disabled");
            } else {
                document.body.classList.add("darkmode");
                localStorage.setItem("darkmode", "enabled"); 
            }
        }); 
