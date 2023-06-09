const logout = async () => {
    console.log('test1');
    const response = await fetch("/api/users/logout", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        console.log('test2')
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);