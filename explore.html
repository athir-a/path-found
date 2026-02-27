import React, { useState, useEffect } from 'react';
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
  BookOpen
} from 'lucide-react';

const CATEGORIES = [
  { 
    id: 'swe', 
    title: 'Software Engineering', 
    icon: <Code className="w-5 h-5" />, 
    color: 'blue',
    description: 'Master the art of building scalable applications and systems.',
    skills: ['dsa', 'system-design', 'frontend', 'backend']
  },
  { 
    id: 'oss', 
    title: 'Open Source', 
    icon: <GitBranch className="w-5 h-5" />, 
    color: 'purple',
    description: 'Contribute to global projects and build community reputation.',
    skills: ['git-mastery', 'first-contributions', 'gsoc-prep']
  },
  { 
    id: 'internship', 
    title: 'Internships', 
    icon: <Briefcase className="w-5 h-5" />, 
    color: 'green',
    description: 'Prepare for industry roles and crack top-tier placements.',
    skills: ['resume-building', 'mock-interviews', 'portfolio']
  }
];

const SKILL_DETAILS = {
  'dsa': {
    title: 'Data Structures & Algorithms',
    description: 'The foundation of technical interviews and efficient coding.',
    roadmap: [
      { level: 'Beginner', platform: 'HackerRank', content: 'Basic Syntax & Arrays', url: 'https://hackerrank.com', status: 'completed' },
      { level: 'Intermediate', platform: 'LeetCode (Easy/Med)', content: 'Trees, Graphs & Heaps', url: 'https://leetcode.com', status: 'in-progress' },
      { level: 'Advanced', platform: 'CodeForces', content: 'Competitive Programming & DP', url: 'https://codeforces.com', status: 'locked' },
      { level: 'Expert', platform: 'Interviewing.io', content: 'FAANG Level Mock Rounds', url: 'https://interviewing.io', status: 'locked' }
    ]
  },
  'system-design': {
    title: 'System Design',
    description: 'Learn to design large-scale distributed systems.',
    roadmap: [
      { level: 'Beginner', platform: 'YouTube (Gaurav Sen)', content: 'Load Balancers & Caching', url: '#', status: 'locked' },
      { level: 'Advanced', platform: 'Educative.io', content: 'Grokking System Design', url: '#', status: 'locked' }
    ]
  },
  'first-contributions': {
    title: 'First Contributions',
    description: 'Start your journey in the open-source world.',
    roadmap: [
      { level: 'Setup', platform: 'GitHub', content: 'Forking & Pull Requests', url: 'https://github.com', status: 'completed' },
      { level: 'Start', platform: 'First Timers Only', content: 'Find Beginner Friendly Issues', url: 'https://firsttimersonly.com', status: 'in-progress' },
      { level: 'Growth', platform: 'Up For Grabs', content: 'Contribute to Real Projects', url: 'https://up-for-grabs.net', status: 'locked' }
    ]
  },
  'resume-building': {
    title: 'Resume & Branding',
    description: 'Make your profile stand out to recruiters.',
    roadmap: [
      { level: 'Phase 1', platform: 'Canva/Overleaf', content: 'ATS Friendly Templates', url: '#', status: 'completed' },
      { level: 'Phase 2', platform: 'LinkedIn', content: 'Professional Networking', url: '#', status: 'in-progress' }
    ]
  }
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-scrolling to roadmap when skill is selected
  useEffect(() => {
    if (activeSkill) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [activeSkill]);

  const filteredSkills = activeCategory 
    ? CATEGORIES.find(c => c.id === activeCategory).skills 
    : [];

  const handleCategoryClick = (id) => {
    setActiveCategory(id === activeCategory ? null : id);
    setActiveSkill(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Explore Your IT Path
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl">
          Choose a field to see tailored roadmaps. Your progress is automatically tracked from GitHub and LeetCode.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for a skill (e.g. React, DSA)..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white shadow-sm transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Main Category Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === cat.id 
                ? `bg-${cat.color}-50 border-${cat.color}-500 shadow-lg ring-1 ring-${cat.color}-500` 
                : 'bg-white border-transparent shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`p-3 rounded-lg bg-${cat.color}-100 text-${cat.color}-600 inline-block mb-4`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {cat.description}
              </p>
            </button>
          ))}
        </section>

        {/* Skill Sub-categories (Filtered) */}
        {activeCategory && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-slate-400" />
              <h2 className="text-2xl font-bold">Recommended Skills for {CATEGORIES.find(c => c.id === activeCategory).title}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {filteredSkills.map(skillId => (
                <button
                  key={skillId}
                  onClick={() => setActiveSkill(skillId)}
                  className={`p-4 rounded-xl border font-medium text-center transition-all ${
                    activeSkill === skillId
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {SKILL_DETAILS[skillId]?.title || skillId.toUpperCase()}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Roadmap Display */}
        {activeSkill && SKILL_DETAILS[activeSkill] && (
          <section className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 animate-in zoom-in-95 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-bottom border-slate-100">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  Complete Roadmap
                </span>
                <h2 className="text-3xl font-bold mt-2">{SKILL_DETAILS[activeSkill].title}</h2>
                <p className="text-slate-500 mt-1">{SKILL_DETAILS[activeSkill].description}</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">65%</p>
                  <p className="text-xs text-slate-400 uppercase font-semibold tracking-tighter">Your Progress</p>
                </div>
                <div className="h-12 w-[2px] bg-slate-100 hidden md:block"></div>
                <div className="flex flex-col justify-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 text-[10px] text-white flex items-center justify-center font-bold">
                      +12k
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Students Learning</p>
                </div>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-slate-100">
              {SKILL_DETAILS[activeSkill].roadmap.map((step, index) => (
                <div key={index} className={`relative flex items-center justify-between w-full flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Circle Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-blue-600 z-10 shadow-sm" />
                  
                  {/* Content Box */}
                  <div className="w-full md:w-[45%] ml-12 md:ml-0 bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-shadow border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{step.level}</span>
                      {step.status === 'completed' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      {step.status === 'in-progress' && <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />}
                    </div>
                    <h4 className="text-lg font-bold mb-1">{step.content}</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                      <BookOpen className="w-4 h-4" />
                      <span>Learn on <strong>{step.platform}</strong></span>
                    </div>
                    <a 
                      href={step.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-900 hover:text-white transition-all group"
                    >
                      Start Learning
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              ))}
            </div>
            
            {/* Completion Banner */}
            <div className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ready to verify this skill?</h3>
              <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                Connect your LeetCode or GitHub account. We'll automatically verify your progress and add badges to your profile.
              </p>
              <button className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Connect External Accounts
              </button>
            </div>
          </section>
        )}
      </main>

      <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm pb-10">
        <p>© 2026 IT Roadmap Navigator. Built for the future of skill-based hiring.</p>
      </footer>
    </div>
  );
};

export default App;
