function helloWorld(): void
{
    console.log('Hello typescript!');
};

const helloWorldBtn = document.getElementById('helloWorldBtn');
helloWorldBtn?.addEventListener('click', helloWorld);

