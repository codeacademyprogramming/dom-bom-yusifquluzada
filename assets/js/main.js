// DOM & BOM
// const myButton = document.querySelector(".my-button");
// myButton.innerHTML = 'salam dunya';

// const buttons = Array.from(document.querySelectorAll('.my-button'));
// buttons[0].innerText = 'Click me 1st button';
// buttons[1].innerText = 'Click me 2nd button';

// const buttonsWithGetelementsByClassname = Array.from(document.getElementsByClassName('my-button'));
// buttons[2].innerText = 'Click me 3rd button';
// buttons[3].innerText = 'Click me 4th button';

// Creating elements
// const newButton = document.createElement('button');
// newButton.innerText = 'Click me';
// newButton.className = 'btn btn-primary';
// newButton.classList.add('btn', 'btn-primary', 'my-button');
// newButton.classList.remove('btn', 'btn-primary');
// newButton.classList.toggle('btn-danger');
// console.log(newButton.classList.contains('btn'));
// console.log(newButton);
// document.body.prepend(newButton);

// Cutting element from one place in HTML and pasting it to another place
// const customDiv = document.querySelector('.custom-div');
// const dangerButton = document.querySelector('.custom-button');
// dangerButton.classList.replace('btn-danger', 'btn-dark');
// // customDiv.append(dangerButton);
// customDiv.appendChild(dangerButton);

// if (confirm("Do you want to remove danger button baby?")) {
//     const dangerButton = document.querySelector('.custom-button');
//     dangerButton.remove();
// }
// const section = document.getElementById('demo');
// section.innerText = 'Section';
// section.style.backgroundColor = 'red';

const obj = {
    firstname: 'Samir',
    data: {
        fatherName: 'value',
    }
}

const copiedObject = JSON.parse(JSON.stringify(obj));
obj.data.fatherName = 'Ulvi';
console.log(obj.data.fatherName);
console.log(copiedObject.data.fatherName);