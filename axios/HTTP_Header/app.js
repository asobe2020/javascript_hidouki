const jokes = document.getElementById('jokes')
const button = document.querySelector('button')

const getDadJoke = async () => {
    try{
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://ichanhazdadjoke.com', config)
        console.log(res)
    }catch(e){
        console.log(e)
    }

}

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}

console.log(axios)