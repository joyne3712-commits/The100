import { WordEntry } from '../types';

export const wordsBatch1: WordEntry[] = [
  {
    id: 'access',
    number: 1,
    word: 'ACCESS',
    partOfSpeech: 'verb / noun',
    pronunciation: '/ˈæk.ses/',
    teaser: 'Having direct access to someone means they’ll actually take your call.',
    teaserCn: '想表达“能直接跟大佬说上话”，可以用它。',
    basicMeaning: 'access = enter a place or open a computer file / website',
    basicMeaningCn: '进入某地、打开文件或网页',
    additionalUsages: [
      {
        phrase: 'access funds / capital',
        meaning: 'withdraw or get usable money or financial support',
        meaningCn: '支取资金 / 获得流动资金',
      },
      {
        phrase: 'access healthcare / education',
        meaning: 'be able to reach and use essential social services',
        meaningCn: '享受到医疗或教育资源',
      },
      {
        phrase: 'have access to someone',
        meaning: 'have the opportunity to speak with or reach an influential person',
        meaningCn: '能接触到某位重要人物',
      }
    ],
    patterns: [
      {
        pattern: 'access + essential resource',
        collocations: ['access clean water', 'access legal aid', 'access mental health support', 'access your account']
      },
      {
        pattern: 'gain / have access to + place or person',
        collocations: ['have direct access to the CEO', 'gain access to the archives', 'restricted access']
      }
    ],
    examples: [
      {
        sentence: "Millions of rural families still struggle to access high-speed internet.",
        translationCn: "数百万农村家庭依然难以获得高速网络服务。"
      },
      {
        sentence: "The project gives young creators direct access to industry mentors.",
        translationCn: "该项目让年轻创作者能够直接接触到行业导师。"
      },
      {
        sentence: "You won't be able to access your funds until the transfer clears.",
        translationCn: "在转账完成之前，你将无法支取这笔款项。"
      }
    ],
    challenge: {
      scenarioEn: "You want to tell your colleague that junior designers can now talk directly with the creative director.",
      scenarioCn: "你想告诉同事：初级设计师现在可以直接接触到创意总监了。",
      targetConcept: "have access to someone"
    },
    answer: "Junior designers now have direct access to the creative director.",
    explanation: "'have access to [someone]' naturally expresses having direct communication or an open channel with someone influential.",
    explanationCn: "使用“have direct access to [someone]”可以地道表达能够直接接触、请教某位重要人物。"
  },
  {
    id: 'afford',
    number: 2,
    word: 'AFFORD',
    partOfSpeech: 'verb',
    pronunciation: '/əˈfɔːd/',
    teaser: 'Afford isn’t always about money — you can’t afford the mistake either.',
    teaserCn: 'afford 后面不一定非得接钱。',
    basicMeaning: 'afford = have enough money to pay for something',
    basicMeaningCn: '有足够的钱买某物',
    additionalUsages: [
      {
        phrase: "can't afford the time / to waste time",
        meaning: 'cannot risk losing precious time before a deadline',
        meaningCn: '经不起浪费时间 / 没时间耗',
      },
      {
        phrase: "can't afford to make a mistake",
        meaning: 'the risk or consequence of an error is too severe',
        meaningCn: '承受不起犯错的后果',
      },
      {
        phrase: 'afford an opportunity / view',
        meaning: 'formal: provide, offer, or yield something valuable',
        meaningCn: '提供、赋予（机会、视野）',
      }
    ],
    patterns: [
      {
        pattern: "can't afford + to do something",
        collocations: ["can't afford to lose this client", "can't afford to get sick right now", "can't afford to be careless"]
      },
      {
        pattern: "can ill afford + noun",
        collocations: ["can ill afford any delays", "can ill afford another setback"]
      }
    ],
    examples: [
      {
        sentence: "With the launch tomorrow, we really can't afford any mistakes.",
        translationCn: "明天就要上线了，我们真的经不起任何闪失。"
      },
      {
        sentence: "I can't afford to take three days off this week.",
        translationCn: "我这周实在抽不出（耽误不起）三天时间休假。"
      },
      {
        sentence: "The balcony affords a panoramic view of the harbor.",
        translationCn: "阳台提供了眺望海港的全景视野。"
      }
    ],
    challenge: {
      scenarioEn: "You want to warn your teammate: 'We really cannot afford to lose this customer.'",
      scenarioCn: "你想提醒队友：“我们绝承受不起失去这位客户的代价。”",
      targetConcept: "can't afford to lose"
    },
    answer: "We really can't afford to lose this client.",
    explanation: "'can't afford to [verb]' is standard spoken English for expressing that an outcome is too risky or damaging to allow.",
    explanationCn: "“can't afford to do something”常用于表达“承担不起做某事的后果”，不局限于金钱。"
  },
  {
    id: 'bother',
    number: 3,
    word: 'BOTHER',
    partOfSpeech: 'verb / noun',
    pronunciation: '/ˈbɒð.ər/',
    teaser: '“Don’t bother” is the ultimate polite way to say “no need to go out of your way.”',
    teaserCn: '“不用麻烦了”，其实经常就是 Don\'t bother。',
    basicMeaning: 'bother = irritate, annoy, or interrupt someone',
    basicMeaningCn: '打扰、惹恼某人',
    additionalUsages: [
      {
        phrase: "don't bother",
        meaning: "it's not worth spending your energy or effort on it",
        meaningCn: '不用麻烦了 / 算了吧',
      },
      {
        phrase: "can't be bothered (to do)",
        meaning: 'feeling too lazy, indifferent, or unmotivated to do something',
        meaningCn: '懒得去搞 / 不想费那个劲',
      },
      {
        phrase: "why bother?",
        meaning: 'rhetorical question questioning the point of an action',
        meaningCn: '何必呢？/ 图什么呢？',
      }
    ],
    patterns: [
      {
        pattern: "bother + to do / doing",
        collocations: ["didn't even bother to reply", "why bother asking?", "don't bother cooking"]
      },
      {
        pattern: "it bothers me that...",
        collocations: ["it really bothers me that he lied", "something's bothering you"]
      }
    ],
    examples: [
      {
        sentence: "Don't bother driving over; I can just take the train.",
        translationCn: "不用麻烦开车过来了，我直接坐火车就行。"
      },
      {
        sentence: "He didn't even bother to read the email before replying.",
        translationCn: "他甚至都懒得把邮件读完就直接回复了。"
      },
      {
        sentence: "I'm so exhausted tonight, I can't be bothered to cook.",
        translationCn: "我今晚太累了，实在懒得做饭了。"
      }
    ],
    challenge: {
      scenarioEn: "A friend offers to wash your mug, but you're about to leave. You want to tell them not to go through the trouble.",
      scenarioCn: "朋友想帮你洗杯子，但你马上就要走了，你想说：“不用麻烦啦，放着吧。”",
      targetConcept: "don't bother"
    },
    answer: "Don't bother, I'll take care of it later.",
    explanation: "'Don't bother' is a warm, polite and concise way to tell someone not to take unnecessary trouble.",
    explanationCn: "“Don't bother”是口语中最常用的“不用费心/别麻烦了”，极其自然。"
  },
  {
    id: 'bump',
    number: 4,
    word: 'BUMP',
    partOfSpeech: 'verb / noun',
    pronunciation: '/bʌmp/',
    teaser: 'Need to move a meeting by thirty minutes? “Bump” is the go-to verb.',
    teaserCn: '把会议时间微调半小时，老外常说 bump。',
    basicMeaning: 'bump = knock against something by accident',
    basicMeaningCn: '碰撞、撞到物体',
    additionalUsages: [
      {
        phrase: 'bump into someone',
        meaning: 'meet someone unexpectedly in public',
        meaningCn: '偶然碰见某人 / 巧遇',
      },
      {
        phrase: 'bump something up / down',
        meaning: 'increase or reschedule a priority, time, or price',
        meaningCn: '上调价格 / 提前会议时间',
      },
      {
        phrase: 'get bumped (from a flight)',
        meaning: 'be removed or rebooked due to overbooking',
        meaningCn: '（因航班超售）被改签/挤掉',
      }
    ],
    patterns: [
      {
        pattern: 'bump into + person',
        collocations: ['bumped into an old classmate', 'bump into you here']
      },
      {
        pattern: 'bump + meeting / time',
        collocations: ['bump the meeting to 3 PM', 'bump up the budget', 'bump it to next week']
      }
    ],
    examples: [
      {
        sentence: "I bumped into Sarah at the grocery store yesterday.",
        translationCn: "我昨天在超市偶遇了莎拉。"
      },
      {
        sentence: "Can we bump our 2 PM check-in to 2:30?",
        translationCn: "我们能把下午两点的沟通推迟到两点半吗？"
      },
      {
        sentence: "They bumped our flight to tomorrow morning because of the storm.",
        translationCn: "因为暴风雨，他们把我们的航班改签到了明天早上。"
      }
    ],
    challenge: {
      scenarioEn: "You want to ask your colleague to move today's 4 PM sync up by 30 minutes to 3:30 PM.",
      scenarioCn: "你想问同事：“我们能把下午4点的会提前到3点半吗？”",
      targetConcept: "bump the meeting up"
    },
    answer: "Can we bump the meeting up to 3:30?",
    explanation: "'bump up/forward' or 'bump' is standard conversational English for adjusting calendar meetings.",
    explanationCn: "“bump [a meeting] up/to...”常用于微调日程时间，既轻松又专业。"
  },
  {
    id: 'deal',
    number: 5,
    word: 'DEAL',
    partOfSpeech: 'noun / verb',
    pronunciation: '/diːl/',
    teaser: '“No big deal” dismisses stress in three effortless words.',
    teaserCn: '“这没什么大不了的”，随口就是 No big deal。',
    basicMeaning: 'deal = a business agreement or bargain',
    basicMeaningCn: '交易、协议、买卖',
    additionalUsages: [
      {
        phrase: 'deal with it / something',
        meaning: 'handle an uncomfortable problem, task, or emotion',
        meaningCn: '处理、应付、面对',
      },
      {
        phrase: 'big deal / no big deal',
        meaning: 'something significant or unimportant',
        meaningCn: '什么大事 / 没什么大不了',
      },
      {
        phrase: "what's the deal with...?",
        meaning: 'what is the situation or explanation regarding something strange?',
        meaningCn: '……到底是怎么回事？',
      }
    ],
    patterns: [
      {
        pattern: 'a good / great deal of + noun',
        collocations: ['a great deal of patience', 'a good deal of money']
      },
      {
        pattern: "make a big deal out of...",
        collocations: ["make a big deal out of nothing", "don't make it a big deal"]
      }
    ],
    examples: [
      {
        sentence: "Don't stress about the typo; it's honestly no big deal.",
        translationCn: "别为那个拼写错误焦虑，真的没什么大不了的。"
      },
      {
        sentence: "I have way too many emails to deal with before lunch.",
        translationCn: "午饭前我有太多邮件需要处理了。"
      },
      {
        sentence: "So what's the deal with the new remote work policy?",
        translationCn: "所以那个新的远程办公政策到底是个什么情况？"
      }
    ],
    challenge: {
      scenarioEn: "A colleague apologizes profusely for being 3 minutes late to a casual call. You reassure them.",
      scenarioCn: "同事因为迟到了3分钟连声道歉，你想轻松地安慰他：“没事儿，小事一桩。”",
      targetConcept: "no big deal"
    },
    answer: "No big deal at all, we just got started.",
    explanation: "'No big deal' is the everyday idiom to dismiss an apology or reassure someone smoothly.",
    explanationCn: "“No big deal”是英语中最常见、最地道的“小事/别放在心上”。"
  },
  {
    id: 'figure',
    number: 6,
    word: 'FIGURE',
    partOfSpeech: 'verb / noun',
    pronunciation: '/ˈfɪɡ.ər/',
    teaser: '“I figured you were busy” is how native speakers casually say they guessed right.',
    teaserCn: '“我猜你大概还在忙”，口语里几乎都用 figure。',
    basicMeaning: 'figure = a number, statistic, or shape of a person',
    basicMeaningCn: '数字、数据或体型',
    additionalUsages: [
      {
        phrase: 'figure out',
        meaning: 'understand, solve, or find a solution to a puzzle or problem',
        meaningCn: '想明白、弄清楚、搞定',
      },
      {
        phrase: 'I figured (that)...',
        meaning: 'I assumed, reasoned, or concluded based on context',
        meaningCn: '我猜想 / 我当时就琢磨着',
      },
      {
        phrase: 'go figure!',
        meaning: 'expresses irony or surprise at an unusual outcome',
        meaningCn: '真是怪事 / 谁能想得到呢！',
      }
    ],
    patterns: [
      {
        pattern: 'figure out + how / why / what',
        collocations: ['figure out how it works', 'figure out what went wrong', 'figure out a way']
      },
      {
        pattern: 'figure that + clause',
        collocations: ['I figured you were busy', 'we figured it was too late']
      }
    ],
    examples: [
      {
        sentence: "I saw your lights on, so I figured you were still working.",
        translationCn: "我看到你灯还亮着，就猜你肯定还在加班。"
      },
      {
        sentence: "Give me twenty minutes to figure out what's causing the glitch.",
        translationCn: "给我二十分钟，我来排查一下是什么导致了这个故障。"
      },
      {
        sentence: "The most expensive restaurant had the worst food. Go figure!",
        translationCn: "最贵的餐厅菜最难吃。真是绝了！"
      }
    ],
    challenge: {
      scenarioEn: "You noticed your friend hadn't replied to messages, so you assumed they were asleep.",
      scenarioCn: "你发现朋友没回消息，你想对他说：“我当时猜你大概已经睡了。”",
      targetConcept: "I figured you were..."
    },
    answer: "I figured you were already asleep.",
    explanation: "'I figured...' is much more natural in conversational English than 'I deducted' or 'I calculated'.",
    explanationCn: "日常口语中表达“我当时猜想/我以为”，用“I figured...”比“I assumed”更加随和自然。"
  },
  {
    id: 'fix',
    number: 7,
    word: 'FIX',
    partOfSpeech: 'verb / noun',
    pronunciation: '/fɪks/',
    teaser: '“Can I fix you a drink?” is one of the warmest hospitality phrases in English.',
    teaserCn: '有些事情不用 solve，“给你泡杯茶”也能叫 fix。',
    basicMeaning: 'fix = repair or mend something that is broken',
    basicMeaningCn: '修理、修补破损物品',
    additionalUsages: [
      {
        phrase: 'fix someone a drink / snack',
        meaning: 'prepare or make food or a beverage quickly',
        meaningCn: '冲杯咖啡 / 弄点吃的',
      },
      {
        phrase: 'fix your hair / collar',
        meaning: 'adjust or tidy up your appearance',
        meaningCn: '整理一下头发 / 领口',
      },
      {
        phrase: 'be in a fix',
        meaning: 'be in an awkward, difficult, or tight spot',
        meaningCn: '陷入进退两难的困境',
      },
      {
        phrase: 'get your coffee fix',
        meaning: 'satisfy an everyday craving or routine dose',
        meaningCn: '补充每日咖啡因 / 过把瘾',
      }
    ],
    patterns: [
      {
        pattern: 'fix + someone + food / drink',
        collocations: ['fix you a plate', 'fix myself some tea', 'fix us some lunch']
      },
      {
        pattern: 'quick fix',
        collocations: ['a quick fix for the issue', 'no quick fix exists']
      }
    ],
    examples: [
      {
        sentence: "Sit down on the couch; can I fix you a cup of tea?",
        translationCn: "坐沙发上歇会儿，我给你泡杯茶好吗？"
      },
      {
        sentence: "I need to get my morning coffee fix before I look at spreadsheets.",
        translationCn: "看报表前我得先喝杯咖啡提提神。"
      },
      {
        sentence: "He excused himself to the restroom to fix his tie.",
        translationCn: "他去洗手间整理了一下领带。"
      }
    ],
    challenge: {
      scenarioEn: "A guest arrives at your home after a long journey. You want to offer to make them a warm drink.",
      scenarioCn: "客人风尘仆仆来到你家，你想热情地说：“快坐，我给你冲杯热咖啡。”",
      targetConcept: "fix you a..."
    },
    answer: "Make yourself at home; can I fix you a hot coffee?",
    explanation: "'Fix someone a drink/meal' is natural host hospitality language in modern English.",
    explanationCn: "“Can I fix you a [drink/snack]?”是母语者招待客人时极其地道温和的表达。"
  },
  {
    id: 'grab',
    number: 8,
    word: 'GRAB',
    partOfSpeech: 'verb',
    pronunciation: '/ɡræb/',
    teaser: '“Want to grab coffee?” is the universal invite that keeps plans low-pressure.',
    teaserCn: '想说“随便喝杯咖啡”，用它最地道。',
    basicMeaning: 'grab = take or seize something suddenly with your hand',
    basicMeaningCn: '一把抓起、夺过',
    additionalUsages: [
      {
        phrase: 'grab a coffee / bite',
        meaning: 'have a quick, casual drink or meal with someone',
        meaningCn: '顺便喝杯咖啡 / 随便垫两口',
      },
      {
        phrase: 'grab a seat',
        meaning: 'sit down casually',
        meaningCn: '随便坐 / 找个位置坐下',
      },
      {
        phrase: 'grab your stuff / coat',
        meaning: 'gather your belongings before leaving',
        meaningCn: '带上你的东西 / 拿上外套',
      },
      {
        phrase: 'how does that grab you?',
        meaning: 'informal: how do you like this idea or proposal?',
        meaningCn: '你觉得这个主意怎么样？',
      }
    ],
    patterns: [
      {
        pattern: 'grab + noun',
        collocations: ['grab a coffee', 'grab a cab', 'grab lunch', 'grab your bag', 'grab a table']
      },
      {
        pattern: 'grab someone for a minute',
        collocations: ['can I grab you for two minutes?', 'grab him before he leaves']
      }
    ],
    examples: [
      {
        sentence: "I'm gonna grab a coffee before the meeting starts. Want anything?",
        translationCn: "开会前我去顺手买杯咖啡，你需要带点什么吗？"
      },
      {
        sentence: "Grab your stuff. We're leaving in five minutes.",
        translationCn: "收拾好东西，我们五分钟后出发。"
      },
      {
        sentence: "Can I grab you for a quick question about the slide deck?",
        translationCn: "能耽误你一两分钟请教个幻灯片的问题吗？"
      }
    ],
    challenge: {
      scenarioEn: "You want to invite a friend to get a casual quick lunch together.",
      scenarioCn: "你想对朋友说：“我们中午随便去吃点东西吧。”",
      targetConcept: "grab a bite / lunch"
    },
    answer: "Let's grab a quick bite together.",
    explanation: "'grab + food/drink' is the most natural way to talk about having a quick or casual meal.",
    explanationCn: "“grab a bite / coffee”是当代英语中最地道的“随便吃点/喝杯东西”。"
  },
  {
    id: 'head',
    number: 9,
    word: 'HEAD',
    partOfSpeech: 'verb / noun',
    pronunciation: '/hed/',
    teaser: '“Heading out?” How a simple noun quietly became everyone’s favorite direction verb.',
    teaserCn: '“我先动身回家了”，随口就是 I’m gonna head home。',
    basicMeaning: 'head = the upper part of the human body containing the brain',
    basicMeaningCn: '头、头部',
    additionalUsages: [
      {
        phrase: 'head out / head home',
        meaning: 'leave a place or start traveling toward a destination',
        meaningCn: '出发、动身、回家',
      },
      {
        phrase: 'head a team / project',
        meaning: 'lead or be in charge of an initiative',
        meaningCn: '领衔、牵头负责某项目',
      },
      {
        phrase: 'head someone off',
        meaning: 'intercept someone or prevent a problem before it happens',
        meaningCn: '拦截 / 防患于未然',
      }
    ],
    patterns: [
      {
        pattern: 'head + direction / destination',
        collocations: ['head downstairs', 'head towards downtown', 'head back to the office', 'head into town']
      },
      {
        pattern: 'where are you headed?',
        collocations: ['headed out soon', 'where are we headed next?']
      }
    ],
    examples: [
      {
        sentence: "It's getting late; I should probably head out soon.",
        translationCn: "时间不早了，我差不多该动身出发了。"
      },
      {
        sentence: "Where are you guys headed for dinner tonight?",
        translationCn: "你们今晚打算去哪里吃晚饭？"
      },
      {
        sentence: "She was chosen to head the international expansion team.",
        translationCn: "她被选拔来牵头负责国际拓展团队。"
      }
    ],
    challenge: {
      scenarioEn: "You are at a party around 10:30 PM and want to tell your friend that you're about to leave for home.",
      scenarioCn: "晚上聚会接近尾声，你想跟朋友说：“我差不多该回家了。”",
      targetConcept: "head home / head out"
    },
    answer: "I think I'm gonna head home now.",
    explanation: "'head home / head out' is far more natural in everyday speech than 'I will return to my house'.",
    explanationCn: "日常口语中表达“出发回家/该走了”，几乎都用“head home / head out”。"
  },
  {
    id: 'mind',
    number: 10,
    word: 'MIND',
    partOfSpeech: 'verb / noun',
    pronunciation: '/maɪnd/',
    teaser: '“Do you mind...?” is the smoothest way to ask for a favor without imposing.',
    teaserCn: 'Do you mind...? 不是在问你“有没有想法”。',
    basicMeaning: 'mind = the element of a person that enables them to think',
    basicMeaningCn: '头脑、思想、心智',
    additionalUsages: [
      {
        phrase: "do you mind? / would you mind?",
        meaning: 'polite request or checking if something bothers someone',
        meaningCn: '你介意……吗？/ 能麻烦你……吗？',
      },
      {
        phrase: 'never mind',
        meaning: "forget it; it's not important anymore",
        meaningCn: '没关系 / 算了，别在意',
      },
      {
        phrase: 'mind your step / head',
        meaning: 'pay attention to a hazard; be careful',
        meaningCn: '小心脚下 / 注意碰头',
      },
      {
        phrase: 'change your mind',
        meaning: 'adopt a different opinion or plan',
        meaningCn: '改变主意',
      }
    ],
    patterns: [
      {
        pattern: 'would you mind + -ing',
        collocations: ['would you mind closing the door?', 'do you mind if I sit here?', 'I don’t mind at all']
      },
      {
        pattern: 'keep in mind that...',
        collocations: ['keep in mind the deadline', 'bear in mind']
      }
    ],
    examples: [
      {
        sentence: "Do you mind if I borrow your phone charger for ten minutes?",
        translationCn: "你介意我借用你的手机充电器十分钟吗？"
      },
      {
        sentence: "Mind your head on that low beam when you walk in.",
        translationCn: "走进来时注意别撞到那根矮横梁。"
      },
      {
        sentence: "I was going to explain, but never mind—you already figured it out.",
        translationCn: "我本来想解释的，不过算了——你都已经弄明白了。"
      }
    ],
    challenge: {
      scenarioEn: "You are on a crowded train and want to politely ask someone if you can take the empty seat beside them.",
      scenarioCn: "在车上你想礼貌询问旁边的人：“请问这里有人坐吗？/ 你介意我坐这里吗？”",
      targetConcept: "do you mind if I sit here?"
    },
    answer: "Do you mind if I sit here?",
    explanation: "'Do you mind if I...?' is the universal polite formula for asking permission gracefully.",
    explanationCn: "“Do you mind if I [do something]?”是最得体自然的礼貌征求许可句式。"
  },
  {
    id: 'skip',
    number: 11,
    word: 'SKIP',
    partOfSpeech: 'verb',
    pronunciation: '/skɪp/',
    teaser: 'Skipping breakfast or skipping to the point — skip effortlessly bypasses what you don’t need.',
    teaserCn: '今天不吃早饭，口语里直接用 skip。',
    basicMeaning: 'skip = move along lightly, stepping from one foot to the other',
    basicMeaningCn: '轻快地跳跃、蹦跳',
    additionalUsages: [
      {
        phrase: 'skip breakfast / a meeting',
        meaning: 'decide not to have, attend, or do something scheduled',
        meaningCn: '不吃早餐 / 翘掉会议',
      },
      {
        phrase: 'skip to the end / details',
        meaning: 'bypass intermediate stages and go directly to the key point',
        meaningCn: '直接跳到结尾 / 略过细节',
      },
      {
        phrase: 'skip town',
        meaning: 'leave a place abruptly or secretly',
        meaningCn: '溜之大吉 / 偷偷离开',
      }
    ],
    patterns: [
      {
        pattern: 'skip + routine event / meal',
        collocations: ['skip lunch', 'skip gym today', 'skip chapter 3', 'skip the intro']
      },
      {
        pattern: 'skip ahead to...',
        collocations: ['skip ahead to the conclusion', 'can we skip to the numbers?']
      }
    ],
    examples: [
      {
        sentence: "I woke up late, so I had to skip breakfast to catch the express train.",
        translationCn: "我起晚了，只好不吃早饭去赶那趟快车。"
      },
      {
        sentence: "Let's skip the pleasantries and get right down to business.",
        translationCn: "我们略过客套话，直接进入正题吧。"
      },
      {
        sentence: "Feel free to skip this section if you're already familiar with the basics.",
        translationCn: "如果你已经熟悉基础知识，可以直接跳过这一节。"
      }
    ],
    challenge: {
      scenarioEn: "You are running short on time in a presentation and want to bypass the background story to jump straight to the results.",
      scenarioCn: "演讲时间不够了，你想对听众说：“我们直接跳到最终结果吧。”",
      targetConcept: "skip to the results"
    },
    answer: "Let's skip right to the results.",
    explanation: "'skip to [topic]' quickly directs focus without wasting transition words.",
    explanationCn: "在会议或对话中，“skip right to...”能干脆利落地引导大家切入重点。"
  },
  {
    id: 'stuff',
    number: 12,
    word: 'STUFF',
    partOfSpeech: 'noun / verb',
    pronunciation: '/stʌf/',
    teaser: 'From personal belongings to deep expertise, “stuff” does remarkably heavy lifting.',
    teaserCn: '随身物品太多的时候，stuff 特别好用。',
    basicMeaning: 'stuff = fill a space tightly or substance of which something is made',
    basicMeaningCn: '填满、塞进，或原材料',
    additionalUsages: [
      {
        phrase: 'your stuff',
        meaning: 'your personal belongings, bags, gear, or clothes',
        meaningCn: '你的东西 / 随身物品',
      },
      {
        phrase: 'know your stuff',
        meaning: 'be remarkably knowledgeable and competent in your field',
        meaningCn: '专业功底扎实 / 懂行',
      },
      {
        phrase: 'and stuff (like that)',
        meaning: 'and similar things (informal list ending)',
        meaningCn: '诸如此类的事物',
      },
      {
        phrase: "I'm stuffed",
        meaning: "I've eaten so much food that my stomach is completely full",
        meaningCn: '我吃得太撑了',
      }
    ],
    patterns: [
      {
        pattern: 'stuff + in / into',
        collocations: ['stuff it in your pocket', 'stuffed into a tiny booth']
      },
      {
        pattern: 'a bunch of stuff',
        collocations: ['got a bunch of stuff to do', 'pack up all our stuff']
      }
    ],
    examples: [
      {
        sentence: "You can leave your stuff by the door and come sit down.",
        translationCn: "你可以把你的东西放在门边，过来坐吧。"
      },
      {
        sentence: "She really knows her stuff when it comes to search optimization.",
        translationCn: "在搜索引擎优化方面，她是真的非常有真才实学。"
      },
      {
        sentence: "No dessert for me, thanks—I'm completely stuffed.",
        translationCn: "我就不吃甜点了，谢谢——我实在吃得太撑了。"
      }
    ],
    challenge: {
      scenarioEn: "You want to praise a brilliant engineer: 'She really knows her field deeply.'",
      scenarioCn: "你想用地道的口语夸奖一位资深工程师：“她在专业技术上真的太懂行了。”",
      targetConcept: "know your stuff"
    },
    answer: "She really knows her stuff.",
    explanation: "'Know your stuff' is the quintessential natural compliment for someone who has genuine mastery.",
    explanationCn: "“Know your stuff”是英语世界中最地道、最接地气的“专业、懂行”赞美。"
  },
  {
    id: 'worth',
    number: 13,
    word: 'WORTH',
    partOfSpeech: 'adjective / noun',
    pronunciation: '/wɜːθ/',
    teaser: '“Totally worth it” delivers an entire review in three quick words.',
    teaserCn: '“值不值得”这件事，worth 比你想的更好用。',
    basicMeaning: 'worth = equivalent in value to the sum or item specified',
    basicMeaningCn: '价值（特定金额）',
    additionalUsages: [
      {
        phrase: 'worth it / not worth it',
        meaning: 'rewarding or justified compared to the effort, risk, or price',
        meaningCn: '很值 / 犯不上、划不来',
      },
      {
        phrase: 'worth doing / seeing',
        meaning: 'deserving of your time and attention',
        meaningCn: '值得一做 / 值得一看',
      },
      {
        phrase: 'for what it’s worth',
        meaning: 'used when giving an opinion that might or might not be useful',
        meaningCn: '不管有没有用，姑且供你参考',
      }
    ],
    patterns: [
      {
        pattern: 'worth + -ing',
        collocations: ['well worth visiting', 'worth mentioning', 'hardly worth fighting over', 'worth trying']
      },
      {
        pattern: 'is it worth + noun / -ing?',
        collocations: ['is it worth the hype?', 'is it worth the wait?']
      }
    ],
    examples: [
      {
        sentence: "We had to wait forty minutes in line, but the ramen was totally worth it.",
        translationCn: "我们排了四十分钟队，但那碗拉面真的太值了。"
      },
      {
        sentence: "It's definitely worth checking out before you make a final decision.",
        translationCn: "在你做最终决定前，绝对值得去看一看。"
      },
      {
        sentence: "For what it's worth, I think you made the right call.",
        translationCn: "不管你觉得参考价值如何，我认为你做了正确的决定。"
      }
    ],
    challenge: {
      scenarioEn: "A friend asks if visiting that new exhibition is worth the 1-hour drive. You strongly affirm it.",
      scenarioCn: "朋友问你那个新展览值不值得开一小时车去看，你想肯定地说：“完全值得去！”",
      targetConcept: "totally worth it / well worth visiting"
    },
    answer: "It's totally worth it—you should go!",
    explanation: "'Worth it' is the primary native phrase to express that something pays off in experience or value.",
    explanationCn: "“It's totally worth it!”是口语中表达“非常值得”最纯正有力的表达。"
  }
];
