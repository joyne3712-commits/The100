import { WordEntry } from '../types';

export const wordsBatch3: WordEntry[] = [
  {
    id: 'buy',
    number: 26,
    word: 'BUY',
    partOfSpeech: 'verb',
    pronunciation: '/baɪ/',
    teaser: '“I don’t buy it” is the cleanest way to say you’re completely unconvinced.',
    teaserCn: '“我不信你的鬼话”，随口一句 I don\'t buy it。',
    basicMeaning: 'buy = obtain in exchange for payment',
    basicMeaningCn: '购买、买下',
    additionalUsages: [
      {
        phrase: "buy an excuse / story",
        meaning: 'believe or accept that an explanation is true',
        meaningCn: '相信某种托辞或说辞 / 买账',
      },
      {
        phrase: 'buy some time',
        meaning: 'delay an event to gain extra preparation time',
        meaningCn: '争取更多时间 / 拖延时间',
      },
      {
        phrase: 'buy into an idea',
        meaning: 'wholeheartedly adopt or support a vision or philosophy',
        meaningCn: '认同并支持某种理念',
      }
    ],
    patterns: [
      {
        pattern: "I don't buy it",
        collocations: ["nobody's going to buy that excuse", "do you buy his story?"]
      },
      {
        pattern: "buy + time",
        collocations: ["buy us a few extra hours", "buy some breathing room"]
      }
    ],
    examples: [
      {
        sentence: "He said the train was delayed, but I'm not sure I buy it.",
        translationCn: "他说火车晚点了，但我不太相信这个借口。"
      },
      {
        sentence: "Pushing the deadline back will buy us some time to polish the UI.",
        translationCn: "推迟截止日期能为我们争取一些打磨UI界面的时间。"
      }
    ],
    challenge: {
      scenarioEn: "Someone gives a sketchy explanation for their absence, and you're skeptical.",
      scenarioCn: "你想表示怀疑：“我不信这套说辞。”",
      targetConcept: "I don't buy it"
    },
    answer: "Honestly, I don't buy it.",
    explanation: "'I don't buy it' means 'I am not convinced by this explanation.'",
    explanationCn: "“I don't buy it”是口语中表达“我才不信这套说辞/我不买账”的标准说法。"
  },
  {
    id: 'call',
    number: 27,
    word: 'CALL',
    partOfSpeech: 'noun / verb',
    pronunciation: '/kɔːl/',
    teaser: 'Leaving the final choice entirely up to someone else? “It’s your call.”',
    teaserCn: '把选择权交给对方：“你说了算”，就是 It\'s your call。',
    basicMeaning: 'call = contact someone by telephone or cry out',
    basicMeaningCn: '打电话、呼叫',
    additionalUsages: [
      {
        phrase: 'your call / tough call',
        meaning: 'your decision to make / a difficult judgment to render',
        meaningCn: '由你决定 / 艰难的抉择',
      },
      {
        phrase: 'call off',
        meaning: 'cancel an event or organized match',
        meaningCn: '取消活动',
      },
      {
        phrase: 'call someone out',
        meaning: 'publicly challenge or expose someone’s misconduct',
        meaningCn: '当面指出、公开批评',
      }
    ],
    patterns: [
      {
        pattern: "it's your call",
        collocations: ["good call", "close call", "tough call to make"]
      }
    ],
    examples: [
      {
        sentence: "We can take the subway or grab a cab—it's totally your call.",
        translationCn: "我们可以坐地铁也可以打车——完全由你决定。"
      },
      {
        sentence: "Booking the tickets early was definitely a good call.",
        translationCn: "早点订票绝对是个明智的决定。"
      }
    ],
    challenge: {
      scenarioEn: "You leave the final choice of restaurant entirely up to your friend.",
      scenarioCn: "你想对朋友说：“去哪家吃你说了算，听你的。”",
      targetConcept: "it's your call"
    },
    answer: "Wherever you want to go, it's your call.",
    explanation: "'It's your call' is the ultimate natural idiom for 'It is your decision.'",
    explanationCn: "“It's your call”是日常交流中表示“由你做主/听你的”最地道用法。"
  },
  {
    id: 'catch',
    number: 28,
    word: 'CATCH',
    partOfSpeech: 'verb / noun',
    pronunciation: '/kætʃ/',
    teaser: '“I didn’t catch that” sounds far more contemporary than asking someone to repeat themselves.',
    teaserCn: '没听清别人说话，I didn\'t catch that 比 Pardon 自然。',
    basicMeaning: 'catch = intercept and hold something that is moving',
    basicMeaningCn: '接住、抓住',
    additionalUsages: [
      {
        phrase: "what's the catch?",
        meaning: 'what is the hidden drawback, trap, or condition?',
        meaningCn: '有什么猫腻 / 隐性条件？',
      },
      {
        phrase: 'catch up with someone',
        meaning: 'talk with someone to learn their recent news',
        meaningCn: '与久别的朋友叙旧 / 了解近况',
      },
      {
        phrase: "I didn't catch that",
        meaning: "I couldn't hear or understand what you just said",
        meaningCn: '我刚才没听清/没听懂',
      }
    ],
    patterns: [
      {
        pattern: "catch someone's eye / attention",
        collocations: ['caught my eye', 'catch your drift', 'catch some sleep']
      }
    ],
    examples: [
      {
        sentence: "The deal seems too good to be true. What's the catch?",
        translationCn: "这优惠好得难以置信，背后有什么隐藏猫腻吗？"
      },
      {
        sentence: "Sorry, the train was loud—I didn't catch what you said.",
        translationCn: "不好意思，刚才车厢太吵了，我没听清你说的话。"
      }
    ],
    challenge: {
      scenarioEn: "In a meeting, you need someone to repeat what they said because their microphone cut out.",
      scenarioCn: "你想礼貌说：“不好意思，刚才那句我没听清。”",
      targetConcept: "I didn't catch that"
    },
    answer: "Sorry, I didn't quite catch that. Could you say it again?",
    explanation: "'I didn't catch that' is conversational, natural, and polite.",
    explanationCn: "“I didn't catch that”比老套的“Pardon?”更加自然日常。"
  },
  {
    id: 'check',
    number: 29,
    word: 'CHECK',
    partOfSpeech: 'verb / noun',
    pronunciation: '/tʃek/',
    teaser: '“Just checking in” is the warmest, lowest-pressure way to ask for an update.',
    teaserCn: '职场发消息问候“进展如何”，常用 check in。',
    basicMeaning: 'check = examine something to determine its accuracy or condition',
    basicMeaningCn: '检查、核对、账单',
    additionalUsages: [
      {
        phrase: 'check in with someone',
        meaning: 'briefly talk or message someone to see how they are doing',
        meaningCn: '打个招呼 / 跟进问候一下',
      },
      {
        phrase: 'check out (a movie / place)',
        meaning: 'go visit, look at, or experience something interesting',
        meaningCn: '去瞅瞅 / 体验看看',
      },
      {
        phrase: 'keep something in check',
        meaning: 'keep something from growing out of control',
        meaningCn: '控制住、遏制蔓延',
      }
    ],
    patterns: [
      {
        pattern: 'check in on + person',
        collocations: ['check in with the team', 'check in next Monday']
      }
    ],
    examples: [
      {
        sentence: "I just wanted to check in and see how the launch preparations are going.",
        translationCn: "我只是想来问候一下，看看上线准备进展得怎么样了。"
      },
      {
        sentence: "You should definitely check out that new bookstore around the corner.",
        translationCn: "你一定要去拐角那家新书店逛逛看。"
      }
    ],
    challenge: {
      scenarioEn: "You message a remote coworker just to see how they are holding up.",
      scenarioCn: "你想发消息说：“发条消息问候一下，看看你最近怎么样。”",
      targetConcept: "just checking in"
    },
    answer: "Just checking in to see how you're doing!",
    explanation: "'Check in' is the standard low-pressure check-up greeting in modern work.",
    explanationCn: "“Just checking in...”是现代职场与人际交往中最常用的暖心跟进语。"
  },
  {
    id: 'clear',
    number: 30,
    word: 'CLEAR',
    partOfSpeech: 'adjective / verb',
    pronunciation: '/klɪər/',
    teaser: '“Clear the air” dissolves unspoken tension and misunderstandings smoothly.',
    teaserCn: '“把话说明白、解开误会”，就叫 clear the air。',
    basicMeaning: 'clear = transparent or unclouded',
    basicMeaningCn: '清澈的、清晰的',
    additionalUsages: [
      {
        phrase: 'clear your schedule / head',
        meaning: 'remove appointments or take a break to regain mental clarity',
        meaningCn: '清空日程 / 清醒一下头脑',
      },
      {
        phrase: 'clear the air',
        meaning: 'talk openly to resolve mutual tension or misunderstandings',
        meaningCn: '消除隔阂 / 澄清误会',
      },
      {
        phrase: 'make yourself clear',
        meaning: 'ensure that your instructions or stance are completely understood',
        meaningCn: '把话挑明 / 确保表达清楚',
      }
    ],
    patterns: [
      {
        pattern: 'clear up + misunderstanding / mess',
        collocations: ['clear things up', 'let me clear this up']
      }
    ],
    examples: [
      {
        sentence: "Let's grab a coffee and clear the air about yesterday's disagreement.",
        translationCn: "我们去喝杯咖啡，把昨天的误会好好聊开。"
      },
      {
        sentence: "I need to take a quick walk to clear my head.",
        translationCn: "我需要出去走走，清醒一下脑子。"
      }
    ],
    challenge: {
      scenarioEn: "There was some tension in the project team, and you want to propose an open discussion to resolve it.",
      scenarioCn: "你想提议：“我们找个时间好好聊聊，把误会解开。”",
      targetConcept: "clear the air"
    },
    answer: "Let's sit down and clear the air.",
    explanation: "'Clear the air' resolves lingering awkwardness or unspoken tension smoothly.",
    explanationCn: "“clear the air”是表达“消除误会、把话说开”的高级地道成语。"
  }
];

