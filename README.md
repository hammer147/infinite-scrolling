# Infinite scrolling with server actions

We will call the server action to fetch movies both from a server component and from a client component.

First from the server component, we fetch the initial set of movies. Then, when the user scrolls to the bottom of the page, we fetch the next set of movies from the client component.

At the bottom of the page, we add a loading spinner, which is a div with a ref attribute. When the user scrolls to the bottom of the page, we will check if the loading spinner is visible in the viewport. If it is, we will call the server action to fetch the next set of movies.

This technique uses the Intersection Observer API, and we implemented it wit a package called [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer).

## This project is part of 3 related projects

1. `next-prisma-seed`: we used prisma to seed a mongodb database with movies.
2. `mongo-pagination-search`: we used this project to paginate and search movies from the mongodb database.
3. `infinite-scrolling`: we removed pagination an implemented infinite scrolling with server actions.
