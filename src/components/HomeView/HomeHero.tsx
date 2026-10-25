import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';
import { SCHOOL_SUBJECTS, GRADES } from '../../data/subjects';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  FileText,
  HelpCircle,
  PlayCircle,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
  Calculator,
  Shield,
  Award,
  Zap,
  Check,
  Compass,
  Cpu,
  BarChart3,
  Bookmark,
  ExternalLink,
} from 'lucide-react';

interface HomeHeroProps {
  onOpenAuth: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onOpenAuth }) => {
  const {
    setActiveTab,
    setTeacherTab,
    setStudentTab,
    stats,
  } = useApp();
  const { user } = useAuth();

  // Desktop Live Smartboard preview tab state
  const [demoTab, setDemoTab] = useState<'plan' | 'test' | 'math' | 'ai'>('plan');
  const [selectedSubject, setSelectedSubject] = useState('Алгебра');
  const [selectedGrade, setSelectedGrade] = useState('Синфи 8');

  // Categorized subjects for desktop clean taxonomy
  const stemSubjects = SCHOOL_SUBJECTS.filter((s) =>
    ['algebra', 'geometry', 'physics', 'chemistry', 'biology', 'informatics', 'astronomy', 'tech'].includes(s.id)
  );
  const socialSubjects = SCHOOL_SUBJECTS.filter((s) =>
    ['tajik_history', 'world_history', 'geography', 'law', 'economics', 'family_culture'].includes(s.id)
  );
  const langSubjects = SCHOOL_SUBJECTS.filter((s) =>
    ['tajik_lang', 'tajik_lit', 'russian_lang', 'english_lang', 'drawing'].includes(s.id)
  );

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* 1. Grand Desktop Split-Hero Section */}
      <section className="relative pt-2 pb-8 lg:pt-6 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (7 cols): Editorial Typography & Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Official Contest Trust Tag */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-xs text-blue-700 dark:text-blue-300 font-semibold shadow-2xs">
                <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Озмуни ҷумҳуриявии «Идеяи ман — калиди фардо»</span>
                <span className="hidden sm:inline text-blue-300 dark:text-blue-700">|</span>
                <span className="hidden sm:inline text-slate-600 dark:text-slate-300 font-normal">
                  МТМУ №36 ш. Душанбе
                </span>
              </div>

              {/* Master Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.12] [text-wrap:balance]">
                Зеҳни сунъӣ барои{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                  таҳаввули маорифи
                </span>{' '}
                Тоҷикистон
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Аввалин платформаи миллии рақамӣ дар заминаи Gemini API барои банақшагирии худкори дарсҳо мувофиқи 14 марҳилаи Вазорати маориф ва илм, сохтани тестҳои 4-варианта ва ёрирасони инфиродии хонандагон.
              </p>

              {/* Author Attribution Card */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ЯА
                </div>
                <div className="text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">
                    Муаллифи лоиҳа: Ярахмадов Аличон
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    Хонандаи синфи 11 «г» МТМУ №36-и н. Шоҳмансури ш. Душанбе
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Button Cluster */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => {
                    setActiveTab('teacher');
                    setTeacherTab('lesson-plan');
                  }}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 flex items-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Оғози кор бо Бахши омӯзгор</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setActiveTab('demo')}
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 transition flex items-center gap-2 shadow-2xs cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Намоиши озмун (Live Demo)</span>
                </button>

                {!user && (
                  <button
                    onClick={onOpenAuth}
                    className="px-4 py-3 rounded-xl font-semibold text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Воридшавӣ бо телефон (+992)
                  </button>
                )}
              </div>

              {/* Quick Feature Chips */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="font-medium text-slate-700 dark:text-slate-300">Дастрасии фаврӣ:</span>
                <button
                  onClick={() => {
                    setActiveTab('teacher');
                    setTeacherTab('lesson-plan');
                  }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-2 transition"
                >
                  Нақшаи дарс (План)
                </button>
                <span>·</span>
                <button
                  onClick={() => {
                    setActiveTab('teacher');
                    setTeacherTab('quiz');
                  }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-2 transition"
                >
                  Санҷиши 4-варианта
                </button>
                <span>·</span>
                <button
                  onClick={() => {
                    setActiveTab('student');
                    setStudentTab('math-solver');
                  }}
                  className="hover:text-blue-600 dark:hover:text-blue-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-2 transition"
                >
                  Ҳалли қадам ба қадами масъала
                </button>
                <span>·</span>
                <button
                  onClick={() => setActiveTab('docs')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 underline decoration-slate-300 dark:decoration-slate-700 underline-offset-2 transition"
                >
                  Ҳимояи озмун
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Desktop Interactive Smartboard Visualizer */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-xl overflow-hidden flex flex-col justify-between">
              
              {/* Smartboard Header Bar */}
              <div className="px-5 py-3.5 bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 ml-2 tracking-wide flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    Синфи рақамии 2026 · Gemini Live
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600/40 text-blue-300 border border-blue-500/40">
                  ИНТЕРАКТИВӢ
                </span>
              </div>

              {/* Smartboard Switcher Tabs */}
              <div className="grid grid-cols-4 p-1 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-800/80 text-[11px] font-semibold">
                <button
                  onClick={() => setDemoTab('plan')}
                  className={`py-2 px-1 text-center rounded-lg transition-all ${
                    demoTab === 'plan'
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  14 марҳила
                </button>
                <button
                  onClick={() => setDemoTab('test')}
                  className={`py-2 px-1 text-center rounded-lg transition-all ${
                    demoTab === 'test'
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Тести 4-вар
                </button>
                <button
                  onClick={() => setDemoTab('math')}
                  className={`py-2 px-1 text-center rounded-lg transition-all ${
                    demoTab === 'math'
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Ҳалли риёзӣ
                </button>
                <button
                  onClick={() => setDemoTab('ai')}
                  className={`py-2 px-1 text-center rounded-lg transition-all ${
                    demoTab === 'ai'
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Таҳлили AI
                </button>
              </div>

              {/* Smartboard Dynamic Display Stage */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                {demoTab === 'plan' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Алгебра · Синфи 8: «Муодилаҳои квадратӣ»
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums">
                        45 дақиқа
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">
                            Марҳилаи 1-6: Ташкилӣ ва мақсадҳо (8 дақ)
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">
                            Ҳозирбошӣ, санҷиши вазифаи хонагӣ, муайянсозии мақсади таълимӣ ва тарбиявӣ.
                          </p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">
                            Марҳилаи 7-10: Баёни мавзӯи нав (20 дақ)
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">
                            Формулаи дискриминант: D = b² - 4ac. Татбиқи теоремаи Франсуа Виет.
                          </p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">
                            Марҳилаи 11-14: Мустаҳкамкунӣ ва рефлексия (17 дақ)
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">
                            Корҳои инфиродӣ, баҳогузории 5-хола ва дастури вазифаи хонагӣ.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('teacher');
                        setTeacherTab('lesson-plan');
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Таҳияи нақшаи расмии худ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {demoTab === 'test' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="text-xs pb-2 border-b border-slate-100 dark:border-slate-800 flex justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Санҷиши тестӣ: Физика (Синфи 9)
                      </span>
                      <span className="text-blue-600 font-semibold">Варианти А · Саволи 1</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white">
                      «Мувофиқи қонуни дуюми Нютон, шитоби ҷисм ба кадом бузургӣ мутаносиби рост аст?»
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        А) Массаи ҷисм
                      </div>
                      <div className="p-2 rounded-lg border border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-between">
                        <span>Б) Қувваи амалкунанда</span>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        В) Суръати ҷисм
                      </div>
                      <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        Г) Масофаи тайшуда
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 p-2 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                      💡 Шарҳи AI: Формулаи F = m · a, бинобар ин шитоб (a = F/m) ба қувва мутаносиби рост аст.
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('teacher');
                        setTeacherTab('quiz');
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Сохтани тести 4-варианта</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {demoTab === 'math' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="text-xs pb-2 border-b border-slate-100 dark:border-slate-800 flex justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Ҳалли муодила: x² - 5x + 6 = 0
                      </span>
                      <span className="text-indigo-600 font-semibold font-mono">D = 1</span>
                    </div>

                    <div className="space-y-1.5 text-xs font-mono bg-slate-900 text-slate-100 p-3 rounded-xl">
                      <div className="text-slate-400">// Қадами 1: Муайянкунии коэффитсиентҳо</div>
                      <div>a = 1, b = -5, c = 6</div>
                      <div className="text-slate-400 mt-1">// Қадами 2: Ҳисоби Дискриминант</div>
                      <div>D = (-5)² - 4·1·6 = 25 - 24 = 1 &gt; 0</div>
                      <div className="text-slate-400 mt-1">// Қадами 3: Решаҳои муодила</div>
                      <div className="text-emerald-400 font-bold">x₁ = (5 + 1)/2 = 3 | x₂ = (5 - 1)/2 = 2</div>
                    </div>

                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      Хонанда метавонад дилхоҳ масъалаи алгебра, геометрия ва физикаро ворид карда, шарҳи пурра гирад.
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('student');
                        setStudentTab('math-solver');
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Ҳалли масъалаи худро оғоз кунед</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {demoTab === 'ai' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="text-xs pb-2 border-b border-slate-100 dark:border-slate-800 flex justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Арзёбии саводи хонанда (AI Review)
                      </span>
                      <span className="text-emerald-600 font-semibold">Баҳо: 5 (Аъло)</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">Амиқияти ҷавоб:</span>
                        <span className="font-bold text-emerald-600">95%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[95%]" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">Истилоҳоти илмӣ:</span>
                        <span className="font-bold text-blue-600">90%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[90%]" />
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Зеҳни сунъӣ матни ҷавоби хонандаро таҳлил намуда, ба омӯзгор тавсияи объективӣ медиҳад.
                    </p>

                    <button
                      onClick={() => {
                        setActiveTab('teacher');
                        setTeacherTab('student-evaluator');
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Санҷиши кори хонанда бо AI</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Smartboard Footer Status */}
              <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Модели фаъол: Gemini 2.5 Flash
                </span>
                <span className="font-medium text-slate-400">
                  Барои муаллимони ҶТ
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. Full-Width 4-Column Metric Strip (Curated high-contrast cards with micro-borders) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 mt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-blue-600 dark:text-blue-400">
              <span className="text-xs font-bold uppercase tracking-wider">Стандарт</span>
              <Bookmark className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tabular-nums tracking-tight">
              14 марҳила
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
              Сохтори дақиқи нақшаи дарсӣ мувофиқи қолаби расмии Вазорати маориф
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400">
              <span className="text-xs font-bold uppercase tracking-wider">Барнома</span>
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tabular-nums tracking-tight">
              20 фан
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
              Фарогирии пурраи фанҳои табиӣ, риёзӣ ва гуманитарии синфҳои 1–11
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
              <span className="text-xs font-bold uppercase tracking-wider">Санҷиш</span>
              <CheckSquareIcon className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tabular-nums tracking-tight">
              4 вариант
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
              Тавлиди саволҳои озмунӣ бо калидҳои дуруст ва шарҳи илмии хатоҳо
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-sky-600 dark:text-sky-400">
              <span className="text-xs font-bold uppercase tracking-wider">Амният</span>
              <Shield className="w-4 h-4" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tabular-nums tracking-tight">
              100% маҳаллӣ
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
              Ҳимояи калиди API ва маълумот дар муҳити бехатари миллӣ
            </p>
          </div>
        </div>
      </section>

      {/* 3. Four Core Educational Workspaces (Desktop Bento Showcase) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Модулҳои коршоям ва воқеӣ
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
              Фазоҳои кории рақамӣ барои мактаб
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Ҳамаи модулҳо ба забони тоҷикӣ фаъол буда, мустақиман бо Gemini AI кор мекунанд.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Bento Card 1 */}
          <div
            onClick={() => {
              setActiveTab('teacher');
              setTeacherTab('lesson-plan');
            }}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-blue-500/70 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                01. Бахши омӯзгор
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                План-конспекти дарс
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Таҳияи фаврии нақшаи 14-марҳилагӣ бо муайянсозии мақсадҳои таълимӣ, тарбиявӣ ва инкишофдиҳанда.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Оғози таҳия</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Card 2 */}
          <div
            onClick={() => {
              setActiveTab('teacher');
              setTeacherTab('quiz');
            }}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-emerald-500/70 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                02. Санҷиши савод
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Тестҳои 4-варианта
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Сохтани саволҳои озмунӣ, супоридани тест бевосита дар барнома ва баҳодиҳии автоматии ҷавобҳо.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Сохтани тест</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Card 3 */}
          <div
            onClick={() => {
              setActiveTab('student');
              setStudentTab('math-solver');
            }}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-500/70 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                03. Бахши хонанда
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Ҳалли риёзӣ ва табиӣ
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Ҳалли қадам ба қадами муодилаҳо, шарҳи қонунҳои физика ва химия бо забони фаҳмои тоҷикӣ.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Кушодани ёвар</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bento Card 4 */}
          <div
            onClick={() => setActiveTab('demo')}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-amber-500/70 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <PlayCircle className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-400 group-hover:text-amber-600 transition-colors">
                04. Намоиши озмун
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Сенарияи зиндаи ҳимоя
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                10 сенарияи воқеии таълимӣ барои нишон додан ба ҳакамон дар озмуни «Идеяи ман — калиди фардо».
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>Тамошои намоиш</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Structured Subject Taxonomy (Desktop Multi-Column) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
              Фанҳои барномаи таълимии Тоҷикистон (20 фан)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Ҳар як фанро интихоб намоед, то нақшаи дарсӣ ё маводи санҷиширо тавлид кунед.
            </p>
          </div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
            Мувофиқи стандарти давлатии таҳсилот
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STEM Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Фанҳои дақиқ ва табиӣ</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {stemSubjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveTab('teacher');
                    setTeacherTab('lesson-plan');
                  }}
                  className="p-2.5 rounded-lg text-left bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-500 hover:text-blue-600 transition text-xs font-medium text-slate-700 dark:text-slate-200 truncate cursor-pointer"
                >
                  {s.nameTg}
                </button>
              ))}
            </div>
          </div>

          {/* Social/History Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>Фанҳои ҷамъиятӣ ва таърих</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {socialSubjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveTab('teacher');
                    setTeacherTab('lesson-plan');
                  }}
                  className="p-2.5 rounded-lg text-left bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-500 hover:text-indigo-600 transition text-xs font-medium text-slate-700 dark:text-slate-200 truncate cursor-pointer"
                >
                  {s.nameTg}
                </button>
              ))}
            </div>
          </div>

          {/* Languages Col */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Забонҳо ва фарҳанг</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {langSubjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveTab('teacher');
                    setTeacherTab('lesson-plan');
                  }}
                  className="p-2.5 rounded-lg text-left bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500 hover:text-emerald-600 transition text-xs font-medium text-slate-700 dark:text-slate-200 truncate cursor-pointer"
                >
                  {s.nameTg}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Republic Contest Defense Documentation Strip */}
      <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-slate-800 shadow-xl">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
            <Award className="w-4 h-4" />
            <span>Озмуни ҷумҳуриявии «Идеяи ман — калиди фардо»</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ҳуҷҷатҳои пурраи лоиҳа ва матни ҳимоя
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Муаллиф: <strong className="text-white">Ярахмадов Аличон</strong>, хонандаи синфи 11 «г» МТМУ №36 ш. Душанбе. Дар бахши расмӣ шиносномаи лоиҳа, нақшаи 14-марҳилагӣ, суханронии 5–7 дақиқаии ҳимоя ва 15 посух ба саволҳои ҳакамон ҷойгир шудаанд.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('docs')}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <span>Ҳуҷҷатҳои расмӣ ва Ҳимоя</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" />
            <span>10 Сенарияи зинда</span>
          </button>
        </div>
      </section>
    </div>
  );
};

// Internal icon helper
const CheckSquareIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
