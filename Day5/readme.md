# DESCRIPTION
- Testing restful api:
```
localhost:8082
```
- Routes:
  * api/user 
    + **POST**: TO CREATE USER
    + **GET**: TO GET LIST USER
  * api/user/:id/
    + **GET**: TO GET USER BY ID  (FIND NAME ---> ID)
    + **DELETE**: TO DELETE ID BY NAME (FIND NAME ---> ID)

# TESTING
- To run:
```
npm run test
```

# ISSUE WITH MOCHA TIME OUT
## ABSTRACT:
-   ```Error: Timeout of 10000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.```
### How to fix
