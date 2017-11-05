Exposes callbacks to the `cb` `lxl-tag` and `data-cb`. Reference callbacks by their key:

```js
script.text('Hello! [[cb log "foo"]] I just logged "foo." And if you <a data-cb=clickAlert>click here</a>, I will send an alert!', {
  callbacks: {
    clickAlert() {
      alert('I got clicked!');
    },
    log(value) {
      console.log(value);
    }
  }
})
```
