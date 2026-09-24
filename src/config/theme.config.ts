const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://ccim.catholic.mt"
).replace(/\/$/, "");

export const SITE = {
  name: "Chinese Catholic in Malta",
  description:
    "In the beginning was the Word",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/wangdongcheng/ccim",
};

export const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Writing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  email: "paul@ccim.catholic.mt",
  socialHandle: "@paul2mt",
  socialUrl: "https://x.com/paul2mt",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
  { href: CONTACT.socialUrl, label: `${SITE.name} on X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "elena-march",
    name: "Elena March",
    bio: "Writer & editor covering design, craft, and slow technology.",
    longBio:
      "Elena March writes about the quiet edges of design and technology. Previously an editor at two small magazines, she now publishes essays and field notes from a desk overlooking the harbour.",
    avatar: "/avatars/elena-march.svg",
  },
  {
    slug: "samuel-okafor",
    name: "Samuel Okafor",
    bio: "Software engineer with a soft spot for typography and the open web.",
    longBio:
      "Samuel builds tools for writers and reads more than he ships. He believes the best interfaces are the ones you don't notice.",
    avatar: "/avatars/samuel-okafor.svg",
  },
  {
    slug: "mira-iwasaki",
    name: "Mira Iwasaki",
    bio: "Photographer and essayist based between Kyoto and Lisbon.",
    longBio:
      "Mira's work sits at the intersection of place, memory, and the everyday object. Her essays have appeared in a number of small but loved publications.",
    avatar: "/avatars/mira-iwasaki.svg",
  },
  {
    slug: "paul",
    name: "Paul",
    bio: "Ask and you shall receive.",
    longBio:
      "Founder of CCIM.",
    avatar: "/avatars/paul.svg",
  },
];

export const categories = [
  { slug: "daily-readings", name: "Daily Readings" },
  { slug: "homilies", name: "Homilies" },
  { slug: "thoughts", name: "Thoughts" },
  { slug: "meditations", name: "Meditations" },
  { slug: "casual-talks", name: "Casual Talks" },
  { slug: "arts", name: "Arts" },
  { slug: "essays", name: "Essays" },
  { slug: "design", name: "Design" },
  { slug: "engineering", name: "Engineering" },
  { slug: "field-notes", name: "Field Notes" },
  { slug: "interviews", name: "Interviews" },
];

export const tags = [
  // Bible books in canonical order.
  { slug: "genesis", name: "Genesis" },
  { slug: "exodus", name: "Exodus" },
  { slug: "leviticus", name: "Leviticus" },
  { slug: "numbers", name: "Numbers" },
  { slug: "deuteronomy", name: "Deuteronomy" },
  { slug: "joshua", name: "Joshua" },
  { slug: "judges", name: "Judges" },
  { slug: "ruth", name: "Ruth" },
  { slug: "1-samuel", name: "1 Samuel" },
  { slug: "2-samuel", name: "2 Samuel" },
  { slug: "1-kings", name: "1 Kings" },
  { slug: "2-kings", name: "2 Kings" },
  { slug: "1-chronicles", name: "1 Chronicles" },
  { slug: "2-chronicles", name: "2 Chronicles" },
  { slug: "ezra", name: "Ezra" },
  { slug: "nehemiah", name: "Nehemiah" },
  { slug: "tobit", name: "Tobit" },
  { slug: "judith", name: "Judith" },
  { slug: "esther", name: "Esther" },
  { slug: "1-maccabees", name: "1 Maccabees" },
  { slug: "2-maccabees", name: "2 Maccabees" },
  { slug: "job", name: "Job" },
  { slug: "psalms", name: "Psalms" },
  { slug: "proverbs", name: "Proverbs" },
  { slug: "ecclesiastes", name: "Ecclesiastes" },
  { slug: "song-of-songs", name: "Song of Songs" },
  { slug: "wisdom", name: "Wisdom" },
  { slug: "sirach", name: "Sirach" },
  { slug: "isaiah", name: "Isaiah" },
  { slug: "jeremiah", name: "Jeremiah" },
  { slug: "lamentations", name: "Lamentations" },
  { slug: "baruch", name: "Baruch" },
  { slug: "ezekiel", name: "Ezekiel" },
  { slug: "daniel", name: "Daniel" },
  { slug: "hosea", name: "Hosea" },
  { slug: "joel", name: "Joel" },
  { slug: "amos", name: "Amos" },
  { slug: "obadiah", name: "Obadiah" },
  { slug: "jonah", name: "Jonah" },
  { slug: "micah", name: "Micah" },
  { slug: "nahum", name: "Nahum" },
  { slug: "habakkuk", name: "Habakkuk" },
  { slug: "zephaniah", name: "Zephaniah" },
  { slug: "haggai", name: "Haggai" },
  { slug: "zechariah", name: "Zechariah" },
  { slug: "malachi", name: "Malachi" },
  { slug: "matthew", name: "Matthew" },
  { slug: "mark", name: "Mark" },
  { slug: "luke", name: "Luke" },
  { slug: "john", name: "John" },
  { slug: "acts", name: "Acts" },
  { slug: "romans", name: "Romans" },
  { slug: "1-corinthians", name: "1 Corinthians" },
  { slug: "2-corinthians", name: "2 Corinthians" },
  { slug: "galatians", name: "Galatians" },
  { slug: "ephesians", name: "Ephesians" },
  { slug: "philippians", name: "Philippians" },
  { slug: "colossians", name: "Colossians" },
  { slug: "1-thessalonians", name: "1 Thessalonians" },
  { slug: "2-thessalonians", name: "2 Thessalonians" },
  { slug: "1-timothy", name: "1 Timothy" },
  { slug: "2-timothy", name: "2 Timothy" },
  { slug: "titus", name: "Titus" },
  { slug: "philemon", name: "Philemon" },
  { slug: "hebrews", name: "Hebrews" },
  { slug: "james", name: "James" },
  { slug: "1-peter", name: "1 Peter" },
  { slug: "2-peter", name: "2 Peter" },
  { slug: "1 john", name: "1 John" },
  { slug: "2 john", name: "2 John" },
  { slug: "3 john", name: "3 John" },
  { slug: "jude", name: "Jude" },
  { slug: "revelation", name: "Revelation" },

  // Other tags in alphabetical order.
  { slug: "ai", name: "AI" },
  { slug: "bible", name: "Bible" },
  { slug: "books", name: "Books" },
  { slug: "malta", name: "Malta" },
  { slug: "mary", name: "Mary" },
  { slug: "minimalism", name: "Minimalism" },
  { slug: "process", name: "Process" },
  { slug: "saints", name: "Saints" },
  { slug: "shanghai", name: "Shanghai" },
  { slug: "tools", name: "Tools" },
  { slug: "travel", name: "Travel" },
  { slug: "typography", name: "Typography" },
  { slug: "vatican", name: "Vatican" },
  { slug: "web", name: "Web" },
  { slug: "writing", name: "Writing" },
];
