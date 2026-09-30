import { WordEntry } from '../types';

export const wordsBatch2: WordEntry[] = [
  {
    id: 'account',
    number: 14,
    word: 'ACCOUNT',
    partOfSpeech: 'verb / noun',
    pronunciation: '/əˈkaʊnt/',
    teaser: 'Explaining why something happened or tracking percentages? “Account for” does both.',
    teaserCn: '分析原因或占了多少比例，都会用到 account。',
    basicMeaning: 'account = a profile or record of financial credits and debits',
    basicMeaningCn: '账户、户口',
    additionalUsages: [
      {
        phrase: 'account for something',
        meaning: 'explain the reason for something or constitute a portion of a total',
        meaningCn: '解释原因 / 占据……比例',
      },
      {
        phrase: 'on account of',
        meaning: 'because of / owing to',
        meaningCn: '因为……的缘故',
      },
      {
        phrase: 'take into account',
        meaning: 'consider a particular factor when judging a situation',
        meaningCn: '把……考虑在内',
      }
    ],
    patterns: [
      {
        pattern: 'account for + percentage / factor',
        collocations: ['account for 30% of sales', 'account for the sudden delay']
      },
      {
        pattern: 'take + noun + into account',
        collocations: ['take your preferences into account', 'take traffic into account']
      }
    ],
    examples: [
      {
        sentence: "Mobile traffic accounts for more than half of our total visitors.",
        translationCn: "移动端流量占了我们总访问量的一半以上。"
      },
      {
        sentence: "We should take the time difference into account before scheduling the call.",
        translationCn: "在定开会时间之前，我们应该把时差考虑进去。"
      }
    ],
    challenge: {
      scenarioEn: "You want to say: 'We must consider the tight budget when planning.'",
      scenarioCn: "你想说：“我们在规划时必须把紧张的预算考虑进去。”",
      targetConcept: "take into account"
    },
    answer: "We must take the tight budget into account.",
    explanation: "'Take into account' is standard editorial and conversational English for considering constraints.",
    explanationCn: "“take [something] into account”意为“把某因素纳入考量”。"
  },
  {
    id: 'address',
    number: 15,
    word: 'ADDRESS',
    partOfSpeech: 'verb / noun',
    pronunciation: '/əˈdres/',
    teaser: '“Address the issue” is the sharper, more intentional way to say you’re tackling a problem.',
    teaserCn: '想要更高级地表达“着手处理问题”，用它。',
    basicMeaning: 'address = the particulars of the place where someone lives',
    basicMeaningCn: '街道地址、住址',
    additionalUsages: [
      {
        phrase: 'address an issue / concern',
        meaning: 'think about and begin dealing with a problem directly',
        meaningCn: '着手解决问题 / 回应关切',
      },
      {
        phrase: 'address someone as...',
        meaning: 'speak to someone using a particular title or name',
        meaningCn: '称呼某人为……',
      }
    ],
    patterns: [
      {
        pattern: 'address + challenge / question',
        collocations: ['address the core problem', 'address user feedback', 'address the rumors']
      }
    ],
    examples: [
      {
        sentence: "Let's make sure we address all customer questions before closing the ticket.",
        translationCn: "在关闭工单之前，我们要确保解决客户的所有疑问。"
      },
      {
        sentence: "The new update directly addresses the battery drain issue.",
        translationCn: "新版本直接解决了耗电过快的问题。"
      }
    ],
    challenge: {
      scenarioEn: "In a meeting, you want to propose tackling the root cause first.",
      scenarioCn: "你想在会上提议：“我们首先需要解决根本问题。”",
      targetConcept: "address the root problem"
    },
    answer: "We need to address the root problem first.",
    explanation: "'Address' sounds more intentional and strategic than simply saying 'fix'.",
    explanationCn: "“Address the problem”显得更加严谨和积极应对。"
  },
  {
    id: 'appreciate',
    number: 16,
    word: 'APPRECIATE',
    partOfSpeech: 'verb',
    pronunciation: '/əˈpriː.ʃi.eɪt/',
    teaser: '“I’d appreciate it if...” adds instant warmth and elegance to any request.',
    teaserCn: '委婉请人帮忙时，I’d appreciate it 特别得体。',
    basicMeaning: 'appreciate = recognize the full worth of or be grateful for',
    basicMeaningCn: '感激、感谢',
    additionalUsages: [
      {
        phrase: 'appreciate the difficulty / nuance',
        meaning: 'fully understand and grasp the subtlety or weight of a situation',
        meaningCn: '深知、体会到其难度与细微差别',
      },
      {
        phrase: 'assets appreciate',
        meaning: 'increase in financial value over time',
        meaningCn: '（资产）增值、升值',
      },
      {
        phrase: "I'd appreciate it if you could...",
        meaning: 'a polite formula for making a gentle request',
        meaningCn: '如果你能……我将不胜感激',
      }
    ],
    patterns: [
      {
        pattern: "I'd appreciate + -ing / clause",
        collocations: ["I'd appreciate your thoughts", "I'd appreciate it if you could review this"]
      },
      {
        pattern: "fully appreciate + noun",
        collocations: ['fully appreciate the challenge', 'appreciate good craftsmanship']
      }
    ],
    examples: [
      {
        sentence: "I'd appreciate it if you could send over the latest deck by noon.",
        translationCn: "如果你能在中午前把最新版幻灯片发过来，那就太感谢了。"
      },
      {
        sentence: "It's hard to appreciate how steep the trail is until you hike it.",
        translationCn: "只有当你亲自爬过，你才能真正体会到这条小道有多陡。"
      }
    ],
    challenge: {
      scenarioEn: "You want to ask a colleague nicely: 'Could you please keep this confidential?'",
      scenarioCn: "你想礼貌请求同事：“如果你能对此保密，我会非常感激。”",
      targetConcept: "I'd appreciate it if you kept this..."
    },
    answer: "I'd appreciate it if you could keep this between us.",
    explanation: "'I'd appreciate it if...' softens requests while remaining authoritative.",
    explanationCn: "“I'd appreciate it if...”是职场最得体的委婉请求句式。"
  },
  {
    id: 'assume',
    number: 17,
    word: 'ASSUME',
    partOfSpeech: 'verb',
    pronunciation: '/əˈsjuːm/',
    teaser: 'Stepping formally into a leadership role is described as “assuming” responsibility.',
    teaserCn: '正式接管团队或扛起职责，外企常说 assume。',
    basicMeaning: 'assume = suppose something to be the case without proof',
    basicMeaningCn: '假定、设想、以为',
    additionalUsages: [
      {
        phrase: 'assume a role / responsibility',
        meaning: 'take on or begin to bear a formal duty or title',
        meaningCn: '就任、承担（责任、角色）',
      },
      {
        phrase: 'assume control',
        meaning: 'take command or charge of an operation',
        meaningCn: '接管控制权',
      }
    ],
    patterns: [
      {
        pattern: 'assume + responsibility / role',
        collocations: ['assume the position of lead', 'assume all financial risk']
      }
    ],
    examples: [
      {
        sentence: "She will assume the role of acting director starting next month.",
        translationCn: "她将从下个月开始担任代理总监一职。"
      },
      {
        sentence: "Never assume anything without checking the raw metrics first.",
        translationCn: "在没有查看原始指标前，切勿妄下定论。"
      }
    ],
    challenge: {
      scenarioEn: "You want to state that Alex is taking on the leadership of the project next week.",
      scenarioCn: "你想说：“Alex下周将正式接管该项目的领导职责。”",
      targetConcept: "assume leadership"
    },
    answer: "Alex will assume leadership of the project next week.",
    explanation: "'Assume [a role]' conveys a dignified taking on of responsibility.",
    explanationCn: "“assume [role]”常用于正式承担某职位或职责。"
  },
  {
    id: 'attend',
    number: 18,
    word: 'ATTEND',
    partOfSpeech: 'verb',
    pronunciation: '/əˈtend/',
    teaser: 'Stepping away to handle an urgent matter? “Attend to” is effortlessly dignified.',
    teaserCn: '中途离席处理急事，attend to 极其体面。',
    basicMeaning: 'attend = be present at an event, meeting, or institution',
    basicMeaningCn: '出席、参加、就读',
    additionalUsages: [
      {
        phrase: 'attend to something / someone',
        meaning: 'deal with a matter or take care of a customer or patient',
        meaningCn: '处理事务 / 照料顾客',
      },
      {
        phrase: 'attend to the details',
        meaning: 'pay close meticulous care to specific nuances',
        meaningCn: '关注并处理细节',
      }
    ],
    patterns: [
      {
        pattern: 'attend to + urgent matter / task',
        collocations: ['attend to some urgent business', 'attend to a guest']
      }
    ],
    examples: [
      {
        sentence: "Excuse me for a moment; I have an urgent phone call to attend to.",
        translationCn: "失陪一下，我有个紧急电话需要处理。"
      },
      {
        sentence: "The nurse will attend to your wound right away.",
        translationCn: "护士马上会来为你处理伤口。"
      }
    ],
    challenge: {
      scenarioEn: "You need to step away from a discussion to take care of an urgent task.",
      scenarioCn: "你想说：“我手头有个紧急的事情要先处理一下。”",
      targetConcept: "attend to an urgent matter"
    },
    answer: "I have a few urgent matters to attend to.",
    explanation: "'Attend to' is an elegant way to say 'deal with' or 'handle'.",
    explanationCn: "“attend to”比单纯说“handle”更显从容严谨。"
  },
  {
    id: 'back',
    number: 19,
    word: 'BACK',
    partOfSpeech: 'verb / noun / adjective',
    pronunciation: '/bæk/',
    teaser: '“I’ve got your back” offers stronger reassurance than any formal promise.',
    teaserCn: '一句 I\'ve got your back，胜过所有华丽承诺。',
    basicMeaning: 'back = the rear surface of the human body',
    basicMeaningCn: '背、背部、后方',
    additionalUsages: [
      {
        phrase: 'back someone / a project',
        meaning: 'financially support or endorse an initiative or person',
        meaningCn: '出资支持 / 力挺某人',
      },
      {
        phrase: 'back down',
        meaning: 'withdraw a claim, demand, or aggressive position',
        meaningCn: '让步、退缩、妥协',
      },
      {
        phrase: 'back up your files / arguments',
        meaning: 'make a copy or substantiate claims with evidence',
        meaningCn: '备份文件 / 提供证据支撑论点',
      }
    ],
    patterns: [
      {
        pattern: 'back + someone / idea',
        collocations: ['back the venture', 'backed by top investors', 'back each other up']
      }
    ],
    examples: [
      {
        sentence: "The startup is backed by several prominent venture firms.",
        translationCn: "这家初创公司得到了多家知名风投机构的支持。"
      },
      {
        sentence: "Always make sure you have data to back up your claims.",
        translationCn: "务必确保你有扎实的数据来支撑你的观点。"
      }
    ],
    challenge: {
      scenarioEn: "You want to promise your teammate: 'I will support you 100% in this meeting.'",
      scenarioCn: "你想给队友打气：“在会上我百分之百挺你。”",
      targetConcept: "back you up"
    },
    answer: "Don't worry, I've got your back.",
    explanation: "'Have someone's back' or 'back someone up' means full dependable support.",
    explanationCn: "“I've got your back / I'll back you up”是表达“我挺你”的黄金短语。"
  },
  {
    id: 'bail',
    number: 20,
    word: 'BAIL',
    partOfSpeech: 'verb / noun',
    pronunciation: '/beɪl/',
    teaser: 'Bailing on plans is how native speakers casually admit to canceling last-minute.',
    teaserCn: '聚会临时放鸽子爽约，老外第一反应是 bail。',
    basicMeaning: 'bail = money paid for temporary release of an accused person',
    basicMeaningCn: '保释、保释金',
    additionalUsages: [
      {
        phrase: 'bail on someone / plans',
        meaning: 'cancel plans at the last minute or abandon someone',
        meaningCn: '临阵放鸽子 / 爽约',
      },
      {
        phrase: 'bail someone out',
        meaning: 'rescue someone from a financial or difficult crisis',
        meaningCn: '拉某人一把 / 救急',
      }
    ],
    patterns: [
      {
        pattern: 'bail on + person / plans',
        collocations: ['sorry to bail on dinner', 'he bailed at the last second']
      }
    ],
    examples: [
      {
        sentence: "I'm so sorry to bail on our dinner tonight, but something came up.",
        translationCn: "真抱歉今晚的聚餐我要爽约了，突然有点急事。"
      },
      {
        sentence: "His parents had to bail him out after the studio venture failed.",
        translationCn: "工作室项目失败后，他父母不得不出面帮他收拾烂摊子。"
      }
    ],
    challenge: {
      scenarioEn: "You have to apologize to a friend because you can no longer make it to movie night.",
      scenarioCn: "你想给朋友发消息道歉：“抱歉今晚放你鸽子了。”",
      targetConcept: "bail on you tonight"
    },
    answer: "Sorry to bail on you tonight!",
    explanation: "'Bail on [someone]' is the exact natural idiom for canceling last-minute.",
    explanationCn: "“bail on someone”是母语者最常用来表示“放鸽子/临时爽约”的词。"
  },
  {
    id: 'balance',
    number: 21,
    word: 'BALANCE',
    partOfSpeech: 'noun / verb',
    pronunciation: '/ˈbæl.əns/',
    teaser: '“On balance” is the classic editorial phrase to summarize an overall judgment.',
    teaserCn: '“综合各方面来看”，可以用 on balance 开头。',
    basicMeaning: 'balance = an even distribution of weight enabling someone to remain steady',
    basicMeaningCn: '平衡、均衡',
    additionalUsages: [
      {
        phrase: 'balance work and life',
        meaning: 'keep different priorities in healthy equilibrium',
        meaningCn: '兼顾、平衡生活与工作',
      },
      {
        phrase: 'the balance of an amount',
        meaning: 'the remaining portion of money or time left unpaid/unused',
        meaningCn: '余款、结余、差额',
      },
      {
        phrase: 'on balance',
        meaning: 'taking everything into consideration overall',
        meaningCn: '综合来看 / 总的来说',
      }
    ],
    patterns: [
      {
        pattern: 'strike a balance between A and B',
        collocations: ['strike a fine balance', 'balance speed and precision']
      }
    ],
    examples: [
      {
        sentence: "We need to strike a balance between aesthetics and loading speed.",
        translationCn: "我们需要在美学设计与加载速度之间找到平衡点。"
      },
      {
        sentence: "On balance, the campaign was a huge step forward for the brand.",
        translationCn: "综合各方面来看，这次营销对品牌而言是一大跨越。"
      }
    ],
    challenge: {
      scenarioEn: "You want to advise a designer to find the middle ground between simplicity and depth.",
      scenarioCn: "你想建议设计师：“我们需要在极简与丰富度之间找到平衡。”",
      targetConcept: "strike a balance"
    },
    answer: "We need to strike a balance between simplicity and detail.",
    explanation: "'Strike a balance' is the refined idiom for harmonizing two opposing needs.",
    explanationCn: "“strike a balance”是表达“在两者之间求得平衡”的最优表达。"
  },
  {
    id: 'beat',
    number: 22,
    word: 'BEAT',
    partOfSpeech: 'verb / adjective',
    pronunciation: '/biːt/',
    teaser: '“I’m beat” captures deep after-work exhaustion far better than “tired.”',
    teaserCn: '下班说一句 I’m beat，比 I’m tired 传神太多。',
    basicMeaning: 'beat = strike repeatedly with hand or instrument',
    basicMeaningCn: '击打、敲打、心跳',
    additionalUsages: [
      {
        phrase: "can't beat that / it beats...",
        meaning: 'nothing is better than this / it is superior to another option',
        meaningCn: '没有比这更好的了 / 胜过……',
      },
      {
        phrase: "I'm beat",
        meaning: 'completely physically or mentally exhausted',
        meaningCn: '我累垮了 / 筋疲力尽',
      },
      {
        phrase: 'beat the traffic / rush',
        meaning: 'leave early to avoid crowded congestion',
        meaningCn: '避开交通早晚高峰',
      }
    ],
    patterns: [
      {
        pattern: "hard to beat + noun",
        collocations: ['hard to beat that price', 'hard to beat a hot shower after a workout']
      }
    ],
    examples: [
      {
        sentence: "Let's leave by 4 PM so we can beat the evening rush.",
        translationCn: "我们下午四点就出发吧，这样能避开晚高峰。"
      },
      {
        sentence: "Fresh coffee and morning silence—you really can't beat that.",
        translationCn: "新鲜咖啡加上清晨的宁静——没有什么比这更美妙的了。"
      }
    ],
    challenge: {
      scenarioEn: "After an 11-hour shift, you want to tell your friend you are totally exhausted.",
      scenarioCn: "加完一整天班，你想跟朋友说：“我今天实在累坏了。”",
      targetConcept: "I'm beat"
    },
    answer: "I'm beat tonight; let's talk tomorrow.",
    explanation: "'I'm beat' is the classic conversational way to express genuine weariness.",
    explanationCn: "口语中说“我累瘫了”，用“I'm beat”比“I am very tired”地道十倍。"
  },
  {
    id: 'bet',
    number: 23,
    word: 'BET',
    partOfSpeech: 'verb / noun',
    pronunciation: '/bet/',
    teaser: 'Recommending the smartest option? “Your best bet is...” opens the door perfectly.',
    teaserCn: '给人提最稳妥的建议，可以说 Your best bet is...。',
    basicMeaning: 'bet = risk a sum of money on the unpredictable outcome of an event',
    basicMeaningCn: '打赌、下注',
    additionalUsages: [
      {
        phrase: 'your best bet',
        meaning: 'the most sensible, reliable, or effective course of action',
        meaningCn: '你最好的选择 / 最稳妥的办法',
      },
      {
        phrase: 'I bet (that)...',
        meaning: "I'm quite sure / I strongly suspect that",
        meaningCn: '我敢肯定 / 我打包票',
      },
      {
        phrase: 'you bet!',
        meaning: 'enthusiastic agreement: certainly! / you are welcome!',
        meaningCn: '当然啦！/ 没问题！',
      }
    ],
    patterns: [
      {
        pattern: 'your best bet is to + verb',
        collocations: ['your best bet is to book early', 'your best bet is to take the subway']
      }
    ],
    examples: [
      {
        sentence: "If you want a table by the window, your best bet is to book days ahead.",
        translationCn: "如果你想坐靠窗的位置，最稳妥的办法是提前几天订位。"
      },
      {
        sentence: "I bet they announce the new product line next Tuesday.",
        translationCn: "我敢打包票他们下周二就会公布新产品线。"
      }
    ],
    challenge: {
      scenarioEn: "A tourist asks you how to reach the airport during rain. You recommend the train as the most reliable option.",
      scenarioCn: "你想建议对方：“遇到下雨天，坐机场快轨是你最稳妥的选择。”",
      targetConcept: "your best bet is..."
    },
    answer: "Your best bet is taking the express train.",
    explanation: "'Your best bet' is the natural, native phrase for recommending the optimal path.",
    explanationCn: "“Your best bet is...”是英语中最常用于给出最佳建议的习惯用语。"
  },
  {
    id: 'blank',
    number: 24,
    word: 'BLANK',
    partOfSpeech: 'adjective / verb',
    pronunciation: '/blæŋk/',
    teaser: '“I’m blanking on their name” is the gentlest way to admit a momentary slip.',
    teaserCn: '突然把熟人名字给忘了，可以用 blanking on。',
    basicMeaning: 'blank = bare, empty, or without writing',
    basicMeaningCn: '空白的、空的',
    additionalUsages: [
      {
        phrase: 'draw a blank',
        meaning: 'fail to recall a memory, name, or answer when trying hard',
        meaningCn: '脑子里一片空白 / 想不起来了',
      },
      {
        phrase: 'blank on a name',
        meaning: 'temporarily forget someone’s name in the moment',
        meaningCn: '突然把名字给忘了',
      },
      {
        phrase: 'blank look / stare',
        meaning: 'an expression showing no comprehension or emotion',
        meaningCn: '茫然的眼神 / 面无表情',
      }
    ],
    patterns: [
      {
        pattern: "I'm blanking on + noun",
        collocations: ["I'm totally blanking on his name", "blanking on the title"]
      }
    ],
    examples: [
      {
        sentence: "I know her face so well, but I'm completely blanking on her name right now.",
        translationCn: "我太认得她这张脸了，但眼下我脑子里完全想不起她的名字。"
      },
      {
        sentence: "When the interviewer asked about my past projects, I totally drew a blank.",
        translationCn: "当面试官问到我过去的项目时，我脑子里居然瞬间一片空白。"
      }
    ],
    challenge: {
      scenarioEn: "You run into an acquaintance, but your mind is empty of their name.",
      scenarioCn: "你想坦白说：“我突然一下子想不起你的名字了，真不好意思。”",
      targetConcept: "blanking on your name"
    },
    answer: "I'm so sorry, I'm completely blanking on your name.",
    explanation: "'Blanking on [name]' is the gentle, universally recognized way to admit momentary memory lapse.",
    explanationCn: "“I'm blanking on [something]”是表达“脑子短路、暂时断片”的地道说法。"
  },
  {
    id: 'break',
    number: 25,
    word: 'BREAK',
    partOfSpeech: 'verb / noun',
    pronunciation: '/breɪk/',
    teaser: '“Give them a break” is the timeless conversational call for leniency.',
    teaserCn: '“得饶人处且饶人”，英文叫 Give someone a break。',
    basicMeaning: 'break = separate into pieces as a result of a blow or shock',
    basicMeaningCn: '打破、弄碎',
    additionalUsages: [
      {
        phrase: 'break the news to someone',
        meaning: 'inform someone gently about sensitive or unfortunate information',
        meaningCn: '委婉告知（重要或沉重消息）',
      },
      {
        phrase: 'give someone a break',
        meaning: 'stop criticizing or demanding so much from someone',
        meaningCn: '放过某人 / 别太苛责了',
      },
      {
        phrase: 'break even',
        meaning: 'reach a point where revenue equals expenses',
        meaningCn: '收支平衡 / 保本',
      }
    ],
    patterns: [
      {
        pattern: 'break the news gently',
        collocations: ['break the bad news', 'how should we break the news?']
      },
      {
        pattern: 'break down',
        collocations: ['break down the costs', 'break it into smaller tasks']
      }
    ],
    examples: [
      {
        sentence: "Who is going to break the news to the rest of the crew?",
        translationCn: "谁来把这个消息告诉团队的其他成员？"
      },
      {
        sentence: "Let's break the project down into three manageable phases.",
        translationCn: "我们把这个项目拆解成三个易于执行的阶段吧。"
      }
    ],
    challenge: {
      scenarioEn: "A team member is beating themselves up over a tiny slip. You tell others to cut them some slack.",
      scenarioCn: "你想劝其他人：“别太苛求他了，他还是个新手。”",
      targetConcept: "give him a break"
    },
    answer: "Give him a break, it's only his first week.",
    explanation: "'Give someone a break' is the standard phrase for urging compassion and leniency.",
    explanationCn: "“Give [someone] a break”常用于劝解“得饶人处且饶人/别太为难他”。"
  }
];
