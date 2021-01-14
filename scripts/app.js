// HTML

if (!JSON.parse(localStorage.getItem("Notes"))) {

	var localNotes = [{title:"Titulo",content:"contenido"}];
	localStorage.setItem("Notes",JSON.stringify(localNotes))

	 localNotes = JSON.parse(localStorage.getItem("Notes"))
}else{

	var localNotes = JSON.parse(localStorage.getItem("Notes"));

}

let main = document.getElementById('main')

main.innerHTML = `<div id="wrapper">
	<ul id="list">


	</ul>
	<button id="button-add-note" onclick="addNote()">Agregar Nota</button>
	<div id="main-note">
	
	</div>
	<div id="salida">
	</div>
</div>`


let mainNote = document.getElementById("main-note");

function Note (title,content){
	this.title = title;
	this.content = content;
}
let salida = document.getElementById("salida");

function addNote(){
	let title = prompt("Inserte el titulo")
	if (title) {
		let note = new Note(title,"sin contenido")
		localNotes.push(note)
		saveNote();
	}
}
listNotes = document.getElementById("list");


function saveNote(){
	localStorage.setItem("Notes",JSON.stringify(localNotes))
	showNotes();
}






function showNote(a){
	mainNote.innerHTML = `<h2 id="note-title">${localNotes[a].title}</h2>
	<textarea id="note" onfocus="saveContent(${a})">${localNotes[a].content}
	</textarea>`
	saveNote();
	
}

function showNotes(){
	listNotes.innerHTML=""
	for(let i = 0; i < localNotes.length; i++){
		listNotes.innerHTML += `<li onclick="showNote(${i})">${localNotes[i].title}</li>`;
	}
}

function saveContent(a){
	let noteHTML = document.getElementById("note");
	setInterval(function (){localNotes[a].content = noteHTML.value;
		saveNote()},100);

}

function addMainNote(a){
	showa
}
showNotes();
let venta
