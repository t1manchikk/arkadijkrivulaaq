const cardsContainer = document.getElementById('cards');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const loginBtn = document.getElementById('loginBtn');

let isAuth = false;

const restaurants = [
    { id: 1, name: 'Pizza House' },
    { id: 2, name: 'Burger City' },
    { id: 3, name: 'Sushi World' }
];

function renderCards() {
    cardsContainer.innerHTML = '';
    restaurants.forEach(item => {
        cardsContainer.insertAdjacentHTML('beforeEnd', `
            <div class="card" data-id="${item.id}">
                <h3>${item.name}</h3>
            </div>
        `);
    });
}

renderCards();

cardsContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (!card) return;

    if (!isAuth) {
        modal.classList.remove('hidden');
    } else {
        alert('Відкрито сторінку ресторану ID: ' + card.dataset.id);
    }
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

loginBtn.addEventListener('click', () => {
    isAuth = true;
    modal.classList.add('hidden');
    alert('Ви авторизовані!');
});
