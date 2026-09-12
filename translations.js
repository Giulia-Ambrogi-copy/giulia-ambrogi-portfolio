/* ==========================================================================
   TRANSLATIONS & CONTENT DATA
   - I18N: dictionary for data-i18n strings, keyed "it" / "en"
   - WORKS: portfolio items (bilingual fields end in _it / _en)
   - POSTS: blog articles (bilingual fields end in _it / _en)
   ========================================================================== */

const I18N = {
  it: {
    "nav.about": "Chi sono",
    "nav.work": "Lavori",
    "nav.blog": "Blog",
    "nav.contact": "Contatti",

    "hero.kicker": "Scrittura, sceneggiatura, storytelling",
    "hero.role": "Writer — Screenwriter &amp; Copywriter",
    "hero.bio": "Sono una scrittrice con più di dieci anni d’esperienza passati a cercare storie dentro dinamiche che, apparentemente, non ne hanno una: dai cortometraggi d’animazione, ai documentari drammatici, dalle pubblicità, alla serialità true crime. Cercare nuove storie da raccontare e inventare nuove forme di narrazione dà un senso alla mia ambizione.",
    "hero.cta_work": "Scarica il mio CV",
    "hero.cta_contact": "Scrivimi",

    "about.title": "Chi sono",
    "about.p1": "La mia specializzazione è la scrittura in tutte le sue forme: dall'editing di sceneggiature per progetti audiovisivi, alla redazione e ideazione di contenuti promozionali e dossier per produzioni, marketing e bandi di finanziamento nazionali e internazionali, fino al copywriting tecnico e creativo per articoli e social media. Grazie alla mia conoscenza professionale e alla curiosità approfondita per la cultura pop moderna e contemporanea, riesco a sviluppare contenuti mirati e strategicamente efficaci, sia in italiano che in inglese, per diversità di pubblico e piattaforme.",
    "about.skill1": "Screenwriting",
    "about.skill2": "Long-form writing",
    "about.skill3": "Editorial development",
    "about.skill4": "Research &amp; Interviewing",

    "work.title": "Lavori selezionati",
    "work.subtitle": "Una selezione di produzioni e progetti, per categoria.",
    "filters.all": "Tutti",
    "filters.spot": "Spot &amp; Commercials",
    "filters.doc": "Documentaries &amp; Docuseries",
    "filters.short": "Short Movies",
    "filters.feature": "Feature Films",
    "filters.marketing": "Narrative Marketing",

    "blog.title": "Blog",
    "blog.subtitle": "Riflessioni su sceneggiatura, scrittura e cultura pop.",
    "blog.read_more": "Leggi di più",
    "blog.back": "← Torna al blog",

    "contact.title": "Contatti",
    "contact.subtitle": "Per collaborazioni, progetti o semplicemente per dire ciao.",
    "contact.email_label": "Email",
    "contact.linkedin_label": "LinkedIn",
    "contact.phone_label": "Telefono",
    "contact.form_name": "Nome",
    "contact.form_email": "Email",
    "contact.form_message": "Messaggio",
    "contact.form_send": "Invia messaggio",
    "contact.form_success": "Grazie! Il modulo è una demo statica: collega un servizio come Formspree o Netlify Forms per riceverlo davvero.",

    "footer.rights": "Tutti i diritti riservati."
  },

  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    "hero.kicker": "Writing, screenwriting, storytelling",
    "hero.role": "Writer — Screenwriter &amp; Copywriter",
    "hero.bio": "I’m a writer with over a decade spent finding the story inside things that don't obviously have one. rom animated short films to dramatic documentaries, from commercials to true crime series. Searching for new stories to tell and inventing new forms of storytelling is what gives meaning to my ambition.",
    "hero.cta_work": "Download my CV",
    "hero.cta_contact": "Get in touch",

    "about.title": "About",
    "about.p1": "I specialize in writing in all its forms: from script editing for audiovisual projects, to drafting and creating promotional content and pitch dossiers for production companies, marketing campaigns, and national or international funding calls, through to technical and creative copywriting for articles and social media. Thanks to my professional expertise and deep curiosity about modern and contemporary pop culture, I develop targeted and strategically effective content, in both Italian and english, for diverse audiences and platforms. ",
    "about.skill1": "Screenwriting",
    "about.skill2": "Long-form writing",
    "about.skill3": "Editorial development",
    "about.skill4": "Research &amp; Interviewing",

    "work.title": "Selected work",
    "work.subtitle": "A selection of productions and projects, by category.",
    "filters.all": "All",
    "filters.spot": "Spot &amp; Commercials",
    "filters.doc": "Documentaries &amp; Docuseries",
    "filters.short": "Short Movies",
    "filters.feature": "Feature Films",
    "filters.marketing": "Narrative Marketing",

    "blog.title": "Blog",
    "blog.subtitle": "Notes on screenwriting, writing and pop culture.",
    "blog.read_more": "Read more",
    "blog.back": "← Back to blog",

    "contact.title": "Contact",
    "contact.subtitle": "For collaborations, projects, or just to say hello.",
    "contact.email_label": "Email",
    "contact.linkedin_label": "LinkedIn",
    "contact.phone_label": "Phone",
    "contact.form_name": "Name",
    "contact.form_email": "Email",
    "contact.form_message": "Message",
    "contact.form_send": "Send message",
    "contact.form_success": "Thank you! This form is a static demo — connect a service like Formspree or Netlify Forms to actually receive it.",

    "footer.rights": "All rights reserved."
  }
};

