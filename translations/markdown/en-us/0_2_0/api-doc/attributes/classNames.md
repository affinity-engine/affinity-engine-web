Changes the CSS class names associated with the direction. You can specify the class names as a string, array, or object:
  * String: replaces the current class names.
  * Array: transforms the array into a string and replaces the current class names.
  * Object: merges the class names in the object with any class name objects defined elsewhere in the configuration.

```js
direction.configure('classNames', { decorative: 'ae-coastal', structural: 'ae-full' });

// then ONE of the below:

direction.configure('classNames', 'ae-paper ae-block');
direction.configure('classNames', ['ae-paper', 'ae-block']);
direction.configure('classNames', { decorative: 'ae-paper', structural: 'ae-block' });

// if you only want to replace the 'decorative' or 'structural' class, you must use an object:

direction.configure('classNames', { decorative: 'ae-paper' });
direction.configure('classNames', { structural: 'ae-block' });
```

Read up on [styles](#/api/styles) to learn more.
