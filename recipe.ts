import {Ingredient} from './ingredient';


export class Recipe {
    private category: string;
    private name: string;
    private image: string;
    private prep_minutes : number;
    private cook_minutes : number;
    private cool_minutes : number;
    private ingredients: Ingredient[];
    private author: string;
    private instructions: string;


    constructor(
        category: string,
        name: string,
        image: string,
        prep_minutes: number,
        cook_minutes: number,
        cool_minutes: number,
        ingredients: Ingredient[],
        author: string,
        instructions: string
    ) {
        this.category = category;
        this.name = name;
        this.image = image;
        this.prep_minutes = prep_minutes;
        this.cook_minutes = cook_minutes;
        this.cool_minutes = cool_minutes;
        this.ingredients = ingredients;
        this.author = author;
        this.instructions = instructions;
    }

    getCategory(): string {
        return this.category;
    }

    getName(): string {
        return this.name;
    }

    getImage(): string {
        return this.image;
    }

    getPrepMinutes(): number {
        return this.prep_minutes;
    }

    getCookMinutes(): number {
        return this.cook_minutes;
    }

    getCoolMinutes(): number {
        return this.cool_minutes;
    }

    getIngredients(): Ingredient[] {
        return this.ingredients;
    }

    getAuthor(): string {
        return this.author;
    }

    getInstructions(): string {
        return this.instructions;
    }
    getCalories(): number {
        let total_calories = 0;
        for (const ingredient of this.ingredients) {
            total_calories += ingredient.getCalories();
        }
        return total_calories;
    }

    getWeightGrams(): number {
        let total_Weight_grams = 0;
        for (const ingredient of this.ingredients) {
            total_Weight_grams += ingredient.getWeightGrams();
        }
        return total_Weight_grams;
    }

    getProteinGrams(): number {
        let total_protein_grams = 0;
        for (const ingredient of this.ingredients) {
            total_protein_grams += ingredient.getProteinGrams();
        }
        return total_protein_grams;
    }



    getSaturatedFatGrams(): number {
        let total_saturated_fat_grams = 0;
        for (const ingredient of this.ingredients) {
            total_saturated_fat_grams += ingredient.getSaturatedFatGrams();
        }
        return total_saturated_fat_grams;
    }

    getTransFatGrams(): number {
        let total_trans_fat_grams = 0;
        for (const ingredient of this.ingredients) {
            total_trans_fat_grams += ingredient.getTransFatGames();
        }
        return total_trans_fat_grams;
    }

    getCholesterolMilligrams(): number {
        let total_cholesterol_milligrams = 0;
        for (const ingredient of this.ingredients) {
            total_cholesterol_milligrams += ingredient.getCholesterolMilligrams();
        }
        return total_cholesterol_milligrams;
    }

    getSodiumMilligrams(): number {
        let total_sodium_milligrams = 0;
        for (const ingredient of this.ingredients) {
            total_sodium_milligrams += ingredient.getSodiumMilligrams();
        }
        return total_sodium_milligrams;
    }

    getFiberGrams(): number {
        let total_dietary_fiber_grams = 0;
        for (const ingredient of this.ingredients) {
            total_dietary_fiber_grams += ingredient.getFiberGrams();
        }
        return total_dietary_fiber_grams;
    }

    getTotalSugarGrams(): number {
        let total_total_sugars_grams = 0;
        for (const ingredient of this.ingredients) {
            total_total_sugars_grams += ingredient.getTotalSugarsGrams();
        }
        return total_total_sugars_grams;
    }

    getAddedSugarGrams(): number {
        let total_added_sugar_grams : number = 0;
            for (const ingredient of this.ingredients) {
            total_added_sugar_grams += ingredient.getAddedSugarGrams();
        }
        return total_added_sugar_grams;
    }
    getTotalFatGrams():number{
        return this.getTransFatGrams() + this.getSodiumMilligrams();
    }
}

