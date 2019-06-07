# K Strickland's Flash App

Welcome to Flash!

Flash cards are great for learning, and this app is too. Users can create cards that will be contributed to the community treasure trove of cards, a.k.a. a wonderful Rails database hosted on Heroku. Cards are kept safe in the user's own account for their own editing and deleting needs. Users can also browse all existing flashcards from the community by tags or card content, whatever strikes their fancy.

Users have the ability to add images to cards as well, which opens up a world of possibilities.

Shameless plug: my friends think this app is so great, they're using it for a trivia night they're hosting this weekend.

Hope you enjoy it too!

-K

## Technologies Used

* JavaScript
* React
* React-Bootstrap
* HTML5
* CSS3
* Axios
* Ruby
* Rails
* Heroku
* FontAwesome (icons)

## Installation Instructions

### Front End Installation

1. Fork and Clone this repository.
2. Install dependencies with ```npm install```.
3. Install FontAwesome dependencies following ![these directions on NPM](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
4. Run the development server with npm start.

### Back End Installation

1. Fork and Clone the back end repo found here: https://github.com/kstrickland0612/flashcards-api
2. Install dependencies with ```bundle install```.
3. Create a .env for sensitive settings (```touch .env```).
4. Generate new development and test secrets (```bundle exec rails secret```).
5. Store the keys in .env with keys ```SECRET_KEY_BASE_<DEVELOPMENT|TEST>```, respectively.
6. Run the development server with ```bin/rails server```.
7. Set up a Heroku server, if desired. 

## Planning

A requirement of this capstone was to choose our own prefered tech stack to implement our app. I chose to use Ruby on Rails for the backend and React for the front end.

Once I settled on the technology, I set a pretty comprehensive 4 day schedule for myself. I added items to the schedule as needed on Day 3 and 4 after MVP were already met. I've found that meeting MVP is super simple when I take time to set up a smart schedule that allows for re-prioritization as needed.


<details><summary>If you feel like getting a glimpse of what my planning process looks like, feel free to check out my schedule here (dropdown)!
</summary>

### Day 1:

- Set up Rails template
- Create GH repo for back end
- Create Heroku app and deploy initial commits to it
- Set up React template
- Create GH repo for front end
- Test user auth end points with curl scripts
- User auth front-end setup (make sure it works)
- Scaffold card resource
- Test card resource end points with curl scripts
- CRUD for cards from front end
	GET /cards cards#index
		From ‘/’ route (for all cards)
		From authenticated ‘/my-cards’ (nav bar link to my account >>> my cards - for user’s cards)
POST /cards cards#create
	From authenticated ‘/build-card’ path (nav bar link)
PATCH /cards:id cards#update
	From authenticated ‘/edit-card/:id’ path (from my cards page)
		Might be ‘my-cards/edit-card/:id’?
DELETE /cards/:id cards#destroy
	From authenticated ‘/my-cards:id’
- Get deployed app up and running (GH Pages)

### Day 2:

- Front-end configuration (React components):
	- Nav component (shared)
	- Footer component (shared)
	- Card Form component (shared)
	- Card component
	- Cards component
	- CardCreate component
	- CardEdit component
- Card “flip” feature
- Search feature by card category
- Make category field into a dropdown (populated from DB) with 'Other' option
  - have this list avoid duplicates

### Day 3:

- Deck view where categories take user to that deck page of cards (‘cards/:category’)
	- secondary category dropdown at top of page with all categories, duplicates removed
- change search to search content of card, not category
- make search bar only available from ‘/’ (root)
- make filter by tag only available from ‘/’ (root)
- fix all nestedDom errors
- Styling: get cards to lay out 2 by 2
- Styling: get MyCard to have edit and delete button displayed under each card
- Styling: Auth forms
- add image capability to cards
- Troubleshooting/debugging
  - BUG: Category is blank when creating a new card with a category selected from the dropdown. Category only populates if it is types in the ‘other’ field.
	- BUG: filter by tag shows up on edit card field
- style card form

### Day 4:

- Stying: pick color theme
- have a message appear when no items match search
- add All Cards option to filter category dropdown that bumps user back to root where they can see all cards
- set up authorization for create, edit and delete (token in the axios header, and back-end rails configuration for users and cards tables)
- remove all console.logs and console.errors from code
- Troubleshooting/debugging
- this README! :)
</details>

