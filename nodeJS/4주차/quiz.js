console.log('hello world');

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {id: userId, username: 'Bob'};
            resolve(user);
        }, 500)
    })
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                {userId: userId, post: 'Hello World'},
                {userId: userId, post: 'My second post'}
            ];
            resolve(posts);
        }, 1000)
    })
}

function getUserWithPosts(userId) {
    getUser(userId).then((user) => {
        getPosts(user.id).then((posts) => {
            // console.log(posts);
            console.log({user, posts});
        })
    })
}

getUserWithPosts(1);
////////////
async function getUser2(userId){
    
}


async function getUserWithPosts2(userId) {
    const user = await getUser2(userId);
}

getUserWithPosts2(1);
