document.addEventListener('DOMContentLoaded', function(e) {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    let currentSlide = 0;
    let slideshowInterval;
    
    startBtn.addEventListener('click', startSlideshow);
    stopBtn.addEventListener('click', stopSlideshow);
    
    showSlide(currentSlide);
    startSlideshow();

    nextBtn.addEventListener('click', function() {
        moveSlide(1);
        resetSlideshow();
    });
    
    prevBtn.addEventListener('click', function() {
        moveSlide(-1);
        resetSlideshow();
    });
    
    function moveSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        showSlide(currentSlide);
        console.log(currentSlide);
    }
    
    function showSlide(index) {
        slides[index].classList.add('active');
        
        prevBtn.disabled = index == 0;
        nextBtn.disabled = index == slides.length - 1;
    }
    
    function startSlideshow() {
        if (!slideshowInterval) {
            slideshowInterval = setInterval(function() {
                moveSlide(1);
            }, 2500);
            
            startBtn.disabled = true;
            stopBtn.disabled = false;
        }
    }
    
    function stopSlideshow() {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
    
    function resetSlideshow() {
        stopSlideshow();
        startSlideshow();
    }
});

document.addEventListener('DOMContentLoaded', function() {
const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
const addBtn = document.getElementById('addStudent');
const filterSelect = document.getElementById('filter');
const sortSelect = document.getElementById('sort');

let students = [];

addBtn.addEventListener('click', function() {
const nameInput = document.getElementById('studentName');
const gradeInput = document.getElementById('studentGrade');
const departmentSelect = document.getElementById('department');

const name = nameInput.value.trim();
const grade = gradeInput.value.trim();
const department = departmentSelect.value;

document.getElementById('nameError').textContent = '';
document.getElementById('gradeError').textContent = '';

if (!name) {
document.getElementById('nameError').textContent = 'Student name cannot be empty';
return;
}

if (students.some(student => student.name.toLowerCase() === name.toLowerCase())) {
document.getElementById('nameError').textContent = 'Student name already exists';
return;
}

if (!grade || isNaN(grade) || grade < 0 || grade > 100) {
document.getElementById('gradeError').textContent = 'Please enter a valid grade between 0 and 100';
return;
}

const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

const student = {
name: formattedName,
grade: parseInt(grade),
department: department
};

students.push(student);

nameInput.value = '';
gradeInput.value = '';

updateTable();
});

function deleteStudent(index) {
students.splice(index, 1);
updateTable();
}

function updateTable() {
let filteredStudents = [...students];
const filterValue = filterSelect.value;

if (filterValue === 'passed') {
filteredStudents = filteredStudents.filter(student => student.grade >= 60);
} else if (filterValue === 'failed') {
filteredStudents = filteredStudents.filter(student => student.grade < 60);
}

const sortValue = sortSelect.value;

if (sortValue === 'name') {
filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
} else if (sortValue === 'name-desc') {
filteredStudents.sort((a, b) => b.name.localeCompare(a.name));
} else if (sortValue === 'grade') {
filteredStudents.sort((a, b) => b.grade - a.grade);
} else if (sortValue === 'grade-desc') {
filteredStudents.sort((a, b) => a.grade - b.grade);
}

studentTable.innerHTML = '';

filteredStudents.forEach((student, index) => {
const row = studentTable.insertRow();

if (student.grade > 75) {
    row.className = 'high-grade';
} else if (student.grade > 50) {
    row.className = 'medium-grade';
} else {
    row.className = 'low-grade';
}

row.insertCell(0).textContent = student.name;
row.insertCell(1).textContent = student.grade;
row.insertCell(2).textContent = student.department;

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', () => deleteStudent(students.indexOf(student)));
row.insertCell(3).appendChild(deleteBtn);
});
}

filterSelect.addEventListener('change', updateTable);
sortSelect.addEventListener('change', updateTable);


updateTable();
});

    document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const todoBody = document.getElementById('todoBody');
    
    
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        
    });
    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;
        
        const row = document.createElement('tr');
        
        
        const doneCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            taskCell.classList.toggle('completed', this.checked);
        });
        doneCell.appendChild(checkbox);
        row.appendChild(doneCell);
        
        const taskCell = document.createElement('td');
        taskCell.textContent = taskText;
        taskCell.className = 'task-cell';
        row.appendChild(taskCell);
        

      
        const deleteCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            row.remove();
        });
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);
        
        todoBody.appendChild(row);
        taskInput.value = '';
    }
});            
         