# css-block-loader

[![npm version](https://badge.fury.io/js/css-video-wrap.svg)](https://badge.fury.io/js/css-video-wrap)

A stylish [css module](https://github.com/css-modules/css-modules) compatible block loader...

Best to use this with [react-css-modules](https://github.com/gajus/react-css-modules)

## Install

`npm install css-block-loader --save-dev`

## Usage

Simply import the block loader css module and use it as your loader

`import { loader } from 'css-block-loader'`

Then use it for styling your elements.

```jsx
	return (
        <div className={styles.loader}>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
            <span className={styles.block}></span>
        </div>
    );
```

## Example

Check out the full working example [here](https://github.com/StevenIseki/css-block-loader/tree/master/example)

**Run it**

`cd example; npm install; npm start`

## License

[MIT](http://isekivacenz.mit-license.org/)
