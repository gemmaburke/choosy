# This is CHOOSY!
A band name generator, for inspiration and incredulation!

![Choosy landing page mock-up](choosy-landing.jpg)

## Features

1.  Suggests random string of words of varying length at button click
2.  Option expansion:
    1. Short / medium / long length of name
    2. Genre of music (i.e. country, metal, blues, emo, R'n'B)
    3. Mood (i.e. melancholy, anger, frustration, silly, irreverent)
3.  Save feature to log favourite results (initially, just front-end save to state, so favourites would disappear on refresh)
4.  Future expansion:
    1. Album name generator
    2. Song name generator
    3. Get in touch/share with social media method to alert of names in use

## Functionality

*   Integrate word-generating API to pluck resources on theme (genre/mood)
    *   _Uses Datamuse word-finding query engine_ https://www.datamuse.com/api/
*   Propositions to be chained (definite and indefinite articles - 'the', 'a', 'an' etc.)
*   Specialised JS data file with additional results/suggestions?
*   Current result (& previous results?) saved to state

## Theme / design

*   Light-hearted, friendly, animation and/or illustration

### In progress:

*   Colour palette & typography selection
*   Mock-up Figma sketch of layout
*   Landing page skeleton & button

### To do:

*   API selection & testing
*   Development feature 1 method & test

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
