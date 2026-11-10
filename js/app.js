import { getData } from "../data/data.js";
export function getCategories() {
    return getData().then((data) => {
        const categories = [];

        data.forEach((channel) => {
            if (!categories.includes(channel.category)) {
                categories.push(channel.category);
            }
        });
        return categories;
    });
}



