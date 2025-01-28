// Dados dos cursos: imagens de fundo, nome do curso e subtítulo
const cursos = [
  {
    imagem: 'assets/img/logocurso.png', // Verifique se o caminho da imagem está correto
    nome: 'CURSO PROFISSIONALIZANTE',
    subtitulo: 'DESIGN DE <br>SOBRANCELHAS', // Adicionando a quebra de linha aqui
  },
  {
    imagem: 'assets/img/logocurso2.png',
    nome: 'CURSO PROFISSIONALIZANTE',
    subtitulo: 'LASH <br>DESIGN', // Adicionando a quebra de linha aqui
  },
];

// Variáveis de controle
let indiceCurso = 0; // Começar com o primeiro curso
const totalCursos = cursos.length;

// Função para alternar a imagem e o nome do curso
function alternarCurso() {
  // Obter os dados do curso atual
  const cursoAtual = cursos[indiceCurso];

  // Alterar a imagem de fundo com gradiente
  const novaImagem = cursoAtual.imagem;
  const novoGradiente = "linear-gradient(72deg, rgba(220, 139, 118, 0.72), rgba(220, 139, 118, 0.5))";

  // Atualizar o estilo de background-image
  document.querySelector('.cursos-corpo').style.backgroundImage = `${novoGradiente}, url(${novaImagem})`;

  // Alterar o título e subtítulo
  document.getElementById('titulo-curso').textContent = cursoAtual.nome;
  document.getElementById('nome-curso').textContent = cursoAtual.nome;
  
  // Usar innerHTML para permitir a interpretação da tag <br>
  document.getElementById('subtitulo-curso').innerHTML = cursoAtual.subtitulo;

  // Atualizar o índice do curso para o próximo
  indiceCurso = (indiceCurso + 1) % totalCursos;
}

// Definir o intervalo para alternar automaticamente a cada 5 segundos
setInterval(alternarCurso, 8000);

// Chamar a função para inicializar com o primeiro curso
alternarCurso();
