//Immediately Invoked Function Expression

(function(){                                        // function definition
    console.log("Database Connected !")
})();                                               // function calling

((name) => {                                        // function definition
    console.log(`Database Connected, ${name}`)
})("Ayush");                                        // function calling with an argument