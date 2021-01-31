## Auth

**Signup POST method**

Request:

```
url/auth/signup
```

Body:

```
{
    username: "string", // unique
    password: "string"
}
```

**Login POST method**

Request:

```
url/auth/login
```

Body:

```
{
    username: "string",
    password: "string"
}
```

**Authentication**

```
endpoint?secret_token={{token here}}
```

Use this param for all endpoints with _requires auth_

## Posts

**Get Recent Posts GET method**

Request:

```
url/posts
```

Body:

```
    category: "stocks" || "crypto"
```

_Pagination not implemented yet_

**Create a Post POST method**

_requires auth_

Request:

```
url/posts
```

Body:

```
{
    title: "string", // required
    body: "string"
    image: "string",
    category: "stocks" || "crypto"
}
```
