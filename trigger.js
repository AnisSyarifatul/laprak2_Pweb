// function emoji progress
function emojiprogress() {
    const doneList = document.querySelectorAll('.done-todo').length;
    if (doneList == 0 ){
        const GradeNow = document.querySelector('.C-grade');
        const GradeC1 = document.querySelector('.B-grade');
        const GradeC2 = document.querySelector('.A-grade');
        GradeNow.classList.remove('none-dis');
        GradeC1.classList.add('none-dis');
        GradeC2.classList.add('none-dis');
    } else if (doneList >= 1 && doneList <= 3 ){
        const GradeNow = document.querySelector('.B-grade');
        const GradeB1 = document.querySelector('.C-grade');
        const GradeB2 = document.querySelector('.A-grade');
        GradeNow.classList.remove('none-dis');
        GradeB1.classList.add('none-dis');
        GradeB2.classList.add('none-dis');
    } else if (doneList > 3 ){
        const GradeNow = document.querySelector('.A-grade');
        const GradeA1 = document.querySelector('.B-grade');
        const GradeA2 = document.querySelector('.C-grade');
        GradeNow.classList.remove('none-dis');
        GradeA1.classList.add('none-dis');
        GradeA2.classList.add('none-dis');}}

// Pemanggilan function Emoji progress
emojiprogress();

// Buka form 
const formAdd = document.querySelector('.form-add')
const addTodoButton = document.querySelector('.tambahTodo');
addTodoButton.addEventListener("click", function() {
    console.log("Tombol ditekan!");
    formAdd.classList.toggle('Openform-add')
    document.querySelector("#newactivity").value = "";
    document.querySelector("#newtime").value = "";
});

// tutup form 
const batalButton = document.querySelector('#batalButton')
batalButton.addEventListener("click", function() {
    formAdd.classList.remove('Openform-add')
});

// Menambahkan list ke dalam table
const triggerAdd = document.querySelector('#tambahButton');
const listTodo = document.querySelector('.badanTable');
triggerAdd.addEventListener("click", function() {
    const newList = document.createElement("tr");
    const activityInput = document.querySelector("#newactivity").value;
    const timeInput = document.querySelector("#newtime").value;
    newList.innerHTML = `<td style="width: 5rem;">
    <i class="bi bi-square doneTodo" style="font-size: 1.2rem;"></i>
    <i class="bi bi-check-square-fill checktodo" style="font-size: 1.2rem;"></i>
    </td><td>${activityInput}</td><td>${timeInput}</td><td  style="width: 5rem;"><i class="bi bi-trash-fill hapusTodo" style="font-size: 1.2rem;"></i></td>`;
    listTodo.appendChild(newList);
    formAdd.classList.remove('Openform-add');
});

//menghapus list
document.addEventListener("click", function(e) {
console.log("tombol ditekan!");
    if(e.target.classList.contains ("hapusTodo")) {
        console.log("list dihapus!");
        const list = e.target.parentElement;
        list.parentElement.remove();
        emojiprogress();
    } else if(e.target.classList.contains ("doneTodo")) {
        console.log("list dicentang!");
        e.target.classList.add("unchecktodo");
        e.target.nextElementSibling.classList.add("checktodo-hadir");
        const list = e.target.parentElement;
        list.parentElement.classList.add("done-todo");
        emojiprogress();
    } else if(e.target.classList.contains ('checktodo-hadir')) {
        console.log("list batal dicentang!");
        e.target.classList.remove('checktodo-hadir');
        e.target.previousElementSibling.classList.remove('unchecktodo');
        const list = e.target.parentElement;
        list.parentElement.classList.remove("done-todo");
        emojiprogress();
    }});





