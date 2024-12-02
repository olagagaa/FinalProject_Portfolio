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
        var sideMenu = document.getElementById("sidemenu");

        function openmenu(){
            sideMenu.style.right = "0";
        }

        function closemenu(){
            sideMenu.style.right = "-200px";
        }
        const scriptURL = 'https://script.google.com/macros/s/AKfycbz40iW0V0W8evaVLKMb9kZZ9zrkuoJsqYDCVzmZQBT8H8sXljhhypO7LrWkQ6l4oDVvOA/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("message");

        form.addEventListener('submit', e => {
            e.preventDefault();
        
            message.innerHTML = "Sending message...";
            
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    message.innerHTML = "Message sent!";
                    setTimeout(function() {
                        message.innerHTML = ""; 
                    }, 1000);
                    form.reset();
                })
                .catch(error => {
                    message.innerHTML = "Failed to send message!";
                    console.error('Error!', error.message);
                });
        });
        