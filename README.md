### Project

In response to this [issue](https://github.com/Irev-Dev/cadhub/issues/104) I have endeavored to build search functionality into CadHub a community where they believe that 

> *"Code is the future of CAD - Designs backed by reliable, easy-to-write code open a world of new workflows and collaboration. We're building a place where you can build that future."*

I have built a [project](https://github.com/Isaac-Tait/cadhub/projects/1) to keep track of issues, questions, and my overall progress. I have received some wonderful [input and assistance](https://community.redwoodjs.com/t/question-about-cells-in-regards-to-algolia-search-functionality/2755) from the RedwoodJS community too.

So far I have created the following:

## Web
`src -> components -> SearchCell` This is currently returning an error when you run `yarn rw dev` 

Does this need to be a plural cell? 

```
gen |   Error 0: GraphQLDocumentError: Unknown type "Int".
gen |     at /Users/isaactait/Desktop/Web_Dev/cadhub/app/web/src/components/SearchCell
gen | /SearchCell.tsx:2:30
gen |
gen | Error 1: GraphQLDocumentError: Cannot query field "search" on type "Query".
gen |     at /Users/isaactait/Desktop/Web_Dev/cadhub/app/web/src/components/SearchCell
gen | /SearchCell.tsx:3:5
gen | GraphQL Document Validation failed with 2 errors;
gen |   Error 0: GraphQLDocumentError: Unknown type "Int".
gen |     at /Users/isaactait/Desktop/Web_Dev/cadhub/app/web/src/components/SearchCell
gen | /SearchCell.tsx:2:30
gen |
gen | Error 1: GraphQLDocumentError: Cannot query field "search" on type "Query".
gen |     at /Users/isaactait/Desktop/Web_Dev/cadhub/app/web/src/components/SearchCell
gen | /SearchCell.tsx:3:5
gen |
gen | Error: Could not generate GraphQL type definitions (web)
```

`src -> pages -> SearchPage` This is where the graphQL query currently lives that I am trying to connect the CadHub projects to the Algolia indices. 

`.env` The following needs to be added to the .env file (you can find this required field info in your Algolia account)

```
ALGOLIA_APP_ID=<App ID>
ALGOLIA_SEARCH_KEY=<Search-Only API Key>
ALGOLIA_ADMIN_KEY=<Admin API Key>
```
## API

I have not even begun to figure this out

## Auth
I have not even begun to figure this out

# GraphQL Query
```
query Algolia {
  projects {
    id
    title
    description
    code
  }
}
```