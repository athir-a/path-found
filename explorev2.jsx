import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Terminal, 
  Briefcase, 
  GitBranch, 
  ChevronRight, 
  ExternalLink, 
  Star, 
  CheckCircle2,
  Layers,
  Search,
  BookOpen,
  Filter,
  Trophy,
  ArrowRight,
  Sparkles,
  Info,
  Medal,
  Zap,
  Flame
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', title: 'All Skills', icon: <Layers className="w-4 h-4" /> },
  { id: 'swe', title: 'Software Engineering', icon: <Code className="w-4 h-4" />, color: 'blue' },
  { id: 'oss', title: 'Open Source', icon: <GitBranch className="w-4 h-4" />, color: 'purple' },
  { id: 'internship', title: 'Internships', icon: <Briefcase className="w-4 h-4" />, color: 'green' }
];

const ALL_SKILLS = [
  { id: 'dsa', title: 'Data Structures & Algorithms', category: 'swe', tags: ['Interviews', 'Logic'] },
  { id: 'system-design', title: 'System Design', category: 'swe', tags: ['Architecture', 'Scale'] },
  { id: 'frontend', title: 'Frontend Development', category: 'swe', tags: ['React', 'UI/UX'] },
  { id: 'backend', title: 'Backend Development', category: 'swe', tags: ['APIs', 'Databases'] },
  { id: 'git-mastery', title: 'Git Mastery', category: 'oss', tags: ['Version Control'] },
  { id: 'first-contributions', title: 'First Contributions', category: 'oss', tags: ['GitHub', 'Community'] },
  { id: 'gsoc-prep', title: 'GSoC Preparation', category: 'oss', tags: ['Open Source'] },
  { id: 'resume-building', title: 'Resume & Branding', category: 'internship', tags: ['Career', 'ATS'] },
  { id: 'mock-interviews', title: 'Mock Interviews', category: 'internship', tags: ['Soft Skills'] },
  { id: 'portfolio', title: 'Portfolio Building', category: 'internship', tags: ['Projects'] }
];

