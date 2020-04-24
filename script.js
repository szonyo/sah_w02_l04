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
    if($('main p').length < 5){
    $('main').append(`<p>Username: ${$('#name').val()}</p>`);
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

//loops



//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css('background', 'orange');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css('background', 'yellow');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css('background', 'purple');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css('background', 'blue');
//$('main').append ('<div class="box"></div>');
//$('main div: last-child').css('background', 'green');

let colors = ['orange', 'yellow', 'purple', 'blue', 'green'];

colors.push('magenta');
colors.forEach((color)=> {
  $('main').append('<div class="box"></div>');
  $('main div:last-child').css('background', color);
});

//i++ means i= i+1
for (let i = 0; i < 100; i + 1) {
    console.log('current number' + i);
}