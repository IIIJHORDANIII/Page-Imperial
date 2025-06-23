import React, { useState, useEffect, useRef } from 'react';

// Componente de partículas animadas
const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-imperialLime rounded-full animate-particle-fade"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${4 + Math.random() * 6}s`
        }}
      />
    ))}
  </div>
);

// Componente de gradiente animado
const AnimatedGradient = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-imperialBlue via-blue-500 to-imperialBlue animate-gradient-xy">
    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
  </div>
);

// Dados dos serviços com ícones SVG personalizados
const servicos = [
  {
    id: 1,
    titulo: 'Banners e Lonas',
    descricao: 'Impressão de alta qualidade em diversos tamanhos',
    preco: 'A partir de R$ 15/m²',
    caracteristicas: ['UV resistente', 'Diversos tamanhos', 'Entrega rápida'],
    gradiente: 'from-red-500 to-orange-500'
  },
  {
    id: 2,
    titulo: 'Catálogos e Revistas',
    descricao: 'Impressão offset e digital profissional',
    preco: 'A partir de R$ 0,50/página',
    caracteristicas: ['Papel couché', 'Cores vibrantes', 'Acabamento premium'],
    gradiente: 'from-blue-500 to-purple-500'
  },
  {
    id: 3,
    titulo: 'Cartões de Visita',
    descricao: 'Cartões personalizados com acabamentos especiais',
    preco: 'A partir de R$ 0,15/unidade',
    caracteristicas: ['Papel couchê', 'Verniz UV', 'Corte especial'],
    gradiente: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    titulo: 'Adesivos e Vinil',
    descricao: 'Adesivos de corte e impressão personalizados',
    preco: 'A partir de R$ 25/m²',
    caracteristicas: ['Vinil resistente', 'Corte preciso', 'Aplicação fácil'],
    gradiente: 'from-yellow-500 to-orange-500'
  },
  {
    id: 5,
    titulo: 'Convites e Cards',
    descricao: 'Convites elegantes para eventos especiais',
    preco: 'A partir de R$ 0,80/unidade',
    caracteristicas: ['Papel especial', 'Acabamento luxo', 'Design personalizado'],
    gradiente: 'from-pink-500 to-rose-500'
  },
  {
    id: 6,
    titulo: 'Plotagem e Sinalização',
    descricao: 'Sinalização interna e externa completa',
    preco: 'A partir de R$ 35/m²',
    caracteristicas: ['Alta durabilidade', 'Instalação inclusa', 'Garantia estendida'],
    gradiente: 'from-indigo-500 to-blue-500'
  }
];

const portfolio = [
  {
    id: 1,
    categoria: 'Banners',
    titulo: 'Campanha Supermercado Paraná',
    imagem: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    descricao: 'Banner promocional 3x6m com acabamento UV'
  },
  {
    id: 2,
    categoria: 'Catálogos',
    titulo: 'Catálogo Colégio Imperial',
    imagem: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    descricao: 'Catálogo institucional 48 páginas'
  },
  {
    id: 3,
    categoria: 'Cartões',
    titulo: 'Cartões de Visita Premium',
    imagem: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80',
    descricao: 'Cartões com verniz UV e corte especial'
  },
  {
    id: 4,
    categoria: 'Adesivos',
    titulo: 'Adesivos Promocionais',
    imagem: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    descricao: 'Adesivos de corte para veículos'
  },
  {
    id: 5,
    categoria: 'Convites',
    titulo: 'Convites de Casamento',
    imagem: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    descricao: 'Convites luxuosos com acabamento especial'
  },
  {
    id: 6,
    categoria: 'Sinalização',
    titulo: 'Sinalização Corporativa',
    imagem: 'https://images.unsplash.com/photo-1464980840137-1a47fad7b8a5?auto=format&fit=crop&w=600&q=80',
    descricao: 'Sinalização completa para empresa'
  }
];

const equipe = [
  {
    nome: 'João Silva',
    cargo: 'Diretor Geral',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    experiencia: '25 anos no mercado gráfico',
    redes: ['linkedin', 'twitter', 'instagram']
  },
  {
    nome: 'Maria Santos',
    cargo: 'Designer Gráfico',
    foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80',
    experiencia: 'Especialista em design editorial',
    redes: ['linkedin', 'behance', 'instagram']
  },
  {
    nome: 'Carlos Oliveira',
    cargo: 'Técnico de Impressão',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    experiencia: 'Especialista em offset e digital',
    redes: ['linkedin', 'facebook']
  }
];

