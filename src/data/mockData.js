// SkillLoop Comprehensive Mock Data & State Store
export const INITIAL_USER = {
  id: 'user-chandru',
  name: 'Chandru P',
  email: 'chandru.p2022@vitstudent.ac.in',
  college: 'Vellore Institute of Technology (VIT)',
  department: 'Computer Science & Engineering',
  year: '3rd Year',
  registerNumber: '21BCE1492',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
  rating: 4.8,
  reviewCount: 19,
  credits: 140,
  verified: true,
  collegeEmailVerified: true,
  location: 'Technology Tower, North Campus',
  coordinates: { lat: 12.9698, lng: 79.1559 },
  bio: 'Full-stack enthusiast & competitive programmer. Passionate about building distributed systems and teaching Python basics to fellow juniors.',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://chandru.dev'
  },
  availability: 'Mon-Fri: 6 PM - 9 PM | Sat: 10 AM - 2 PM',
  teachingHours: 14,
  learningHours: 6,
  skillsOffered: [
    { id: 'so-1', name: 'Python', category: 'Programming', level: 'Advanced', experience: '2.5 years', proficiency: 90, verified: true },
    { id: 'so-2', name: 'React', category: 'Web Development', level: 'Intermediate', experience: '1.5 years', proficiency: 75, verified: true },
    { id: 'so-3', name: 'Photoshop', category: 'Graphic Design', level: 'Intermediate', experience: '1 year', proficiency: 65, verified: false }
  ],
  skillsWanted: [
    { id: 'sw-1', name: 'UI/UX Design', category: 'UI/UX', desiredLevel: 'Beginner', priority: 'High', reason: 'Need for final year capstone project UI' },
    { id: 'sw-2', name: 'Blockchain', category: 'Programming', desiredLevel: 'Beginner', priority: 'Medium', reason: 'Smart contract development interest' },
    { id: 'sw-3', name: 'Public Speaking', category: 'Communication', desiredLevel: 'Intermediate', priority: 'Medium', reason: 'Preparing for technical symposium presentations' }
  ]
};

