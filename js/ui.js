import { getData } from "../data/data.js";
import { getCategories } from "./app.js";

export function AsideDom() {
    const promissCategories = getCategories();
    const button = document.getElementById('openAside');
    const aside = document.getElementById('aside');
    const closed = document.getElementById('close')
    const listCategory = document.getElementById('categoriList')

    promissCategories.then(categories=>{
        categories.forEach(e=>{
            listCategory.innerHTML += `
    <li><button class="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/10">${e}</button></li>
`
        })
    })


    button.addEventListener('click', () => {
        aside.classList.remove('-translate-x-full')

    })
    closed.addEventListener('click', () => {
        aside.classList.add('-translate-x-full')
    })
}