/* ---------------------------------------------------------------------- */

const WORKS = [
  {
    category: "spot",
    brand: "Xiaomi Global",
    title_it: "Cortometraggio",
    title_en: "Short movie",
    desc_it: "Scrittura soggetto e sceneggiatura per un cortometraggio girato attraverso prodotti cinematografici Xiaomi.",
    desc_en: "Writing of the subject and the script for a short film shot on Xiaomi cinematic devices."
  },

  {
    category: "doc",
    brand: "Discovery - Crime+Investigation",
    title_it: "Docuserie",
    title_en: "Docuseries",
    desc_it: "Coordinamento conduzione interviste, ricerca e sviluppo progettuale di una serie di documentari a tema true crime.",
    desc_en: "Conducting interview coordination, research and project development for a true crime documentary series."
  },

  {
    category: "short",
    brand: "Monkey Business Production",
    title_it: "Cortometraggio",
    title_en: "Short film",
    desc_it: "Sviluppo del soggetto e sceneggiatura per un cortometraggio di animazione.",
    desc_en: "Story development and script for an animation short film."
  },
   
  {
    category: "doc",
    brand: "Discovery - History Channel",
    title_it: "Contenuto storico seriale",
    title_en: "Historical content series",
    desc_it: "Coordinamento conduzione interviste, ricerca e sviluppo progettuale di una serie di documentari a tema true crime.",
    desc_en: "Conducting interview coordination, research and project development for a true crime documentary series."
  },
  {
    category: "marketing",
    brand: "National Geographic x OVS",
    title_it: "Pubblicità",
    title_en: "Commercial",
    desc_it: "Sviluppo editoriale e coordinamento narrativo.",
    desc_en: "Editorial development and narrative coordination."
  },

    {
    category: "feature films",
    brand: "The Box Film",
    title_it: "Film lungometraggio",
    title_en: "Feature film",
    desc_it: "Sviluppo del soggetto e scrittura della sceneggiatura.",
    desc_en: "Story development and script writing."
  },

];

/* ---------------------------------------------------------------------- */

