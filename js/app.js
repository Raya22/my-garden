

let formTemp= document.getElementById('templet');
let TableF= document.getElementById('resultTable')

let img=[]

function NewFlower(name , image , season){
this.name = name;
this.image = image;
this.season=season;
NewFlower.flowerArr.push(this);

localStorage.setItem('NewFlower', JSON.stringify(NewFlower.flowerArr));
}

NewFlower.flowerArr =[];

formTemp.addEventListener('submit',handelEvent);

function handelEvent(evt){
    evt.preventDefault();
    const name = evt.target.name.value;
    const image = evt.target.image.value;
    const season = evt.target.season.value;
    new NewFlower(name,image,season);

    // console.log(NewFlower.flowerArr);
    render();

}

function render()
{

    for(let i=0 ; i<NewFlower.flowerArr.length; i++)
    {
        let row= document.createElement('tr');
        TableF.appendChild(row);
        row.textContent=NewFlower.flowerArr[i].name;

    }

}

function getData(){
    let Data = JSON.parse(localStorage.getItem('NewFlower'));
    if (Data){
        for(let i =0; i< Data.length;i++){
            new NewFlower( Data[i].name, Data[i].image , Data[i].season)
        }
        render();
    }
}

getData();