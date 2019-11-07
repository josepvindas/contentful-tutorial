# Contentful Tutorial

## Introduction

Simple web application built with react to demonstrate de functionality of the [Contentful](https://contentful.com/) content delivery API.

Site is live [here](https://contentful-tutorial.netlify.com/).

## API Usage

We will be discussing the usage of Contentful's content delivery API, to install it, simply run:

```bash
npm install contentful --save -E
```

- [Client](#Creating-the-client)
- [All data](#Retrieving-all-data)
- [Type-specific data](#Retrieving-type-specific-data)
- [Single data field](#Retrieving-data-by-ID)

### Creating the client

```javascript
createClient({
  space: '<my_space>',
  accessToken: '<my_token>'
});
```

### Retrieving all data

```javascript
getEntries()
  .then(response => {
    // Manage data
  })
  .catch(console.error); // Handle errors
```

### Retrieving type specific data

```javascript
getEntries({
  content_type: '<my_type>'
})
  .then(response => {
    // Manage data
  })
  .catch(console.error); // Handle errors
```

### Retrieving data by ID

```javascript
client.getEntry('<entry_id>').then(entry => {
  // Manage entry
});
```
