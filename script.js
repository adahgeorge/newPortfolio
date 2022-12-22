//<!-- -----------------About Me JavaScript Code------------------ -->

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


// <!-- -----------------------SideMenu JavaScript Code-------------------- -->

    var sidemeu = document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.right = "0";
    }

    function closemenu(){
        sidemeu.style.right = "-200px";
    }



//<!-- -----------------------Contact Form Database JavaScript code----------------------------- -->


    const scriptURL = 'https://script.google.com/macros/s/AKfycbzjqqTKRA5X_5-9cYvCJz_BsRDvuX-y7xsh752HzoDYLKfJOwqF-KNMVPaOPSgDR95c/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Your message sent successfully."
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });


  //Typing Animation Script 
 $('document').ready(function(){
 var typed = new Typed('.typing', {
    strings: ["George!", "An App Developer", "A Blogger", "A Graphic Designer", "A Freelancer", "A Consultant", "A Web Programmer", "A Smart Contract, Blockchain & Web3.0 Developer", "George!"],
    backSpeed: 60,
    typeSpeed: 30,
    //smartBackspace: true,
    loop: true,

  });
});
  
