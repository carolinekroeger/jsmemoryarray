console.log("hello");

const spellBook=["Expelliarmus,Accio, Fly" ];
let mannaPoints=50;

const castSpell =()=>{
    console.log('a spell as been cast');
    const randomIndex=Math.floor(Math.random()*spellBook.length);
    console.log(Math.random());
    console.log('randomIndex',randomIndex);
    const randomSpell = spellBook(randoomIndex);

    const spellElement = document.getElemenetById('spell');
    const message = `you cast the ${randomSpell} spell`;
    spellElement.textContent=message;

    mannaPoints = mannaPoints - 5;
    console.log('mannaPoints', mannaPoints);

    const mannaElement = document.getElementById('manna-points');
    mannaElement.textContent = mannaPoints;

}