const SKILL_DETAILS = {
  'dsa': {
    title: 'Data Structures & Algorithms',
    description: 'The foundation of computer science. Master it to crack interviews at top tech companies.',
    isDSASpecial: true,
    platforms: [
      {
        name: 'HackerRank',
        level: 'Beginner',
        quality: 'Structured Learning & Syntax',
        icon: <Medal className="w-5 h-5 text-green-500" />,
        desc: 'The best place to start. It focuses on fundamental syntax and basic problem solving through specific language tracks (C++, Java, Python).',
        highlight: 'Great for building confidence with easy-to-understand constraints.',
        url: 'https://hackerrank.com'
      },
      {
        name: 'LeetCode',
        level: 'Intermediate',
        quality: 'Interview Patterns & Edge Cases',
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        desc: 'The industry standard for technical interviews. Known for rigorous test cases that catch subtle edge cases and a massive community-driven solution database.',
        highlight: 'Teaches you the "Patterns" (Sliding Window, Backtracking) required for FAANG.',
        url: 'https://leetcode.com'
      },
      {
        name: 'CodeForces',
        level: 'Expert',
        quality: 'Competitive Speed & Optimization',
        icon: <Flame className="w-5 h-5 text-red-500" />,
        desc: 'For those who want to reach the top 1%. Focuses on high-speed competitive programming, complex mathematical logic, and extreme time/memory optimizations.',
        highlight: 'The ultimate training ground for international coding competitions.',
        url: 'https://codeforces.com'
      }
    ]
  },
  'first-contributions': {
    title: 'First Contributions',
    description: 'Start your journey in the open-source world.',
    roadmap: [
      { level: 'Setup', platform: 'GitHub', content: 'Forking & Pull Requests', url: 'https://github.com', status: 'completed' },
      { level: 'Start', platform: 'First Timers Only', content: 'Find Beginner Friendly Issues', url: 'https://firsttimersonly.com', status: 'in-progress' }
    ]
  }
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSkill, setActiveSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const roadmapRef = useRef(null);

  const filteredSkills = ALL_SKILLS.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSkillClick = (skillId) => {
    if (activeSkill === skillId) {
      setActiveSkill(null); // Deselect if already selected
    } else {
      setActiveSkill(skillId);
      setTimeout(() => {
        roadmapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-black text-xl text-blue-600 tracking-tight">
            <Trophy className="w-6 h-6" />
            <span>PATHFOUND</span>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search skills, tools, or roadmaps..." 
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Catalog Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 border ${
                activeCategory === cat.id 
                ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {filteredSkills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => handleSkillClick(skill.id)}
              className={`p-5 rounded-2xl text-left transition-all group border ${
                activeSkill === skill.id 
                ? 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100' 
                : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                   activeSkill === skill.id ? 'bg-white/20' : 'bg-slate-100 text-slate-500'
                }`}>
                  {skill.category}
                </span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${activeSkill === skill.id ? 'text-white' : 'text-slate-300'}`} />
              </div>
              <h3 className="font-bold text-lg leading-tight mb-2">{skill.title}</h3>
              <div className="flex flex-wrap gap-1">
                {skill.tags.map(tag => (
                  <span key={tag} className={`text-[10px] ${activeSkill === skill.id ? 'text-blue-100' : 'text-slate-400'}`}>
                    #{tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Detail Display Area */}
        {activeSkill && (
          <div ref={roadmapRef} className="animate-in fade-in slide-in-from-bottom-8 duration-500 mb-20">
            {SKILL_DETAILS[activeSkill]?.isDSASpecial ? (
              <div className="space-y-8">
                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                    <h2 className="text-4xl font-black tracking-tight">{SKILL_DETAILS[activeSkill].title}</h2>
                  </div>
                  <p className="text-slate-500 text-lg max-w-3xl leading-relaxed">
                    {SKILL_DETAILS[activeSkill].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {SKILL_DETAILS[activeSkill].platforms.map((platform, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-[2rem] border border-slate-200 shadow-lg overflow-hidden flex flex-col group hover:border-blue-400 transition-all"
                    >
                      <div className="p-8 flex-1">
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-3 bg-slate-50 rounded-2xl">
                            {platform.icon}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-slate-900 text-white px-3 py-1 rounded-full">
                            {platform.level}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black mb-2">{platform.name}</h3>
                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                           Quality: {platform.quality}
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                          {platform.desc}
                        </p>
                        <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 border-l-4 border-blue-500 italic">
                          "{platform.highlight}"
                        </div>
                      </div>
                      <a 
                        href={platform.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-900 text-white p-5 text-center font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
                      >
                        Start Training <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : SKILL_DETAILS[activeSkill] ? (
              <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-200 shadow-xl">
                 <h2 className="text-3xl font-black mb-2">{SKILL_DETAILS[activeSkill].title}</h2>
                 <p className="text-slate-500 mb-10">{SKILL_DETAILS[activeSkill].description}</p>
                 <div className="space-y-4">
                   {(SKILL_DETAILS[activeSkill].roadmap || []).map((step, i) => (
                     <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex gap-4 items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                            {i + 1}
                          </div>
                          <div>
                            <h4 className="font-bold">{step.content}</h4>
                            <p className="text-xs text-slate-500">Learn on {step.platform}</p>
                          </div>
                        </div>
                        <a href={step.url} target="_blank" className="p-2 hover:text-blue-600 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                     </div>
                   ))}
                 </div>
              </div>
            ) : (
              <div className="bg-white p-20 rounded-[2.5rem] text-center border-2 border-dashed border-slate-200">
                <Info className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-400">Content Coming Soon</h3>
                <p className="text-slate-400">Our mentors are currently building the {activeSkill} path.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-10 border-t border-slate-200 text-center text-slate-400 text-xs">
        © 2026 Pathfound IT Roadmap. Built for career growth.
      </footer>
    </div>
  );
};

export default App;
