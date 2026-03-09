const loadLessons = ()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data))
}

const loadLevelData = (id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data))
}

const displayLevelWord = (words)=>{
    // console.log(words)
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
    }
    words.forEach((word) =>{
    console.log(word)
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center p-10">
            <div class="info space-y-3">
                <h2 class="font-bold text-2xl">${word.word}</h2>
                <p class="font-semibold ">Meaning/Pronunciation</p>
                <p class="font-bangla font-medium text-2xl">${word.meaning}/${word.pronunciation}</p>
            </div>
            <div class="flex justify-between items-center mt-4">
                <button class="btn bg-[#BADEFF]/50 hover:bg-[#BADEFF]">
                    <i class="fa-solid fa-circle-info"></i>
                </button>
                <button class="btn bg-[#BADEFF]/50 hover:bg-[#BADEFF]">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        </div>
    `
    wordContainer.append(card)
    })
}

const displayLessons = (lessons)=>{
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";
    for(let lesson of lessons){
        // console.log(lesson)
        const lessonDiv = document.createElement("div")
        lessonDiv.innerHTML = `
            <button onclick="loadLevelData(${lesson.level_no})" class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i>  Lesson -${lesson.level_no}
            </button>
        `
    levelContainer.append(lessonDiv)
    }
    
}



loadLessons()