## Challenges/Victories

- **CSS Design**
  I really wanted to challenge myself on CSS with this project. The concept of flipping cards and creating a clean UX was really appealing to me when I thought up this app. It's been a major victory to finally understand flexbox and use it well, and to get the cards to flip using transform: rotate. I spent time learning the ins and outs of media queries and Bootstrap's grid system to make the design responsive on mobile.

- **Filtering results in React / Search Feature**
	Creating the individual card category views and the card search were fun. Implementing these features really helped me get familiar with how React works. They might seem small, but there's a lot going on under the hood to let users see matching restults as they type into the search bar, and to let them see a deduplicated list of card categories in the Filter by Tag dropdown.

### ERD

- **ERD:**

![ERD](https://i.imgur.com/8rIubY5.png "ERD")

### Wireframes

As always, I put together some wireframes to help me keep the end goal in mind.

![Wireframe](https://i.imgur.com/7uTfbwN.png "wireframe")

### Routes

* POST /sign-up users#signup
* POST /sign-in users#signin
* DELETE /sign-out users#sign-out
* PATCH /change-password users#changepw
* GET /cards cards#index
* Get /cards/:id cards#show
* POST /cards cards#create
* PATCH /cards:id cards#update
* DELETE /cards/:id cards#destroy

### User Stories

#### Main Features:
1. As a user, I want to create flash cards with a category tag, a front, and a back. The front is visible by default and the back is visible on hover.
2. As a user, I want to be able to see and flip all flash cards in the database, including those created by other users.
3. As a user, I want to be able to edit and delete my own flash cards.
4. As a user, I want to receive a notification when I successfully create, edit, and delete my flash cards.
5. As a user, I want to search for flash cards by category.

#### Authorization:
6. As a user, I want to sign up for an account or sign into an existing account using my email and password before I access the app so that my app data can be saved to my account.
7. As a logged in user, I want to click on a change password button and have the ability to change my password for my account so that I can edit my password if needed.
8. As a logged in user, I want to click a sign out button so that I can sign out of my account.
9. As a user, I want to receive a notification on sign up success and failure, sign in success and failure, change password success and failure, and sign out success and failure.

#### Extra features (if there is time):
10. As a user, I want to add cards to and remove cards from my deck, which is a storing area for all the cards I’m interested in drilling myself on.
11. As a user, I want to browse existing categories of cards as if they are decks (for example: Spanish, computer science, history, biology).
12. As a user, I want to rate my happiness with my answer for each card. A happy rating will give me a point. Points will make fun things happen in my account (TBD).

## Future Thinking

First, I'd like to make flip work on mobile. I tried adding onClick=” “ to each card. I also tried using css webkits as well. I also tried adding cursor:pointer to each element in Cards.scss (this at least made the transform work). Cards are flipping but the back text is only appearing for a second and then disappearing. Front text is staying, but transformed. I will need to spend a bit more time looking into this.

I would also like to dive into user story 10 and 12, which will most likely involve some changes to the way I have my components laid out. I think it would be a great feature for users to be able to create a deck of cards they are interested in. I'd also love for users to be able to indicate on a card that they've nailed it.

I could also see a "like" feature on each card being useful, and cards would be sorted based on highest likes at the top of the page. Since this is a community app where everone is contributing to a shared pool of cards, this would help weed out the cards that aren't the best quality.

I would like to incorporate AWS to store user's images (and a profile pic) rather than relying on users to provide a working URL of the image.

## Wanna try it?

### [You can use Flash here!](https://kstrickland0612.github.io/flashcards-client/#/)

### [The deployed Heroku database lives here](https://guarded-falls-36337.herokuapp.com/)

### [Take a look at my back-end repo here](https://github.com/kstrickland0612/flashcards-api)