const POSTS = [
  {
    slug: "logline-perfetta",
    date: "06.04.2025",
    lang: "IT",
    title_it: "Una vita in due tempi",
    title_en: "A Life in Two Halves",
    excerpt_it: "Diviso in due, con un “prima” e un “dopo”.",
    excerpt_en: "Split in two, with a “before” and an “after.” ",
    body_it: "<p>C’era un uomo che aveva vissuto tutta la sua vita come uno stronzo, ignorando le persone intorno a lui e pensando solo a se stesso. Poi ebbe un incidente con la moto. Talmente orribile da lasciarlo in coma per giorni. Intorno a lui, coloro che negli anni gli erano rimasti accanto nonostante tutto, avevano già iniziato a fare i conti con l'idea che non ce l'avrebbe fatta. E dal punto di vista medico, la situazione era tutt’altro che ottimista: il cervello sembrava non rispondere più, i danni erano seri. Il classico scenario in cui i dottori scelgono le parole con il contagocce per non dare vane speranze. La sua ex moglie descrisse quei giorni in un diario come un lento scorrere del tempo, un frangente che restava immobile mentre il resto proseguiva indisturbato. Lei andava al lavoro, sbrigava commissioni, rassettava la casa e, in quelle ore, in quei momenti, lui giaceva. Respirava. Ogni tanto le era capitato di vedere un leggero movimento della palpebra e considerarlo una gran vittoria. Ma, con immensa sorpresa di chiunque, un giorno del tutto in atteso, Claudio si risvegliò. Improvvisamente ottimista, anche quando i dottori continuavano a ripetergli che non avrebbe mai più camminato. Gentile, anche quando si accorse che molte delle persone a cui teneva erano state trattate così male da lui da averlo ignorato in degenza. Disponibile, ogni qualvolta gli venisse chiesto qualcosa. Oggi, quell’uomo, è un’altra persona. Lui stesso definisce la sua vita divisa in due, con un “prima” e un “dopo”. Lavorò duro negli anni a seguire, riuscendo a recuperare l’uso delle gambe. Ogni momento libero veniva scandito da gare sportive, come un incentivo a non mollare mai; in particolare, fu il canottaggio ad attirare la sua attenzione. Nelle infinite ore di fisioterapia, finì col pensare e ripensare alla possibilità di remare. Abbiamo approfondito i dettagli della sua vita in un documentario, attualmente in produzione con Roadshine Production.</p>",
    body_en: "<p>There was a man who lived his life as an asshole, ignoring the people around him and thinking only about himself. One day, he had a motorcycle accident. It was so horrible that it left him in a coma for days. Around him, those who had stayed by his side over the years despite everything were coming to terms with the idea that he wouldn't make it. And from a medical standpoint, the situation was anything but optimistic: his brain seemed unresponsive, the damage was severe. The classic scenario where doctors weigh their words carefully so as not to give false hope. In a diary, his ex-wife described those days as a slow passage of time, a period frozen still while the rest of the world went on undisturbed. She went to work, ran errands, tidied the house, and during those hours, in those moments, he just laid there. Breathing. Every now and then, she happened to catch a slight eyelid movement and counted it as a huge victory. But to everyone's immense surprise, on an entirely unexpected day, Claudio woke up. Suddenly optimistic, even when the doctors kept telling him he would have never walked again. Kind, even when he realized that many of the people he cared about had been treated so badly by him that they ignored him during his hospital stay. Helpful, whenever he was asked for anything. Today, that man is a different person. He himself defines his life as split in two, with a before and an after. He worked hard in the years that followed, managing to regain the use of his legs. Every moment was marked by athletic competitions, serving as an incentive to never give up; in particular, it was rowing that caught his attention. During those endless hours of physical therapy, he thought over and over again about the possibility of becoming an athlete, against all odds. We explored the details of his life in a documentary, currently in production with Roadshine Production.</p>"
  },
  {
    slug: "documentario-vs-fiction",
    date: "2026-03-02",
    lang: "IT",
    title_it: "Documentario e fiction: la sceneggiatura cambia più di quanto pensi",
    title_en: "Documentary vs. fiction: the script changes more than you'd think",
    excerpt_it: "Scrivere per un documentario non significa raccontare meno: significa raccontare in modo diverso.",
    excerpt_en: "Writing for a documentary doesn't mean telling less — it means telling differently.",
    body_it: "<p>In fiction si costruisce la scena prima, poi la si scrive. In un documentario spesso è il contrario: la scena esiste già, nel materiale girato o nella realtà dei fatti, e il lavoro di sceneggiatura è trovare l'ordine che la rende una storia.</p><p>Questo cambia il modo di lavorare con le interviste: non sono decorazione, sono struttura. Una buona domanda in fase di ricerca vale più di una buona riga scritta a tavolino.</p><p>Il montaggio, in un documentario, è dove la sceneggiatura si finisce di scrivere davvero.</p>",
    body_en: "<p>In fiction, you build the scene first, then write it. In a documentary it's often the reverse: the scene already exists, in the footage or in reality itself, and the writing work is finding the order that turns it into a story.</p><p>This changes how you work with interviews: they aren't decoration, they're structure. A good question during research is worth more than a good line written at a desk.</p><p>In a documentary, the edit is where the script really gets finished.</p>"
  },
  {
    slug: "seo-e-storytelling",
    date: "2026-04-19",
    lang: "IT",
    title_it: "SEO e storytelling non sono in conflitto",
    title_en: "SEO and storytelling aren't in conflict",
    excerpt_it: "Scrivere per i motori di ricerca non significa rinunciare a una voce. Significa disciplinarla.",
    excerpt_en: "Writing for search engines doesn't mean giving up a voice. It means disciplining it.",
    body_it: "<p>Molti trattano SEO e storytelling come due mestieri opposti: uno tecnico e freddo, l'altro creativo e libero. Nella pratica, il copy che funziona davvero unisce le due cose.</p><p>Una keyword ben scelta non è un vincolo, è un'informazione: dice cosa sta cercando chi legge, prima ancora che apra la pagina. Il lavoro del copywriter è rispondere a quella domanda con una voce riconoscibile, non con un testo generico ottimizzato per un algoritmo.</p><p>La struttura — titoli, paragrafi, gerarchia delle informazioni — è la sceneggiatura invisibile di ogni contenuto web.</p>",
    body_en: "<p>Many treat SEO and storytelling as opposite trades: one technical and cold, the other creative and free. In practice, copy that actually works brings the two together.</p><p>A well-chosen keyword isn't a constraint, it's information: it tells you what the reader is looking for before they even open the page. The copywriter's job is to answer that question in a recognisable voice, not with a generic text optimised for an algorithm.</p><p>Structure — headings, paragraphs, information hierarchy — is the invisible screenplay of every piece of web content.</p>"
  }
];
