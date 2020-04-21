let name = 'Szonja';
console.log(`Hello my dear ${name}`);

// jquery part

$('h2').html('<strong>The jQuery</strong> part has started!');
$('h1').css('background','blue');

$('h2').toggleClass('green');
$('p').toggleClass('green');
$('p').toggleClass('green');

// $('main').append ('<p id="first">Added element</p>');
// $('main').append ('<p id="second">Added second element</p>');

$('#first').remove();

$('#add-button').click(() => {
    if($('main p'.length > 5)){
    $('main').append('<p>Added a new p tag</p>');
} else { 
    $('main').append('<p class="green">Added a new p tag</p>');
}
});

let removeFunction = () => {
    $('main p:last-child').remove ();
}

$('#remove-button').click(removeFunction);

//Last part: conditions and loops
 
let age = 29;

if (age>=18) {
    console.log('This person can drik.')
} else {
console.log ('This is a kid, no alcohol.')
}