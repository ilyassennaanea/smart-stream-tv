export function getCategories() {
    const data = JSON.parse(localStorage.getItem('channels'))

    const categories = [];

    data.forEach((channel) => {
        if (!categories.includes(channel.category)) {
            categories.push(channel.category);
        }
    });
    return categories;

}




export function getChannelsPerCategory(selectedCategory) {
    const channels = JSON.parse(localStorage.getItem("channels"))
    console.log(selectedCategory)
    if (selectedCategory === 'ALL') {
        return channels
    }
    let filtered  = []
    for (const channel of channels) {
        if(channel.category == selectedCategory){
            filtered.push(channel)
        }
    }

    return filtered

}

