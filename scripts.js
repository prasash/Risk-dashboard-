// script.js


const userData = [
    { id: 1, name: 'User 1', riskLevel: 'High' },
    { id: 2, name: 'User 2', riskLevel: 'Medium' },
    { id: 3, name: 'User 3', riskLevel: 'Low' },
  
];

function renderUserList(users) {
    const userListContainer = document.getElementById('userList');
    userListContainer.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Risk Level: ${user.riskLevel}</p>
        `;
        userListContainer.appendChild(userCard);
    });
}

function showUsers(riskLevel) {
    const filteredUsers = userData.filter(user => user.riskLevel === riskLevel);
    renderUserList(filteredUsers);
}

// Initial rendering (display all users)
renderUserList(userData);

 
 