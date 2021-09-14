# DESCRIPTION

- Testing restful api:

```
localhost:8082
```

- Routes:
  - api/user
    - **POST**: TO CREATE USER
    - **GET**: TO GET LIST USER
  - api/user/:id/
    - **GET**: TO GET USER BY ID (FIND NAME ---> ID)
    - **DELETE**: TO DELETE ID BY NAME (FIND NAME ---> ID)

# TESTING

- To run:

```
npm run test
```

# ISSUE WITH MOCHA TIME OUT

## ABSTRACT:

- `Error: Timeout of 10000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.`

### How to fix

- When there is an error/incorrect assertion an error is raised inside the promise. This leads to promise rejection. Once rejected done is never called and mocha reports time out.
  **solved this by writing a .catch block and chaining it with the promise:**

```javascript
it("resolves", (done) => {
  fooAsyncPromise(arg1, arg2)
    .then((res, body) => {
      expect(res.statusCode).equal(incorrectValue);
      done();
    })
    .catch(done);
});
```

- Other ways as mentioned : **To chain a then(done, done) which handles both resolve and reject of the promise.**

```javascript
it("use resolve", function (done) {
  let ot = getIdByUseName("long")
    .then((data) => {
      assert.typeOf(data, "object", "obj");
      console.log(data);
      expect(data).to.be.a("Object");
    })
    .then(done, done);
});
```

- Return a promise:

```javascript
it("resolves", () => {
  return resolvingPromise.then((result) => {
    expect(result).to.equal("promise resolved");
  });
});
```

- Use async/wait:

```javascript
it("use async", async () => {
  let ot = await getIdByUseName("long");
  expect(ot).to.be.a("Object");
});
```
