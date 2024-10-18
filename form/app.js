const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.getElementById('tweets')

tweetForm.addEventListener('submit', function(e){
    e.preventDefault()

    const userInput = tweetForm.elements.username
    const postInput = tweetForm.elements.post

    addTweet(userInput.value, postInput.value)

    userInput.value = ''
    postInput.value = ''

})

const addTweet = (user, post) => {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(user)
    newTweet.append(bTag)
    newTweet.append(` - ${post}`)

    tweetsContainer.append(newTweet)
}