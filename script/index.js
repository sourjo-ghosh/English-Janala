const loadLessons = ()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLessons(json.data))
}
const displayLessons = (lessons)=>{
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";
    for(let lesson of lessons){
        // console.log(lesson)
        const lessonDiv = document.createElement("div")
        lessonDiv.innerHTML = `
            <button>
                <a class="btn btn-outline btn-primary"> <i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</a>
            </button>
        `
    levelContainer.append(lessonDiv)
    }
    
}


loadLessons()