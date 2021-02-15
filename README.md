## A collection of helpful functions for the [SIIAU][1] UdeG system.

### ⚠ Warning: This module will only work in a NodeJs server environment, **do not use it in the browser**.

This package contains the following functions and tools:

1. Login to the Siiau platform using student code and nip
2. Get the information about the current logged in user, such as name, career, gpa, campus, etc.

### Installation

Inside your nodejs project run the following command to add the library

```shell
npm install siiau-js
```

or if you're using yarn

```shell
yarn add siiau-js
```

### Usage

```javascript
import { loginToSiiau } from "siiau-js";

const studentCode = "123456789";
const studentNip = "secretNip";

const { pidm, cookies } = await loginToSiiau(studentCode, studentNip);
```

**Important note: pdim and cookies are required for every function, so you need to login before using any other method**

[1]: http://siiauescolar.siiau.udg.mx/
