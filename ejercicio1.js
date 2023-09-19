
export function ejercicio11(result){
    let maxSugar = result.map(element => {
        element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars = parseInt(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.slice(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.length-1));
    })
    maxSugar  = result.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars - x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
    maxSugar = maxSugar.filter(element => element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars === maxSugar[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)

    return maxSugar;
}

export function ejercicio12(result){
let maxIron = result.map(element => {
    element.nutrition_facts.nutrition.vitamines[3].percent = parseInt(element.nutrition_facts.nutrition.vitamines[3].percent.slice(0, element.nutrition_facts.nutrition.vitamines[3].percent.length-1));
})
maxIron  = result.sort((x, y) => y.nutrition_facts.nutrition.vitamines[3].percent - x.nutrition_facts.nutrition.vitamines[3].percent);
maxIron = maxIron.filter(element => element.nutrition_facts.nutrition.vitamines[3].percent === maxIron[0].nutrition_facts.nutrition.vitamines[3].percent)

return maxIron;
}

export function ejercicio13(result){
    let maxProteine = result.map(element => {
        element.nutrition_facts.nutrition.proteine = parseInt(element.nutrition_facts.nutrition.proteine.slice(0, element.nutrition_facts.nutrition.proteine.length-1));
    })
    maxProteine  = result.sort((x, y) => y.nutrition_facts.nutrition.proteine - x.nutrition_facts.nutrition.proteine);

    maxProteine = maxProteine.filter(element => element.nutrition_facts.nutrition.proteine === maxProteine[0].nutrition_facts.nutrition.proteine)

    return maxProteine;
}

export function ejercicio14(result){
    let maxFibre = result.map(element => {
        element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre = parseInt(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.slice(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.length-1));
    })
    maxFibre  = result.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre- x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre);

    maxFibre = maxFibre.filter(element => element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre === maxFibre[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)
    
    return maxFibre;
}