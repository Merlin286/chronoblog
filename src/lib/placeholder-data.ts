import type { Post, Comment } from './types';
import placeholderImages from './placeholder-images.json';

const posts: Post[] = [
  {
    id: '1',
    title: 'The Quantum Leap in Computing',
    slug: 'quantum-leap-computing',
    publicationDate: '2024-07-15T09:00:00Z',
    image: placeholderImages.quantumComputer.src,
    content: `The world of computing is on the verge of a monumental shift. Quantum computers, once a theoretical concept, are becoming a reality. Unlike classical computers that store information in bits (0s and 1s), quantum computers use qubits. A qubit can be a 0, a 1, or both simultaneously—a state known as superposition. This, combined with another quantum phenomenon called entanglement, allows quantum computers to perform complex calculations at speeds unimaginable for even the most powerful supercomputers of today.

From drug discovery and materials science to financial modeling and cryptography, the potential applications are vast. The ability to simulate molecules with perfect accuracy could lead to revolutionary new medicines and materials. However, building and maintaining stable quantum computers present significant challenges. Decoherence, where qubits lose their quantum properties due to environmental interference like temperature fluctuations or electromagnetic fields, remains a major hurdle. These quantum states are incredibly fragile, and protecting them is a primary focus of quantum hardware engineers.

Researchers are exploring various physical implementations for qubits, including superconducting circuits, trapped ions, and photonic systems, each with its own set of advantages and disadvantages. As researchers around the globe race to overcome these obstacles, we are inching closer to a new era of technological innovation. The quantum leap is not just about faster computers; it's about solving problems that were once considered unsolvable, opening up entirely new fields of scientific inquiry and fundamentally changing our relationship with technology. The journey is complex, but the destination promises to be transformative.`,
  },
  {
    id: '2',
    title: 'Navigating the Stars: The Evolution of Celestial Navigation',
    slug: 'evolution-of-celestial-navigation',
    publicationDate: '2024-06-28T14:30:00Z',
    image: placeholderImages.celestialNavigation.src,
    content: `Long before the advent of GPS, ancient mariners navigated the vast, featureless oceans using the sun, moon, and stars. This art and science, known as celestial navigation, was one of humanity's first forays into applied astronomy. The principles were simple yet profound: by measuring the angle of a celestial body above the horizon using instruments like the astrolabe or later the sextant, a navigator could determine their latitude. Determining longitude, however, was a much more difficult problem, the solution to which spurred centuries of innovation.

The invention of the marine chronometer in the 18th century, a timepiece accurate enough to keep precise time at sea, finally solved the longitude problem. It allowed sailors to compare their local time (determined by the sun's position at noon) with a known time at a reference point (like Greenwich, England). This fusion of astronomy and horology revolutionized maritime travel, making it safer, more reliable, and enabling the age of exploration and global trade. The ability to know one's position on a map with reasonable accuracy was a watershed moment in human history.

This mastery of the seas was built on centuries of accumulated knowledge, from Polynesian wayfinders who read wave patterns and bird flights to Arab scholars who perfected the astrolabe. Even in our digital age, where satellites guide our every move, celestial navigation is still taught to naval officers and long-distance sailors as a critical backup system. It is a testament to its enduring power and the timeless ingenuity of our ancestors who first looked to the heavens for guidance, finding their way in the world by understanding their place in the cosmos.`,
  },
  {
    id: '3',
    title: 'The Silent Language of Trees',
    slug: 'silent-language-of-trees',
    publicationDate: '2024-05-10T11:00:00Z',
    image: placeholderImages.forest.src,
    content: `Forests are not just collections of individual trees; they are complex, interconnected communities. Recent scientific discoveries have revealed a "wood wide web," a subterranean network of fungi that connects the roots of trees and other plants. Through this mycorrhizal network, trees can share resources like water, carbon, and nutrients. An older, more established "mother tree" can nurture seedlings in the understory, sending them the nutrients they need to survive in the shade. This cooperation challenges the traditional view of plants as solitary competitors.

This network is also a conduit for information. When a tree is attacked by insects, it can send out chemical distress signals through the fungal network to its neighbors. The other trees can then ramp up their own defenses, such as producing bitter-tasting compounds in their leaves, in preparation for an attack. Similarly, signals can warn of drought or disease, allowing the entire forest to respond in a coordinated way. This silent communication system challenges our understanding of plants as passive organisms, revealing a hidden layer of complexity in forest ecosystems.

It suggests a form of collective intelligence, where the forest acts as a single, resilient superorganism, working together for mutual survival. Understanding this intricate language is not just a scientific curiosity; it has profound implications for conservation and forestry. By recognizing the importance of these underground networks, we can develop more sustainable practices that preserve the health and integrity of these vital ecosystems for future generations, ensuring that the silent conversations of the forest can continue.`,
  },
  {
    id: '4',
    title: 'The Rise of AI: From Algorithms to Everyday Assistants',
    slug: 'rise-of-ai-assistants',
    publicationDate: '2024-08-01T10:00:00Z',
    image: placeholderImages.aiAssistant.src,
    content: `Artificial Intelligence (AI) has moved from the pages of science fiction into the fabric of our daily lives. From the smart assistants on our phones to the recommendation engines that power our streaming services, AI is everywhere. This technological revolution is driven by machine learning, a subset of AI where algorithms are trained on vast datasets to recognize patterns and make predictions. The development of deep learning and neural networks, which mimic the structure of the human brain, has been particularly transformative, allowing for breakthroughs in areas like image and speech recognition.

The implications are profound. AI is helping doctors diagnose diseases like cancer earlier and with greater accuracy by analyzing medical images. It's enabling self-driving cars to navigate complex city streets by processing real-time sensor data. In the creative fields, AI is generating art, music, and text, pushing the boundaries of what we consider to be artistic expression. This rapid progress has created a more personalized and efficient world, automating tedious tasks and freeing up human potential for more creative and strategic endeavors.

However, the rise of AI also raises important ethical questions about privacy, bias in algorithms, and the future of work. If an AI is trained on biased data, it can perpetuate and even amplify societal inequalities. The potential for job displacement requires a proactive approach to education and workforce development. As we continue to integrate AI more deeply into society, a thoughtful and human-centered approach is crucial to harnessing its benefits while mitigating its risks. The conversation around AI is not just about technology; it's about the kind of future we want to build.`,
  },
  {
    id: '5',
    title: 'Unseen Universe: The Mystery of Dark Matter',
    slug: 'mystery-of-dark-matter',
    publicationDate: '2024-08-15T12:30:00Z',
    image: placeholderImages.darkMatter.src,
    content: `What holds galaxies together? The surprising answer is: something we can't see. Observations of rotating galaxies show that they spin so fast they should fly apart based on the mass of their visible matter. The stars, gas, and dust we can observe don't have enough gravitational pull to keep them cohesive. This discrepancy, first noted by astronomers like Vera Rubin, points to the existence of "dark matter," a mysterious, invisible substance that is thought to make up about 27% of the universe. For perspective, ordinary matter—everything we can see and interact with—makes up only about 5%.

Scientists know more about what dark matter isn't than what it is. It doesn't emit, absorb, or reflect light, and it doesn't seem to interact with the electromagnetic forces that govern ordinary matter. Its presence is inferred only through its gravitational effects on the visible universe, acting as an invisible cosmic scaffold upon which galaxies are built. This is one of the most profound puzzles in modern physics, and its solution lies beyond the current Standard Model of particle physics.

Worldwide, scientists are engaged in a multi-pronged hunt for dark matter. Enormous detectors in laboratories deep underground are shielded from cosmic rays, hoping to catch a rare, fleeting interaction between a dark matter particle and a detector made of liquid xenon or other materials. Other experiments, like those at the Large Hadron Collider, are trying to create dark matter particles by smashing protons together. The discovery of the nature of dark matter would be one of the most significant breakthroughs in the history of science, rewriting our understanding of the cosmos and our place within it.`,
  },
  {
    id: '6',
    title: 'The Great Timeline: A History of Ancient Clocks',
    slug: 'history-of-ancient-clocks',
    publicationDate: '2024-04-22T09:45:00Z',
    image: placeholderImages.ancientClocks.src,
    content: `The desire to measure time is as old as civilization itself. Before the invention of mechanical clocks, ancient cultures devised ingenious ways to track the passage of hours, driven by the needs of agriculture, religion, and governance. The Egyptians used massive obelisks as sundials, tracking the movement of their shadows to mark the time of day with surprising accuracy. They also developed water clocks, or clepsydras, which measured time by the steady drip of water from a vessel—a technology that worked even at night or on cloudy days, a significant advantage over the sundial.

Across the world, other innovations emerged. In China, intricate incense clocks marked time by burning specific lengths of scented sticks, sometimes with different scents to mark different hours. In Europe, the hourglass, with its trickling sand, became a common symbol of the ephemeral nature of life and a practical tool for measuring set durations, especially at sea. These early timekeeping devices were not just practical tools; they were deeply intertwined with culture and religion, helping to schedule prayers, organize work, and structure societies.

These inventions represent the first steps in a long journey of horological innovation. They laid the conceptual groundwork for the weight-driven mechanical clocks that would appear in medieval European monasteries, which in turn led to the pendulum clocks and eventually the quartz and atomic clocks of today. This journey is a microcosm of technological progress itself, a relentless quest for greater precision and control over the world around us. It's a journey that continues to shape how we perceive and manage our most precious resource: time.`,
  },
  {
    id: '7',
    title: 'The Simulation Hypothesis: Are We Living in a Program?',
    slug: 'simulation-hypothesis',
    publicationDate: '2024-09-20T10:00:00Z',
    image: placeholderImages.simulation.src,
    content: `The world around us feels undeniably real, but some physicists and philosophers suggest it might be an incredibly sophisticated computer simulation. This is the "Simulation Hypothesis," popularized by thinkers like Nick Bostrom. The argument posits that if a civilization becomes technologically mature enough to create simulations of their ancestors, they would likely run billions of them. If that's the case, it's statistically far more likely that we are one of the countless simulated consciousnesses than the single "base reality" civilization.

While it sounds like science fiction, the idea has deep roots in philosophical skepticism about the nature of reality, from Plato's Allegory of the Cave to Descartes' Evil Demon. Modern physics adds an intriguing, if speculative, layer to the debate. The fact that the universe seems to be governed by mathematical laws and has a fundamental resolution, much like the pixels in a video game, is seen by some as potential evidence. Quantum mechanics, with its observer effect and quantized fields, can be interpreted in ways that align with the idea of a computed reality.

Of course, there is no concrete evidence to prove or disprove the theory, and it may be fundamentally unfalsifiable. However, exploring it as a thought experiment pushes the boundaries of our understanding of consciousness, the physics of information, and our own place in the cosmos. It forces us to ask profound questions: If we are in a simulation, could we hack it? What is the purpose of the simulation? It's a mind-bending concept that challenges our most fundamental assumptions about existence.`,
  },
  {
    id: '8',
    title: 'Bio-Hacking: The Fusion of Man and Machine',
    slug: 'bio-hacking-fusion',
    publicationDate: '2024-11-05T15:00:00Z',
    image: placeholderImages.bioHacking.src,
    content: `The line between human and technology is blurring at an accelerating pace. "Bio-hacking" is a broad term for a diverse movement that seeks to enhance human capabilities through technology. This ranges from simple nutritional and lifestyle adjustments to radical body modifications. At the more extreme end are "grinders," citizen scientists who implant devices like RFID chips, magnets, or even custom-built sensors directly into their bodies. They are at the forefront of a new kind of evolution, one that is directed and deliberate rather than purely natural.

The potential benefits are immense: curing genetic diseases with CRISPR gene-editing technology, augmenting memory with brain-computer interfaces, or even dramatically extending the human lifespan. Imagine a world without inherited illnesses, where lost senses can be restored or new ones created. However, the ethical landscape is a minefield. Who gets access to these expensive and powerful technologies? What are the unforeseen long-term consequences of altering our own biology? The risk of creating a new "enhanced" class of humans raises deep concerns about social equity and justice.

As these technologies become more accessible and powerful, society must grapple with profound questions about what it means to be human. The conversation is no longer about if we will merge with machines, but how we will do so responsibly and equitably. It requires a global dialogue involving scientists, ethicists, policymakers, and the public to navigate this uncharted territory and ensure that the future of human evolution is one that benefits all of humanity, not just a select few.`,
  },
  {
    id: '9',
    title: 'The Lost City: A Tech-Fueled Search for Atlantis',
    slug: 'search-for-atlantis',
    publicationDate: '2025-01-12T09:30:00Z',
    image: placeholderImages.atlantis.src,
    content: `The legend of Atlantis, the advanced island civilization that sank into the sea "in a single day and night of misfortune," has captivated imaginations for centuries since Plato first wrote of it. While many historians and archaeologists consider it a philosophical myth, modern technology is breathing new life into the search. Satellite imagery, high-resolution sonar mapping, and underwater LiDAR (Light Detection and Ranging) are allowing explorers to peel back the waves and scan the ocean floor in unprecedented detail, revealing submerged structures and geological anomalies that could point to lost cities.

This tech-fueled exploration is not just about finding a single mythical island. It's a new frontier of archaeology. These tools are helping researchers locate and study real submerged settlements and shipwrecks around the world, from the sunken city of Thonis-Heracleion in Egypt to ancient Roman ports. We are learning about ancient sea levels, the effects of tsunamis and tectonic activity, and how past civilizations dealt with catastrophic environmental change. Every submerged ruin we find, whether it's a candidate for Atlantis or not, is a time capsule from a lost world.

While the exact location described by Plato may never be found, the quest itself drives innovation. It pushes the boundaries of remote sensing and underwater robotics. The search for Atlantis is a perfect blend of history, technology, and the enduring human desire to uncover the secrets of the past. It's a reminder that there are still vast, unexplored regions on our own planet, holding stories that are waiting to be told.`,
  },
  {
    id: '10',
    title: 'Generative AI and the Future of Storytelling',
    slug: 'generative-ai-storytelling',
    publicationDate: '2025-03-25T14:00:00Z',
    image: placeholderImages.aiStorytelling.src,
    content: `Generative AI models like Google's Gemini, OpenAI's GPT series, and image generators like Midjourney are not just tools; they are becoming creative partners. They can write poetry in the style of Shakespeare, compose music that evokes specific emotions, and generate photorealistic images from a simple text prompt. This is revolutionizing the world of storytelling, providing writers, artists, and filmmakers with powerful new ways to brainstorm and bring their visions to life. An author could use an AI to explore alternate plot points, while a game developer could use it to create vast, dynamic, and non-repetitive worlds for players to explore.

Of course, this technological shift raises fundamental questions about creativity and authorship. If an AI helps write a novel, who is the author? Can a machine that has not lived a life truly be creative, or is it merely a sophisticated mimic? These are complex legal and philosophical debates. There are also concerns about the potential for AI to devalue human creativity or to generate misinformation and deepfakes on a massive scale, eroding trust in what we see and read.

Despite these debates, one thing is clear: AI is a paradigm shift for the creative industries. It's a tool that can amplify human creativity, allowing for the rapid prototyping of ideas and the creation of stories that were once impossible to produce due to time or budget constraints. The future of storytelling will likely not be human vs. machine, but human and machine in collaboration. The most compelling stories will come from those who learn to wield these new tools with skill, taste, and a strong sense of ethical responsibility.`,
  },
  {
    id: '11',
    title: 'Digital Time Capsules: Preserving Today for Tomorrow',
    slug: 'digital-time-capsules',
    publicationDate: '2025-05-30T11:45:00Z',
    image: placeholderImages.timeCapsule.src,
    content: `In the past, time capsules were physical containers filled with objects, photographs, and documents intended to communicate with the future. But how do we create a time capsule in the digital age? Our lives are recorded in photos, emails, and social media posts, but this data is incredibly fragile. File formats become obsolete, storage media like hard drives and flash drives degrade in a matter of decades, and cloud services can disappear when a company goes out of business. How can we ensure our digital legacy survives for future generations to discover?

This challenge of "digital decay" has given rise to a new field of digital preservation. Projects like the "Arch Mission Foundation" are tackling this problem by storing vast archives of human knowledge—like the entirety of Wikipedia—on long-lasting analog media, such as nickel plates or quartz discs, and then sending them to space or other secure locations. Others are developing decentralized, permanent archives using blockchain technology, creating a distributed record that isn't reliant on a single company or server.

Preserving our digital world requires a new way of thinking about archives and memory. It's not just about storing data, but also the context needed to understand it: the software, the operating systems, the cultural references. It’s a grand challenge of our time: ensuring that the vibrant, complex story of our civilization doesn't get lost in a sea of dead links, corrupted files, and forgotten passwords. We must act now to ensure future historians have something to study.`,
  },
  {
    id: '12',
    title: 'Terraforming Mars: Humanity\'s Next Great Project',
    slug: 'terraforming-mars',
    publicationDate: '2025-07-19T16:00:00Z',
    image: placeholderImages.terraformingMars.src,
    content: `Making Mars habitable for humans, a process known as "terraforming," is perhaps the most ambitious engineering project ever conceived. It would involve warming the planet, thickening its thin atmosphere, and eventually creating a breathable environment with liquid water on its surface. Proposed methods range from the brute-force—deploying giant orbital mirrors to reflect sunlight onto the polar ice caps—to the biological, by introducing genetically engineered microbes that could process the Martian soil and release greenhouse gases.

This would be a project spanning centuries, if not millennia, requiring unprecedented international cooperation and sustained technological innovation. The first steps would involve creating small, localized habitats and gradually expanding them. A key challenge is Mars's lack of a global magnetic field, which leaves its surface exposed to harmful solar radiation. Any long-term colonization plan would need to address this fundamental issue, perhaps by creating localized magnetic shields.

The concept inspires both awe and controversy. Proponents argue it's a necessary step to ensure the long-term survival of the human species, making us a multi-planetary civilization. Critics raise profound ethical questions: should we reshape another world to suit our needs, potentially destroying pristine environments or even nascent Martian life? Whatever the answer, the dream of a green Mars pushes us to innovate in fields like climate science, robotics, and closed-loop life support systems. It's a long-term goal that forces us to think on a planetary scale.`,
  },
  {
    id: '13',
    title: 'The Future of Time: Beyond the 24-Hour Clock',
    slug: 'future-of-time',
    publicationDate: '2025-08-28T09:00:00Z',
    image: placeholderImages.futureTime.src,
    content: `Our 24-hour day is intrinsically linked to the rotation of the Earth, a rhythm that has governed life for millennia. But what happens when humanity becomes a multi-planetary species? Timekeeping on Mars, with its 24.6-hour "sol," already presents synchronization challenges for mission planners and will be a constant source of jet lag for future colonists. Future settlements on the Moon, in orbital habitats, or on missions to the outer planets will require entirely new systems of timekeeping, untethered from a single planet's spin.

Futurists and scientists are exploring various concepts to address this. One idea is a universal time standard for the solar system, perhaps based on a highly stable atomic clock, which all missions could use as a reference. Another concept is personalized time zones based on an individual's biological rhythms rather than their location, managed by wearable technology to optimize sleep and wakefulness cycles in artificial environments. This could lead to a more fluid and flexible perception of the workday and social schedules.

This isn't just a technical problem; it's a philosophical one. How we measure time shapes our culture, our biology, and our perception of reality. The rigid structure of the 9-to-5 workday is a product of the industrial revolution's clock-time. As we venture further from Earth and our technologies enable more asynchronous communication and work, our relationship with time itself will inevitably evolve in fascinating and unexpected ways. We may be on the cusp of a new era of chronal diversity.`,
  },
];