export const wordsBatch4: WordEntry[] = [
  {
    id: 'cover',
    number: 31,
    word: 'COVER',
    partOfSpeech: 'verb / noun',
    pronunciation: '/ˈkʌv.ər/',
    teaser: 'Generously taking care of the bill for a friend: “I’ll cover this.”',
    teaserCn: '朋友聚餐想霸气买单，来一句 I\'ll cover this。',
    basicMeaning: 'cover = put something over on top of something else',
    basicMeaningCn: '覆盖、盖上、遮掩',
    additionalUsages: [
      {
        phrase: "I'll cover this / cover the bill",
        meaning: 'pay for someone else’s meal or ticket',
        meaningCn: '这顿我请 / 我来买单',
      },
      {
        phrase: 'cover for someone',
        meaning: 'take over someone’s shift or provide an alibi while they are away',
        meaningCn: '替某人顶班 / 帮某人打掩护',
      },
      {
        phrase: 'cover a topic / ground',
        meaning: 'discuss or include important subject matter in a session',
        meaningCn: '涵盖、讨论到某主题',
      }
    ],
    patterns: [
      {
        pattern: 'cover + bill / costs',
        collocations: ['I got it covered', 'we have a lot of ground to cover today']
      }
    ],
    examples: [
      {
        sentence: "Put your wallet away; I'll cover lunch today.",
        translationCn: "把钱包收起来，今天午饭我来请。"
      },
      {
        sentence: "Could you cover for me for thirty minutes while I pick up my prescription?",
        translationCn: "你能帮我顶班半小时吗？我得去拿个药。"
      }
    ],
    challenge: {
      scenarioEn: "You are having lunch with a friend and want to treat them.",
      scenarioCn: "你想大方地说：“这顿我来买单 / 我请客。”",
      targetConcept: "I'll cover this"
    },
    answer: "Put your card away, I'll cover this.",
    explanation: "'I'll cover this' is casual, generous, and universally used among friends.",
    explanationCn: "“I'll cover this / I've got this covered”是母语者请客买单时最自然的说法。"
  },
  {
    id: 'cut',
    number: 32,
    word: 'CUT',
    partOfSpeech: 'verb / noun',
    pronunciation: '/kʌt/',
    teaser: '“Cut to the chase” bypasses small talk and gets straight to the bottom line.',
    teaserCn: '开会别绕弯子，“直接切入正题”叫 cut to the chase。',
    basicMeaning: 'cut = divide with a sharp tool',
    basicMeaningCn: '切、剪、割伤',
    additionalUsages: [
      {
        phrase: 'cut to the chase',
        meaning: 'skip all fluff and come directly to the main point',
        meaningCn: '开门见山 / 直奔主题',
      },
      {
        phrase: "cut someone some slack",
        meaning: 'treat someone with leniency and not judge them too strictly',
        meaningCn: '宽容一些 / 给点喘息余地',
      },
      {
        phrase: "it doesn't cut it",
        meaning: 'it is inadequate or not satisfactory for the standard required',
        meaningCn: '这还远远不够 / 达不到标准',
      }
    ],
    patterns: [
      {
        pattern: 'cut out + bad habit / noise',
        collocations: ['cut out sugar', 'cut it out!', 'cut out distractions']
      }
    ],
    examples: [
      {
        sentence: "We don't have much time, so let's cut right to the chase.",
        translationCn: "我们时间不多了，直接开门见山切入重点吧。"
      },
      {
        sentence: "A simple apology isn't going to cut it this time.",
        translationCn: "这次光是一句道歉可解决不了问题。"
      }
    ],
    challenge: {
      scenarioEn: "You want a speaker to skip the lengthy introduction and get to the numbers.",
      scenarioCn: "你想说：“我们直接切入正题吧。”",
      targetConcept: "cut to the chase"
    },
    answer: "Let's cut to the chase and look at the numbers.",
    explanation: "'Cut to the chase' originated in early cinema editing and is now standard conversational English.",
    explanationCn: "“cut to the chase”是英语中表达“直奔主题、别绕弯子”的经典名句。"
  },
  {
    id: 'draw',
    number: 33,
    word: 'DRAW',
    partOfSpeech: 'verb / noun',
    pronunciation: '/drɔː/',
    teaser: 'Establishing firm personal boundaries is effortlessly captured by “drawing the line.”',
    teaserCn: '确立原则和底线，英文习惯说 draw the line。',
    basicMeaning: 'draw = produce a picture or diagram by making marks on paper',
    basicMeaningCn: '画画、素描、拉动',
    additionalUsages: [
      {
        phrase: 'draw a conclusion',
        meaning: 'arrive at a judgment based on reasoned evidence',
        meaningCn: '得出结论',
      },
      {
        phrase: 'draw the line',
        meaning: 'set a strict limit on what is acceptable behavior',
        meaningCn: '划定底线 / 适可而止',
      },
      {
        phrase: 'draw inspiration / attention',
        meaning: 'attract or extract creativity or gaze from a source',
        meaningCn: '汲取灵感 / 吸引目光',
      }
    ],
    patterns: [
      {
        pattern: 'draw + line / boundary',
        collocations: ['draw the line at dishonesty', 'where do we draw the line?']
      }
    ],
    examples: [
      {
        sentence: "I'm willing to help over the weekend, but I draw the line at working past midnight.",
        translationCn: "我愿意周末帮忙，但我的底线是绝不加班超过午夜。"
      },
      {
        sentence: "The exhibition drew thousands of visitors in its opening week.",
        translationCn: "该展览在开幕首周吸引了数千名观众。"
      }
    ],
    challenge: {
      scenarioEn: "You want to say: 'I can tolerate mistakes, but I draw the line at dishonesty.'",
      scenarioCn: "你想确立自己的底线：“我能容忍失误，但我绝不接受不诚实。”",
      targetConcept: "draw the line at..."
    },
    answer: "I draw the line at dishonesty.",
    explanation: "'Draw the line at' clearly and firmly demarcates an absolute boundary.",
    explanationCn: "“draw the line at [something]”是设立个人底线的最有力表达。"
  },
  {
    id: 'drop',
    number: 34,
    word: 'DROP',
    partOfSpeech: 'verb / noun',
    pronunciation: '/drɒp/',
    teaser: 'Dropping a quick message or dropping by unannounced keeps friendships effortless.',
    teaserCn: '发信息打招呼或顺路串门，drop 特别接地气。',
    basicMeaning: 'drop = let or make fall vertically',
    basicMeaningCn: '落下、掉下、水滴',
    additionalUsages: [
      {
        phrase: 'drop someone a line / message',
        meaning: 'send someone a quick short note or text',
        meaningCn: '给某人留个言 / 发个简讯',
      },
      {
        phrase: 'drop by / drop in',
        meaning: 'pay a brief casual visit without strict notice',
        meaningCn: '顺道拜访 / 串门',
      },
      {
        phrase: 'drop the subject',
        meaning: 'stop discussing a sensitive or awkward topic',
        meaningCn: '别再提这事了 / 打住话头',
      },
      {
        phrase: 'drop a new album / product',
        meaning: 'release a new creative work or merchandise to the public',
        meaningCn: '发布新专辑 / 推出新品',
      }
    ],
    patterns: [
      {
        pattern: 'drop by + place',
        collocations: ['drop by the office', 'drop by anytime', 'drop off the package']
      }
    ],
    examples: [
      {
        sentence: "Drop me a message whenever you land at the airport.",
        translationCn: "你落地机场后随时给我发个消息。"
      },
      {
        sentence: "Let's just drop the subject and enjoy our dinner.",
        translationCn: "我们别提那档子事了，好好吃晚餐吧。"
      }
    ],
    challenge: {
      scenarioEn: "An argument is getting heated over an old topic. You suggest dropping it.",
      scenarioCn: "你想劝大家：“我们就此打住吧，别再争了。”",
      targetConcept: "drop the subject"
    },
    answer: "Let's just drop it and move on.",
    explanation: "'Drop it' immediately signals a polite ceasefire on a contentious topic.",
    explanationCn: "“Let's just drop it”用于平息争端、不再深究某话题。"
  },
  {
    id: 'fair',
    number: 35,
    word: 'FAIR',
    partOfSpeech: 'adjective / noun',
    pronunciation: '/feər/',
    teaser: '“Fair point” concedes an argument with grace and zero defensiveness.',
    teaserCn: '职场承认对方说得在理，脱口而出 Fair point。',
    basicMeaning: 'fair = treating people equally without favoritism',
    basicMeaningCn: '公平的、合理的',
    additionalUsages: [
      {
        phrase: 'fair enough',
        meaning: 'acknowledging that a point or request is reasonable',
        meaningCn: '行吧，有道理 / 合情合理',
      },
      {
        phrase: 'a fair amount / share of',
        meaning: 'a considerable quantity or proportion',
        meaningCn: '相当可观的量 / 不少',
      },
      {
        phrase: 'fair point',
        meaning: 'valid argument raised during a discussion',
        meaningCn: '你说得在理 / 确实有道理',
      }
    ],
    patterns: [
      {
        pattern: 'fair enough',
        collocations: ["fair enough, let's do it", "that's a fair point"]
      }
    ],
    examples: [
      {
        sentence: "If you'd rather walk than take the bus, fair enough—let's walk.",
        translationCn: "如果你想走路而不是坐公交，那行吧——我们走过去。"
      },
      {
        sentence: "That's a fair point; I hadn't thought about user latency.",
        translationCn: "你说得确实有道理，我之前确实没考虑用户网络延迟。"
      }
    ],
    challenge: {
      scenarioEn: "Your colleague points out a logical flaw in your proposal, and you agree with their reasoning.",
      scenarioCn: "你想大度地回应：“你说得确实很有道理。”",
      targetConcept: "fair point / fair enough"
    },
    answer: "Fair point. Let's adjust the plan.",
    explanation: "'Fair point' concedes an argument gracefully without defensiveness.",
    explanationCn: "“Fair point”是职场讨论中承认对方有理最优雅从容的用语。"
  },
  {
    id: 'hold',
    number: 36,
    word: 'HOLD',
    partOfSpeech: 'verb / noun',
    pronunciation: '/həʊld/',
    teaser: 'Ordering food without pickles or onions? “Hold the sauce” is native dining shorthand.',
    teaserCn: '点餐时想说“不要放洋葱”，记得用 hold the onions。',
    basicMeaning: 'hold = grasp, carry, or support with one’s hands or arms',
    basicMeaningCn: '拿住、握住、支撑',
    additionalUsages: [
      {
        phrase: 'hold on a second',
        meaning: 'wait briefly',
        meaningCn: '稍等一下',
      },
      {
        phrase: 'hold up',
        meaning: 'remain strong and in good condition / delay traffic or progress',
        meaningCn: '经受住考验 / 耽搁',
      },
      {
        phrase: 'hold against someone',
        meaning: 'blame or hold a grudge against someone for a past mistake',
        meaningCn: '记仇 / 归咎于某人',
      },
      {
        phrase: 'hold the onions / sauce',
        meaning: 'order food asking to omit a specific ingredient',
        meaningCn: '不要放洋葱 / 酱料',
      }
    ],
    patterns: [
      {
        pattern: 'hold on + time',
        collocations: ['hold on a minute', 'hold tight', 'put on hold']
      }
    ],
    examples: [
      {
        sentence: "I'll have a cheeseburger, but please hold the pickles.",
        translationCn: "我要一份芝士汉堡，请不要放酸黄瓜。"
      },
      {
        sentence: "I made a mistake earlier, but she didn't hold it against me.",
        translationCn: "我之前犯了个错，但她并没有因此记我的仇。"
      }
    ],
    challenge: {
      scenarioEn: "When ordering at a cafe or deli, you want your sandwich without mustard.",
      scenarioCn: "点餐时你想说：“三明治不要放芥末酱。”",
      targetConcept: "hold the mustard"
    },
    answer: "Can I get the turkey sandwich, but hold the mustard?",
    explanation: "'Hold the [ingredient]' is native restaurant shorthand for 'leave it off'.",
    explanationCn: "在欧美餐厅点餐，“hold the [配料]”是表达“不加某配料”最地道的说法。"
  },
  {
    id: 'line',
    number: 37,
    word: 'LINE',
    partOfSpeech: 'noun / verb',
    pronunciation: '/laɪn/',
    teaser: 'When plans align seamlessly with your overarching vision, they are “in line.”',
    teaserCn: '方案与愿景高度契合，可以用 in line with。',
    basicMeaning: 'line = a long narrow mark or queue of people',
    basicMeaningCn: '线条、排队',
    additionalUsages: [
      {
        phrase: 'in line with',
        meaning: 'consistent with or matching standards / expectations',
        meaningCn: '与……相符合 / 一致',
      },
      {
        phrase: 'on the line',
        meaning: 'at serious risk of being lost (reputation, job, life)',
        meaningCn: '冒着风险 / 处于紧要关头',
      },
      {
        phrase: 'read between the lines',
        meaning: 'perceive subtle implied meaning that is not spoken directly',
        meaningCn: '读出字里行间的潜台词',
      }
    ],
    patterns: [
      {
        pattern: 'draw the line / in line with',
        collocations: ['in line with our values', 'my reputation is on the line']
      }
    ],
    examples: [
      {
        sentence: "Our quarterly performance was totally in line with expectations.",
        translationCn: "我们季度的表现完全符合预期。"
      },
      {
        sentence: "With millions of dollars on the line, we had to be cautious.",
        translationCn: "由于押上了数百万美元的利益，我们必须格外谨慎。"
      }
    ],
    challenge: {
      scenarioEn: "You want to confirm that a proposed strategy matches company principles.",
      scenarioCn: "你想确认：“这个方案与我们的长期愿景是一致的。”",
      targetConcept: "in line with our vision"
    },
    answer: "This is completely in line with our long-term vision.",
    explanation: "'In line with' is the premier phrasing for alignment in business and design.",
    explanationCn: "“in line with”是表达“符合、与……一致”最地道严谨的短语。"
  },
  {
    id: 'nail',
    number: 38,
    word: 'NAIL',
    partOfSpeech: 'noun / verb',
    pronunciation: '/neɪl/',
    teaser: 'Executing a pitch or interview with total perfection? “You nailed it!”',
    teaserCn: '夸别人面试发挥超神：“You nailed it!”',
    basicMeaning: 'nail = small metal spike or the horn covering on fingertips',
    basicMeaningCn: '钉子、指甲',
    additionalUsages: [
      {
        phrase: 'nail it / nail the interview',
        meaning: 'perform something perfectly with total success',
        meaningCn: '表现完美 / 顺利搞定',
      },
      {
        phrase: 'nail down the details / dates',
        meaning: 'finalize and confirm precise specifications or plans',
        meaningCn: '敲定细节 / 定下最终日期',
      }
    ],
    patterns: [
      {
        pattern: 'nail down + specifics',
        collocations: ['nail down a time', 'nailed the presentation', 'nail the pitch']
      }
    ],
    examples: [
      {
        sentence: "You completely nailed that keynote presentation!",
        translationCn: "你刚才那场主题演讲发挥得太棒了，完全征服了全场！"
      },
      {
        sentence: "Let's hop on a call tomorrow to nail down the contract terms.",
        translationCn: "我们明天通个电话把合同条款敲定下来吧。"
      }
    ],
    challenge: {
      scenarioEn: "A friend was nervous about a job interview, and afterward you want to ask if they crushed it.",
      scenarioCn: "你想鼓励并赞叹：“你面试发挥得太出色了！”",
      targetConcept: "you nailed it"
    },
    answer: "You totally nailed it!",
    explanation: "'You nailed it' is the highest casual compliment for executing flawlessly.",
    explanationCn: "“You nailed it!”是表达“你做得太棒了/完全搞定了”最经典的口语赞赏。"
  },
  {
    id: 'pass',
    number: 39,
    word: 'PASS',
    partOfSpeech: 'verb / noun',
    pronunciation: '/pɑːs/',
    teaser: 'Politely declining without over-explaining: “I think I’ll pass.”',
    teaserCn: '优雅婉拒邀约或点心，说一句 I\'ll pass 就够了。',
    basicMeaning: 'pass = move past or succeed in a formal test',
    basicMeaningCn: '通过、传递、经过',
    additionalUsages: [
      {
        phrase: "I'll pass (on this)",
        meaning: 'politely decline an offer, invitation, or dish',
        meaningCn: '我就不去了 / 谢谢好意，我就算了',
      },
      {
        phrase: 'pass out / pass away',
        meaning: 'faint from fatigue / euphemism for dying',
        meaningCn: '昏倒断片 / 逝世',
      },
      {
        phrase: 'pass up an opportunity',
        meaning: 'fail to take advantage of a valuable chance',
        meaningCn: '错失良机 / 放弃大好机会',
      }
    ],
    patterns: [
      {
        pattern: "I think I'll pass on + noun",
        collocations: ["I'll pass on dessert", "too good to pass up", "pass on the drinks tonight"]
      }
    ],
    examples: [
      {
        sentence: "Thanks for inviting me for drinks, but I think I'll pass tonight—I need sleep.",
        translationCn: "谢谢邀请我喝一杯，但我今晚就不去了——我得补觉。"
      },
      {
        sentence: "An offer like this was simply too good to pass up.",
        translationCn: "这样的好机会简直让人无法拒绝。"
      }
    ],
    challenge: {
      scenarioEn: "Colleagues ask if you want to join an optional karaoke night, but you want to politely decline.",
      scenarioCn: "你想礼貌婉拒：“我今晚就不去了，谢谢大家。”",
      targetConcept: "I think I'll pass tonight"
    },
    answer: "Thanks guys, but I think I'll pass tonight.",
    explanation: "'I'll pass' is the cleanest, most natural way to decline without awkward over-explaining.",
    explanationCn: "“I think I'll pass”是拒绝邀请最得体自然、不伤和气的表达。"
  },
  {
    id: 'run',
    number: 40,
    word: 'RUN',
    partOfSpeech: 'verb / noun',
    pronunciation: '/rʌn/',
    teaser: 'Vetting a draft concept with your team: “Let me run this by you.”',
    teaserCn: '找人碰想法、过方案，老外极爱说 run this by you。',
    basicMeaning: 'run = move at a speed faster than a walk',
    basicMeaningCn: '跑步、奔跑',
    additionalUsages: [
      {
        phrase: 'run a business / team',
        meaning: 'manage, direct, or operate an organization',
        meaningCn: '经营企业 / 管理团队',
      },
      {
        phrase: 'run out of something',
        meaning: 'use up all of a supply so that none is left',
        meaningCn: '用光、耗尽（咖啡、电量、耐心）',
      },
      {
        phrase: 'run something by someone',
        meaning: 'tell someone an idea to get their feedback or approval',
        meaningCn: '跟某人过一遍想法 / 征求意见',
      },
      {
        phrase: 'in the long run',
        meaning: 'over a lengthy period of time or ultimately in future',
        meaningCn: '从长远来看',
      }
    ],
    patterns: [
      {
        pattern: 'run + noun + by someone',
        collocations: ['run an idea by you', 'let me run this by my manager']
      }
    ],
    examples: [
      {
        sentence: "Do you have five minutes? I want to run a quick concept by you.",
        translationCn: "你有五分钟时间吗？我想跟你简单碰一下这个概念。"
      },
      {
        sentence: "Investing in higher quality materials pays off in the long run.",
        translationCn: "从长远来看，投资更高质量的原材料是完全值得的。"
      }
    ],
    challenge: {
      scenarioEn: "You came up with a draft proposal and want to show it to your manager for initial feedback.",
      scenarioCn: "你想对主管说：“在定稿之前，我想先跟您过一下这个思路。”",
      targetConcept: "run this by you"
    },
    answer: "I'd love to run this idea by you before finalizing.",
    explanation: "'Run [idea] by [someone]' is the universal corporate and creative phrase for vetting thoughts.",
    explanationCn: "“run something by someone”是请人把关思路、过一遍方案的标准地道用语。"
  }
];
