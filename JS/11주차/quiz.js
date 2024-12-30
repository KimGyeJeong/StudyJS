// 1
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = {id: 1, name: "Alice"};
//         callback(null, data);
//     }, 1000);
// }
//
// // 사용 예
// fetchData((error, data) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(data);
//     }
// });

// 풀이
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = {id: 1, name: "Alice"};
//             resolve(data);
//         }, 1000);
//     })
// }
//
// fetchData().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error(error);
// })

// 2
// function getUserData(userId, callback) {
//     setTimeout(() => {
//         if (userId === 1) {
//             const user = { id: 1, name: "Alice" };
//             callback(null, user);
//         } else {
//             callback("User not found");
//         }
//     }, 1000);
// }
//
// function getUserPosts(userId, callback) {
//     setTimeout(() => {
//         const posts = [
//             { userId: 1, title: "Post 1" },
//             { userId: 1, title: "Post 2" }
//         ];
//         callback(null, posts);
//     }, 1000);
// }

//풀이
// function getUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId === 1) {
//                 const user = {id: 1, name: 'Alice'};
//                 resolve(user);
//             } else {
//                 reject("User not found");
//             }
//         }, 1000)
//     })
// }
//
// function getUserPost(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const posts = [
//                 {userId: 1, title: "Post1"},
//                 {userId: 1, title: "Post2"}
//             ];
//             resolve(posts);
//         }, 1000)
//     })
// }
//
//
// // 사용 예
// // getUserData(1, (error, user) => {
// //     if (error) {
// //         console.error(error);
// //     } else {
// //         getUserPosts(user.id, (error, posts) => {
// //             if (error) {
// //                 console.error(error);
// //             } else {
// //                 console.log("User:", user);
// //                 console.log("Posts:", posts);
// //             }
// //         });
// //     }
// // });
//
// Promise.all([getUserData(1), getUserPost(1)]).then(result => {
//     console.log("User : ", result[0].id);
//     console.log("Posts : ", result[1].map(post => post.title).join(", "));
// })
//

// 3
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: "Alice" };
//         callback(null, data);
//     // }, Math.random() * 2000); // 랜덤 지연
//     }, 1000); // 랜덤 지연
// }
//
// function fetchMoreData(callback) {
//     setTimeout(() => {
//         const moreData = { age: 25, city: "New York" };
//         callback(null, moreData);
//     }, 2000); // 랜덤 지연
// }
//
// // 사용 예
// fetchData((error, data) => {
//     if (error) {
//         console.error(error);
//     } else {
//         fetchMoreData((error, moreData) => {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.log({ ...data, ...moreData }); // 데이터 결합
//             }
//         });
//     }
// });
//


function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { id: 1, name: "Alice" };
            resolve(data); // 성공 시 resolve 호출
        // }, Math.random() * 2000); // 랜덤 지연
        }, 100); // 랜덤 지연
    });
}

function fetchMoreData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const moreData = { age: 25, city: "New York" };
            resolve(moreData); // 성공 시 resolve 호출
            // reject('FAILED'); // 성공 시 resolve 호출
        // }, Math.random() * 2000); // 랜덤 지연
        }, 100); // 랜덤 지연
    });
}

// 사용 예
Promise.race([fetchData(), fetchMoreData()])
    .then(result => {
        console.log("First completed result:", result);
    })
    .catch(error => {
        console.error("ERROR : ",error);
    });