$(document).ready(function(){
	$('.image_button').click(function() {
    $('.text_answer').empty();
    $('.text_answer').append(randomQuote);
  })
});

function randomQuote() {
  var quotes = ['When your only tool is a hammer, all problems start looking like nails.',
  '99 percent of lawyers give the rest a bad name.',
  'Artificial intelligence is no match for natural stupidity.',
  'The last thing I want to do is insult you. But it IS on the list.',
  "I don't have a solution, but I do admire the problem.",
  'The only substitute for good manners is fast reflexes.',
  "'Support bacteria - they're the only culture some people have.",
  'Letting the cat out of the bag is a whole lot easier than putting it back in.',
  'Well, here I am! What are your other two wishes?',
  "Time does'nt exist. Clocks exists.",
  "My mind’s made up, don’t confuse me with facts.",
  "Talk is cheap. Until you hire a lawyer.",
  "42",
  "Take my advice — I'm not using it.",
  "I got lost in thoughts. It was unfamiliar territory.",
  "Sure, I'd love to help you out ... now, which way did you come in?",
  "I would like to slip into something more comfortable - like a coma.",
  "I started with nothing, and I still have most of it.",
  "Ever stop to think, and forget to start again?",
  "There is no dance without the dancers.",
  "Out of my mind. Back in five minutes.",
  "42",
  "The problem with trouble shooting is that trouble shoots back.",
  "If you are here - who is running hell?",
  "If nothing was learned, nothing was taught.",
  "Very funny, Scotty. Now beam down my clothes...","You can do anything, but not everything. —David Allen",
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. —Antoine de Saint-Exupéry",
  "The richest man is not he who has the most, but he who needs the least. —Unknown Author",
  "Courage is not the absence of fear, but rather the judgement that something else is more important than fear. —Ambrose Redmoon",
  "You must be the change you wish to see in the world. —Gandhi",
  "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean. —Lin-Chi",
  "To the man who only has a hammer, everything he encounters begins to look like a nail. —Abraham Maslow",
  " We are what we repeatedly do; excellence, then, is not an act but a habit. —Aristot<le",
  "42",
  " A wise man gets more use from his enemies than a fool from his friends. —Baltasar <Gracian",
  " Do not seek to follow in the footsteps of the men of old; seek what they sought. —Bas<ho",
  " Everyone is a genius at least once a year. The real geniuses simply have their brigh<t ideas closer together. —Georg Christoph Lichtenberg",
  "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do. —John Rusk<in",
  "The real voyage of discovery consists not in seeking new lands but seeing with new eyes. —Marcel Prou<st",
  "Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching —<Unknown Author",
  "Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not. —Virgil Garnett Thomson",
  "Even if you’re on the right track, you’ll get run over if you just sit there. —Will Rogers",
  "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily. —Zig Ziglar"];
  var random = quotes[Math.floor(Math.random() * quotes.length)];
  return random;
}
