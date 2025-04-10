import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
    }),

    actions: {
        setCategories(data) {
            this.categories = data
        },
    },
})
