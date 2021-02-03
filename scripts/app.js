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
<h1>FasterNotes</h1>
	<div id="list-wrapper" >
	<h2 id="list-title">Notas</h2>
	<ul id="list">


	</ul>
	<button class="button" id="button-add-note" onclick="addNote()">Agregar Nota</button>
	</div>
	<div id="main-note">
	
	</div>
	<footer>
	<p>Enrique Rodriguez</p>
	<p>version 1.1.0</p>
	</footer>
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
	<textarea id="note" onblur ="cancelSaveContent()" onfocus="saveContent(${a})">${localNotes[a].content}
	</textarea>`
	saveNote();
	
}

function showNotes(){
	listNotes.innerHTML=""
	for(let i = 0; i < localNotes.length; i++){
		listNotes.innerHTML += `<li >${localNotes[i].title}</li> <button class="button" onclick="deleteNote(${i})">Eliminar</button><button onclick="showNote(${i})" class="button" >Abrir</button>`;
	}
}
var intervalo;

function saveContent(a){
	let noteHTML = document.getElementById("note");
	intervalo = setInterval(function (){localNotes[a].content = noteHTML.value;
		saveNote()},100);

}
function cancelSaveContent(){
	clearInterval(intervalo);
}

function deleteNote(a){
	localNotes.splice(a,1);
	saveNote();
}


showNotes();

