// Simulação de adicionar novo post no blog
document.getElementById('newPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = event.target.querySelector('input[type="text"]').value;
    const content = event.target.querySelector('textarea').value;
    
    // Simular adição de novo post (exibição apenas no console)
    console.log('Novo Artigo:', title, content);
    
    // Limpar campos do formulário
    event.target.reset();
  });
  