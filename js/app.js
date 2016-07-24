/* How to write JS apps
Milestone one: create the basic structure
- first define the main parts of the JS code
- inside of each of them describe in plain english what you are going to do
- create the functions with names but no content
- create the connection between the functions and the html buttons which are activating them
Milestone two: start complete the functions definitions and test them line by line
- inside each functions write in plain english what are the steps to follow
- complete one step at a time and test it
*/



/* Debugging strategies
debugging level 1 => check if JS syntax is correct (check console in Web Dev)
    --> a real life example: make sure that your TV remote has batteries
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
    --> a real life example: make sure that your remote connects to your own TV
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)
    --> a real life example: make sure that when you click on the volume up button on your remote, you don't get to change channels or similar
*/


/*step 1 -  define functions*/

/* function for adding items to the shopping list using the add to list button and enter key */
function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");


    //get the value of the input box
    var itemValue = $('#inputBox').val();

    //check if the logic makes sense -> make sure that you get the value you are adding in the html
    //alert(itemValue);

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }

    //if the input is valid ....
    else {
        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox">✓</button><span class="list">' + itemValue + '</span><button class="delete">X</button></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting the value
        $('#inputBox').val('');
    }

}

/*function to select an item to cross out
    Note: create the 'ticked' class in CSS file first! You don't need to use it in the index.html because the JS will be adding it automatically to the index
*/
function tickItem() {
    //check if the targeting is working
    //alert("I've just activated the tickItem() function");

    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of it (in our case the LI above the it) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('ticked');
}

/*function to remove an item from the list clicking on the 'x' */
function deleteItem() {
    //check if the targeting is working
    //alert("I've just activated the deleteItem() function");

    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the parent of it (in our case the LI above it) and remove the parent and everything inside it
    $(this).parent().remove();
}

/*function to reset and clear the list */
function deleteAll() {
    //check if the targeting is working
    //alert("I've just activated the deleteAll() function");

    //find the UL container (in our case having the class shopping-list) which contains all the LIs and delete all the children inside it
    $('.shopping-list').empty();
}


/*step 2 - use functions*/

$(document).ready(function () {

    /*on click on the "#submitForm" button activate function called addItem()*/
    $('#submitForm').on('click', function () {
        addItem();
    });


    /*on click on the "#clearAll" activate function called deleteAll()*/
    $('#clearAll').on('click', function () {
        deleteAll();
    });

    //close document ready
});

/*on click on the ".checkbox" button activate function called tickItem()*/
$(document).on('click', '.checkbox', tickItem);

/*on click on the ".delete" button activate function called deleteItem()*/
$(document).on('click', '.delete', deleteItem);


/*add item on enter*/
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItem();
    }
});


/*
the usage of = in programming


1+2=3 // math

hadoucken = !hadoucken //change the boolean value of the varialble to the opposite of it (if the hadouckenwas true is going to be false)

non-strict comparisons (compare the variable only)
3 == "3" //true
3 != "3" //false


strict comparisons (compare the variable and the type of that variable)
3 === "3" //false
3 !== "3" //true



*/
