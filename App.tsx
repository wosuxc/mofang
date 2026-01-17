
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Menu, X, ArrowRight, Instagram, Twitter, MessageCircle } from 'lucide-react';
import type { TimelineItem, AwardItem, ProductItem } from './types.ts';

// --- Constants & Data ---

const TMALL_URL = "https://darentang.tmall.com/shop/view_shop.htm?spm=a230r.7195193.1997079397.2.23f57fc8Y2f5rv";

const TIMELINE: TimelineItem[] = [
  {
    year: '2019',
    events: [
      '2月 - 创立原创情趣品牌：CW',
      '4月 - 逗豆鸟首次亮相上海国际成人展',
      '6月 - 逗豆鸟与国内著名两性KOL吴小飘合作',
      '7月 - 第一款产品“逗豆鸟”上线，入驻有赞商城',
      '7月 - “逗豆鸟”荣获德国红点奖',
      '8月 - “逗豆鸟”荣获台湾金点设计奖',
      '11月 - “逗豆鸟”双十一情趣用品类目销量TOP1',
      '12月 - “逗豆鸟”在十点读书首发',
      '12月 - “逗豆鸟”获得深圳创意设计新锐奖（SDAY）'
    ]
  },
  {
    year: '2020',
    events: [
      '1月 - 入驻天猫商城，天猫情趣跳蛋类目Top1',
      '7月 - 逗豆鸟上线1年，销量破百万',
      '9月 - 逗豆鸟荣获美国IDEA铜奖',
      '10月 - 新产品“小海豹”上线',
      '10月 - “逗豆鸟”荣获第十届“省长杯”工业设计大赛优秀奖',
      '11月 - 双十一 TOP1，情趣行业历史首个双十一破千万品牌旗舰店',
      '11月 - 品牌全新升级更名为：墨放',
      '12月 - “逗豆鸟”荣获2020中国设计红星奖'
    ]
  }
];

const AWARDS: AwardItem[] = [
  { title: "reddot design award winner 2019", year: "2019.07", icon: "https://picsum.photos/seed/reddot/200/200" },
  { title: "BRONZE AWARD 2020", year: "2020.09", icon: "https://picsum.photos/seed/idea/200/200" },
  { title: "DESIGN AWARD", year: "2019.10", icon: "https://picsum.photos/seed/goldenpin/200/200" },
  { title: "红星奖 Design Award", year: "2020.12", icon: "https://picsum.photos/seed/redstar/200/200" }
];

const PRODUCTS: ProductItem[] = [
  {
    id: "doudouniao",
    name: "逗豆鸟",
    description: "逗豆鸟虽处笼中，但头部向上仰望，好似在渴望冲破这层束缚,积极探索属于自己的欢乐和愉悦。",
    descriptionDetail: "逗豆鸟采用Sonic声波吮吸，每次震动和模拟吮吸的感受，能传递到私密的内心部位，让神经丰富的核心部位得到更多的满足。",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "xiaohaibao",
    name: "小海豹",
    description: "小海豹延续逗豆鸟的Sonic声波吮吸功能，外置也够由表即内，唤醒隐藏在豆豆深处的8000多个神经共震，让你短短几分钟就酥麻到飞起。",
    descriptionDetail: "小海豹模仿了手指刺激的角度，尾巴部位进入体内，直接呈现往上顶的姿态。只要开启震动，就能享受极致的G点按摩。",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop"
  }
];

