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
                this.visibility = "d-none";
                console.log(this.visibility);
            }
        }
    }   
);