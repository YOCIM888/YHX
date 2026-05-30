import type { Project, BlogPost, Profile, Identity } from "./types"

export const identities: Identity[] = [
  {
    key: "ai",
    label: "AI工程师",
    labelEn: "AI Engineer",
    icon: "brain",
    description: "深耕人工智能领域，专注于大语言模型应用、计算机视觉与智能系统开发。用代码构建未来，让算法赋能创意。",
    color: "#e8a838",
  },
  {
    key: "editing",
    label: "剪辑师",
    labelEn: "Video Editor",
    icon: "film",
    description: "以镜头语言讲述故事，精通影视后期制作、动态图形与视觉特效。每一帧都承载情感，每一次剪辑都塑造节奏。",
    color: "#f06060",
  },
  {
    key: "design",
    label: "设计师",
    labelEn: "Designer",
    icon: "palette",
    description: "融合美学与功能，擅长UI/UX设计、品牌视觉与交互体验。设计不止于美，更在于解决问题的优雅方式。",
    color: "#60c0f0",
  },
]

export const projects: Project[] = [
  {
    id: "p1",
    title: "智能对话引擎",
    category: "ai",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20futuristic%20AI%20neural%20network%20visualization%2C%20glowing%20nodes%20and%20connections%2C%20dark%20background%2C%20amber%20gold%20accents%2C%20digital%20art&image_size=landscape_16_9",
    description: "基于大语言模型的多轮对话系统，支持上下文理解、知识检索和工具调用，为用户提供智能化的交互体验。",
    techStack: ["Python", "LangChain", "FastAPI", "React", "Vector DB"],
    link: "#",
    year: 2025,
    featured: true,
  },
  {
    id: "p2",
    title: "城市脉搏",
    category: "editing",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cinematic%20cityscape%20timelapse%2C%20neon%20lights%20blurring%20into%20light%20trails%2C%20night%20urban%20scene%2C%20moody%20color%20grading&image_size=landscape_16_9",
    description: "一部关于城市节奏的短片，通过延时摄影和动态剪辑展现都市生活的脉动与韵律，入围独立短片节。",
    techStack: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    year: 2025,
    featured: true,
  },
  {
    id: "p3",
    title: "品牌视觉重塑",
    category: "design",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minimalist%20brand%20identity%20design%20spread%2C%20logo%20variations%2C%20color%20palette%2C%20typography%20system%2C%20clean%20dark%20background&image_size=landscape_16_9",
    description: "为科技初创公司完成全套品牌视觉系统设计，从Logo到应用界面，建立统一且富有辨识度的品牌语言。",
    techStack: ["Figma", "Illustrator", "Framer", "Design System"],
    year: 2024,
    featured: true,
  },
  {
    id: "p4",
    title: "CV目标检测平台",
    category: "ai",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Computer%20vision%20object%20detection%20interface%2C%20bounding%20boxes%20on%20images%2C%20tech%20dashboard%2C%20dark%20UI&image_size=landscape_16_9",
    description: "基于YOLO的实时目标检测平台，支持自定义模型训练、多路视频流分析和可视化标注工具。",
    techStack: ["PyTorch", "YOLO", "OpenCV", "Flask", "Docker"],
    year: 2024,
  },
  {
    id: "p5",
    title: "数字游民纪录片",
    category: "editing",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Documentary%20film%20about%20digital%20nomads%2C%20person%20working%20on%20laptop%20in%20scenic%20location%2C%20cinematic%20color%20grading&image_size=landscape_16_9",
    description: "跟拍三位数字游民的生活，记录他们在世界各地远程工作的真实状态，探索自由与归属的平衡。",
    techStack: ["Premiere Pro", "After Effects", "Audition"],
    year: 2024,
  },
  {
    id: "p6",
    title: "音乐可视化App",
    category: "design",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Music%20visualization%20app%20UI%20design%2C%20audio%20waveforms%2C%20dynamic%20colors%2C%20dark%20mode%20interface%2C%20modern%20minimal&image_size=landscape_16_9",
    description: "一款将音乐转化为视觉体验的移动应用设计，通过生成式图形实时响应音频频谱，创造沉浸式视听体验。",
    techStack: ["Figma", "Principle", "Lottie", "SwiftUI"],
    year: 2024,
  },
  {
    id: "p7",
    title: "AI写作助手",
    category: "ai",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20writing%20assistant%20interface%2C%20clean%20editor%20with%20suggestions%2C%20warm%20lighting%2C%20minimalist%20dark%20UI&image_size=landscape_16_9",
    description: "基于GPT的智能写作辅助工具，支持多风格改写、续写建议和语法优化，让创作更高效。",
    techStack: ["TypeScript", "Next.js", "OpenAI API", "TailwindCSS"],
    year: 2023,
  },
  {
    id: "p8",
    title: "品牌动态海报",
    category: "design",
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kinetic%20typography%20poster%20design%2C%20animated%20text%20layout%2C%20bold%20colors%2C%20graphic%20design%20portfolio&image_size=landscape_16_9",
    description: "为音乐节设计的系列动态海报，融合动态排版与生成式图形，在社交媒体获得百万级曝光。",
    techStack: ["After Effects", "Cinema 4D", "Figma"],
    year: 2023,
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "当AI遇见创意：大模型如何重塑设计工作流",
    excerpt: "从Midjourney到Stable Diffusion，AI正在重新定义设计师的工作方式。但真正的变革不在于替代，而在于人机协作的新范式。",
    content: `# 当AI遇见创意：大模型如何重塑设计工作流

从Midjourney到Stable Diffusion，AI正在重新定义设计师的工作方式。但真正的变革不在于替代，而在于人机协作的新范式。

## 从工具到伙伴

传统的设计工具是被动响应的——你输入指令，它输出结果。但大模型改变了这一关系。它不再只是执行命令，而是能够理解意图、提供方案、甚至挑战你的假设。

## 新的工作流范式

1. **灵感阶段**：AI作为创意催化剂，快速生成大量概念方案
2. **探索阶段**：人机对话式迭代，从模糊到清晰
3. **执行阶段**：AI处理重复性工作，设计师专注关键决策
4. **验证阶段**：AI辅助用户测试和数据分析

## 保持人的价值

最重要的不是AI能做什么，而是你作为设计师能贡献什么——审美判断、文化理解、情感共鸣。这些是算法无法替代的。

> 设计的本质是解决问题，而AI只是给了我们更多的解决方案。选择哪个方案，依然需要人的智慧。`,
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20and%20creative%20design%20concept%2C%20human%20hand%20touching%20digital%20canvas%2C%20warm%20amber%20light%2C%20abstract&image_size=landscape_16_9",
    category: "tech",
    tags: ["AI", "设计", "工作流", "大模型"],
    date: "2025-05-20",
    readTime: 8,
  },
  {
    id: "b2",
    title: "剪辑的节奏：如何用镜头语言讲好一个故事",
    excerpt: "好的剪辑不只是技术，更是一种叙事艺术。从景别切换到音乐卡点，每一个决定都在影响观众的情感体验。",
    content: `# 剪辑的节奏：如何用镜头语言讲好一个故事

好的剪辑不只是技术，更是一种叙事艺术。从景别切换到音乐卡点，每一个决定都在影响观众的情感体验。

## 节奏的本质

剪辑的节奏就像呼吸——有快有慢，有张有弛。最基础的节奏来自镜头长度：短镜头制造紧张感，长镜头营造沉浸感。

## 五个关键技巧

### 1. 情绪先行
先确定你想让观众感受到什么，再决定怎么剪。

### 2. 音乐是骨架
选择音乐不是最后一步，而是第一步。音乐的情绪决定了剪辑的方向。

### 3. 留白的力量
不是每一秒都需要填满。沉默和停顿往往比密集的信息更有冲击力。

### 4. 转场的隐喻
每一次转场都在讲述时间的流逝或空间的转换。选择转场方式就是选择叙事方式。

### 5. 反复打磨
第一版剪辑只是草稿。好的作品都是在反复修改中诞生的。

> 剪辑是看不见的艺术——当观众完全沉浸在故事中时，说明你做对了。`,
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Film%20editing%20timeline%20interface%2C%20video%20tracks%2C%20cinematic%20color%20grading%2C%20dark%20workspace&image_size=landscape_16_9",
    category: "design",
    tags: ["剪辑", "叙事", "视频制作", "技巧"],
    date: "2025-04-15",
    readTime: 6,
  },
  {
    id: "b3",
    title: "从零到一：我的AI工程师成长之路",
    excerpt: "从数学基础到工程实践，从论文阅读到产品落地。分享我在AI领域三年来的学习方法和踩过的坑。",
    content: `# 从零到一：我的AI工程师成长之路

从数学基础到工程实践，从论文阅读到产品落地。分享我在AI领域三年来的学习方法和踩过的坑。

## 起点

三年前我对AI的理解还停留在"深度学习"这个词上。今天，我已经独立完成了多个AI产品的从零到一。

## 学习路径

### 阶段一：基础筑基（0-6个月）
- 线性代数、概率论、微积分复习
- Python编程精进
- 机器学习经典算法

### 阶段二：深度学习（6-12个月）
- PyTorch框架实践
- CNN、RNN、Transformer原理
- 从零实现经典论文

### 阶段三：大模型时代（12-24个月）
- NLP与预训练模型
- LangChain应用开发
- RAG系统构建

### 阶段四：产品化（24个月+）
- 模型部署与优化
- 工程架构设计
- 产品思维培养

## 最重要的三个建议

1. **动手比看论文重要**：每学一个概念就写代码实现
2. **项目驱动学习**：做真实项目比刷课有效十倍
3. **保持好奇心**：这个领域变化太快，持续学习是唯一不变的要求

> AI不是魔法，是工程。理解原理、动手实践、持续迭代，你也能构建属于自己的智能系统。`,
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20engineer%20coding%20on%20multiple%20screens%2C%20neural%20network%20visualizations%2C%20dark%20ambient%20lighting&image_size=landscape_16_9",
    category: "tech",
    tags: ["AI", "成长", "学习方法", "工程师"],
    date: "2025-03-08",
    readTime: 10,
  },
  {
    id: "b4",
    title: "设计系统的哲学：为什么一致性比创意更重要",
    excerpt: "在追求独特性的同时，我们常常忽略了系统化思维的价值。一个好的设计系统，是创意自由的基础。",
    content: `# 设计系统的哲学：为什么一致性比创意更重要

在追求独特性的同时，我们常常忽略了系统化思维的价值。一个好的设计系统，是创意自由的基础。

## 什么是一致性

一致性不是重复，而是建立可预测的模式。当用户理解了你的设计语言，他们就能更快地使用你的产品。

## 设计系统的三个层次

1. **Token层**：颜色、字体、间距——最基础的原子
2. **组件层**：按钮、卡片、表单——可复用的分子
3. **模式层**：布局、交互流程——有机体级别的组织

## 为什么它释放创意

当你不需要每次都从零开始决定按钮的圆角和颜色时，你的大脑就有更多空间去思考真正重要的问题：用户体验、情感设计、创新交互。

> 纪律是自由的前提。设计系统给你的不是限制，而是创造的底气。`,
    cover: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Design%20system%20components%20layout%2C%20UI%20elements%20grid%2C%20color%20swatches%2C%20typography%20specimen%2C%20dark%20background&image_size=landscape_16_9",
    category: "design",
    tags: ["设计系统", "UI/UX", "一致性", "方法论"],
    date: "2025-02-20",
    readTime: 7,
  },
]

export const profile: Profile = {
  name: "YHX",
  titles: ["AI工程师", "剪辑师", "设计师"],
  bio: "游走于代码与像素之间的创作者。用AI构建智能，用镜头讲述故事，用设计传递美感。相信技术与艺术的交汇处，才是最有意思的地方。",
  avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Creative%20professional%20portrait%2C%20person%20in%20dark%20studio%20with%20warm%20amber%20lighting%2C%20artistic%20atmosphere&image_size=square",
  skills: [
    "Python", "TypeScript", "React", "PyTorch",
    "LangChain", "FastAPI", "Figma", "After Effects",
    "Premiere Pro", "DaVinci Resolve", "Cinema 4D",
    "TailwindCSS", "Docker", "Next.js", "Stable Diffusion",
  ],
  socialLinks: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    email: "mailto:yocim666@outlook.com",
    bilibili: "https://bilibili.com",
  },
}