const comments: Comment[] = [
  { id: 'c1', postId: '1', author: 'Ada Lovelace', content: 'Fascinating! The concept of superposition could redefine the boundaries of computation.', timestamp: '2024-07-15T10:00:00Z', parentId: null },
  { id: 'c2', postId: '1', author: 'Alan Turing', content: 'The challenge of decoherence is indeed the crux of the matter. A truly universal machine must be resilient.', timestamp: '2024-07-15T11:30:00Z', parentId: null },
  { id: 'c7', postId: '1', author: 'Charles Babbage', content: 'Indeed, Ada. The potential is staggering. It reminds me of the analytical engine, but on an entirely new level.', timestamp: '2024-07-15T12:00:00Z', parentId: 'c1' },
  { id: 'c3', postId: '2', author: 'James Cook', content: 'A reliable chronometer is worth more than gold to a navigator. This technology changed everything.', timestamp: '2024-06-29T09:00:00Z', parentId: null },
  { id: 'c4', postId: '4', author: 'Grace Hopper', content: 'The key is to build systems that learn and adapt. The potential is limitless.', timestamp: '2024-08-02T11:00:00Z', parentId: null },
  { id: 'c5', postId: '5', author: 'Vera Rubin', content: 'The evidence is all around us in the stars. We just need to know how to look.', timestamp: '2024-08-16T10:30:00Z', parentId: null },
  { id: 'c6', postId: '6', author: 'Ptolemy', content: 'A fascinating look at the early attempts to quantify the heavens. The water clock was a remarkable invention.', timestamp: '2024-04-23T14:00:00Z', parentId: null },
  { id: 'c8', postId: '7', author: 'Philip K. Dick', content: 'Reality is that which, when you stop believing in it, doesn\'t go away. This hypothesis makes one wonder.', timestamp: '2024-09-21T11:00:00Z', parentId: null },
  { id: 'c9', postId: '7', author: 'Elon Musk', content: 'The odds that we are in base reality is one in billions.', timestamp: '2024-09-22T13:20:00Z', parentId: null },
  { id: 'c10', postId: '8', author: 'William Gibson', content: 'The future is already here – it\'s just not evenly distributed. Bio-hackers are living proof.', timestamp: '2024-11-06T10:00:00Z', parentId: null },
  { id: 'c11', postId: '9', author: 'Graham Hancock', content: 'Modern tech confirming ancient legends? The world is more mysterious than we think.', timestamp: '2025-01-13T12:00:00Z', parentId: null },
  { id: 'c12', postId: '10', author: 'Arthur C. Clarke', content: 'Any sufficiently advanced technology is indistinguishable from magic. This is the new magic.', timestamp: '2025-03-26T10:00:00Z', parentId: null },
  { id: 'c13', postId: '11', author: 'Stewart Brand', content: 'On the one hand information wants to be free, on the other hand it wants to be expensive. Digital preservation is the ultimate test of this.', timestamp: '2025-06-01T14:00:00Z', parentId: null },
  { id: 'c14', postId: '12', author: 'Kim Stanley Robinson', content: 'Mars is a great story, and we are its authors. Let\'s write a good one.', timestamp: '2025-07-20T11:00:00Z', parentId: null },
  { id: 'c15', postId: '13', author: 'Isaac Asimov', content: 'I do not fear computers. I fear the lack of them. New time systems will be a necessity.', timestamp: '2025-08-29T10:00:00Z', parentId: null },

];

export const getPosts = (): Post[] => {
  return posts.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};

export const getCommentsByPostId = (postId: string): Comment[] => {
  return comments
    .filter((comment) => comment.postId === postId)
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
};

export const getPostNavigation = (currentSlug: string) => {
  const sortedPosts = getPosts();
  const currentIndex = sortedPosts.findIndex(p => p.slug === currentSlug);

  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  return { prevPost, nextPost };
}
