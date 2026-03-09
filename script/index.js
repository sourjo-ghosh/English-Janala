const createElement = (arr) =>{
    const htmlElement = arr.map((el) => `<span class="btn bg-[#BADEFF]/50 hover:bg-[#BADEFF]">${el}</span>`);
    return (htmlElement.join(" "))
}
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

const loadLessons = ()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data))
}

const loadLevelData = (id)=>{
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        removeActive()
        const clickedBtn = document.getElementById(`lesson-btn-${id}`)
        clickedBtn.classList.add("active")
        displayLevelWord(data.data)
    })
}
const loadWordDetails = async (id)=>{
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    const res = await fetch(url);
    const details = await res.json();
    displayDetail(details.data)
}
const displayDetail = (word)=>{
    const detailsContainer= document.getElementById("details-container")
    document.getElementById("my_modal_1").showModal()
    detailsContainer.innerHTML =`
    <p class="font-semibold text-[30px]">${word.word}(<i class="fa-solid fa-microphone-lines" style="color: rgb(0, 0, 0);"></i>: <span>${word.pronunciation ? word.pronunciation: "Word Not Found"}</span> )</p>
        <div class="space-y-2">
            <p class="font-semibold text-2xl">Meaning</p>
            <p class="font-bangla text-xl">${word.meaning ? word.meaning: "Word Not Found"}</p>
        </div>
        <div class="space-y-2">
            <p class="font-semibold text-2xl">Example</p>
            <p class="text-xl text-[#000000]">${word.sentence ? word.sentence: "Word Not Found"}</p>
        </div>
        <div class="space-y-2">
            <p>সমার্থক শব্দ গুলো</p>
            <div class="flex gap-3">
                ${createElement(word.synonyms)}
            </div>
        </div>
    `
}

const manageSpinner = (status)=>{
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("word-container").classList.add("hidden")
    } else {
        document.getElementById("spinner").classList.add("hidden")
        document.getElementById("word-container").classList.remove("hidden")
    }

}

const removeActive = ()=>{
    const lessonBtn = document.querySelectorAll('.lesson-btn')
    lessonBtn.forEach(btn => btn.classList.remove("active"))
}

const displayLevelWord = (words)=>{
    const wordContainer= document.getElementById("word-container");
    wordContainer.innerHTML = "";
    if(words.length == 0 ){
    wordContainer.innerHTML = `
        <div class="text-center col-span-full">
            <img src="assets/alert-error.png" alt="" class="mx-auto block">
            <p class="font-bangla text-[15px] text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <p class="font-bangla font-medium text-[35px] text-[#292524]">নেক্সট Lesson এ যান</p>
        </div>
    `
    manageSpinner(false)
    return
    }
    words.forEach((word) =>{
    const card = document.createElement("div");
    card.classList.add("h-full");
    card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center p-10 flex flex-col justify-between h-full min-h-[220px]">
            <div class="info space-y-3">
                <h2 class="font-bold text-2xl">${word.word ? word.word:"Word Not Found"}</h2>
                <p class="font-semibold ">Meaning/Pronunciation</p>
                <p class="font-bangla font-medium text-2xl">${word.meaning ? word.meaning:"Word Not Found"}/${word.pronunciation ? word.pronunciation:"Word Not Found"}</p>
            </div>
            <div class="flex justify-between items-center mt-4">
                <button onclick="loadWordDetails(${word.id})" class="btn bg-[#BADEFF]/50 hover:bg-[#BADEFF]">
                    <i class="fa-solid fa-circle-info"></i>
                </button>
                <button onclick="pronounceWord('${word.word}')" class="btn bg-[#BADEFF]/50 hover:bg-[#BADEFF]">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        </div>
    `
    wordContainer.append(card)
    })
    manageSpinner(false)
}
const displayLessons = (lessons)=>{
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";
    for(let lesson of lessons){
        const lessonDiv = document.createElement("div")
        lessonDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelData(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
            <i class="fa-solid fa-book-open"></i>  Lesson -${lesson.level_no}
            </button>
        `
    levelContainer.append(lessonDiv)
    }
    
}
loadLessons()

const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search")

btnSearch.addEventListener('click', ()=>{
    removeActive()
    const searchValue = inputSearch.value.trim().toLowerCase();
    fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) =>res.json())
    .then((data) => {
        const allWords = data.data;
        const filterWords = allWords.filter(word => word.word.toLowerCase().includes(searchValue))
        console.log(filterWords)
        displayLevelWord(filterWords)
    })

})