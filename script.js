const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-altenativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
        enunciado: "Você acha o uso dessa tecnologia pode impactar o mercado de trabalho?",
        alternativas: [
            {
                texto: "Acho que poderia ajudar de maneira positiva.",
                afirmacao: "A pode automatizar tarefas repetitivas, permitindo que os trabalhadores se concentrem em atividades mais criativas e estratégicas."
            },
            {
                texto: "Não acho que seria bom impacto ao mercado de trabalho",
                afirmacao: "A IA pode levar à perda de empregos em setores onde a automação substitui a mão de obra humana."
            }
        ]
    },
    {
        enunciado: "A IA poderia beneficiar a área da sáude?",
        alternativas: [
            {
                texto: "Sim, séria uma boa ajuda.",
                afirmacao: "A IA pode ajudar a diagnosticar doenças precocemente e personalizar tratamentos para pacientes."
            },
            {
                texto: "Não acho que séria muito confiavel.",
                afirmacao: " A IA pode levantar preocupações sobre privacidade e segurança dos dados dos pacientes.
"
            }
        ]
    },
    {
        enunciado:  "A IA poderia nos ajudar na educação?",
        alternativas: [
            {
                texto: "Sim, facilitaria muito a forma de estudo.",
                afirmacao: "A IA pode personalizar o aprendizado para atender às necessidades individuais dos alunos, tornando o ensino mais eficaz."
            },
            {
                texto: "Não séria uma forma de estudo tão eficas.",
                afirmacao: "A IA pode reduzir a interação humana entre professores e alunos, o que é essencial para o desenvolvimento social.
"
            }
        ]
    },
    {
        enunciado: "A IA é segura para a segurança cibernética?",
        alternativas: [
            {
                texto: "Sim, ajudaria muito a evitar esse tipo de problema. ",
                afirmacao: " A IA pode detectar e responder a ameaças cibernéticas mais rapidamente do que os métodos tradicionais."
            },
            {
                texto: "Não, poderia tornar esse problema mais perigoso.",
                afirmacao: "A IA também pode ser usada por hackers para criar ataques cibernéticos mais sofisticados."
            }
        ]
    },
    {
        enunciado: "A IA pode influenciar as decisões de empresas?",
        alternativas: [
            {
                texto: "Sim, ajudaria com decisões importantes.",
                afirmacao: "A IA pode analisar grandes volumes de dados para fornecer insights valiosos e apoiar decisões estratégicas."
            },
            {
                texto: "Não, poderia levar a empresa em uma situação complicada. ",
                afirmacao: "A IA pode levar a decisões enviesadas se os dados utilizados forem tendenciosos ou incompletos."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
