import { getCategories } from "./app.js";
import { getChannelsPerCategory } from "./app.js"

export function AsideDom() {
    const categories = getCategories();
    const button = document.getElementById('openAside');
    const aside = document.getElementById('aside');
    const closed = document.getElementById('close')
    const listCategory = document.getElementById('categoriList')
    const listChannel = document.getElementById('channelList')
    const asideBarChannel= document.getElementById('channel')
    const IMAGE= document.getElementById('previewImage')
    const searchInput= document.getElementById('searchInput')
    
    const channels = JSON.parse(localStorage.getItem("channels"))
    categories.forEach(e => {
        listCategory.innerHTML += `
    <li><button  data-category="${e}" 
     class="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/10 categoryBnt">${e}</button></li>
`
    })
    function renderChannels(data){
            listChannel.innerHTML=""
          for (const channel of data) {
                listChannel.innerHTML+=`<li data-id='${channel.id}' class="channel w-full rounded-lg  px-4 py-3 text-left text-sm font-medium hover:bg-white/10">${channel.name}</li>`

            }
    }
    renderChannels(channels)
    let inputValue= ''
 searchInput.addEventListener('input',(e)=>{
    inputValue=e.target.value.toLowerCase();
    filterPerChannelName(channels)
 })
 function filterPerChannelName(data){
    const filtredChannels= data.filter(channel=>{
        const name =channel.name.toLowerCase()
        return name.includes(inputValue)
        
    })
    renderChannels(filtredChannels)
 }
    const categoryBtns = document.querySelectorAll('.categoryBnt')
    categoryBtns.forEach(categoryBtn => {
        categoryBtn.addEventListener('click', e=>{
            let cat = e.target.dataset.category
                        listChannel.innerHTML=""
            // for (const channel of getChannelsPerCategory(cat)) {
            //     listChannel.innerHTML+=`<li data-id='${channel.id}' class="channel w-full rounded-lg  px-4 py-3 text-left text-sm font-medium hover:bg-white/10">${channel.name}</li>`

            // }
            renderChannels(getChannelsPerCategory(cat));
        })
    })

    button.addEventListener('click', () => {
        aside.classList.remove('-translate-x-full')

    })
    closed.addEventListener('click', () => {
        aside.classList.add('-translate-x-full')
    })
    
    // ===========================
    
    document.addEventListener('click',(e)=>{
        if( e.target.classList.contains('channel')){
            const id = e.target.dataset.id
            const image = channels.find((ch)=>
                ch.id == id
            ).previewImage
            IMAGE.src  = image
        }
    })
}

