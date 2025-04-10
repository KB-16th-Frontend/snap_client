import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
    }),

    actions: {
        async setCategories(data) {
            this.categories = data
        },
    },
})