export const INITIAL_PEERS = [
  {
    id: 'peer-arun',
    name: 'Arun Kumar',
    email: 'arun.k2021@vitstudent.ac.in',
    college: 'Vellore Institute of Technology (VIT)',
    department: 'Computer Science (AI & ML)',
    year: '4th Year',
    registerNumber: '20BCE0842',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250',
    rating: 4.9,
    reviewCount: 34,
    verified: true,
    location: 'Men\'s Hostel Block 2',
    distanceKm: 1.2,
    campusZone: 'Hostel Zone A',
    bio: 'ML researcher & open source contributor. Love simplifying complex algorithms. Want to build cleaner web interfaces!',
    availability: 'Tue, Thu, Sat: 5 PM - 8 PM',
    teachingHours: 28,
    skillsOffered: [
      { id: 'arun-so-1', name: 'Python', category: 'Programming', level: 'Advanced', experience: '3 years', proficiency: 95 },
      { id: 'arun-so-2', name: 'Machine Learning', category: 'AI/ML', level: 'Advanced', experience: '2 years', proficiency: 90 },
      { id: 'arun-so-3', name: 'Java', category: 'Programming', level: 'Intermediate', experience: '2 years', proficiency: 80 }
    ],
    skillsWanted: [
      { id: 'arun-sw-1', name: 'UI/UX Design', category: 'UI/UX', desiredLevel: 'Intermediate', priority: 'High' },
      { id: 'arun-sw-2', name: 'Figma', category: 'UI/UX', desiredLevel: 'Intermediate', priority: 'High' }
    ],
    // High mutual compatibility with Chandru (Arun has Python/ML, wants UI/UX; Chandru has Photoshop/React, wants UI/UX)
    matchBreakdown: {
      skillCompatibility: 38,
      skillLevel: 19,
      location: 14,
      availability: 13,
      rating: 10,
      totalScore: 94
    }
  },
  {
    id: 'peer-priya',
    name: 'Priya Sharma',
    email: 'priya.s2022@vitstudent.ac.in',
    college: 'Vellore Institute of Technology (VIT)',
    department: 'School of Design (V-SIGN)',
    year: '3rd Year',
    registerNumber: '21BDES0114',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
    rating: 4.85,
    reviewCount: 27,
    verified: true,
    location: 'Main Library Discussion Pods',
    distanceKm: 0.8,
    campusZone: 'Central Academic Block',
    bio: 'Design lead at GDSC campus club. Obsessed with design tokens, wireframing, and Figma prototypes. Eager to code my own components in React & JS!',
    availability: 'Mon, Wed, Fri: 4 PM - 7 PM',
    teachingHours: 22,
    skillsOffered: [
      { id: 'priya-so-1', name: 'UI/UX Design', category: 'UI/UX', level: 'Advanced', experience: '2.5 years', proficiency: 92 },
      { id: 'priya-so-2', name: 'Figma', category: 'UI/UX', level: 'Advanced', experience: '2.5 years', proficiency: 95 },
      { id: 'priya-so-3', name: 'Blender 3D', category: 'Graphic Design', level: 'Intermediate', experience: '1 year', proficiency: 70 }
    ],
    skillsWanted: [
      { id: 'priya-sw-1', name: 'React', category: 'Web Development', desiredLevel: 'Beginner', priority: 'High' },
      { id: 'priya-sw-2', name: 'JavaScript', category: 'Web Development', desiredLevel: 'Intermediate', priority: 'Medium' }
    ],
    matchBreakdown: {
      skillCompatibility: 40,
      skillLevel: 18,
      location: 15,
      availability: 14,
      rating: 9,
      totalScore: 96
    }
  },
  {
    id: 'peer-rahul',
    name: 'Rahul Dev',
    email: 'rahul.dev2022@vitstudent.ac.in',
    college: 'Vellore Institute of Technology (VIT)',
    department: 'Information Technology',
    year: '3rd Year',
    registerNumber: '21BIT0238',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    rating: 4.75,
    reviewCount: 21,
    verified: true,
    location: 'SMV Building, 3rd Floor',
    distanceKm: 1.5,
    campusZone: 'Academic Zone B',
    bio: 'Frontend enthusiast building interactive Web apps. Trying to get into AI/ML data pipelines and Python neural nets.',
    availability: 'Mon-Sun: 7 PM - 10 PM',
    teachingHours: 18,
    skillsOffered: [
      { id: 'rahul-so-1', name: 'JavaScript', category: 'Web Development', level: 'Advanced', experience: '2 years', proficiency: 88 },
      { id: 'rahul-so-2', name: 'React', category: 'Web Development', level: 'Intermediate', experience: '1.5 years', proficiency: 80 },
      { id: 'rahul-so-3', name: 'Node.js', category: 'Web Development', level: 'Intermediate', experience: '1 year', proficiency: 75 }
    ],
    skillsWanted: [
      { id: 'rahul-sw-1', name: 'Machine Learning', category: 'AI/ML', desiredLevel: 'Beginner', priority: 'High' },
      { id: 'rahul-sw-2', name: 'Python', category: 'Programming', desiredLevel: 'Intermediate', priority: 'High' }
    ],
    matchBreakdown: {
      skillCompatibility: 35,
      skillLevel: 17,
      location: 13,
      availability: 15,
      rating: 9,
      totalScore: 89
    }
  },
  {
    id: 'peer-sneha',
    name: 'Sneha Reddy',
    email: 'sneha.r2023@vitstudent.ac.in',
    college: 'Vellore Institute of Technology (VIT)',
    department: 'Electronics & Communication',
    year: '2nd Year',
    registerNumber: '22BEC0911',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250',
    rating: 4.9,
    reviewCount: 15,
    verified: true,
    location: 'Food Street / Student Center',
    distanceKm: 0.5,
    campusZone: 'Campus Hub',
    bio: 'Campus photographer & reels editor. Passionate about visual storytelling. Want to learn Python for signal processing!',
    availability: 'Weekends: 10 AM - 5 PM',
    teachingHours: 12,
    skillsOffered: [
      { id: 'sneha-so-1', name: 'Photography', category: 'Photography', level: 'Advanced', experience: '3 years', proficiency: 92 },
      { id: 'sneha-so-2', name: 'Video Editing (Premiere/DaVinci)', category: 'Video Editing', level: 'Advanced', experience: '2 years', proficiency: 88 },
      { id: 'sneha-so-3', name: 'Color Grading', category: 'Graphic Design', level: 'Intermediate', experience: '1.5 years', proficiency: 78 }
    ],
    skillsWanted: [
      { id: 'sneha-sw-1', name: 'Python', category: 'Programming', desiredLevel: 'Beginner', priority: 'High' },
      { id: 'sneha-sw-2', name: 'Data Science', category: 'Data Science', desiredLevel: 'Beginner', priority: 'Medium' }
    ],
    matchBreakdown: {
      skillCompatibility: 37,
      skillLevel: 18,
      location: 15,
      availability: 12,
      rating: 10,
      totalScore: 92
    }
  },
  {
    id: 'peer-sanjay',
    name: 'Sanjay Patel',
    email: 'sanjay.p2021@vitstudent.ac.in',
    college: 'Vellore Institute of Technology (VIT)',
    department: 'Mechanical Engineering',
    year: '4th Year',
    registerNumber: '20BME0451',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    rating: 4.65,
    reviewCount: 11,
    verified: true,
    location: 'Automotive Research Center',
    distanceKm: 2.1,
    campusZone: 'South Campus Lab Zone',
    bio: 'Formula Student chassis designer. Expert in SolidWorks & 3D Printing. Looking to build a portfolio website using React.',
    availability: 'Mon, Wed: 6 PM - 9 PM',
    teachingHours: 10,
    skillsOffered: [
      { id: 'sanjay-so-1', name: 'SolidWorks 3D CAD', category: 'Entrepreneurship', level: 'Advanced', experience: '3 years', proficiency: 94 },
      { id: 'sanjay-so-2', name: 'Robotics & Arduino', category: 'Programming', level: 'Intermediate', experience: '2 years', proficiency: 82 }
    ],
    skillsWanted: [
      { id: 'sanjay-sw-1', name: 'React', category: 'Web Development', desiredLevel: 'Beginner', priority: 'High' },
      { id: 'sanjay-sw-2', name: 'HTML/CSS', category: 'Web Development', desiredLevel: 'Intermediate', priority: 'High' }
    ],
    matchBreakdown: {
      skillCompatibility: 36,
      skillLevel: 16,
      location: 12,
      availability: 13,
      rating: 8,
      totalScore: 85
    }
  },
  {
    id: 'peer-ananya',
    name: 'Ananya Iyer',
    email: 'ananya.i2022@vitstudent.ac.in',
    college: 'Vellore Institute of Technology (VIT)',
    department: 'Biotechnology & Bio-Informatics',
    year: '3rd Year',
    registerNumber: '21BBT0089',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250',
    rating: 4.88,
    reviewCount: 16,
    verified: true,
    location: 'Silver Jubilee Tower',
    distanceKm: 1.8,
    campusZone: 'Academic Zone A',
    bio: 'Bilingual in English and German (Goethe B2 certified). Passionate about scientific communication and academic publishing.',
    availability: 'Tue, Thu: 4 PM - 7 PM',
    teachingHours: 16,
    skillsOffered: [
      { id: 'ananya-so-1', name: 'German Language (A1-B1)', category: 'Languages', level: 'Advanced', experience: '3 years', proficiency: 92 },
      { id: 'ananya-so-2', name: 'Technical Writing', category: 'Communication', level: 'Advanced', experience: '2 years', proficiency: 90 },
      { id: 'ananya-so-3', name: 'Public Speaking', category: 'Communication', level: 'Intermediate', experience: '2 years', proficiency: 84 }
    ],
    skillsWanted: [
      { id: 'ananya-sw-1', name: 'Graphic Design', category: 'Graphic Design', desiredLevel: 'Beginner', priority: 'High' },
      { id: 'ananya-sw-2', name: 'Python', category: 'Programming', desiredLevel: 'Beginner', priority: 'Medium' }
    ],
    matchBreakdown: {
      skillCompatibility: 39,
      skillLevel: 18,
      location: 13,
      availability: 12,
      rating: 9,
      totalScore: 91
    }
  }
];

