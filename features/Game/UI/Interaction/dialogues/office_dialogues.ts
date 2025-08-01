import { DialoguesAtlas } from "@/features/Game/UI/Interaction/interaction.type";
import ITSFWebSite from "@/public/game/dialogues/office/images/ITSFWebSite.webp";
import GOMO from "@/public/game/dialogues/office/images/gomo.webp";
import reactLogo from "@/public/game/dialogues/office/images/reactLogo.webp";
import firePlace from "@/public/game/dialogues/office/images/firePlace.webp";
import cloudWords from "@/public/game/dialogues/office/images/cloudWords.webp";
import safe from "@/public/game/dialogues/office/images/safe.webp";
import teamITSF from "@/public/game/dialogues/office/images/teamITSF.webp";
import crmITSF from "@/public/game/dialogues/office/images/crmITSF.webp";
import plant from "@/public/game/dialogues/office/images/plant.webp";
import certificate from "@/public/game/dialogues/office/images/certificate.webp";
import debug from "@/public/game/dialogues/office/images/debug.webp";
import ac from "@/public/game/dialogues/office/images/ac.webp";
import map from "@/public/game/dialogues/office/images/map.webp";
import chromecast from "@/public/game/dialogues/office/images/chromecast.webp";
import chromecastVideo from "@/public/game/dialogues/office/images/chromecastVideo.webp";
import platformTV from "@/public/game/dialogues/office/images/platformTV.webp";
import monitoring from "@/public/game/dialogues/office/images/monitoring.webp";
import kpis from "@/public/game/dialogues/office/images/kpis.webp";
import zeroheight from "@/public/game/dialogues/office/images/zeroheight.webp";
import figma from "@/public/game/dialogues/office/images/figma.webp";
import videoDiagram from "@/public/game/dialogues/office/images/videoDiagram.webp";
import devBedrock from "@/public/game/dialogues/office/images/devBedrock.webp";
import teamBedrock from "@/public/game/dialogues/office/images/teamBedrock.webp";

