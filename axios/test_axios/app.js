

// document.getElementById('fetchData').addEventListener('click', function() {
//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//         .then(function (response) {
//             // 成功時の処理
//             document.getElementById('output').innerHTML = JSON.stringify(response.data.title);
//         })
//         .catch(function (error) {
//             // エラー時の処理
//             console.log(error);
//         });
// });

const fetchDataButton = document.getElementById('fetchData')

const fetchJsonData = async () => {
    try {
        const config = {
            headers: {
                Assept: 'application/json'
            }
        }
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1w', config)
        document.getElementById('output').innerHTML = res.data.title;
    }catch(e){
        console.log(e)
        document.getElementById('output').innerHTML = `error:${e}`;
    }
}

fetchDataButton.addEventListener('click', fetchJsonData)