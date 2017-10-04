# adopt-my-cats

### Instructions

I'm the owner of a cat adoption website. I need a website that allows me to load in the number of cats I currently have available, display them on my screen, then be able to filter them based on whether or not they are considered disabled (have 10 toes or less).

- [x] On page load, I should see an input box and a button.
- [x] The input box should prompt me to enter the number of cats I currently have on my site.
- [x] I should be able to either click the enter key in the input field or the button on the page to submit my number of cats I have.
- [x] I should be able to make a call to: https://random-dogs-api.herokuapp.com/cats/NUMBEROFCATZZZZZ (obviously replacing NUMBEROFCATZZZZZ with the actual number I entered in step 1).

#### Once all the cats come back:
- [x] Your card should be a div, it should have a nested div to display the cat image, it should have another nested div to contain all the descriptive elements (each in their own p tag).
- [x] They should be displayed on my page in card-like style (use Bootstrap columns to aid in this).

```
<div class="cat-card">
  <div class="image-container">
    <img src="IMAGELINK">
  </div>
  <div class="description-container">
    <h3> CAT NAME </h3>
    <p> Color: COLORRRR </p>
    <p> Skills: SKILLLLLZ </p>
    <p class="disabled-cat"> Toes: TOESSSS </p>
  </div>
</div>
```

- [x] If the cat has 10 toes or less, their p tag that contains their number of toes should have a class of disabled-kitty.
- [x] The input and button originally shown on the page should be hidden.
- [x] A new button should now appear at the top of the page: 'Get Rid Of The Disabled Ones'
- [x] Once I click on the 'Get Rid Of The Disabled Ones' button, any card on my page that has a p tag with the class disabled-kitty should be hidden.

### Tools I'm using:

- Browserify
- Grunt
- jQuery (DOM methods, AJAX)
- Linting
- Bootstrap