export const SKILL_CATEGORIES = [
  'All',
  'Programming',
  'Web Development',
  'AI/ML',
  'Data Science',
  'UI/UX',
  'Graphic Design',
  'Music',
  'Languages',
  'Communication',
  'Photography',
  'Video Editing',
  'Entrepreneurship'
];

export const INITIAL_EXCHANGES = [
  {
    id: 'exc-1',
    senderId: 'user-chandru',
    receiverId: 'peer-priya',
    offeredSkill: 'React',
    requestedSkill: 'UI/UX Design',
    message: 'Hey Priya! I saw you want to build your design portfolio in React. I can teach you component states and Vite setup in exchange for Figma design system mentorship!',
    status: 'accepted',
    timestamp: '2 hours ago',
    unread: false
  },
  {
    id: 'exc-2',
    senderId: 'peer-arun',
    receiverId: 'user-chandru',
    offeredSkill: 'Machine Learning',
    requestedSkill: 'Photoshop',
    message: 'Hi Chandru! I loved your club posters. Could you mentor me on Photoshop poster creation? I can teach you Scikit-learn and ML pipelines!',
    status: 'pending',
    timestamp: '5 hours ago',
    unread: true
  },
  {
    id: 'exc-3',
    senderId: 'peer-sneha',
    receiverId: 'user-chandru',
    offeredSkill: 'Photography',
    requestedSkill: 'Python',
    message: 'Hello! Need help with basic Python scripts for my DSP lab. Can exchange photography composition & lightroom editing sessions!',
    status: 'pending',
    timestamp: '1 day ago',
    unread: true
  }
];

