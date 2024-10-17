# javascript_hidouki
## check: コールバック地獄
非同期処理をコールバック関数で実現しようとした際に多重の入れ子構造になってしまい可読性が低下する
```
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();

```
そのために？
[ ] promise
[ ] await/async