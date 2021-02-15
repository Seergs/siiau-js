## A collection of helpful functions for the [SIIAU][1] UdeG system.

### ⚠ Warning

This module will only work in a NodeJs server environment, **do not use it in the browser**.

### Features

This package contains the following functions and tools:

1. Login to the Siiau platform using student code and NIP
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

### Basic usage

Login to SIIAU

```javascript
import { loginToSiiau } from "siiau-js";

const studentCode = "123456789";
const studentNip = "secretNip";

const { data, error } = await loginToSiiau(studentCode, studentNip);
const { pidm, cookies } = data;
```

**Important note: pdim and cookies are required for every function, so you need to login before using any other method**

---

Get the current student info

```javascript
import { getStudentInfo } from "siiau-js";

const { name, gpa } = await getStudentInfo(pidm, cookies);
```

**Return values**

- `name`: The name of the student
- `gpa`: The current gpa of the student
- `campus`: The UdeG campus the student is currently enrolled
- `career`: The student's career
- `status`: Whether the student is active or not
- `degree`: The current student's degree
- `firstSeason`: When the student joined his career
- `lastSeason`: Last season the student studied

[1]: http://siiauescolar.siiau.udg.mx/
