const root = new Vue(
    {
        el: "#root",

        data: {
            titolo: "Ciao mondo!",
            immagine: "Hello-world.png",
            grandezzaImmagine: "size",
            visibility: ""
        },

        methods: {
            imgToggle: function(){
                
                if(this.visibility == ""){
                    this.visibility = "d-none";
                }
                else{
                    this.visibility = "";
                }
                
            }
        }
    }   
);