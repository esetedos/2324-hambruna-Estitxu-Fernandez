export function ejercicio23(result){
    let mediaCalories = 0;
    result.map(element => {
        mediaCalories += element.nutrition_facts.nutrition.calories;
    })
    mediaCalories /= result.length;

    return mediaCalories;
}

export function ejercicio24(result){
    let sumSaturatedFat = 0;
    result.map(element => {
        element.nutrition_facts.nutrition.fat.fat_type.saturated = parseInt(element.nutrition_facts.nutrition.fat.fat_type.saturated.slice(0, element.nutrition_facts.nutrition.fat.fat_type.saturated.length-1));
        sumSaturatedFat += element.nutrition_facts.nutrition.fat.fat_type.saturated;
    })
    return sumSaturatedFat;
}