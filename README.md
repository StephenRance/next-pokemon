# next-pokemon
This project is the first I've started using React.js. It initially fetches data on the server from the Pokemon API - https://pokeapi.co/, and updates the request on the client based on the user's navigation.

# setup
- Clone the project
- Navigate into the directory created
- Run `yarn install`
- Run `yarn dev`
- Visit http://localhost:3000/pokemon

# to-do
- Probably shouldn't hotlink to other site's images on the `/pokemon` page, although the images aren't available from the API at this point
- Apply basic styling to remaining components and dynamic pages
- Add filters for gen 1, 2, 3, etc. - however the API request will have to be manual
- Figure out how to scroll to the top of the component when updating the request(s), as I had troubles understanding how to use `React.createRef();` and passing it through to the `updateQuery` function
- Update `Jest` tests and screenshots, as structure and markup has been updated since initially implementing
- Decide between `SASS` and `Styled Components`, I did use the latter earlier in the project, but decided to change and the former for the time being

# notes
The project is built on the Next.js framework - https://nextjs.org/.
