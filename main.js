

//8. Sort an array of JavaScript objects based on libraryID

library = [

{

title: 'The Road Ahead',

author: 'Bill Gates',

libraryID: 1254

},

{

title: 'Walter Isaacson',

author: 'Steve Jobs',

libraryID: 4264

},

{

title: 'Mockingjay: The Final Book of The Hunger Games',

author: 'Suzanne Collins',

libraryID: 3245

},

{

title: 'Adventures of Tom Sawyer',

author: 'Mark Twain',

libraryID: 1345

},

{

title: 'Adventures of Sherlock Holmes',

author: 'Sir Arthur Conan Doyle',

libraryID: 2245

}

];
let sortedArr=library.sort(function(x1,y1){
	return x1.libraryID-y1.libraryID;
});
console.log(sortedArr);

// let sortedArr=library.sort((x,y)=>x.libraryID-y.libraryID);
// console.log(sortedArr);





