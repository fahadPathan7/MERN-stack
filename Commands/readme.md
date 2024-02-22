# Commands to set up the project

## 👉 Express

**Install:**

```bash
npm install express
```

## 👉 ejs

**Install:**

```bash
npm install ejs
```

## 👉 Cookie-Parser

**Install:**

```bash
npm install cookie-parser
```

## 👉 Mongoose

**Install:**

```bash
npm install mongoose
```

## 👉 bcrypt

**Install:**

```bash
npm install bcrypt
```

## 👉 JWT

**Install:**

```bash
npm install jsonwebtoken
```

## 👉 env

**Install:**

```bash
npm install dotenv
```

## 👉 cross-env

**Install:**

```bash
npm install --save-dev cross-env
```

**Use:**

```json
"scripts": {
    "start": "cross-env NODE_ENV=development nodemon ./chatApp/app.js",
    "dev": "cross-env NODE_ENV=production node ./chatApp/app.js"
}
```

In the package.json, it should be like this.

## 👉 nodemon

**Install:**

```bash
npm install nodemon
```

**Run:**

```bash
npm start
```

need to have the scripts in the package.json file.

## 👉 http-errors

**Install:**

```bash
npm install http-errors
```