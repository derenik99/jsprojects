let users = [
    {
        name : 'Derenik Davtyna',
        country: 'Armenia',
        age: 20,
        gender: 'Male',
        phone: '041 907771'
    },
    {
        name : 'James Lucas',
        country: 'USA',
        age: 37,
        gender: 'Male',
        phone: '14844732486'
    },
    {
        name : 'Logan',
        country: 'USA',
        age: 22,
        gender: 'Male',
        phone: '14844732586'
    },
    {
        name : 'Ethan',
        country: 'USA',
        age: 36,
        gender: 'Male',
        phone: '14844332486'
    },
    {
        name : 'Lily',
        country: 'USA',
        age: 34,
        gender: 'Female',
        phone: '4845732486'
    },
    {
        name : 'Henry',
        country: 'USA',
        age: 43,
        gender: 'Male',
        phone: '14844735486'
    },
    {
        name : 'John',
        country: 'USA',
        age: 33,
        gender: 'Male',
        phone: '14875732486'
    },
    {
        name : 'Julie',
        country: 'USA',
        age: 44,
        gender: 'Female',
        phone: '13845732486'
    },
    {
        name : 'Lillian',
        country: 'USA',
        age: 24,
        gender: 'Female',
        phone: '14845732486'
    },
    {
        name : 'Ellie',
        country: 'USA',
        age: 21,
        gender: 'Female',
        phone: '14845632486'
    },
    {
        name : 'Leah',
        country: 'USA',
        age: 52,
        gender: 'Female',
        phone: '14825732486'
    },
    {
        name : 'Caroline',
        country: 'USA',
        age: 27,
        gender: 'Female',
        phone: '14843732486'
    },
    {
        name : 'Allison',
        country: 'USA',
        age: 34,
        gender: 'Female',
        phone: '14845732486'
    },
    {
        name : 'Alexei',
        country: 'Russia',
        age: 34,
        gender: 'Male',
        phone: '78262475'
    },
    {
        name : 'Alexander',
        country: 'Russia',
        age: 22,
        gender: 'Male',
        phone: '78262475'
    },
    {
        name : 'Albert',
        country: 'Russia',
        age: 28,
        gender: 'Male',
        phone: '78262475'
    },
    {
        name : 'Natasha Antonova',
        country: 'Russia',
        age: 54,
        gender: 'Female',
        phone: '78262475'
    }
]

let usersBox = document.querySelector('#users-box');
let searchButton = document.querySelector('#search-button');
let searchText = document.querySelector('#search-text');
let filtersNav = document.querySelector('#filters-nav');
let updateFiltersBtn = document.querySelector('#update-filters');
let loginBtns = document.querySelectorAll('.login-btn');
let emailInput = document.querySelector('#email')

emailInput.addEventListener('keyup', function() {
    let emailMessage = document.querySelector('#email-message');
    if(emailInput.value.includes('@')) {
        emailMessage.innerHTML = 'OK'
        emailMessage.style.color = 'white'
    }
    else {
        emailMessage.innerHTML = 'invalid Email address'
        emailMessage.style.color = 'red'
    }
})

loginBtns[0].addEventListener('click', openHideLogin)
loginBtns[1].addEventListener('click', openHideLogin)

function openHideLogin() {
    let loginBox = document.querySelector('#login-box');
    if(loginBox.style.display === '' || loginBox.style.display === 'none') {
        loginBox.style.display = 'block'
    }
    else {
        loginBox.style.display = 'none';
    }
}

updateFiltersBtn.addEventListener('click', () => {
    let currentCountry = document.querySelector('#country-filter').value.toLowerCase();
    let currentGender = document.querySelector('#gender-filter').value.toLowerCase();

    let filteredUsers = users.filter(function(user) {
        return (user.country.toLowerCase().includes(currentCountry) && 
                user.gender.toLowerCase().includes(currentGender) && 
                user.name.toLowerCase().includes(searchText.value.toLowerCase()))
    })

    usersBox.innerHTML = ''

    for (user of filteredUsers) {
        let userElement = document.createElement('div');
        userElement.classList.add('user-item')
        userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>Country: ${user.country}</p>
            <p>Age: ${user.age}</p>
            <p>Gender: ${user.gender}</p>
            <p>Phone: ${user.phone}</p>
        `
        usersBox.appendChild(userElement)
    }
})

filtersNav.addEventListener('click', () => {
    let filtersBox = document.querySelector('#filters')

    if(filtersBox.style.display === '' || filtersBox.style.display === 'none') {
        filtersBox.style.display = 'block'
    }
    else {
        filtersBox.style.display = 'none'
    }
})

searchButton.addEventListener('click', () => {
    let filteredUsers = users.filter(function(user) {
        return user.name.toLowerCase().includes(searchText.value.toLowerCase())
    })
    usersBox.innerHTML = ''

    for (user of filteredUsers) {
        let userElement = document.createElement('div');
        userElement.classList.add('user-item')
        userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>Country: ${user.country}</p>
            <p>Age: ${user.age}</p>
            <p>Gender: ${user.gender}</p>
            <p>Phone: ${user.phone}</p>
        `
        usersBox.appendChild(userElement)
    }
})

for (user of users) {
    let userElement = document.createElement('div');
    userElement.classList.add('user-item')
    userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>Country: ${user.country}</p>
        <p>Age: ${user.age}</p>
        <p>Gender: ${user.gender}</p>
        <p>Phone: ${user.phone}</p>
    `
    usersBox.appendChild(userElement)
}