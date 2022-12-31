        function emailred () {
         document.getElementById("text").style.backgroundColor="red";
    }
    function emailnormal () {
         document.getElementById("text").style.backgroundColor="white";
    }
    function passwordred () {
         document.getElementById("text1").style.backgroundColor="red";
    }
    function passwordnormal () {
         document.getElementById("text1").style.backgroundColor="white";
    }
    function validation(){
        let email=document.getElementById("text").value;
        let password=document.getElementById("text1").value;
        if(email=="akashjha488@gmail.com" && password=="adityajha123"){
            alert("you are login successfully");
        }
        else{
            alert("enter email and password again" );
            
        }

    }