export class Ingredient {

    private name: string;
    private  weight_grams: number;
    private  calories: number;
    private  saturated_fat_grams: number;
    private  trans_fat_grams: number;
    private  cholesterol_milligrams: number;
    private  sodium_milligrams: number;
                   private  fiber_grams: number;
                   private  total_sugars_grams: number;
                   private  added_sugar_grams: number;
                   private  protein_grams: number;
                   private  ingredients: Ingredient[];


    constructor(
        weight_grams: number,
        calories: number,
        saturated_fat_grams: number,
        trans_fat_games: number,
        cholesterol_milligrams: number,
        sodium_milligrams: number,
        fiber_grams: number,
        total_sugars_grams: number,
        added_sugar_grams: number,
        protein_grams: number,
        ingredients: Ingredient[] = []
    ) {
        this.weight_grams = weight_grams;
        this.calories = calories;
        this.saturated_fat_grams = saturated_fat_grams;
        this.trans_fat_grams = trans_fat_games;
        this.cholesterol_milligrams = cholesterol_milligrams;
        this.sodium_milligrams = sodium_milligrams;
        this.fiber_grams = fiber_grams;
        this.total_sugars_grams = total_sugars_grams;
        this.added_sugar_grams = added_sugar_grams;
        this.protein_grams = protein_grams;
        this.ingredients = ingredients;
    }

    getName(): string {
        return this.name;
    }

    getTotalFatGrams() : number{
        return this.trans_fat_grams + this.saturated_fat_grams;
    }

    hasIngredients():boolean{
        return this.ingredients.length != null;
    }
    getWeightGrams(): number {
        return this.weight_grams;
    }

    getCalories(): number {
        return this.calories;
    }

    getSaturatedFatGrams(): number {
        return this.saturated_fat_grams;
    }

    getTransFatGames(): number {
        return this.trans_fat_grams;
    }

    getCholesterolMilligrams(): number {
        return this.cholesterol_milligrams;
    }

    getSodiumMilligrams(): number {
        return this.sodium_milligrams;
    }

    getFiberGrams(): number {
        return this.fiber_grams;
    }

    getTotalSugarsGrams(): number {
        return this.total_sugars_grams;
    }

    getAddedSugarGrams(): number {
        return this.added_sugar_grams;
    }

    getProteinGrams(): number {
        return this.protein_grams;
    }

    getIngredients(): Ingredient[] {
        if (this.hasIngredients()) {
            return this.ingredients;
        }
    }




}