export const INITIAL_CHATS = {
  'peer-priya': [
    { id: 'm-1', senderId: 'peer-priya', text: 'Hi Chandru! Thanks for accepting the exchange request! 🎉', time: '10:15 AM' },
    { id: 'm-2', senderId: 'user-chandru', text: 'Hey Priya! Excited to exchange. Your Figma portfolio looks super slick.', time: '10:18 AM' },
    { id: 'm-3', senderId: 'peer-priya', text: 'Thanks! I really want to turn those Figma designs into real React apps. When would you be free for our first session?', time: '10:20 AM' },
    { id: 'm-4', senderId: 'user-chandru', text: 'How about tomorrow around 5:00 PM at the Central Library Discussion Pod?', time: '10:22 AM' },
    { id: 'm-5', senderId: 'peer-priya', text: 'Perfect! I booked a discussion room. Looking forward to it!', time: '10:24 AM' }
  ],
  'peer-arun': [
    { id: 'm-6', senderId: 'peer-arun', text: 'Hey Chandru! Saw your Python & React skills. Let me know if you want to run through ML fundamentals.', time: 'Yesterday' },
    { id: 'm-7', senderId: 'user-chandru', text: 'Hey Arun, definitely! I want to prepare for next semester\'s deep learning elective.', time: 'Yesterday' }
  ]
};

