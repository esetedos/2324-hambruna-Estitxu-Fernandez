const getAllTodos = async   () => {
    return fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
    .then(response => response.json())
}

const fetchAsyncData = async () => {
    try {
        const result = (await getAllTodos())["items"].item


        console.log("1. Primer ejercicio");
        // donut con más azúcar
        // const sugar = nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        let maxSugar = result.map(element => {
            element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars = parseInt(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.slice(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.length-1));
        })
        maxSugar  = result.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars - x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        maxSugar = maxSugar.filter(element => element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars === maxSugar[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)
        
        console.log("Donut con más azúcar: ");
        
        maxSugar.map(element => {
            console.log(element.name);
            console.log();
        })
        console.log();


        // donut con más hierro
        let maxIron = result.map(element => {
            element.nutrition_facts.nutrition.vitamines[3].percent = parseInt(element.nutrition_facts.nutrition.vitamines[3].percent.slice(0, element.nutrition_facts.nutrition.vitamines[3].percent.length-1));
        })
        maxIron  = result.sort((x, y) => y.nutrition_facts.nutrition.vitamines[3].percent - x.nutrition_facts.nutrition.vitamines[3].percent);
        maxIron = maxIron.filter(element => element.nutrition_facts.nutrition.vitamines[3].percent === maxSugar[0].nutrition_facts.nutrition.vitamines[3].percent)
        
        console.log("Donut con más hierro: ");
        
        maxIron.map(element => {
            console.log(element.name);
            console.log();
        })
        console.log();


        // donut con más proteína
        let maxProteine = result.map(element => {
            element.nutrition_facts.nutrition.proteine = parseInt(element.nutrition_facts.nutrition.proteine.slice(0, element.nutrition_facts.nutrition.proteine.length-1));
        })
        maxProteine  = result.sort((x, y) => y.nutrition_facts.nutrition.proteine - x.nutrition_facts.nutrition.proteine);

        maxProteine = maxProteine.filter(element => element.nutrition_facts.nutrition.proteine === maxSugar[0].nutrition_facts.nutrition.proteine)
        
        console.log("Donut con más proteína:");
        
        maxProteine.map(element => {
            console.log(element.name);
            console.log();
        })

        console.log();

        // donut con menos fibra
        let maxFibre = result.map(element => {
            element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre = parseInt(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.slice(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.length-1));
        })
        maxFibre  = result.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre- x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre);

        maxFibre = maxFibre.filter(element => element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre === maxSugar[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)
        
        console.log("Donut con más proteína:");
        
        maxFibre.map(element => {
            console.log(element.name);
        })
        console.log();
        console.log();



        /////////////////////////////////////////////////////////////////
        console.log("2. Segundo ejercicio");

        //Listar todos los donuts y sus calorías
        result.map(element => {
            console.log(element.name + " & calorías: " + element.nutrition_facts.nutrition.calories);
        })
        console.log();

        //Listar todos los donuts y sus carbohidratos
        result.map(element => {
            console.log(element.name + " & carbohidratos: " + element.nutrition_facts.nutrition.carbohydrate.daily_value + "(daily value) y " + element.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount + "(amout)");
        })
        console.log()

        //Mostrar la media de calorías de entre todos los donuts
        let mediaCalories = 0;
        result.map(element => {
            mediaCalories += element.nutrition_facts.nutrition.calories;
        })
        console.log("Media de calorías: " + (mediaCalories/(result.length)))
        console.log()

        //Mostrar la suma de las grasas saturadas de todos los donuts
        let sumSaturatedFat = 0;
        result.map(element => {
            element.nutrition_facts.nutrition.fat.fat_type.saturated = parseInt(element.nutrition_facts.nutrition.fat.fat_type.saturated.slice(0, element.nutrition_facts.nutrition.fat.fat_type.saturated.length-1));
            sumSaturatedFat += element.nutrition_facts.nutrition.fat.fat_type.saturated;
        })
        console.log("Suma de las grasas saturadas de todos los donuts: "  + sumSaturatedFat);
        console.log()

        //Mostrar el porcentaje medio de cada vitamina
let vitamines = result[0].nutrition_facts.nutrition.vitamines

        let vitaminA = 0;
        let vitaminB = 0;
        let calcium = 0;
        let iron = 0;

        result.map(element => {
            vitaminA += parseInt(element.nutrition_facts.nutrition.vitamines[0].percent);
            vitaminB += parseInt(element.nutrition_facts.nutrition.vitamines[1].percent);
            calcium += parseInt(element.nutrition_facts.nutrition.vitamines[2].percent);
            iron += parseInt(element.nutrition_facts.nutrition.vitamines[3].percent);
        })
        console.log("vitamin A: " + vitaminA/result.length);
        console.log("vitamin B: " + vitaminB/result.length);
        console.log("calcium: " + calcium/result.length);
        console.log("iron: " + iron/result.length);


///////////////////////////////////////////////////////////////////////////
        console.log("3. Tercer ejercicio");

        //Listar cada donut con sus posibles masas, butter
        result.map(element => {
            console.log(element.name + " & posible batters:");
            element.batters.batter.map(batter =>{
                console.log("  " + batter.type);
            })
        })
        console.log()
        console.log()

        //Listar cada donut con sus posibles extras topping
        result.map(element => {
            console.log(element.name + " & extras topping:");
            element.topping.map(topping =>{
                console.log("  " + topping.type);
            })
        })
console.log()
console.log()
console.log()


///////////////////////////////////////////////////////////////////////////
        console.log("4. Cuarto ejercicio");

        //mostrar cuantos donuts de cada tipo podemos comprar y el dinero restante (4 monedas)
        let dinero = 400;
        result.map(element => {
            let cant = Math.floor(dinero/element.ppu);
            let resto = Math.floor((dinero - (element.ppu*cant))*100)/100;

            console.log("Podríamos comprar " + cant + " de donuts tipo " + element.name + " y nos sobrarían " + resto + " monedas");
        })
        console.log()
        console.log()
        console.log()
        
        
///////////////////////////////////////////////////////////////////////////
        console.log("5. Quinto ejercicio");

        // Los donuts con colesterol > 12 modificar las grasas trans a 3.2 grasas
        console.log("Donuts con más de 12 de colesteról (ahora tendrás 3.2 en grasas trans):")
        result.map(element => { 
            if(parseInt(element.nutrition_facts.nutrition.cholesterol.daily_value) > 12){
                element.nutrition_facts.nutrition.fat.fat_type.trans = "3.2";
                console.log(element.name + ": " + element.nutrition_facts.nutrition.cholesterol.daily_value + " (colesterol), " + element.nutrition_facts.nutrition.fat.fat_type.trans + " (grasas trans)")
            }
        })

        console.log()
        console.log()

        // donuts con azucar > 50 modificar el amount de los detalles de carbohidratos a 42gr
        console.log("Donuts con más de 50 de azúcar (ahora tendrás 42gr carbohidratos):")
        result.map(element => { 
            if(parseInt(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) > 50){
                element.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = "42gr";
                console.log(element.name + ": " + element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars + " (azúcar), " + element.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount + " (carbohidratos)")
            }
        })

        console.log()
        console.log()


        //Añadir una vitamina llamada "Nitacina" al donut con el nombre "Fusion"
        result.map(element => { 
            if(element.name.toLowerCase().includes("fusion")){
                element.nutrition_facts.nutrition.vitamines.push({
                    "type": "Nitacina",
                    "percent": ""
                })
                console.log("Vitaminas del donut con la palabra fusion: ")
                element.nutrition_facts.nutrition.vitamines.map(vitamin => {
                    console.log(vitamin);
                })
            }
        })

        console.log()
        console.log()

        //El daily value de los carbohidratos de todos los donuts va a ser de 53%
        console.log("Donuts y sus carbohidratos (que pasarán a ser 53%):")
        result.map(element => { 
            element.nutrition_facts.nutrition.carbohydrate.daily_value = "53%";
            console.log(element.name + " & " + element.nutrition_facts.nutrition.carbohydrate.daily_value);
        })

        console.log()
        console.log()


        //Crearle un nuevo atributo "alergen" al donut llamado "Relaxing" y que dentro de él ponga "Gluten free"
        result.map(element => { 
            if(element.name.toLowerCase().includes("relaxing")){
                element["alergen"] = "Gluten free";
                console.log("Nuevo atributo en el donut Relaxing: " + element["alergen"])
            }     
        })






    } catch (error){
        console.log(error.menssage)
    }
}

fetchAsyncData();




