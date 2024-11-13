var numSelected=null;
var tileSelected=null;
var errors=0;
var board=[
    "-13----7-",
    "9-----5--",
    "-75-13-8-",
    "--4-5----",
    "---3-8---",
    "----6-7--",
    "-5-97-14-",
    "--2-----3",
    "-4----65-"
]
var solution=[
    "813695274",
    "926784531",
    "475213986",
    "284157369",
    "697328415",
    "531469728",
    "358976142",
    "762541893",
    "149832657"
]
window.onload= function(){
    setTheGame();
}
function setTheGame(){
    // digits 1-9
    for(let i=1;i<=9;i++){
        let number=document.createElement("div");
        number.id=i
        number.addEventListener("click",selectNumber);
        number.innerText=i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    //board 9*9
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let tile=document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            if(board[r][c]!="-"){
                tile.innerText=board[r][c];
                tile.classList.add("tile-start");
            }
            if(r==0){
                tile.classList.add("horizontal-start");
            }
            if(c==0){
                tile.classList.add("vertical-start");
            }
            if(r==2||r==5||r==8){
                tile.classList.add("horizontal-line");
            }
            if(c==2||c==5||c==8){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}
function selectNumber(){
    if(numSelected!=null){
        numSelected.classList.remove("number-selected");
    }
    numSelected=this;
    numSelected.classList.add("number-selected")
}
function selectTile(){
    if(numSelected){
        if(this.innerText!=""){
            return ;
        }
        let coords=this.id.split("-");
        let r=parseInt(coords[0]);
        let c=parseInt(coords[1]);
        if(solution[r][c]==numSelected.id){
            this.innerText=numSelected.id;
        }
        else{
            errors+=1;
            document.getElementById("errors").innerText=errors;
        }
    }
}