export default {
    computerITSF_interaction_start: {
        dialogue: [
            {
                image: ITSFWebSite,
                text: "This computer brings back memories of ITSF, where I developed a CRM for telecommunications companies.",
            },
            {
                image: GOMO,
                text: "My role was focused on the frontend, contributing to the design, development, and continuous deployment of critical applications.",
            },
        ],
        options: [
            {
                text: "What did you do as a frontend developer?",
                nextEventKey: "DIALOGUE_BRANCH:computerITSF_frontend_role",
            },
            { text: "Tell me about the technical stack.", nextEventKey: "DIALOGUE_BRANCH:computerITSF_stack" },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerITSF_frontend_role: {
        dialogue: [
            {
                text: "As a frontend developer, I was a key player in building a complex B2B/B2C CRM. I specifically worked on the user interface and experience.",
            },
            {
                text: "It involved developing and continuously delivering React features, interacting with dozens of internal microservices to manage millions of telecom customer services.",
            },
            {
                text: "For example, we improved the subscription process, reducing the time it used to take from 45 minutes to less than 10 minutes.",
            },
        ],
        options: [
            {
                text: "What about the technical quality?",
                nextEventKey: "DIALOGUE_BRANCH:computerITSF_technical_quality",
            },
            { text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerITSF_technical_quality: {
        dialogue: [
            {
                text: "I actively contributed to strengthening code quality through technical analysis, code reviews, and updating our tech stack and guidelines.",
            },
            {
                text: "I also acted as a technical referent, ensuring best practices and smooth collaboration within the team.",
            },
        ],
        options: [{ text: "Thank you for sharing. That's all for now.", nextEventKey: "DIALOGUE_END" }],
    },
    computerITSF_stack: {
        dialogue: [
            {
                image: reactLogo,
                text: "My main tools were React 18, Typescript, MUI, and SWR for the frontend, working with Keycloak for authentication.",
            },
            {
                text: "I also contributed to the Backend-for-Frontend (BFF) development using Spring/Java, and utilized Docker and Git for our continuous delivery.",
            },
        ],
        options: [{ text: "Understood. This concludes our discussion.", nextEventKey: "DIALOGUE_END" }],
    },

    firePlace_interaction_start: {
        dialogue: [
            { image: firePlace, text: "A crackling fireplace... Ah, the warmth and good vibes." },
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
            {
                image: cloudWords,
                text: "This device brings back memories of ensuring software quality through various testing approaches.",
            },
            { text: "I utilized different testing strategies to confirm everything worked as expected." },
        ],
        options: [
            { text: "Tell me about integration tests.", nextEventKey: "DIALOGUE_BRANCH:ITSFTest_integration" },
            { text: "What about unit tests?", nextEventKey: "DIALOGUE_BRANCH:ITSFTest_unit" },
            { text: "Why test your app at all?", nextEventKey: "DIALOGUE_BRANCH:ITSFTest_why_test" },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    ITSFTest_integration: {
        dialogue: [
            { text: "Integration tests allow us to verify the interactions between different parts of our system." },
            {
                text: "By mocking API responses, for example, we can accurately check the behavior of the UI in real-world scenarios.",
            },
        ],
        options: [
            { text: "Why use integration tests?", nextEventKey: "DIALOGUE_BRANCH:ITSFTest_integration_why" },
            { text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    ITSFTest_integration_why: {
        dialogue: [
            {
                text: "They are particularly useful for testing multi-step interactions, like a user's flow through an application, or to see how different components truly interact with one another.",
            },
            { text: "It helps catch issues that individual parts might miss when working in isolation." },
        ],
        options: [
            {
                text: "Understood. This concludes our discussion on integration tests.",
                nextEventKey: "DIALOGUE_END",
            },
        ],
    },
    ITSFTest_unit: {
        dialogue: [
            { text: "Sometimes we also use unit tests, either instead of or in addition to integration tests." },
            {
                text: "Unit tests focus on the smallest testable parts of an application, like a single function or component.",
            },
        ],
        options: [
            { text: "Why use unit tests?", nextEventKey: "DIALOGUE_BRANCH:ITSFTest_unit_why" },
            { text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    ITSFTest_unit_why: {
        dialogue: [
            {
                text: "They are useful for checking local logic or pure components because a given input will always yield the same predictable output.",
            },
            {
                text: "Crucially, unit tests are generally much faster to run, providing quick feedback during development and CI/CD times.",
            },
        ],
        options: [{ text: "Thank you for sharing. That's all for now.", nextEventKey: "DIALOGUE_END" }],
    },
    ITSFTest_why_test: {
        dialogue: [
            {
                text: "Testing is fundamental for several reasons. It helps developers catch mistakes early and provides confidence during code reviews.",
            },
            {
                text: "It also ensures that existing logic continues to work as intended even after new changes, significantly reducing the risk of introducing new bugs.",
            },
        ],
        options: [{ text: "That makes sense. Thanks for the explanation.", nextEventKey: "DIALOGUE_END" }],
    },

    safe_interaction_start: {
        dialogue: [
            { image: safe, text: "A sturdy, unyielding safe." },
            { text: "This represents all the amazing work I've been a part of that remains confidential." },
            { text: "There's a lot of great design and code from past projects that I can't showcase publicly." },
        ],
        options: [
            {
                text: "Tell me more about the confidential designs.",
                nextEventKey: "DIALOGUE_BRANCH:safe_confidential_design",
            },
            {
                text: "What about the technical solutions you can't show?",
                nextEventKey: "DIALOGUE_BRANCH:safe_non_showcase_code",
            },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    safe_confidential_design: {
        dialogue: [
            {
                text: "Many projects involved intricate UI/UX designs, carefully crafted to enhance user experience and meet specific business needs.",
            },
            {
                text: "While I can't share specifics, these designs were integral to the success of complex applications.",
            },
        ],
        options: [{ text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" }],
    },
    safe_non_showcase_code: {
        dialogue: [
            {
                text: "Much of the code tackled fascinating technical challenges, often to make our applications feel faster and responsive to users.",
            },
            {
                text: "We also devised clever architectural patterns to share core code across a growing codebase, while still allowing for deep customization.",
            },
            {
                text: "These were truly innovative solutions developed as a team at ITSF to handle our unique enterprise demands.",
            },
        ],
        options: [{ text: "Thank you for sharing. That's all for now.", nextEventKey: "DIALOGUE_END" }],
    },

    phone_interaction_start: {
        dialogue: [
            {
                image: crmITSF,
                text: "This old-school phone reminds me of my work on a CRM for telecoms in Europe at ITSF.",
            },
            { text: "That was one of the main products I helped develop." },
        ],
        options: [
            { text: "What's a CRM?", nextEventKey: "DIALOGUE_BRANCH:phone_crm_info" },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    phone_crm_info: {
        dialogue: [
            {
                text: "A CRM is Customer Relationship Management software. It helps companies manage and analyze customer interactions and data.",
            },
            {
                text: "The agent on the phone or in retail can help you with anything related to your account.",
            },
            {
                text: "Think of it as the brain behind keeping customers happy and organized for big telecom providers across Europe.",
            },
            {
                text: "This specific product enabled agents in store and remotely to help customers with any possible action on their account or subscriptions.",
            },
        ],
        options: [
            { text: "Were there different CRMs?", nextEventKey: "DIALOGUE_BRANCH:phone_crm_variations" },
            { text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    phone_crm_variations: {
        dialogue: [
            {
                text: "Yes, there were actually two distinct CRM applications: one for Business-to-Business (B2B) clients and another for Business-to-Consumer (B2C) clients.",
            },
            {
                text: "The significant challenge was to maximize code and component reuse between these two apps, despite their very different operational processes.",
            },
        ],
        options: [{ text: "That sounds like an interesting architectural challenge.", nextEventKey: "DIALOGUE_END" }],
    },

    study_interaction_start: {
        dialogue: [
            { text: "This study area takes me back to my three years as an apprentice." },
            {
                text: "It was an intense period of balancing my engineer’s degree in computing science with working at CGI.",
            },
        ],
        options: [
            {
                text: "Tell me more about the apprentice life.",
                nextEventKey: "DIALOGUE_BRANCH:study_apprentice_life",
            },
            {
                text: "How did you balance study and work projects?",
                nextEventKey: "DIALOGUE_BRANCH:study_project_preference",
            },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    study_apprentice_life: {
        dialogue: [
            {
                text: "It was indeed demanding, but incredibly enriching. School alone couldn't provide the rich environment, diverse projects, or daily expertise of senior developers that I found at the company.",
            },
            { text: "Theory and practical application met daily, which I believe is the most effective way to learn." },
        ],
        options: [{ text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" }],
    },
    study_project_preference: {
        dialogue: [
            {
                text: "When it came to school, I particularly enjoyed the technical projects. They were opportunities to learn new technologies and concepts that weren't always part of my day-to-day work at CGI.",
            },
            {
                text: "However, overall, I almost always preferred working on real-world projects, as they offered a unique practical experience that studying couldn't fully replicate.",
            },
        ],
        options: [{ text: "That perspective makes sense. Thank you for sharing.", nextEventKey: "DIALOGUE_END" }],
    },

    coffeeDispenser_interaction_start: {
        dialogue: [
            { text: "Ah, the infamous coffee dispenser. I remember having to pay for a really bad cup here." },
            {
                text: "Thankfully, companies nowadays understand that good coffee (and quality of life) is a must-have, not a luxury.",
            },
        ],
        options: [
            {
                text: "Bad coffee or tea is a serious problem.",
                nextEventKey: "DIALOGUE_BRANCH:coffeeDispenser_bad_coffee",
            },
            { text: "Glad things improved!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    coffeeDispenser_bad_coffee: {
        dialogue: [{ text: "Indeed! A developer's fuel should be top-notch. It impacts productivity... and mood!" }],
        options: [{ text: "I see.", nextEventKey: "DIALOGUE_END" }],
    },

    computerCGI_interaction_start: {
        dialogue: [
            { text: "This screen brings me back to my days at CGI, working on various web solutions." },
            { text: "It was a time of significant learning, especially with technologies like Drupal." },
        ],
        options: [
            { text: "Tell me about Drupal work.", nextEventKey: "DIALOGUE_BRANCH:computerCGI_drupal" },
            { text: "What about other projects at CGI?", nextEventKey: "DIALOGUE_BRANCH:computerCGI_symfony" },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerCGI_drupal: {
        dialogue: [
            {
                text: "I was deeply involved in customizing and developing modules for enterprise websites like the FFT.",
            },
            { text: "It taught me a lot about content management systems, PHP, and database integration." },
            { text: "Definitely a solid foundation for more modern web development." },
        ],
        options: [{ text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" }],
    },
    computerCGI_symfony: {
        dialogue: [
            {
                text: "Besides Drupal, I also worked with Symfony for an insurance company. This project was crucial for understanding MVC (Model-View-Controller) architecture in a real-life production environment.",
            },
            {
                text: "It provided valuable insights into structuring large-scale applications and managing complex business logic.",
            },
        ],
        options: [{ text: "That's practical experience. Thanks for sharing.", nextEventKey: "DIALOGUE_END" }],
    },

    teamBedrock_interaction_start: {
        dialogue: [
            {
                image: teamBedrock,
                text: "Ah, the Bedrock corner! I truly had an amazing time working with these folks.",
            },
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
            {
                text: "Big thanks to everyone in Team Bedrock for the fantastic memories and learning experiences! Especially the Tube team !",
            },
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
            { text: "Oh, the list is long: a tactical game, a ANKI app like, a TCG deck trading platform..." },
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
                text: "Definitely an orange. Simple, juicy, and sweet. full of vitamins!",
            },
        ],
        options: [{ text: "I see.", nextEventKey: "DIALOGUE_END" }],
    },

    plant_interaction_start: {
        dialogue: [
            { image: plant, text: "Look at this lovely office plant. Plants just make you happier, don't they?" },
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
                text: "Lately, it's been about Vibe coding and the new TS compiler.",
            },
            { text: "The coding world never sleeps, and neither do I (when it comes to learning)!" },
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
        dialogue: [{ text: "It's just a regular fridge... full of... meal for lunch. Maybe it's a trap." }],
        options: [{ text: "You've been warned.", nextEventKey: "DIALOGUE_END" }],
    },

    coffee_interaction_start: {
        dialogue: [
            { text: "A cup of coffee or tea. Simple, yet reinvigorating." },
            {
                text: "I believe that if your main problem at the office is the taste of the coffee, your quality of life there is probably really, really good!",
            },
        ],
        options: [
            { text: "That's a philosophical take!", nextEventKey: "DIALOGUE_BRANCH:coffee_philosophy" },
            { text: "Cheers to good coffee and tea !", nextEventKey: "DIALOGUE_END" },
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
            { image: teamITSF, text: "This plaque reminds me of the young, awesome team at ITSF." },
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
                text: "Beyond coding as a frontend dev, I learned about collaboration, problem-solving under pressure, and the importance of a supportive environment.",
            },
            { text: "They truly accelerated my growth as a developer." },
        ],
        options: [{ text: "That's invaluable.", nextEventKey: "DIALOGUE_END" }],
    },

    certification_interaction_start: {
        dialogue: [
            {
                image: certificate,
                text: "Ah, the wall of certifications! I'm proud to say I am a real engineer and that I continued to learn!",
            },
            { text: "My engineer's degree in computing science, and an accessibility certification, are highlights." },
        ],
        options: [
            { text: "Tell me about accessibility.", nextEventKey: "DIALOGUE_BRANCH:certification_accessibility" },
            {
                text: "What about your engineer's degree?",
                nextEventKey: "DIALOGUE_BRANCH:certification_engineer_degree",
            },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
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
            {
                text: 'It consists of way more than adding "aria-labels" and "alt" on images !',
            },
        ],
        options: [{ text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" }],
    },
    certification_engineer_degree: {
        dialogue: [
            {
                text: "My engineer's degree in computing science was the core curriculum I followed during my apprenticeship at CGI.",
            },
            {
                text: "It provided a broad foundation, covering general computing as well as specialized areas like AI, software development, databases, and even aspects of project management and communication.",
            },
        ],
        options: [{ text: "That's a comprehensive background. Thank you for sharing.", nextEventKey: "DIALOGUE_END" }],
    },

    computerPlayer_interaction_start: {
        dialogue: [
            {
                image: devBedrock,
                text: "This computer represents my work at Bedrock, specifically as a frontend developer in the player team.",
            },
            { text: "Building and maintaining video players for millions of users is quite a ride!" },
        ],
        options: [
            { text: "What's involved in a video player?", nextEventKey: "DIALOGUE_BRANCH:computerPlayer_details" },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerPlayer_details: {
        dialogue: [
            {
                text: "A video player on the web is about handling the stream of various media—live, video, or audio—to deliver it smoothly to users.",
            },
            {
                text: "Beyond buffering and DRM, there's a lot of underlying complexity to ensure a seamless experience.",
            },
        ],
        options: [
            {
                text: "How do you handle the media streams?",
                nextEventKey: "DIALOGUE_BRANCH:computerPlayer_stream_handling",
            },
            { text: "What about advertisements?", nextEventKey: "DIALOGUE_BRANCH:computerPlayer_advertisement" },
            { text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerPlayer_stream_handling: {
        dialogue: [
            {
                text: "In the professional world, we don't just receive a single, large MP3 or raw file because they're too big to deliver efficiently.",
            },
            {
                image: videoDiagram,
                text: "Instead, the media is fragmented into small parts, and the player continuously requests and stitches these fragments together to provide a smooth playback experience.",
            },
        ],
        options: [{ text: "That's clever. Thank you for sharing.", nextEventKey: "DIALOGUE_END" }],
    },
    computerPlayer_advertisement: {
        dialogue: [
            {
                text: "The advertisement part is also pretty complicated. Ad formats can vary wildly, and many different providers are involved, making the integration quite challenging.",
            },
            {
                text: "Given that ads are often the main revenue stream for the customer, no errors are permitted during playback—it's a critical component to get right every time.",
            },
        ],
        options: [{ text: "Understood. This concludes our discussion on the player.", nextEventKey: "DIALOGUE_END" }],
    },

    computerUi_interaction_start: {
        dialogue: [
            { image: figma, text: "This screen shows off the UI work process at Bedrock." },
            { text: "We worked in agile cycles (Scrum), with UI designs from Figma or Zeroheight." },
            {
                text: "The coolest part? One theme for each customer – ensuring brand consistency across platforms. Pixel perfect with Zeroheight.",
            },
        ],
        options: [
            { text: "What is Zeroheight?", nextEventKey: "DIALOGUE_BRANCH:computerUi_zeroheight" },
            { text: "Design systems are key!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerUi_zeroheight: {
        dialogue: [
            {
                image: zeroheight,
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
            {
                image: debug,
                text: "This monitor displays a tangled mess of code – a scene all too familiar from our debugging sessions.",
            },
            {
                text: "We put immense effort into preventing bugs through comprehensive tests, rigorous QA, and continuous monitoring.",
            },
        ],
        options: [
            { text: "But bugs still happen?", nextEventKey: "DIALOGUE_BRANCH:computerDebug_critical_bugs" },
            {
                text: "Tell me about the team's approach.",
                nextEventKey: "DIALOGUE_BRANCH:computerDebug_team_effort",
            },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerDebug_critical_bugs: {
        dialogue: [
            {
                text: "Absolutely. Despite all precautions, sometimes the worst happens, and a critical bug surfaces in production.",
            },
            {
                text: "When a key feature isn't working, customers can potentially lose a lot of money, so even if we don't save lives, our urgency is high.",
            },
        ],
        options: [
            { text: "How does the team handle that?", nextEventKey: "DIALOGUE_BRANCH:computerDebug_team_effort" },
            { text: "I see. Moving on.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    computerDebug_team_effort: {
        dialogue: [
            {
                text: "It was not unusual to see multiple developers from the team working together, pooling their knowledge to track down and correct a significant bug.",
            },
            {
                text: "Sometimes these bugs weren't even from our own code, but we still had to find a solution or a workaround if we could.",
            },
            {
                text: "It's a high-stakes, collaborative effort, quite different from when bugs are minor or caught before deployment, which is, thankfully, far less stressful.",
            },
        ],
        options: [{ text: "That's a dedicated approach. Thanks for sharing.", nextEventKey: "DIALOGUE_END" }],
    },

    map_interaction_start: {
        dialogue: [
            { image: map, text: "This world map highlights Bedrock's reach." },
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
            { image: monitoring, text: "This dashboard reminds me of daily monitoring at Bedrock." },
            {
                text: "I kept a close eye on the KPIs (Key Performance Indicators) of the player and ads in production.",
            },
            {
                text: "This allowed us to react super fast if we spotted any anomalies, mainly using New Relic and Youbora.",
            },
            {
                text: "We also had alerts and simulated navigation to unsure the platforms were up 24/7",
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
                image: kpis,
                text: "We tracked things like plays, errors per play, ads impressions, browsers, and much more. All in different carefully crafted dashboards",
            },
            {
                text: "It's like having a pulse on the entire system, ensuring a smooth experience for millions of users.",
            },
        ],
        options: [{ text: "Data-driven decisions!", nextEventKey: "DIALOGUE_END" }],
    },

    chromecast_interaction_start: {
        dialogue: [
            {
                image: chromecast,
                text: "Ah, the Chromecast. This device is essentially a small computer designed to embed a video player. It's primarily used to watch content from other devices, like a phone or PC, directly on a TV.",
            },
            {
                text: "It downloads specific JavaScript code to run content streamed from a web application, typically through a Chrome browser.",
            },
        ],
        options: [
            {
                text: "Tell me about the Chromecast project remake.",
                nextEventKey: "DIALOGUE_BRANCH:chromecast_project_remake",
            },
            {
                text: "What did you learn from working on it?",
                nextEventKey: "DIALOGUE_BRANCH:chromecast_personal_learning",
            },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    chromecast_project_remake: {
        dialogue: [
            {
                image: chromecastVideo,
                text: "I worked on a significant remake of this project. The primary goal was to make the existing Chromecast application more stable, faster, and significantly easier to maintain.",
            },
            {
                text: "Challenges included migrating legacy code, optimizing performance for low-power devices. It was a deep dive into media playback and device communication—very rewarding to see the improvements!",
            },
        ],
        options: [{ text: "Sounds like a big undertaking. I see.", nextEventKey: "DIALOGUE_END" }],
    },
    chromecast_personal_learning: {
        dialogue: [
            { text: "Working on the Chromecast project was truly interesting and greatly improved my knowledge." },
            {
                text: "I gained a much deeper understanding of event-driven architectures and how to build highly modular code for flexible and maintainable systems.",
            },
        ],
        options: [{ text: "That's valuable experience. Thanks for sharing.", nextEventKey: "DIALOGUE_END" }],
    },

    tv_interaction_start: {
        dialogue: [
            { image: platformTV, text: "Let's watch a movie on Netfl... Bedrock I mean." },
            { text: "It brings back memories of showcasing all the hard work we put into the platform." },
        ],
        options: [
            { text: "What is Bedrock?", nextEventKey: "DIALOGUE_BRANCH:tv_bedrock_info" },
            { text: "Nice!", nextEventKey: "DIALOGUE_END" },
        ],
    },
    tv_bedrock_info: {
        dialogue: [
            {
                text: "Bedrock is a streaming technology platform that powers major European broadcasters and streaming services.",
            },
            {
                text: "It's the platform behind many popular video-on-demand and live TV experiences. (M6+, Videoland, RTL+, ...)",
            },
        ],
        options: [{ text: "Got it!", nextEventKey: "DIALOGUE_END" }],
    },

    ac_interaction_start: {
        dialogue: [
            {
                image: ac,
                text: "A nice breeze from the AC. In the summer, this is an absolute must-have in an office, but in moderation, of course.",
            },
            { text: "Just like clean code – refreshing when done right, painful when overused." },
        ],
        options: [{ text: "Refreshing !", nextEventKey: "DIALOGUE_END" }],
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
            { text: "This stack of bills makes me think about value and investment." },
            { text: "In a professional context, it represents the impact and return one can bring to a company." },
        ],
        options: [
            { text: "How do you view that investment?", nextEventKey: "DIALOGUE_BRANCH:money_investment_value" },
            { text: "Understood. Thank you for the insight.", nextEventKey: "DIALOGUE_END" },
        ],
    },
    money_investment_value: {
        dialogue: [
            {
                text: "I see my contributions as an investment. My skills in complex problem-solving, efficient development, and commitment to quality mean tangible returns for a team or project.",
            },
            {
                text: "It's about delivering robust solutions that save time, reduce costs, and drive innovation, ultimately contributing to the company's success.",
            },
        ],
        options: [{ text: "That's a clear value proposition. Thanks for sharing.", nextEventKey: "DIALOGUE_END" }],
    },
} satisfies DialoguesAtlas;
