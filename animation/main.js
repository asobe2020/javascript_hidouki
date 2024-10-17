const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }

  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  
  function aliceAnime1(callback){
    callback(aliceTiming)
  }
  function aliceAnime2(callback){
    callback(aliceTiming)
  }
  function aliceAnime3(){
    callback(aliceTiming)
  }


  // callback地獄
//   function doAnimation() {
//     alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//       // alice1のアニメーションが終わった後にalice2のアニメーションを開始
//       alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
//         // alice2のアニメーションが終わった後にalice3のアニメーションを開始
//         alice3.animate(aliceTumbling, aliceTiming).finished.then(() => {
//           alert('すべてのアニメーションが完了しました');
//         });
//       });
//     });
//   }

  function doAnimation() {
    alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => {
            return alice2.animate(aliceTumbling, aliceTiming).finished;
    })
    .then(() => {
        return alice3.animate(aliceTumbling, aliceTiming).finished;
    })
    .then(() => {
        alert('promise chain animation finish')
    })
    .catch((error) => {
        console.log(`${error}`)
    })
  }

  doAnimation()

//   alice2.animate(aliceTumbling,);
//   alice3.animate(aliceTumbling, aliceTiming);