const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const startTime = Date.now();  // 処理開始時間を記録

  const primes = generatePrimes(quota.value);

  const endTime = Date.now();  // 処理終了時間を記録
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);  // 秒に変換して小数点2桁に丸める

  output.textContent = `${quota.value} 個の素数を生成しました。処理時間: ${timeTaken} 秒`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
