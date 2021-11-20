const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function gstPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li> ${post.title} </li>`
        })
        document.body.innerHTML = output
    }, 5000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 1000)
}

gstPosts()

createPost({ title: 'Post Three', body: 'This is post Three' }, gstPosts)