// --- Sub-components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter cursor-pointer text-gray-900" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>墨放</div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative hover-underline text-gray-800">首页</button>
          <button onClick={() => scrollToSection('about')} className="relative hover-underline text-gray-800">关于墨放</button>
          <div 
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button onClick={() => scrollToSection('products')} className="flex items-center space-x-1 hover:text-coral transition-colors py-2 text-gray-800">
              <span>产品</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 w-44 bg-white/95 backdrop-blur-md shadow-2xl py-4 mt-0 border border-pink-50 rounded-xl animate-in fade-in zoom-in-95 duration-200">
                <button onClick={() => scrollToSection('doudouniao')} className="w-full text-left px-6 py-2.5 hover:bg-rose-50 hover:text-coral transition-colors text-gray-700">逗豆鸟</button>
                <button onClick={() => scrollToSection('xiaohaibao')} className="w-full text-left px-6 py-2.5 hover:bg-rose-50 hover:text-coral transition-colors text-gray-700">小海豹</button>
                <button onClick={() => scrollToSection('products')} className="w-full text-left px-6 py-2.5 hover:bg-rose-50 hover:text-coral transition-colors text-gray-700 border-t border-rose-50">全部产品</button>
              </div>
            )}
          </div>
          <button onClick={() => scrollToSection('anti-counterfeit')} className="relative hover-underline text-gray-800">防伪查询</button>
          <a 
            href={TMALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral text-white px-7 py-2.5 rounded-full shadow-lg shadow-coral/20 hover:opacity-90 hover:scale-105 transition-all text-center inline-block"
          >
            官方商城
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('海外版本正在建设中...'); }} className="text-gray-400 hover:text-black transition-colors">海外商城</a>
        </div>

        <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-pink-50 py-8 px-8 space-y-6 shadow-2xl">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-xl font-medium text-gray-900 text-left w-full">首页</button>
          <button onClick={() => scrollToSection('about')} className="block text-xl font-medium text-gray-900 text-left w-full">关于墨放</button>
          <div className="space-y-3 pl-4 border-l-2 border-rose-100">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">产品目录</span>
            <button onClick={() => scrollToSection('doudouniao')} className="block text-gray-700 py-1 text-left w-full">逗豆鸟</button>
            <button onClick={() => scrollToSection('xiaohaibao')} className="block text-gray-700 py-1 text-left w-full">小海豹</button>
            <button onClick={() => scrollToSection('products')} className="block text-gray-700 py-1 text-left w-full">全部产品系列</button>
          </div>
          <button onClick={() => scrollToSection('anti-counterfeit')} className="block text-xl font-medium text-gray-900 text-left w-full">防伪查询</button>
          <a href={TMALL_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-coral text-white py-4 rounded-full font-bold shadow-xl shadow-coral/20 text-center">官方商城</a>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pb-32 overflow-hidden bg-rose-50/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="bg-white p-2 rounded-3xl shadow-2xl border border-white/50">
            <div className="aspect-video rounded-2xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" alt="Mofang Vision" className="w-full h-full object-cover" />
              <div 
                className="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all"
                onClick={() => window.open(TMALL_URL, '_blank')}
              >
                <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Play fill="#FF5A5F" size={28} className="text-coral" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-coral font-bold tracking-[0.3em] text-sm uppercase">Original Design</span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">WHO WE ARE.</h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg max-w-lg">
            <p>墨放——创立于2019年的新锐原创设计情趣品牌。</p>
            <p>我们将品质主义、创新洞察、美学探索和情感沟通贯穿于品牌体验和产品设计中，希望能触达现代女性最真实的内心需求。</p>
            <p>我们致力于颠覆大众对情趣行业的固有偏见，让每一位新时代女性都能尽情探索属于自己的愉悦生活方式。</p>
          </div>
          <div className="flex space-x-16 pt-4">
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-coral transition-colors">2019</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">Founded</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-coral transition-colors">1.5M+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">Users</div>
            </div>
            <div className="group cursor-default">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-coral transition-colors">8</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">Awards</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 right-0 opacity-[0.03] text-[22vw] font-black pointer-events-none select-none leading-none tracking-tighter uppercase">
        MOFANG
      </div>
    </section>
  );
};

