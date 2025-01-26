document.getElementById('newPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const title = event.target.querySelector('#postTitle').value;
    const message = event.target.querySelector('#postMessage').value;
  
    // Criar um novo elemento de post
    const newPost = document.createElement('div');
    newPost.classList.add('post');
  
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
  
    const postUsername = document.createElement('p');
    postUsername.innerHTML = `<strong>Usuário:</strong> ${username}`;
  
    const postMessage = document.createElement('p');
    postMessage.textContent = message;
  
    newPost.appendChild(postTitle);
    newPost.appendChild(postUsername);
    newPost.appendChild(postMessage);
  
    // Adicionar o novo post ao container de posts
    document.getElementById('postsContainer').appendChild(newPost);
  
    // Limpar o formulário
    event.target.reset();
  });
  