export const INITIAL_SESSIONS = [
  {
    id: 'sess-1',
    title: 'Figma Design System & Auto-Layout Masterclass',
    skill: 'UI/UX Design',
    teacher: 'Priya Sharma',
    teacherId: 'peer-priya',
    learner: 'Chandru P',
    learnerId: 'user-chandru',
    date: 'Tomorrow, Oct 2, 2026',
    time: '5:00 PM - 6:00 PM',
    duration: '1 Hour',
    mode: 'In-Person',
    location: 'Central Library Discussion Pod #4',
    status: 'upcoming',
    notes: 'Covering design tokens, 8pt spatial grid, and interactive Figma components.'
  },
  {
    id: 'sess-2',
    title: 'Python Data Structures & Algorithm Foundations',
    skill: 'Python',
    teacher: 'Chandru P',
    teacherId: 'user-chandru',
    learner: 'Sneha Reddy',
    learnerId: 'peer-sneha',
    date: 'Oct 4, 2026',
    time: '4:00 PM - 5:00 PM',
    duration: '1 Hour',
    mode: 'Online',
    location: 'SkillLoop Virtual Room #812',
    status: 'upcoming',
    notes: 'List comprehensions, dictionaries, recursion, and time complexity.'
  },
  {
    id: 'sess-3',
    title: 'React Custom Hooks & State Management',
    skill: 'React',
    teacher: 'Chandru P',
    teacherId: 'user-chandru',
    learner: 'Rahul Dev',
    learnerId: 'peer-rahul',
    date: 'Sep 28, 2026',
    time: '6:00 PM - 7:00 PM',
    duration: '1 Hour',
    mode: 'In-Person',
    location: 'SMV Building Labs',
    status: 'completed',
    rating: 5,
    review: 'Chandru explained useEffect dependencies and custom hook patterns with crystal clarity! Super helpful session.'
  },
  {
    id: 'sess-4',
    title: 'Machine Learning Classification with Scikit-Learn',
    skill: 'Machine Learning',
    teacher: 'Arun Kumar',
    teacherId: 'peer-arun',
    learner: 'Chandru P',
    learnerId: 'user-chandru',
    date: 'Sep 24, 2026',
    time: '5:30 PM - 6:30 PM',
    duration: '1 Hour',
    mode: 'Online',
    location: 'SkillLoop Virtual Room #502',
    status: 'completed',
    rating: 5,
    review: 'Brilliant walkthrough on hyperparameter tuning and cross validation!'
  }
];

export const INITIAL_TRANSACTIONS = [
  { id: 'tx-1', date: 'Sep 28, 2026, 7:05 PM', type: 'teaching', credits: +10, peer: 'Rahul Dev', skill: 'React', note: '1 hr peer teaching session completed', balance: 140 },
  { id: 'tx-2', date: 'Sep 24, 2026, 6:35 PM', type: 'learning', credits: -10, peer: 'Arun Kumar', skill: 'Machine Learning', note: '1 hr peer learning session attended', balance: 130 },
  { id: 'tx-3', date: 'Sep 20, 2026, 5:00 PM', type: 'teaching', credits: +10, peer: 'Sanjay Patel', skill: 'Python', note: '1 hr peer teaching session completed', balance: 140 },
  { id: 'tx-4', date: 'Sep 15, 2026, 11:00 AM', type: 'bonus', credits: +20, peer: 'SkillLoop Campus System', skill: 'Student Onboarding', note: 'Verified College Student Welcome Grant', balance: 130 }
];