const clientes = [
  { nome: 'Supermercado Paraná', logo: '🏪', depoimento: 'Qualidade e agilidade em todos os materiais. A IMPERIAL é nossa parceira há mais de 10 anos.', rating: 5 },
  { nome: 'Colégio Imperial', logo: '🎓', depoimento: 'Atendimento excelente e impressos impecáveis. Recomendamos para todas as escolas.', rating: 5 },
  { nome: 'Restaurante Sabor & Arte', logo: '🍽️', depoimento: 'Cardápios e materiais promocionais sempre com qualidade superior.', rating: 5 },
  { nome: 'Auto Center Premium', logo: '🚗', depoimento: 'Sinalização e adesivos que resistem ao tempo e ao clima.', rating: 5 }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categorias = ['Todos', ...Array.from(new Set(portfolio.map(item => item.categoria)))];

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen overflow-x-hidden">
      {/* Navegação Glassmorphism */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-gradient-to-r from-imperialBlue via-blue-500 to-imperialBlue shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/LogoImperial.png"
                  alt="Logo Imperial Indústria Gráfica"
                  className={`transition-all duration-[1200ms] ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} h-14 w-auto mr-2`}
                  style={{ maxHeight: '3.5rem' }}
                />
              </a>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Início', 'Serviços', 'Portfólio', 'Sobre', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-bold transition-all duration-300 hover:text-imperialLime hover:scale-110 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`}
                  onClick={e => {
                    e.preventDefault();
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors duration-300 ${
                  isScrolled ? 'text-imperialBlue' : 'text-white'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 py-2 border border-gray-200 shadow-xl">
              {['Início', 'Serviços', 'Portfólio', 'Sobre', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-imperialBlue hover:bg-imperialLime hover:text-imperialBlue transition-all duration-300"
                  onClick={e => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section Ultra Moderno */}
      <section ref={heroRef} id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
        <AnimatedGradient />
        <ParticleBackground />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8 flex justify-center">
            <img
              src="/LogoImperial.png"
              alt="Logo Imperial Indústria Gráfica"
              className={`mx-auto transition-all duration-[1200ms] ${isScrolled ? 'opacity-0 scale-75' : 'opacity-100 scale-100'} h-32 w-auto`}
              style={{ maxHeight: '8rem' }}
            />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in-up delay-300 text-white">
            Uma das <span className="text-imperialLime">pioneiras</span> do Paraná em impressos de alta qualidade
          </h2>
          
          <p className="text-xl md:text-2xl font-semibold mb-12 text-imperialLime animate-fade-in-up delay-500">
            Transformando ideias em impressos desde 1980
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-700">
            <a
              href="#serviços"
              className="group relative px-8 py-4 bg-gradient-to-r from-imperialLime to-blue-300 text-imperialBlue font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              <span className="relative z-10">Nossos Serviços</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-imperialLime opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contato"
              className="group px-8 py-4 border-2 border-imperialLime text-imperialLime font-bold rounded-full hover:bg-imperialLime hover:text-imperialBlue transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-white/10"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-imperialLime rounded-full flex justify-center">
            <div className="w-1 h-3 bg-imperialLime rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Estatísticas com Glassmorphism */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-imperialBlue via-blue-500 to-imperialBlue">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { numero: '40+', texto: 'Anos de Experiência' },
            { numero: '1000+', texto: 'Clientes Satisfeitos' },
            { numero: '50+', texto: 'Tipos de Impressão' },
            { numero: '24h', texto: 'Prazo de Entrega' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="text-5xl font-black text-imperialLime mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.numero}
                </div>
                <div className="text-white font-semibold">{stat.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços com Cards 3D */}
      <section id="serviços" className="py-20 px-4 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-imperialBlue mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em impressão gráfica, desde banners até materiais promocionais sofisticados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div 
                key={servico.id} 
                className="group relative bg-white rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:rotate-1 border border-gray-200 hover:border-imperialLime shadow-lg hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${servico.gradiente} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <h3 className="text-2xl font-bold text-imperialBlue mb-4">{servico.titulo}</h3>
                  <p className="text-gray-600 mb-6">{servico.descricao}</p>
                  <div className="text-imperialLime font-bold text-lg mb-6">{servico.preco}</div>
                  <ul className="space-y-3">
                    {servico.caracteristicas.map((carac, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-imperialLime mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {carac}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio com Filtros Avançados */}
      <section id="portfólio" className="py-20 px-4 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-imperialBlue mb-6">Nosso Portfólio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos mais recentes e impressionantes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setActiveFilter(categoria)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeFilter === categoria
                    ? 'bg-imperialLime text-imperialBlue shadow-lg shadow-imperialLime/50'
                    : 'bg-gray-100 text-gray-700 hover:bg-imperialLime hover:text-imperialBlue'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio
              .filter(item => activeFilter === 'Todos' || item.categoria === activeFilter)
              .map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-2xl bg-white hover:bg-gray-50 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl border border-gray-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-imperialLime text-sm font-bold mb-2">{item.categoria}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.titulo}</h3>
                      <p className="text-gray-200">{item.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Clientes com Glassmorphism */}
      <section className="py-20 px-4 bg-gradient-to-r from-imperialBlue to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-imperialLime mb-6">O que nossos clientes dizem</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientes.map((cliente, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{cliente.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cliente.nome}</h3>
                    <div className="flex text-imperialLime">
                      {[...Array(cliente.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white italic text-lg">"{cliente.depoimento}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe com Cards 3D */}
      <section id="sobre" className="py-20 px-4 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-imperialBlue mb-6">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais experientes e apaixonados pelo que fazem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 border border-gray-200 hover:border-imperialLime shadow-lg hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-3">
                        {membro.redes.map((rede) => (
                          <div key={rede} className="w-10 h-10 bg-imperialLime rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <span className="text-imperialBlue font-bold">{rede[0].toUpperCase()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-imperialBlue mb-2">{membro.nome}</h3>
                  <p className="text-imperialLime font-semibold mb-2">{membro.cargo}</p>
                  <p className="text-gray-600">{membro.experiencia}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós com Glassmorphism */}
      <section className="py-20 px-4 bg-gradient-to-br from-imperialBlue via-blue-500 to-imperialBlue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-imperialLime mb-8">Sobre a IMPERIAL</h2>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg">
            <p className="text-xl mb-6 text-white">
              Fundada em 1980, a Gráfica IMPERIAL é uma das pioneiras do Paraná em impressos de alta qualidade. 
              Nossa missão é transformar ideias em materiais gráficos que impactam e geram resultados para nossos clientes.
            </p>
            <p className="text-xl mb-6 text-white">
              Com tecnologia de ponta e uma equipe apaixonada pelo que faz, entregamos banners, catálogos, 
              cartões e muito mais, sempre com agilidade e excelência. Nossa experiência de mais de 40 anos 
              nos permite oferecer soluções personalizadas para cada necessidade.
            </p>
            <p className="text-xl text-white">
              Acreditamos que a qualidade não é apenas um diferencial, mas nossa obrigação. 
              Por isso, investimos constantemente em equipamentos modernos e na capacitação da nossa equipe.
            </p>
          </div>
        </div>
      </section>

      {/* Contato com Mapa 3D */}
      <section id="contato" className="py-20 px-4 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-imperialBlue mb-6">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para transformar suas ideias em realidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-imperialBlue mb-6">Informações</h3>
              <div className="space-y-3 flex flex-col justify-center mt-16">
                {[
                  { icon: '📍', text: 'Imperial Indústria Gráfica - Industrial II, Ampére - PR, 85640-000' },
                  { icon: '📞', text: '(46) 3547-1327' },
                  { icon: '✉️', text: 'grafica@graficaimperial.com' },
                  { icon: '🕒', text: 'Segunda a Sexta: 8h às 18h' }
                ].map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-2xl mr-4">{info.icon}</div>
                    <span className="text-gray-700">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-imperialBlue mb-6">Nossa Localização</h3>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  title="Mapa Gráfica IMPERIAL - Ampére PR"
                  src="https://www.google.com/maps?q=Imperial+Ind%C3%BAstria+Gr%C3%A1fica,+R.+2+-+Grafica+Imperial+-+Industrial+II,+Amp%C3%A9re+-+PR,+85640-000&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Ultra Moderno */}
      <footer className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-black text-imperialBlue mb-4">IMPERIAL</h3>
              <p className="text-gray-600">
                Transformando ideias em impressos desde 1980. Qualidade e excelência em cada projeto.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-imperialBlue mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Banners e Lonas</li>
                <li>Catálogos e Revistas</li>
                <li>Cartões de Visita</li>
                <li>Adesivos e Vinil</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-imperialBlue mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Sobre Nós</li>
                <li>Nossa História</li>
                <li>Equipe</li>
                <li>Portfólio</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-imperialBlue mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-600">
                <li>(46) 3547-1327</li>
                <li>grafica@graficaimperial.com</li>
                <li>Imperial Indústria Gráfica - Industrial II, Ampére - PR, 85640-000</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Imperial Indústria Gráfica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Ultra Moderno */}
      <a
        href="https://wa.me/5546999019800?text=Olá! Gostaria de solicitar um orçamento para impressos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-imperialLime to-blue-300 text-imperialBlue rounded-full shadow-2xl shadow-imperialLime/50 p-4 hover:scale-110 transition-all duration-300 z-50 flex items-center group backdrop-blur-sm"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
        </svg>
        <span className="font-bold">WhatsApp</span>
        </a>
    </div>
  );
}

export default App;
