import { FlyingCar } from './FlyCar.js';
const FlyingCarObj = new FlyingCar('Honda', 2025);
console.log(FlyingCarObj.toString());

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/comments')
        ]);

        const [users, posts, comments] = await Promise.all([
            usersResponse.json(),
            postsResponse.json(),
            commentsResponse.json()
        ]);

        const commentCounts = comments.reduce((acc, comment) => {
            acc[comment.postId] = (acc[comment.postId] || 0) + 1;
            return acc;
        }, {});

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Address Geo</th>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;

        users.forEach(user => {
            const row = table.querySelector('tbody').insertRow();
            
            row.insertCell(0).textContent = user.username;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = user.company.name;
            row.insertCell(3).textContent = `${user.address.geo.lat}, ${user.address.geo.lng}`;
            
            const postsCell = row.insertCell(4);
            const userPosts = posts.filter(post => post.userId === user.id);
            
            if (userPosts.length > 0) {
                const ul = document.createElement('ul');
                userPosts.forEach(post => {
                    const li = document.createElement('li');
                    li.textContent = `${post.title} (${commentCounts[post.id] || 0} comments)`;
                    ul.appendChild(li);
                });
                postsCell.appendChild(ul);
            } else {
                postsCell.textContent = 'No posts';
            }
        });

        document.body.appendChild(table);
    } catch (error) {
        console.error('Error:', error);
        document.body.innerHTML = `<div style="color: red; padding: 20px;">${error.message}</div>`;
    }
});