const BrandPhilosophy: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
        <div className="md:w-1/2 space-y-10 order-2 md:order-1">
          <div className="space-y-4">
            <h3 className="text-5xl font-bold text-gray-900">墨放</h3>
            <h4 className="text-2xl text-rose-300 font-light tracking-wide">成年人世界里的一点甜</h4>
          </div>
          <div className="w-20 h-1 bg-coral rounded-full"></div>
          <div className="space-y-8 text-gray-600 leading-loose tracking-wide text-lg">
            <p>性与情趣，理应是一点很随意就能获得的甜。<br/>它是轻松、阳光、自然而美好的。</p>
            <p>我们希望性和情趣对每个女生来说，是唾手可得的快乐。<br/>每位新时代女性都应该享有适合自己的情趣生活方式。</p>
            <p className="text-gray-900 font-medium italic">大胆探索、大胆感知、大胆触碰，<br/>尽情享受每一种温柔，探索美好情趣体验。</p>
          </div>
          <button onClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} className="group flex items-center space-x-3 text-coral font-bold hover:translate-x-2 transition-all">
            <span className="border-b-2 border-coral/20 group-hover:border-coral transition-all">Explore Our Products</span>
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="md:w-1/2 relative group order-1 md:order-2">
          <div className="relative z-10 p-3 bg-rose-50 rounded-[3rem]">
            <img 
              src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=800&auto=format&fit=crop" 
              alt="Brand Concept" 
              className="w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl group-hover:scale-[1.02] transition-transform duration-1000"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-rose-100 rounded-full -z-0 blur-3xl opacity-60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-32 bg-rose-50/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-5xl font-bold text-gray-900">发展历程</h2>
          <p className="text-rose-300 text-xs tracking-[0.5em] uppercase font-bold">Company Timeline</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {TIMELINE.map((item) => (
            <div key={item.year} className="space-y-10 group">
              <h3 className="text-7xl font-black text-rose-100 group-hover:text-coral/20 transition-colors duration-700">{item.year}</h3>
              <ul className="space-y-6 relative border-l-2 border-rose-100 pl-8 ml-4">
                {item.events.map((event, idx) => (
                  <li key={idx} className="flex items-start text-sm group/item">
                    <span className="absolute left-[-9px] w-4 h-4 rounded-full bg-white border-2 border-rose-200 mt-1 group-hover/item:border-coral group-hover/item:scale-125 transition-all"></span>
                    <span className="text-gray-600 group-hover/item:text-black transition-colors leading-relaxed">{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/3 space-y-8 text-center lg:text-left">
          <h2 className="text-5xl font-bold leading-tight text-gray-900 tracking-tight">国际认可<br/><span className="text-coral">工业设计大奖</span></h2>
          <div className="space-y-3 text-xs text-gray-400 font-mono tracking-wider opacity-80">
            <p>2019.07 - “逗豆鸟”荣获德国红点设计大奖</p>
            <p>2019.10 - “逗豆鸟”荣获台湾金点设计奖</p>
            <p>2020.10 - “逗豆鸟”荣获美国IDEA铜奖</p>
            <p>2020.12 - “逗豆鸟”荣获中国设计红星奖</p>
          </div>
        </div>
        <div className="lg:w-2/3 grid grid-cols-2 gap-8">
          {AWARDS.map((award, idx) => (
            <div key={idx} className="bg-rose-50/20 p-10 rounded-[2.5rem] border border-white hover:bg-white hover:shadow-2xl transition-all duration-700 flex flex-col items-center justify-center text-center space-y-6 aspect-square group">
              <img src={award.icon} alt={award.title} className="w-24 h-24 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-800 leading-tight">{award.title}</p>
                <p className="text-[10px] text-rose-300 font-medium">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-rose-50/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-32">
          <h2 className="text-6xl font-black text-gray-900 tracking-tighter">OUR PRODUCTS</h2>
          <p className="text-rose-400 text-sm font-medium tracking-[0.3em] uppercase">Sensual Lifestyle For Asian Women</p>
        </div>
        <div className="space-y-48">
          {PRODUCTS.map((product, idx) => (
            <div key={product.id} id={product.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32 scroll-mt-32`}>
              <div className="lg:w-1/2 group relative cursor-pointer" onClick={() => window.open(TMALL_URL, '_blank')}>
                <div className="bg-white p-4 rounded-[3.5rem] shadow-2xl border border-rose-50 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-[3rem] group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <span className="bg-white/95 text-coral px-10 py-4 rounded-full text-sm font-black shadow-2xl tracking-[0.2em]">立即购买</span>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-10 px-4">
                <div className="space-y-4">
                  <h3 className="text-5xl font-bold text-gray-900 tracking-tight">{product.name}</h3>
                  <div className="w-24 h-1.5 bg-coral rounded-full"></div>
                </div>
                <div className="space-y-8">
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">{product.description}</p>
                  <p className="text-gray-400 leading-loose text-base">{product.descriptionDetail}</p>
                </div>
                <a href={TMALL_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 border-2 border-rose-100 rounded-full text-gray-800 font-bold hover:bg-rose-50 hover:border-coral hover:text-coral transition-all inline-flex items-center space-x-3">
                  <span>在线选购</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 pb-24 border-b border-white/5">
        <div className="grid md:grid-cols-4 gap-16 md:gap-8">
          <div className="space-y-10">
            <h4 className="text-3xl font-black tracking-tighter cursor-pointer text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>墨放</h4>
            <div className="space-y-5 text-sm text-gray-500 leading-loose">
              <p className="text-coral font-bold text-base">广州有限公司</p>
              <p>地址：广州市天河区珠江新城CBD核心商务区<br/>博兴广场 3201室</p>
              <p>电话：020-88888888</p>
            </div>
          </div>
          <div className="space-y-8">
            <h5 className="font-bold text-sm uppercase tracking-widest text-gray-300">品牌探索</h5>
            <ul className="space-y-5 text-sm text-gray-500">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-coral transition-colors">关于墨放</button></li>
              <li><button onClick={() => scrollToSection('timeline')} className="hover:text-coral transition-colors">发展历程</button></li>
              <li><button onClick={() => alert('跳转到官网动态...')} className="hover:text-coral transition-colors">企业动态</button></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="font-bold text-sm uppercase tracking-widest text-gray-300">热门产品</h5>
            <ul className="space-y-5 text-sm text-gray-500">
              <li><button onClick={() => scrollToSection('doudouniao')} className="hover:text-coral transition-colors">逗豆鸟系列</button></li>
              <li><button onClick={() => scrollToSection('xiaohaibao')} className="hover:text-coral transition-colors">小海豹系列</button></li>
            </ul>
          </div>
          <div id="anti-counterfeit" className="space-y-8 scroll-mt-24">
            <h5 className="font-bold text-sm uppercase tracking-widest text-gray-300">防伪查询</h5>
            <div className="text-sm text-gray-500 leading-relaxed space-y-6">
              <p>官方渠道购买产品均贴有墨放专属防伪标签。</p>
              <button onClick={() => alert('跳转到防伪查询系统...')} className="bg-white/5 border border-white/20 px-8 py-3.5 rounded-full hover:bg-coral hover:border-coral transition-all w-full font-bold">立即查询</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-center items-center gap-6 text-[11px] text-gray-600 font-medium tracking-widest uppercase">
        <a href={TMALL_URL} target="_blank" rel="noopener noreferrer">天猫官方旗舰店</a>
        <span className="hidden md:inline text-white/10">|</span>
        <span>© 2024 MOFANG LIFESTYLE | 粤ICP备2020097423号</span>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BrandPhilosophy />
        <TimelineSection />
        <AwardsSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
