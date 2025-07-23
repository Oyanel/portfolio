import { DialoguesAtlas } from "@/features/Game/UI/Interaction/interaction.type";

export default {
    computerITSF_interaction_start: {
        dialogue: [
            { text: "This old computer reminds me of my time at ITSF." },
            { text: "It's where my professional journey really kicked off, diving deep into computing science." },
        ],
        options: [
            { text: "Tell me more about ITSF", nextEventKey: "DIALOGUE_BRANCH:computerITSF_details" },
            { text: "Sounds like a strong start!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerITSF_details: {
        dialogue: [
            { text: "I spent three years there as an apprentice, working towards my engineer's degree." },
            { text: "It was a fantastic learning environment, shaping me into the developer I am today." },
            { text: "You can find more details on my LinkedIn profile if you're curious!" },
        ],
        options: [{ text: "I'll check your LinkedIn!", nextEventKey: "DIALOGUE_END" }],
    },

    firePlace_interaction_start: {
        dialogue: [
            { text: "A crackling fireplace... Ah, the warmth and good vibes." },
            { text: "Just like the atmosphere at my past companies. A positive environment is crucial!" },
        ],
        options: [
            { text: "What makes a good vibe?", nextEventKey: "DIALOGUE_BRANCH:firePlace_vibe" },
            { text: "Totally agree!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    firePlace_vibe: {
        dialogue: [
            {
                text: "It’s about teamwork, mutual respect, and a bit of fun. When everyone's happy, the work flows better.",
            },
            { text: "This fireplace just encapsulates that feeling of comfort and camaraderie." },
        ],
        options: [{ text: "I feel it too.", nextEventKey: "DIALOGUE_END" }],
    },

    ITSFTest_interaction_start: {
        dialogue: [
            { text: "This device brings back memories of countless integration tests." },
            { text: "Ensuring all the pieces fit together seamlessly was a big part of the job." },
        ],
        options: [
            { text: "Any funny test stories?", nextEventKey: "DIALOGUE_BRANCH:ITSFTest_story" },
            { text: "Testing is vital!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    ITSFTest_story: {
        dialogue: [
            { text: "Let's just say, sometimes a single misplaced semicolon could bring down an entire system." },
            { text: "The thrill of finding that tiny bug after hours of searching... priceless!" },
        ],
        options: [{ text: "The life of a developer, right?", nextEventKey: "DIALOGUE_END" }],
    },

    safe_interaction_start: {
        dialogue: [
            { text: "A sturdy, unyielding safe." },
            {
                text: "This represents all the amazing, confidential projects I've worked on that I simply can't showcase publicly.",
            },
        ],
        options: [
            { text: "Intriguing!", nextEventKey: "DIALOGUE_BRANCH:safe_intrigue" },
            { text: "That's understandable.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    safe_intrigue: {
        dialogue: [
            { text: "Suffice to say, they were complex, challenging, and incredibly rewarding." },
            { text: "It's like having a secret vault of achievements! Maybe someday they'll be public..." },
        ],
        options: [{ text: "A developer's secret weapon.", nextEventKey: "DIALOGUE_END" }],
    },

    phone_interaction_start: {
        dialogue: [
            { text: "This old-school phone reminds me of my work on a CRM for telecoms in Europe." },
            { text: "That was one of the main products I helped develop." },
        ],
        options: [
            { text: "What's a CRM?", nextEventKey: "DIALOGUE_BRANCH:phone_crm_info" },
            { text: "Sounds important for telecoms!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    phone_crm_info: {
        dialogue: [
            {
                text: "A CRM is Customer Relationship Management software. It helps companies manage and analyze customer interactions and data.",
            },
            {
                text: "Think of it as the brain behind keeping customers happy and organized for big telecom providers across Europe.",
            },
        ],
        options: [{ text: "Got it!", nextEventKey: "DIALOGUE_END" }],
    },

    study_interaction_start: {
        dialogue: [
            { text: "This study area takes me back to my three years as an apprentice at ITSF." },
            {
                text: "It was intense – preparing for my engineer’s degree in computing science while working full-time.",
            },
        ],
        options: [
            { text: "That sounds like a lot of work!", nextEventKey: "DIALOGUE_BRANCH:study_apprentice_life" },
            { text: "Dedication!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    study_apprentice_life: {
        dialogue: [
            {
                text: "It was, but incredibly enriching. I gained hands-on experience that you just can't get from books alone.",
            },
            { text: "Theory met practice daily, and that's the best way to learn, really." },
        ],
        options: [{ text: "The best kind of education.", nextEventKey: "DIALOGUE_END" }],
    },

    coffeeDispenser_interaction_start: {
        dialogue: [
            { text: "Ah, the infamous coffee dispenser. I remember having to pay for a really bad cup here." },
            {
                text: "Thankfully, companies nowadays understand that good coffee (and quality of life) is a must-have, not a luxury.",
            },
        ],
        options: [
            { text: "Bad coffee is a serious problem.", nextEventKey: "DIALOGUE_BRANCH:coffeeDispenser_bad_coffee" },
            { text: "Glad things improved!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    coffeeDispenser_bad_coffee: {
        dialogue: [
            { text: "Indeed! A developer's fuel should be top-notch. It impacts productivity... and mood!" },
            { text: "Let's just say, I became quite adept at finding the nearest decent coffee shop." },
        ],
        options: [{ text: "A true coffee connoisseur.", nextEventKey: "DIALOGUE_END" }],
    },

    computerCGI_interaction_start: {
        dialogue: [
            { text: "This screen brings me back to my Drupal days at ITSF." },
            { text: "Yes, before the modern frontend frameworks, Drupal was quite the beast!" },
        ],
        options: [
            { text: "Tell me about Drupal work", nextEventKey: "DIALOGUE_BRANCH:computerCGI_drupal" },
            { text: "Times have changed!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerCGI_drupal: {
        dialogue: [
            {
                text: "I was deeply involved in customizing and developing modules for large-scale enterprise websites.",
            },
            { text: "It taught me a lot about content management systems, PHP, and database integration." },
            { text: "Definitely a solid foundation for more modern web development." },
        ],
        options: [{ text: "Good to know the roots!", nextEventKey: "DIALOGUE_END" }],
    },

    teamBedrock_interaction_start: {
        dialogue: [
            { text: "Ah, the 'Team Bedrock' corner! I truly had an amazing time working with these folks." },
            { text: "It's so important to work with nice and competent people. They make all the difference." },
        ],
        options: [
            { text: "What made them great?", nextEventKey: "DIALOGUE_BRANCH:teamBedrock_great" },
            { text: "A strong team is everything.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    teamBedrock_great: {
        dialogue: [
            {
                text: "Their expertise, willingness to help, and a shared sense of humor made every challenge enjoyable.",
            },
            { text: "Big thanks to everyone in Team Bedrock for the fantastic memories and learning experiences!" },
        ],
        options: [{ text: "Teamwork makes the dream work!", nextEventKey: "DIALOGUE_END" }],
    },

    noDoor_interaction_start: {
        dialogue: [
            { text: "This... 'non-door' represents all those draft projects I started but never quite finished." },
            { text: "It's a graveyard of good intentions, really. More on that in the 'personal projects' stage!" },
        ],
        options: [
            { text: "Tell me about those unfinished projects!", nextEventKey: "DIALOGUE_BRANCH:noDoor_unfinished" },
            { text: "Relatable.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    noDoor_unfinished: {
        dialogue: [
            { text: "Oh, the list is long: a game engine, a social media clone, a personal AI assistant..." },
            { text: "The journey is the reward, right? Or, maybe I just need more coffee." },
        ],
        options: [{ text: "To the 'personal projects' stage!", nextEventKey: "DIALOGUE_END" }],
    },

    door_interaction_start: {
        dialogue: [
            { text: "This door... It symbolizes opportunity, doesn't it?" },
            { text: "There's still plenty of space in here for more exciting projects and challenges!" },
        ],
        options: [
            { text: "What kind of projects?", nextEventKey: "DIALOGUE_BRANCH:door_projects" },
            { text: "The future is bright!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    door_projects: {
        dialogue: [
            { text: "Always looking for innovative web solutions, especially in the frontend space." },
            { text: "New technologies, new challenges, new problems to solve – that's what keeps things interesting!" },
        ],
        options: [{ text: "Onward!", nextEventKey: "DIALOGUE_END" }],
    },

    fruits_interaction_start: {
        dialogue: [
            { text: "A bowl of fresh fruits! My daily reminder to stay healthy." },
            { text: "Don't forget: eat 5 fruits (or veggies!) every day!" },
        ],
        options: [
            { text: "What's your favorite fruit?", nextEventKey: "DIALOGUE_BRANCH:fruits_favorite" },
            { text: "Healthy living!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    fruits_favorite: {
        dialogue: [
            {
                text: "Definitely a good apple. Simple, crunchy, and always there for you. Like a reliable piece of code!",
            },
        ],
        options: [{ text: "Unexpected, but true.", nextEventKey: "DIALOGUE_END" }],
    },

    plant_interaction_start: {
        dialogue: [
            { text: "Look at this lovely office plant. Plants just make you happier, don't they?" },
            { text: "A little bit of green makes a big difference in a tech environment." },
        ],
        options: [
            { text: "Any tips for keeping them alive?", nextEventKey: "DIALOGUE_BRANCH:plant_tips" },
            { text: "Nature's touch!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    plant_tips: {
        dialogue: [
            { text: "Lots of sunlight and just enough water. Overwatering is the enemy!" },
            { text: "Just like over-engineering, sometimes less is more." },
        ],
        options: [{ text: "Good to know!", nextEventKey: "DIALOGUE_END" }],
    },

    techNews_interaction_start: {
        dialogue: [
            { text: "This screen is always tuned to the latest tech news." },
            {
                text: "I keep a keen eye on what's happening in the web, especially frontend developments. Always something new to learn!",
            },
        ],
        options: [
            { text: "What's trending now?", nextEventKey: "DIALOGUE_BRANCH:techNews_trending" },
            { text: "Stay updated!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    techNews_trending: {
        dialogue: [
            {
                text: "Lately, it's been a lot about WebAssembly, new CSS features, and the ever-evolving JavaScript frameworks.",
            },
            { text: "The frontend world never sleeps, and neither do I (when it comes to learning)!" },
        ],
        options: [{ text: "Fascinating!", nextEventKey: "DIALOGUE_END" }],
    },

    dispenser_interaction_start: {
        dialogue: [
            { text: "Is this... a fridge? Or another one of those magical dispensers?" },
            { text: "Sometimes, you just need a moment to ponder the mysteries of office appliances." },
        ],
        options: [
            { text: "Open it!", nextEventKey: "DIALOGUE_BRANCH:dispenser_open" },
            { text: "Walk away confused.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    dispenser_open: {
        dialogue: [{ text: "It's just a regular fridge... full of... more bad coffee. Maybe it's a trap." }],
        options: [{ text: "You've been warned.", nextEventKey: "DIALOGUE_END" }],
    },

    coffee_interaction_start: {
        dialogue: [
            { text: "A cup of coffee. Simple, yet profound." },
            {
                text: "I believe that if your main problem at the office is the taste of the coffee, your quality of life there is probably really, really good!",
            },
        ],
        options: [
            { text: "That's a philosophical take!", nextEventKey: "DIALOGUE_BRANCH:coffee_philosophy" },
            { text: "Cheers to good coffee!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    coffee_philosophy: {
        dialogue: [
            {
                text: "It's all about perspective. If minor inconveniences are your biggest woes, you're doing something right.",
            },
            { text: "Or maybe just drink more water." },
        ],
        options: [{ text: "Point taken.", nextEventKey: "DIALOGUE_END" }],
    },

    teamITSF_interaction_start: {
        dialogue: [
            { text: "This plaque reminds me of the young, awesome team at ITSF." },
            { text: "So many good memories, and I learned an incredible amount by their side." },
        ],
        options: [
            { text: "What did you learn?", nextEventKey: "DIALOGUE_BRANCH:teamITSF_learning" },
            { text: "Great teams are priceless.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    teamITSF_learning: {
        dialogue: [
            {
                text: "Beyond coding, I learned about collaboration, problem-solving under pressure, and the importance of a supportive environment.",
            },
            { text: "They truly accelerated my growth as a developer." },
        ],
        options: [{ text: "That's invaluable.", nextEventKey: "DIALOGUE_END" }],
    },

    certification_interaction_start: {
        dialogue: [
            { text: "Ah, the wall of certifications! I'm proud to say I'm certified in a couple of key areas." },
            { text: "My engineer's degree in computing science, and an accessibility certification." },
        ],
        options: [
            { text: "Tell me about accessibility.", nextEventKey: "DIALOGUE_BRANCH:certification_accessibility" },
            { text: "Impressive!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    certification_accessibility: {
        dialogue: [
            {
                text: "It's about making sure websites and applications are usable by everyone, regardless of their abilities.",
            },
            {
                text: "It's not just a compliance thing; it's about creating inclusive digital experiences. Super important in modern web dev!",
            },
        ],
        options: [{ text: "An essential skill.", nextEventKey: "DIALOGUE_END" }],
    },

    computerPlayer_interaction_start: {
        dialogue: [
            {
                text: "This computer represents my work at Bedrock, specifically as a frontend developer in the player team.",
            },
            { text: "Building and maintaining video players for millions of users is quite a ride!" },
        ],
        options: [
            { text: "What's involved in a video player?", nextEventKey: "DIALOGUE_BRANCH:computerPlayer_details" },
            { text: "Sounds like high stakes!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerPlayer_details: {
        dialogue: [
            { text: "Buffering, streaming protocols, DRM, user interfaces... it's a complex beast." },
            {
                text: "Optimizing for performance and user experience across different devices was a daily challenge, and a rewarding one!",
            },
        ],
        options: [{ text: "Complex indeed!", nextEventKey: "DIALOGUE_END" }],
    },

    computerUi_interaction_start: {
        dialogue: [
            { text: "This screen shows off the UI work process at Bedrock." },
            { text: "We worked in agile cycles (Scrum), with UI designs from Figma or Zeroheight." },
            { text: "The coolest part? One theme for each customer – ensuring brand consistency across platforms." },
        ],
        options: [
            { text: "What is Zeroheight?", nextEventKey: "DIALOGUE_BRANCH:computerUi_zeroheight" },
            { text: "Design systems are key!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerUi_zeroheight: {
        dialogue: [
            {
                text: "Zeroheight is a design system management tool. It bridges the gap between design and development.",
            },
            {
                text: "It holds all our UI components, guidelines, and documentation – making sure everyone's on the same page.",
            },
        ],
        options: [{ text: "Super useful!", nextEventKey: "DIALOGUE_END" }],
    },

    computerDebug_interaction_start: {
        dialogue: [
            { text: "This monitor displays a tangled mess of code – typical debugging scene!" },
            {
                text: "Three developers gathered around a single screen, tackling a production bug affecting hundreds of thousands of users... a common occurrence, let me tell you.",
            },
        ],
        options: [
            { text: "Stressful!", nextEventKey: "DIALOGUE_BRANCH:computerDebug_stress" },
            { text: "The life of a dev.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerDebug_stress: {
        dialogue: [
            { text: "Absolutely! But also incredibly rewarding when you finally crack it." },
            {
                text: "It teaches you resilience, collaboration, and the importance of thorough testing (after the fact, of course!).",
            },
        ],
        options: [{ text: "Lessons learned!", nextEventKey: "DIALOGUE_END" }],
    },

    map_interaction_start: {
        dialogue: [
            { text: "This world map highlights Bedrock's reach." },
            { text: "The streaming platform is present in a lot of countries across the globe." },
        ],
        options: [
            { text: "Which countries?", nextEventKey: "DIALOGUE_BRANCH:map_countries" },
            { text: "That's a wide reach!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    map_countries: {
        dialogue: [
            {
                text: "Mainly Europe, but with a growing presence. Each country has its own unique challenges and requirements.",
            },
            {
                text: "Ensuring a consistent and high-quality streaming experience everywhere was a big part of the job.",
            },
        ],
        options: [{ text: "Global challenges.", nextEventKey: "DIALOGUE_END" }],
    },

    monitoring_interaction_start: {
        dialogue: [
            { text: "This complex dashboard reminds me of daily monitoring at Bedrock." },
            {
                text: "I kept a close eye on the KPIs (Key Performance Indicators) of the player and ads in production.",
            },
            {
                text: "This allowed us to react super fast if we spotted any anomalies, mainly using New Relic and Youbora.",
            },
        ],
        options: [
            { text: "Tell me about KPIs.", nextEventKey: "DIALOGUE_BRANCH:monitoring_kpis" },
            { text: "Proactive monitoring is smart!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    monitoring_kpis: {
        dialogue: [
            {
                text: "We tracked things like video start time, buffering rates, ad completion rates, and error occurrences.",
            },
            {
                text: "It's like having a pulse on the entire system, ensuring a smooth experience for millions of users.",
            },
        ],
        options: [{ text: "Data-driven decisions!", nextEventKey: "DIALOGUE_END" }],
    },

    chromecast_interaction_start: {
        dialogue: [
            { text: "Ah, the Chromecast. I worked on the remake of the Chromecast project." },
            { text: "The goal was to make it more stable, faster, and easier to maintain." },
        ],
        options: [
            { text: "What were the challenges?", nextEventKey: "DIALOGUE_BRANCH:chromecast_challenges" },
            { text: "Improving existing tech is great.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    chromecast_challenges: {
        dialogue: [
            {
                text: "Migrating legacy code, optimizing performance for low-power devices, and ensuring cross-device compatibility.",
            },
            {
                text: "It was a deep dive into media playback and device communication – very rewarding to see the improvements!",
            },
        ],
        options: [{ text: "Sounds like a big undertaking.", nextEventKey: "DIALOGUE_END" }],
    },

    tv_interaction_start: {
        dialogue: [
            { text: "This TV is showing a Bedrock presentation." },
            { text: "It brings back memories of showcasing all the hard work we put into the platform." },
        ],
        options: [
            { text: "What was Bedrock?", nextEventKey: "DIALOGUE_BRANCH:tv_bedrock_info" },
            { text: "Nice!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    tv_bedrock_info: {
        dialogue: [
            {
                text: "Bedrock is a streaming technology platform that powers major European broadcasters and streaming services.",
            },
            { text: "It's the engine behind many popular video-on-demand and live TV experiences." },
        ],
        options: [{ text: "Got it!", nextEventKey: "DIALOGUE_END" }],
    },

    ac_interaction_start: {
        dialogue: [
            {
                text: "A nice breeze from the AC. In the summer, this is an absolute must-have in an office, but in moderation, of course.",
            },
            { text: "Just like clean code – refreshing when done right, painful when overused." },
        ],
        options: [
            { text: "Any AC-related work stories?", nextEventKey: "DIALOGUE_BRANCH:ac_story" },
            { text: "Essential comfort!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    ac_story: {
        dialogue: [
            { text: "Once, the AC broke down during a critical sprint. We learned the true meaning of 'hotfix'." },
            { text: "Sweat + code = a unique kind of debugging experience." },
        ],
        options: [{ text: "That's dedication!", nextEventKey: "DIALOGUE_END" }],
    },

    printer_interaction_start: {
        dialogue: [
            { text: "The office printer. My personal stationery shop these days." },
            {
                text: "I only use this for personal stuff now. The paperless office dream is almost a reality for dev docs! :sweating_face:",
            },
        ],
        options: [
            { text: "What do you print?", nextEventKey: "DIALOGUE_BRANCH:printer_use" },
            { text: "Digital is the way.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    printer_use: {
        dialogue: [
            { text: "Mostly return labels for online shopping, to be honest. Or the occasional recipe." },
            { text: "My coding notes? All in markdown and git. Much greener, and searchable!" },
        ],
        options: [{ text: "Smart!", nextEventKey: "DIALOGUE_END" }],
    },

    money_interaction_start: {
        dialogue: [
            { text: "Oh, money. The universal motivator, and sometimes, the mystery." },
            { text: "I wonder what it's truly used for... besides paying for coffee, of course." },
        ],
        options: [
            { text: "Deep thoughts...", nextEventKey: "DIALOGUE_BRANCH:money_thoughts" },
            { text: "Cha-ching!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    money_thoughts: {
        dialogue: [
            {
                text: "It's a tool, a means to an end, enabling new projects, new experiences, and maybe... just maybe, better coffee.",
            },
        ],
        options: [{ text: "Always about the coffee.", nextEventKey: "DIALOGUE_END" }],
    },

    spawn_interaction_start: {
        dialogue: [
            { text: "This is the spawn point. A beginning." },
            { text: "Every great journey, like a career, starts with a single step... or a respawn." },
        ],
        options: [
            { text: "Where to next?", nextEventKey: "DIALOGUE_BRANCH:spawn_next" },
            { text: "Let's explore!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    spawn_next: {
        dialogue: [
            {
                text: "That's up to you, the player! Explore this virtual office, discover more about my work, and have fun.",
            },
            { text: "Just don't get stuck behind that 'half-wall' tile..." },
        ],
        options: [{ text: "Challenge accepted!", nextEventKey: "DIALOGUE_END" }],
    },
} satisfies DialoguesAtlas;
