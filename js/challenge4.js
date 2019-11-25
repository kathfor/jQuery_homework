        ch4form.onsubmit = function(event) {
            var inputOK = true;
            var fullname = $("#fullname")
            var streetaddr = $("#streetaddr")

            if (fullname.val().length==0){
                $("#nameerrormsg").css("display", "block");
                inputOK = false;
                // event.preventDefault();
            }
            else {
                $("#nameerrormsg").css("display", "none");
            }

            if (streetaddr.val().length==0){
                $("#addrerrormsg").css("display", "block");
                inputOK = false;
                // event.preventDefault();
            }
            else {
                $("#addrerrormsg").css("display", "none");
            }

            return inputOK;
            }
            