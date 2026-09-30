import { WordEntry } from '../types';

export const remainingWordsRaw: Array<{
  id: string;
  word: string;
  partOfSpeech: string;
  pronunciation: string;
  teaser: string;
  teaserCn: string;
  basicMeaning: string;
  basicMeaningCn: string;
  usages: Array<{ phrase: string; meaning: string; meaningCn: string }>;
  patterns: Array<{ pattern: string; collocations: string[] }>;
  example: string;
  exampleCn: string;
  scenarioEn: string;
  scenarioCn: string;
  targetConcept: string;
  answer: string;
  explanation: string;
  explanationCn: string;
}> = [
  {
    id: 'save',
    word: 'SAVE',
    partOfSpeech: 'verb / preposition',
    pronunciation: '/seɪv/',
    teaser: '“Save your breath” tells a friend not to waste energy on closed minds.',
    teaserCn: '劝人别浪费口舌，一句话 Save your breath。',
    basicMeaning: 'save = keep safe or rescue from harm',
    basicMeaningCn: '拯救、救助、存钱',
    usages: [
      { phrase: 'save your breath', meaning: 'stop talking because the listener will not change their mind', meaningCn: '省省力气别说了' },
      { phrase: 'save the date', meaning: 'reserve a future calendar date for an upcoming event', meaningCn: '留出这个日期' },
      { phrase: 'save for...', meaning: 'formal: except for / apart from', meaningCn: '除了……之外' }
    ],
    patterns: [
      { pattern: 'save + trouble / face', collocations: ['save you the trouble', 'save face in public'] }
    ],
    example: "Don't bother arguing with him—just save your breath.",
    exampleCn: "别跟他争辩了，省省你的口舌吧。",
    scenarioEn: "Someone is trying to convince a stubborn person. You tell them not to waste words.",
    scenarioCn: "你想劝朋友：“省省口水吧，他听不进去的。”",
    targetConcept: "save your breath",
    answer: "Save your breath, he's not listening.",
    explanation: "'Save your breath' means don't waste energy arguing pointlessly.",
    explanationCn: "“Save your breath”是表达“省省口舌吧/别白费力气说了”的日常经典语。"
  },
  {
    id: 'scale',
    word: 'SCALE',
    partOfSpeech: 'noun / verb',
    pronunciation: '/skeɪl/',
    teaser: 'Handling massive traffic without breaking a sweat is what “scaling” is all about.',
    teaserCn: '架构撑得住百万级并发，科技圈都聊 scale。',
    basicMeaning: 'scale = device for weighing or fish skin plating',
    basicMeaningCn: '体重秤、鱼鳞',
    usages: [
      { phrase: 'scale up / down', meaning: 'expand or reduce the size or capacity of an operation', meaningCn: '扩大 / 缩小规模' },
      { phrase: 'on a massive scale', meaning: 'across a very wide and extensive range', meaningCn: '大规模地' },
      { phrase: 'scale back', meaning: 'reduce expenditures or scope', meaningCn: '削减、缩减' }
    ],
    patterns: [
      { pattern: 'scale + efficiently', collocations: ['scale the business', 'scale globally', 'built to scale'] }
    ],
    example: "The platform was architected from day one to scale smoothly.",
    exampleCn: "该平台从第一天起就是为了平稳扩张规模而架构的。",
    scenarioEn: "You want to say that the software can grow to handle millions of users.",
    scenarioCn: "你想强调：“该架构具备出色的扩展能力。”",
    targetConcept: "scale to millions of users",
    answer: "The architecture can scale to millions of users seamlessly.",
    explanation: "'Scale' is the definitive modern term for expanding capacity.",
    explanationCn: "“scale”是科技与商业中表达“规模化扩张”的核心词。"
  },
  {
    id: 'score',
    word: 'SCORE',
    partOfSpeech: 'verb / noun',
    pronunciation: '/skɔːr/',
    teaser: 'Scoring tickets to a sold-out show is the native term for landing something rare.',
    teaserCn: '抢到紧俏门票或热门餐厅，老外常用 score。',
    basicMeaning: 'score = points gained in a game',
    basicMeaningCn: '得分、分数',
    usages: [
      { phrase: 'score tickets / a deal', meaning: 'manage to obtain something scarce or coveted', meaningCn: '抢到票 / 拿下超值优惠' },
      { phrase: 'settle a score', meaning: 'take revenge or resolve an old feud', meaningCn: '算旧账 / 了结恩怨' }
    ],
    patterns: [
      { pattern: 'score + coveted item', collocations: ['score front-row seats', 'score an interview', 'score a reservation'] }
    ],
    example: "I managed to score two tickets to the sold-out concert!",
    exampleCn: "我居然抢到了两张已经售罄的演唱会门票！",
    scenarioEn: "You successfully got a table at a famous booked-up restaurant.",
    scenarioCn: "你想开心地宣布：“我抢到了今晚那家米其林餐厅的位置！”",
    targetConcept: "score a reservation",
    answer: "I managed to score a table for tonight!",
    explanation: "'Score' is casual slang for successfully securing something rare.",
    explanationCn: "口语中“score [tickets/table]”意为成功“搞到/抢到”难得的事物。"
  },
  {
    id: 'set',
    word: 'SET',
    partOfSpeech: 'verb / noun / adjective',
    pronunciation: '/set/',
    teaser: 'Asking a client “Are you all set?” is the warmest, quickest readiness check.',
    teaserCn: '问客户“您准备好了吗”，随口一句 You all set?',
    basicMeaning: 'set = put, lay, or stand in a specified place',
    basicMeaningCn: '放置、设定',
    usages: [
      { phrase: "all set", meaning: 'completely ready and prepared to proceed', meaningCn: '一切就绪 / 准备好了' },
      { phrase: 'set in stone', meaning: 'permanent, unchangeable, and fixed', meaningCn: '板上钉钉 / 不可更改' },
      { phrase: 'set a boundary', meaning: 'establish clear rules of acceptable conduct', meaningCn: '设立明确界限' }
    ],
    patterns: [
      { pattern: "are you all set?", collocations: ["we're all set to launch", "nothing is set in stone"] }
    ],
    example: "Nothing is set in stone yet; we can still adjust the layout.",
    exampleCn: "目前还没有任何事情是板上钉钉的，我们还可以调整版面。",
    scenarioEn: "You want to confirm with a client if they are ready to begin the project.",
    scenarioCn: "你想问客户：“您这边都准备好了吗？”",
    targetConcept: "are you all set?",
    answer: "Are you all set to get started?",
    explanation: "'All set' is the warmest, most natural native way to check readiness.",
    explanationCn: "“All set”是表达“全部就绪、准备完毕”最地道的高频语。"
  },
  {
    id: 'settle',
    word: 'SETTLE',
    partOfSpeech: 'verb',
    pronunciation: '/ˈset.əl/',
    teaser: '“Never settle” is the timeless motto for holding onto uncompromising standards.',
    teaserCn: '“绝不将就”，英语里的黄金表达是 Never settle。',
    basicMeaning: 'settle = establish a residence in a new place',
    basicMeaningCn: '定居、安定下来',
    usages: [
      { phrase: 'settle for less', meaning: 'accept an inferior compromise instead of what you truly want', meaningCn: '将就 / 退而求其次' },
      { phrase: 'settle the bill / account', meaning: 'pay what is owed completely', meaningCn: '结清账单' },
      { phrase: 'settle down', meaning: 'calm down or transition into a stable peaceful routine', meaningCn: '安静下来 / 成家安居' }
    ],
    patterns: [
      { pattern: "don't settle for + noun", collocations: ["never settle for mediocrity", "settle an argument"] }
    ],
    example: "Never settle for a job that doesn't respect your craft.",
    exampleCn: "永远不要将就于一份不尊重你手艺的工作。",
    scenarioEn: "You encourage a friend not to compromise their standards.",
    scenarioCn: "你想勉励朋友：“永远不要将就妥协。”",
    targetConcept: "never settle",
    answer: "Never settle for anything less than you deserve.",
    explanation: "'Settle for' signifies settling on a lesser compromise.",
    explanationCn: "“Don't settle”常用于表达“绝不将就、不妥协”。"
  },
  {
    id: 'share',
    word: 'SHARE',
    partOfSpeech: 'verb / noun',
    pronunciation: '/ʃeər/',
    teaser: '“Could you share your screen?” became the daily currency of modern collaboration.',
    teaserCn: '远程开会请对方投屏，就是 Share your screen。',
    basicMeaning: 'share = have a portion of something with another',
    basicMeaningCn: '分享、分担、股份',
    usages: [
      { phrase: 'share your thoughts / screen', meaning: 'express your opinion or broadcast your monitor in a call', meaningCn: '发表看法 / 投屏共享' },
      { phrase: 'a fair share of troubles', meaning: 'an ample or excessive portion of difficulties', meaningCn: '经历过不少（波折、风雨）' },
      { phrase: 'share the burden', meaning: 'distribute difficult responsibilities equally', meaningCn: '共同分担重担' }
    ],
    patterns: [
      { pattern: 'share + perspective', collocations: ['mind sharing your screen?', 'had my fair share of setbacks'] }
    ],
    example: "I've had my fair share of failed prototypes over the years.",
    exampleCn: "这些年来我也经历过不少失败的原型尝试。",
    scenarioEn: "In a video conference, you ask a presenter to display their presentation slide.",
    scenarioCn: "你想礼貌说：“您能共享一下屏幕吗？”",
    targetConcept: "share your screen",
    answer: "Could you please share your screen?",
    explanation: "'Share your screen' is standard modern meeting protocol.",
    explanationCn: "“share your screen”是现代远程协作中最常用的指令。"
  },
  {
    id: 'shift',
    word: 'SHIFT',
    partOfSpeech: 'verb / noun',
    pronunciation: '/ʃɪft/',
    teaser: 'Transitioning smoothly to the next topic? “Let’s shift gears” sets the pace.',
    teaserCn: '开会自然过渡到新议题，来句 Let\'s shift gears。',
    basicMeaning: 'shift = move or cause to move from one position to another',
    basicMeaningCn: '移动、轮班、变换档位',
    usages: [
      { phrase: 'shift the focus / narrative', meaning: 'redirect attention to a different priority or theme', meaningCn: '转移焦点 / 转变叙事' },
      { phrase: 'paradigm shift', meaning: 'a fundamental change in approach or underlying assumptions', meaningCn: '范式转变 / 根本性变革' },
      { phrase: 'shift gears', meaning: 'abruptly change speed, tone, or topic', meaningCn: '换个节奏 / 转换话题' }
    ],
    patterns: [
      { pattern: 'shift + focus to...', collocations: ['shift attention', 'shift blame', 'shift perspective'] }
    ],
    example: "Let's shift gears and talk about our Q3 roadmap.",
    exampleCn: "我们换个话题，来聊聊第三季度的规划路线图吧。",
    scenarioEn: "You want to transition a team meeting from discussing bugs to talking about new designs.",
    scenarioCn: "你想提议：“我们转换一下话题，聊聊新设计。”",
    targetConcept: "shift gears",
    answer: "Let's shift gears and take a look at the new designs.",
    explanation: "'Shift gears' transitions the pace and subject gracefully.",
    explanationCn: "“shift gears”常用于会议和谈话中自然过渡到新议题。"
  },
  {
    id: 'stand',
    word: 'STAND',
    partOfSpeech: 'verb / noun',
    pronunciation: '/stænd/',
    teaser: 'A distinctive design that easily outshines the crowd is said to “stand out.”',
    teaserCn: '夸别人“格外脱颖而出”，经常用 stands out。',
    basicMeaning: 'stand = have or maintain an upright position on feet',
    basicMeaningCn: '站立、起立',
    usages: [
      { phrase: "can't stand someone / something", meaning: 'strongly dislike or find something completely intolerable', meaningCn: '受不了 / 极其讨厌' },
      { phrase: 'stand out', meaning: 'be clearly noticeable, distinctive, or superior', meaningCn: '脱颖而出 / 格外显眼' },
      { phrase: 'where you stand', meaning: 'what your formal position or attitude is on an issue', meaningCn: '持何种立场' },
      { phrase: 'stand by someone', meaning: 'remain loyal and supportive through tough times', meaningCn: '不离不弃 / 支持某人' }
    ],
    patterns: [
      { pattern: "can't stand + noun / -ing", collocations: ["can't stand the noise", "stands out from the crowd"] }
    ],
    example: "Her minimalist portfolio really stands out from the rest.",
    exampleCn: "她的极简作品集在所有人中显得格外脱颖而出。",
    scenarioEn: "You want to describe how an outstanding candidate easily catches attention among hundreds of applicants.",
    scenarioCn: "你想说：“他在众多候选人中格外引人注目。”",
    targetConcept: "stands out",
    answer: "He really stands out from the crowd.",
    explanation: "'Stand out' highlights exceptional distinctiveness.",
    explanationCn: "“stand out”是表达“出众、脱颖而出”最地道的词组。"
  },
  {
    id: 'take',
    word: 'TAKE',
    partOfSpeech: 'verb / noun',
    pronunciation: '/teɪk/',
    teaser: 'Asking for someone’s authentic perspective? “What’s your take?” is effortless.',
    teaserCn: '问同事“你对这事怎么看”，试试 What\'s your take?。',
    basicMeaning: 'take = lay hold of with hands or carry somewhere',
    basicMeaningCn: '拿、带走、花费',
    usages: [
      { phrase: "what's your take on this?", meaning: 'what is your personal opinion or interpretation?', meaningCn: '你怎么看这件事？' },
      { phrase: 'take your time', meaning: 'do not rush; proceed at your leisure', meaningCn: '慢慢来 / 不用着急' },
      { phrase: 'take something for granted', meaning: 'fail to appreciate something because you are accustomed to it', meaningCn: '想当然 / 视为理所当然' },
      { phrase: 'take it easy', meaning: 'relax and avoid stress or exertion', meaningCn: '放轻松 / 别太拼' }
    ],
    patterns: [
      { pattern: "what's your take on + issue", collocations: ["take your time", "take it personally", "take a look"] }
    ],
    example: "I'd love to hear your take on the latest branding direction.",
    exampleCn: "我很想听听你对最新品牌设计方向的看法。",
    scenarioEn: "In a review meeting, you want to solicit someone's unique viewpoint on a proposal.",
    scenarioCn: "你想问同事：“关于这个提议，你的看法是什么？”",
    targetConcept: "what's your take on this?",
    answer: "What's your take on this approach?",
    explanation: "'Your take' is the natural contemporary noun for 'your opinion/perspective'.",
    explanationCn: "“What's your take on...?”是问询他人见解最地道高级的句式。"
  },
  {
    id: 'talk',
    word: 'TALK',
    partOfSpeech: 'verb / noun',
    pronunciation: '/tɔːk/',
    teaser: 'Steering weekend drinks away from work: “No talking shop tonight.”',
    teaserCn: '聚会不想扫兴聊工作，“别聊公事”就是 no talking shop。',
    basicMeaning: 'talk = speak in order to give information or express ideas',
    basicMeaningCn: '说话、交谈',
    usages: [
      { phrase: 'talk someone into / out of something', meaning: 'persuade someone to do or avoid doing an action', meaningCn: '说服某人做 / 劝阻某人不做' },
      { phrase: 'talk shop', meaning: 'discuss work matters during social or personal occasions', meaningCn: '聊工作 / 聊行话' },
      { phrase: 'money talks', meaning: 'wealth and finance exert decisive influence', meaningCn: '金钱有发言权 / 现实很现实' }
    ],
    patterns: [
      { pattern: 'talk someone into + -ing', collocations: ['talk me into going', 'talked her out of resigning'] }
    ],
    example: "We promised not to talk shop during dinner tonight.",
    exampleCn: "我们约好了今晚吃晚饭时不聊工作上的事。",
    scenarioEn: "At a weekend social gathering, people start talking about sprint deadlines. You gently steer them away.",
    scenarioCn: "你想提醒大家：“聚会时间别聊工作啦。”",
    targetConcept: "no talking shop",
    answer: "Let's not talk shop tonight!",
    explanation: "'Talk shop' means bringing professional work topics into leisure time.",
    explanationCn: "“talk shop”是英语中特指“在休闲社交场合聊工作”的专有习语。"
  },
  {
    id: 'treat',
    word: 'TREAT',
    partOfSpeech: 'verb / noun',
    pronunciation: '/triːt/',
    teaser: 'Insisting on picking up the tab with warmth: “It’s my treat.”',
    teaserCn: '请朋友喝奶茶，最暖心的一句 It\'s my treat。',
    basicMeaning: 'treat = behave towards someone or give medical care',
    basicMeaningCn: '对待、治疗、款待',
    usages: [
      { phrase: "it's my treat", meaning: 'I am paying for our food, drinks, or tickets', meaningCn: '这顿我请客' },
      { phrase: 'treat yourself', meaning: 'indulge in an enjoyable luxury or rest as a reward', meaningCn: '犒劳一下自己' },
      { phrase: 'treat someone with respect', meaning: 'act courteously and honorably towards someone', meaningCn: '以尊重的态度待人' }
    ],
    patterns: [
      { pattern: "it's my treat", collocations: ["treat yourself to a nice dinner", "a special treat"] }
    ],
    example: "You've worked tirelessly all month; go treat yourself to a nice meal.",
    exampleCn: "你忙碌了一整个月，去好好吃顿大餐犒劳一下自己吧。",
    scenarioEn: "You invite a friend to an upscale cafe and want to make it clear you are paying.",
    scenarioCn: "你想对朋友说：“今天这顿咖啡我请客。”",
    targetConcept: "it's my treat",
    answer: "Put your money away, it's my treat!",
    explanation: "'It's my treat' is warm, generous, and unmistakable.",
    explanationCn: "“It's my treat”是表达“我请客”最地道温暖的口语词组。"
  },
  {
    id: 'turn',
    word: 'TURN',
    partOfSpeech: 'verb / noun',
    pronunciation: '/tɜːn/',
    teaser: 'When an initial worry resolves seamlessly: “Everything turned out great.”',
    teaserCn: '“事实证明很顺利”，口语叫 turned out great。',
    basicMeaning: 'turn = move in a circular direction wholly or partly',
    basicMeaningCn: '转动、转弯、轮候',
    usages: [
      { phrase: 'turn out', meaning: 'develop or prove to be in a certain unexpected way', meaningCn: '结果证明 / 原来是' },
      { phrase: 'turn down an offer', meaning: 'reject or decline an invitation or proposal', meaningCn: '拒绝提议 / 婉拒' },
      { phrase: 'turn to someone for advice', meaning: 'seek guidance or solace from a trusted person', meaningCn: '向某人求助 / 寻求指引' }
    ],
    patterns: [
      { pattern: 'turn out + adjective / well', collocations: ['turned out great', 'as it turns out...', 'turn down the volume'] }
    ],
    example: "As it turns out, the simple solution was the most resilient.",
    exampleCn: "事实证明，最简单的方案反而最经得起考验。",
    scenarioEn: "An initial worry resolved nicely. You want to report that everything ended up great.",
    scenarioCn: "你想跟团队说：“最后的结果证明一切都很顺利。”",
    targetConcept: "it turned out great",
    answer: "Everything turned out great in the end.",
    explanation: "'Turn out' describes how things ultimately unfold.",
    explanationCn: "“It turned out great”常用于描述事情结局令人满意。"
  },
  {
    id: 'wrap',
    word: 'WRAP',
    partOfSpeech: 'verb / noun',
    pronunciation: '/ræp/',
    teaser: 'Bringing a productive session to a satisfying close: “That’s a wrap!”',
    teaserCn: '会议圆满收工杀青，来一句 That’s a wrap!。',
    basicMeaning: 'wrap = enclose in paper or soft material',
    basicMeaningCn: '包裹、缠绕、包装',
    usages: [
      { phrase: "that's a wrap", meaning: 'the session, shooting, or event is officially finished', meaningCn: '圆满结束 / 杀青收工' },
      { phrase: 'wrap up a meeting / project', meaning: 'bring a session or initiative to its final conclusion', meaningCn: '收尾、结束会议' },
      { phrase: 'keep under wraps', meaning: 'keep confidential or secret from the public', meaningCn: '秘而不宣 / 保密' }
    ],
    patterns: [
      { pattern: 'wrap up + task', collocations: ["let's wrap things up", "wrapped in plastic", "keep it under wraps"] }
    ],
    example: "We have five minutes left, so let's wrap up today's sync.",
    exampleCn: "我们还剩五分钟，那今天的工作同步就到此收尾吧。",
    scenarioEn: "At the end of a long productive workshop, you announce it is time to conclude.",
    scenarioCn: "你想在会议尾声宣布：“今天我们就到这里，收工！”",
    targetConcept: "that's a wrap",
    answer: "All right team, that's a wrap for today!",
    explanation: "'That's a wrap' originates in filmmaking and is used widely to conclude meetings.",
    explanationCn: "“That's a wrap!”用于宣布活动/会议圆满收尾、正式收工。"
  }
];
