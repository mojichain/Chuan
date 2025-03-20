document.getElementById('airdropForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const walletAddress = document.getElementById('walletAddress').value;
    
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ walletAddress })
    });

    const result = await response.json();
    const messageElement = document.getElementById('message');
    if (result.success) {
        messageElement.textContent = 'Registration successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = `Registration failed: ${result.message}`;
        messageElement.style.color = 'red';
    }
});