function addText(){
    var text = document.getElementById("text");
    text.innerHTML = "Testando o H1"
}

function changeImg(){
    var img = document.getElementById("img");
    img.src = "wp6734435-visual-studio-wallpapers.png";
}

function like(){
    let likes = document.getElementById("likeButton");
    let likesQuant = parseInt(likes.innerHTML) || 0;
    likesQuant++;
    likes.innerHTML = likesQuant + " likes";
}

function addList(){
    let item = document.getElementById("input").value;
    let list = document.getElementById("list");
    list.appendChild(document.createElement("li")).innerHTML = item;
}