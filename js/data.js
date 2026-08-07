// NexoTech — Dados dos posts (editado pelo agente editor)
// Cada post: { slug, title, category, date, excerpt, source, sourceUrl, body[] }
const POSTS = [
  {
    slug: "eletrons-fases-coexistentes-material-quantico",
    title: "Físicos do MIT observam elétrons se organizarem em fases coexistentes num material quântico",
    category: "Ciência",
    image: "https://images.unsplash.com/photo-1635241161466-541f506683a0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Esfera de átomos em luz azul representando a física quântica e os elétrons em organização",
    date: "2026-08-07",
    excerpt: "Pesquisadores do MIT revelam, em estudo publicado na Nature Physics, como duas fases de comportamento eletrônico emergem e coexistem num mesmo material quântico — um passo para projetar dispositivos quânticos de alta performance.",
    source: "MIT News / Nature Physics",
    sourceUrl: "https://news.mit.edu/2026/physicists-watch-materials-electrons-assemble-reassemble-coexisting-phases-0807",
    body: [
      "Um copo de água com gelo é um exemplo cotidiano de fases coexistentes: a mesma substância existe, ao mesmo tempo, em estado líquido e sólido. Agora, físicos do MIT mostraram que essa 'dualidade de fases' também acontece — de formas bem mais complexas — em materiais quânticos, e conseguiram observá-la em tempo real.",
      "O grupo liderado pelo professor Nuh Gedik estudou o telureto de érbio, um material de terras raras cujos elétrons, ao serem resfriados, organizam-se em padrões ondulados conhecidos como 'ondas de densidade de carga'. A surpresa veio ao desmontar cada fase: a primeira se forma gradualmente, como água líquida virando vapor; já a segunda emerge de um jeito inédito, com os elétrons se agrupando primeiro em 'bolsões' que depois se expandem — como água cristalizando em gelo. O resultado foi publicado hoje na revista Nature Physics.",
      "Entender como fases eletrônicas coexistem e interagem é essencial para dominar fenômenos como a supercondutividade e o magnetismo em escala quântica. Essa é a base para substituir o silício em futuros dispositivos quânticos de alta performance. Segundo os autores, o experimento oferece uma forma 'muito elegante' de investigar a física oculta por trás dessas transições — aproximando a ciência do desenho de máquinas quânticas mais poderosas."
    ]
  },
  {
    slug: "buraco-negro-errante-estrela-swift",
    title: "Buraco negro 'órfão' é flagrado devorando uma estrela longe do centro da galáxia",
    category: "Ciência",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Céu noturno repleto de estrelas em alta resolução, representando o espaço profundo",
    date: "2026-08-06",
    excerpt: "Pela primeira vez, um buraco negro supermassivo foi detectado despedaçando uma estrela bem longe do núcleo de sua galáxia — revelando 'órfãos' invisíveis à espreita.",
    source: "NASA / The Astrophysical Journal Letters (via ScienceDaily)",
    sourceUrl: "https://www.sciencedaily.com/releases/2026/07/260727214609.htm",
    body: [
      "O observatório Neil Gehrels Swift, da NASA, flagrou um raro espetáculo cósmico: um buraco negro supermassivo, com cerca de 1 milhão de vezes a massa do Sol, despedaçando e consumindo uma estrela a mais de 30 mil anos-luz do centro de sua galáxia — o primeiro evento desse tipo já observado tão longe de um núcleo galáctico.",
      "O evento começou a chamar atenção em novembro de 2025, quando o levantamento ZTF, no Observatório Palomar, na Califórnia, detectou um clarão incomum numa galáxia a cerca de 750 milhões de anos-luz da Terra. Um algoritmo de inteligência artificial reconheceu o padrão de uma 'perturbação de maré' — quando a gravidade de um buraco negro dilacera uma estrela que se aproxima demais. No pico, o clarão chegou a brilhar com a intensidade de 10 bilhões de sóis e, durante meses, superou a luz de toda a galáxia ao redor.",
      "A descoberta, publicada em 27 de julho na revista The Astrophysical Journal Letters, valida uma nova técnica para caçar buracos negros supermassivos 'órfãos' que vagam longe dos centros galácticos, onde normalmente se escondem. Além de revelar estruturas que permaneceriam invisíveis, o estudo abre caminho para encontrar mais desses gigantes errantes e entender melhor como o universo os distribui."
    ]
  },
  {
    slug: "energia-escura-expansao-universo",
    title: "Nova medição lança luz sobre a energia escura e a expansão do universo",
    category: "Ciência",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Nebulosa colorida no espaço profundo",
    date: "2026-08-03",
    excerpt: "Pesquisadores divulgaram dados que refinam o modelo de expansão cósmica, aproximando a ciência de entender a energia escura.",
    source: "NASA / Nature",
    sourceUrl: "https://www.nasa.gov",
    body: [
      "A energia escura continua sendo um dos maiores mistérios da cosmologia moderna. Ela corresponde a cerca de 70% do conteúdo de energia do universo e é a força que acelera sua expansão.",
      "Novas medições de supernovas e da radiação cósmica de fundo ajudaram a refinar os parâmetros do modelo padrão, reduzindo incertezas sobre a taxa de expansão (constante de Hubble).",
      "Ainda há debates, mas cada avanço aproxima os cientistas de entender o que move essa força invisível que molda o destino do cosmos."
    ]
  },
  {
    slug: "novo-medicamento-janela-cognitiva",
    title: "Estudo aponta avanço em fármaco para declínio cognitivo leve",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pesquisadora analisando amostras em laboratório médico",
    date: "2026-08-02",
    excerpt: "Pesquisa clínica de fase inicial mostra resultados promissores em pacientes com perda de memória relacionada à idade.",
    source: "The Lancet",
    sourceUrl: "https://www.thelancet.com",
    body: [
      "Um ensaio clínico de fase 2 trouxe esperança para quem enfrenta declínio cognitivo leve, condição comum em idosos e considerada porta de entrada para demências.",
      "Os participantes tratados com o novo composto apresentaram melhora em testes de memória e função executiva em comparação ao grupo controle.",
      "Os pesquisadores ressaltam que os resultados são preliminares e que mais estudos são necessários antes de qualquer recomendação clínica."
    ]
  },
  {
    slug: "alimentacao-ultraprocessados-microbiota",
    title: "Como os ultraprocessados afetam a microbiota intestinal",
    category: "Alimentação",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Vegetais frescos e alimentos naturais em mesa de madeira",
    date: "2026-08-01",
    excerpt: "Dieta rica em alimentos ultraprocessados altera o equilíbrio das bactérias intestinais, influenciando saúde e humor.",
    source: "Nature Microbiology",
    sourceUrl: "https://www.nature.com",
    body: [
      "A microbiota intestinal é um ecossistema de trilhões de micro-organismos que influencia digestão, imunidade e até o humor.",
      "Pesquisas recentes indicam que dietas pobres em fibras e ricas em ultraprocessados reduzem a diversidade bacteriana, favorecendo inflamação de baixo grau.",
      "A boa notícia: mudanças alimentares podem restaurar parte desse equilíbrio, reforçando a importância de alimentos naturais e integrais."
    ]
  },
  {
    slug: "qubits-computacao-quantica-2026",
    title: "Computação quântica: qubits estáveis aproximam máquinas do uso real",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Processador quântico com componentes futuristas em luz azul",
    date: "2026-07-30",
    excerpt: "Novidades em correção de erros quânticos tornam processadores quânticos mais confiáveis e perto de aplicações práticas.",
    source: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com",
    body: [
      "A computação quântica promete resolver problemas impossíveis para computadores clássicos — de simulações de materiais a otimização logística.",
      "O grande obstáculo sempre foi a instabilidade dos qubits. Avanços recentes em correção de erros estão mudando esse cenário.",
      "Embora ainda não seja uma realidade comercial ampla, os progressos em 2026 colocam os computadores quânticos mais perto de usos práticos reais."
    ]
  },
  {
    slug: "inteligencia-artificial-agentes-autonomos-2026",
    title: "Inteligência artificial: agentes autônomos começam a trabalhar por conta própria",
    category: "I.A",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rede neural digital com conexões luminosas representando inteligência artificial",
    date: "2026-07-24",
    excerpt: "Os 'agentes de IA' prometem automatizar tarefas complexas: de planejar viagens a gerenciar projetos. Entenda como funcionam.",
    source: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com",
    body: [
      "Se 2024 foi o ano dos chatbots, 2026 aponta para os 'agentes de IA' — sistemas que não apenas conversam, mas executam tarefas de ponta a ponta.",
      "Em vez de responder perguntas, esses agentes podem navegar na web, escrever código, agendar compromissos e coordenar ferramentas para completar objetivos.",
      "O avanço traz ganhos de produtividade, mas também levanta questões sobre supervisão, erros e responsabilidade. Ainda assim, o caminho parece irreversível."
    ]
  },
  {
    slug: "superposicao-emaranhamento-etica-quantica",
    title: "Mecânica quântica: superposição e emaranhamento explicados sem complicação",
    category: "Mecânica Quântica",
    image: "https://images.unsplash.com/photo-1635241161466-541f506683a0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Esfera de átomos em luz azul representando a física quântica",
    date: "2026-07-28",
    excerpt: "Superposição, emaranhamento e o 'gato de Schrödinger': como funcionam os conceitos que sustentam os computadores quânticos.",
    source: "Nature Physics",
    sourceUrl: "https://www.nature.com/nphys/",
    body: [
      "A mecânica quântica descreve o comportamento da matéria em escala atômica e subatômica — um mundo onde as regras intuitivas do dia a dia simplesmente não valem.",
      "Superposição é a capacidade de uma partícula existir em vários estados ao mesmo tempo até ser medida. Emaranhamento liga partículas de forma que medir uma revela o estado da outra, mesmo a grandes distâncias.",
      "São esses fenômenos que os computadores quânticos exploram para processar informações de formas impossíveis para máquinas clássicas."
    ]
  },
  {
    slug: "curiosidades-ciencia-dia-a-dia",
    title: "Curiosidades científicas que explicam o dia a dia",
    category: "Diversão",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Pessoa sorrindo em ambiente colorido e divertido",
    date: "2026-07-26",
    excerpt: "Do porquê do céu ser azul ao motivo de bocejarmos: curiosidades curiosas com base científica.",
    source: "Scientific American",
    sourceUrl: "https://www.scientificamerican.com",
    body: [
      "O céu é azul porque a luz solar se espalha ao interagir com as moléculas da atmosfera — o espalhamento afeta mais as ondas curtas (azuis) do que as longas.",
      "Bocejo ainda intriga cientistas, mas a hipótese mais aceita é que ele ajuda a regular a temperatura do cérebro e aumentar o estado de alerta.",
      "Cada pequena observação do cotidiano esconde um princípio científico — e explorá-los torna o mundo um lugar mais interessante."
    ]
  }
];