export const MULTI_WAY_CYCLES = [
  {
    id: 'cycle-1',
    name: 'Triangular Tech & Design Loop',
    confidence: '98%',
    description: 'A closed 3-way circular skill exchange where everyone learns what they desire without any deadlocks!',
    nodes: [
      { id: 'node-arun', name: 'Arun Kumar', teaches: 'Machine Learning', wants: 'UI/UX Design', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250' },
      { id: 'node-priya', name: 'Priya Sharma', teaches: 'UI/UX Design', wants: 'JavaScript / React', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250' },
      { id: 'node-rahul', name: 'Rahul Dev', teaches: 'JavaScript / React', wants: 'Machine Learning', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250' }
    ],
    edges: [
      { from: 'Arun', to: 'Priya', skill: 'Machine Learning & Python' },
      { from: 'Priya', to: 'Rahul', skill: 'UI/UX & Figma Design' },
      { from: 'Rahul', to: 'Arun', skill: 'JavaScript & React Architecture' }
    ]
  },
  {
    id: 'cycle-2',
    name: 'Creative Media & Programming Loop',
    confidence: '94%',
    description: '4-way campus collaboration linking Multimedia, Engineering CAD, and Web Development.',
    nodes: [
      { id: 'node-sneha', name: 'Sneha Reddy', teaches: 'Photography & Editing', wants: 'Python Scripting', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250' },
      { id: 'node-chandru', name: 'Chandru P', teaches: 'Python & Web Dev', wants: '3D CAD / Robotics', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250' },
      { id: 'node-sanjay', name: 'Sanjay Patel', teaches: '3D CAD Modeling', wants: 'Technical Writing / German', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250' },
      { id: 'node-ananya', name: 'Ananya Iyer', teaches: 'Technical Writing', wants: 'Photography & Media', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250' }
    ],
    edges: [
      { from: 'Sneha', to: 'Chandru', skill: 'Photo & Video Storytelling' },
      { from: 'Chandru', to: 'Sanjay', skill: 'Python & Automation' },
      { from: 'Sanjay', to: 'Ananya', skill: '3D CAD & Prototyping' },
      { from: 'Ananya', to: 'Sneha', skill: 'Scientific Communication' }
    ]
  }
];

export const AI_ASSESSMENTS = [
  {
    id: 'assess-python',
    skill: 'Python Programming',
    category: 'Programming',
    durationMinutes: 10,
    questions: [
      {
        id: 'q1',
        text: 'What is the key difference between a Python list and a Python tuple?',
        options: [
          'Lists are immutable, tuples are mutable',
          'Lists are mutable, tuples are immutable',
          'Lists can only hold numbers, tuples hold any object',
          'Tuples have higher memory overhead than lists'
        ],
        correct: 1,
        explanation: 'In Python, lists are mutable (can be altered in-place), whereas tuples are immutable.'
      },
      {
        id: 'q2',
        text: 'What will `[x**2 for x in range(5) if x % 2 == 0]` evaluate to?',
        options: [
          '[0, 4, 16]',
          '[1, 9]',
          '[0, 1, 4, 9, 16]',
          '[4, 16]'
        ],
        correct: 0,
        explanation: 'range(5) gives 0,1,2,3,4. Even numbers are 0, 2, 4. Their squares are 0, 4, 16.'
      },
      {
        id: 'q3',
        text: 'What is the average time complexity of searching for a key in a Python `dict`?',
        options: [
          'O(N)',
          'O(log N)',
          'O(1)',
          'O(N log N)'
        ],
        correct: 2,
        explanation: 'Python dictionaries are implemented using hash tables, giving average O(1) key lookups.'
      },
      {
        id: 'q4',
        text: 'In Python OOP, what does the `@classmethod` decorator do?',
        options: [
          'It turns a method into a static utility with no arguments',
          'It receives the class itself (`cls`) as the first implicit argument rather than instance (`self`)',
          'It enforces private variable encapsulation',
          'It automatically executes upon module import'
        ],
        correct: 1,
        explanation: 'A class method receives `cls` as its first parameter and can modify class state across all instances.'
      }
    ]
  },
  {
    id: 'assess-uiux',
    skill: 'UI/UX Design',
    category: 'UI/UX',
    durationMinutes: 10,
    questions: [
      {
        id: 'ui-q1',
        text: 'What is the primary principle behind the 8-point spatial grid system in UI design?',
        options: [
          'All font sizes must be divisible by 8',
          'Margins, padding, and component dimensions scale in multiples of 8 for consistent rhythm and ease of responsive calculation',
          'Every screen must have exactly 8 primary colors',
          'Buttons must always have an 8px border radius'
        ],
        correct: 1,
        explanation: 'The 8pt grid standardizes spacing and dimensions, minimizing decision fatigue and streamlining front-end handoff.'
      },
      {
        id: 'ui-q2',
        text: 'In Figma, what feature dynamically adjusts padding and re-flows child elements when text or content changes?',
        options: [
          'Smart Animate',
          'Boolean Groups',
          'Auto Layout',
          'Component Variants'
        ],
        correct: 2,
        explanation: 'Auto Layout is Figma\'s flexbox-like feature that automatically repositions elements as dimensions shift.'
      },
      {
        id: 'ui-q3',
        text: 'According to Fitts\'s Law, what makes an interactive button easiest and fastest to target?',
        options: [
          'Smaller size placed far away from the pointer',
          'Larger surface area positioned closer to the user\'s current cursor/thumb location',
          'Adding a 3-second animated pulse effect',
          'Centering it strictly at the bottom right corner'
        ],
        correct: 1,
        explanation: 'Fitts\'s Law states that time to acquire a target is a function of distance to target and target size.'
      }
    ]
  }
];

export const INITIAL_CERTIFICATES = [
  {
    id: 'cert-1',
    certificateId: 'SL-2026-VIT-8849',
    studentName: 'CHANDRU P',
    skill: 'Python Programming',
    hoursCompleted: 20,
    level: 'Advanced',
    issuedDate: 'September 28, 2026',
    verifiedBy: 'SkillLoop Academic Peer Verification Protocol',
    status: 'Verified',
    qrCode: 'SKILLLOOP-VERIFIED-CERT-8849-CHANDRU-VIT'
  },
  {
    id: 'cert-2',
    certificateId: 'SL-2026-VIT-5120',
    studentName: 'CHANDRU P',
    skill: 'React.js Component Architecture',
    hoursCompleted: 15,
    level: 'Intermediate',
    issuedDate: 'September 15, 2026',
    verifiedBy: 'SkillLoop Academic Peer Verification Protocol',
    status: 'Verified',
    qrCode: 'SKILLLOOP-VERIFIED-CERT-5120-CHANDRU-VIT'
  }
];

export const OPPORTUNITIES = [
  {
    id: 'opp-1',
    title: 'AI Engineering Intern',
    company: 'NexusAI Health Tech',
    type: 'Internship',
    stipend: '₹25,000 / month',
    location: 'Remote / Bangalore Hub',
    skillsRequired: ['Python', 'Machine Learning'],
    matchedSkills: ['Python'],
    matchPercentage: 100,
    description: 'Looking for a passionate student proficient in Python and ML model pipelines to assist our computer vision team.',
    deadline: 'Oct 20, 2026',
    postedDaysAgo: '2 days ago'
  },
  {
    id: 'opp-2',
    title: 'Frontend React Developer',
    company: 'ABC Technologies',
    type: 'Part-Time / Project',
    stipend: '₹18,000 / month',
    location: 'Chennai Tech Park (Hybrid)',
    skillsRequired: ['React', 'JavaScript'],
    matchedSkills: ['React'],
    matchPercentage: 85,
    description: 'Build responsive client dashboards and integrate RESTful APIs for our smart logistics management platform.',
    deadline: 'Oct 25, 2026',
    postedDaysAgo: '3 days ago'
  },
  {
    id: 'opp-3',
    title: 'UI/UX Product Design Fellow',
    company: 'Fintech Studio Labs',
    type: 'Fellowship',
    stipend: '₹20,000 / month',
    location: 'Remote',
    skillsRequired: ['UI/UX Design', 'Figma', 'Photoshop'],
    matchedSkills: ['Photoshop'],
    matchPercentage: 70,
    description: 'Collaborate with senior product managers to craft user journeys, wireframes, and design system components.',
    deadline: 'Nov 02, 2026',
    postedDaysAgo: '5 days ago'
  },
  {
    id: 'opp-4',
    title: 'Smart India Hackathon Team Lead',
    company: 'VIT Innovation & Incubation Center',
    type: 'Hackathon Team',
    stipend: 'Grant & Prize Pool (₹1,00,000)',
    location: 'Campus Tech Park',
    skillsRequired: ['Python', 'React'],
    matchedSkills: ['Python', 'React'],
    matchPercentage: 100,
    description: 'Forming an elite 4-member squad for SIH 2026 hardware-software track. Seeking full-stack Python/React developers.',
    deadline: 'Oct 12, 2026',
    postedDaysAgo: '1 day ago'
  }
];

export const ADMIN_STATS = {
  totalStudents: 1250,
  activeUsers: 820,
  skillExchanges: 640,
  sessionsCompleted: 430,
  certificatesIssued: 180,
  totalCreditsCirculating: 14200,
  pendingVerifications: [
    { id: 'v-1', name: 'Karthik Raja', college: 'VIT Vellore', regNo: '22BCE2091', email: 'karthik.r2022@vitstudent.ac.in', submittedAt: '10 mins ago', status: 'Pending' },
    { id: 'v-2', name: 'Divya S', college: 'VIT Chennai', regNo: '21BCE5114', email: 'divya.s2021@vitstudent.ac.in', submittedAt: '1 hour ago', status: 'Pending' },
    { id: 'v-3', name: 'Naveen Kumar', college: 'Anna University', regNo: '2022105021', email: 'naveen.k@ceg.edu.in', submittedAt: '3 hours ago', status: 'Pending' }
  ]
};
