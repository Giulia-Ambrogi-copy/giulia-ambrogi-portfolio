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
    title_it: "Campagna globale di lancio prodotto",
    title_en: "Global product launch campaign",
    desc_it: "Copywriting e sviluppo narrativo per una serie di spot internazionali di lancio prodotto.",
    desc_en: "Copywriting and narrative development for a series of international product-launch commercials."
  },
  {
    category: "doc",
    brand: "National Geographic",
    title_it: "Docuserie — sviluppo editoriale",
    title_en: "Docuseries — editorial development",
    desc_it: "Ricerca, struttura narrativa e sceneggiatura per una docuserie a episodi.",
    desc_en: "Research, narrative structure and screenwriting for an episodic docuseries."
  },
  {
    category: "doc",
    brand: "Discovery",
    title_it: "Documentario — sceneggiatura e interviste",
    title_en: "Documentary — screenwriting and interviews",
    desc_it: "Conduzione interviste e stesura della sceneggiatura per un documentario a tema.",
    desc_en: "Interview conduction and script writing for a feature-length documentary."
  },
  {
    category: "spot",
    brand: "Fox Group",
    title_it: "Spot promozionale multipiattaforma",
    title_en: "Multi-platform promotional spot",
    desc_it: "Sceneggiatura per una serie di spot promozionali pensati per TV e digital.",
    desc_en: "Script for a series of promotional spots built for TV and digital."
  },
  {
    category: "short",
    brand: "RoadShine Production",
    title_it: "Cortometraggio — soggetto e sceneggiatura",
    title_en: "Short film — story and screenplay",
    desc_it: "Sviluppo del soggetto e sceneggiatura per un cortometraggio drammatico.",
    desc_en: "Story development and screenplay for a dramatic short film."
  },
  {
    category: "short",
    brand: "Monkey Business Production",
    title_it: "Cortometraggio — sviluppo sceneggiatura",
    title_en: "Short film — screenplay development",
    desc_it: "Collaborazione alla sceneggiatura e alla struttura narrativa di un cortometraggio.",
    desc_en: "Collaboration on the screenplay and narrative structure of a short film."
  },
  {
    category: "feature",
    brand: "InTreProduction",
    title_it: "Lungometraggio — sviluppo sceneggiatura",
    title_en: "Feature film — screenplay development",
    desc_it: "Contributo alla sceneggiatura e allo sviluppo narrativo di un progetto di lungometraggio.",
    desc_en: "Contribution to the screenplay and narrative development of a feature-length project."
  },
  {
    category: "feature",
    brand: "The Box Film",
    title_it: "Lungometraggio — editing narrativo",
    title_en: "Feature film — story editing",
    desc_it: "Editing narrativo e revisione di sceneggiatura per un progetto cinematografico.",
    desc_en: "Story editing and screenplay revision for a feature film project."
  },
  {
    category: "doc",
    brand: "Sky",
    title_it: "Produzione — sviluppo editoriale",
    title_en: "Production — editorial development",
    desc_it: "Sviluppo editoriale e sceneggiatura per contenuti factual.",
    desc_en: "Editorial development and screenwriting for factual content."
  },
  {
    category: "doc",
    brand: "Crime+Investigation",
    title_it: "Docuserie true crime — ricerca e sceneggiatura",
    title_en: "True-crime docuseries — research and screenwriting",
    desc_it: "Ricerca approfondita e sceneggiatura per una docuserie true crime.",
    desc_en: "In-depth research and screenwriting for a true-crime docuseries."
  },
  {
    category: "doc",
    brand: "History Channel",
    title_it: "Contenuto storico — sviluppo narrativo",
    title_en: "Historical content — narrative development",
    desc_it: "Sviluppo narrativo e sceneggiatura per contenuti a tema storico.",
    desc_en: "Narrative development and screenwriting for history-themed content."
  },
  {
    category: "marketing",
    brand: "OVS",
    title_it: "Narrative marketing — contenuti di brand",
    title_en: "Narrative marketing — brand content",
    desc_it: "Strategia di contenuti e copywriting narrativo per campagne di brand.",
    desc_en: "Content strategy and narrative copywriting for brand campaigns."
  },
  {
    category: "marketing",
    brand: "BMW",
    title_it: "Narrative marketing — storytelling di prodotto",
    title_en: "Narrative marketing — product storytelling",
    desc_it: "Sviluppo di storytelling di prodotto per contenuti promozionali.",
    desc_en: "Product storytelling development for promotional content."
  },
  {
    category: "doc",
    brand: "Briciola.tv",
    title_it: "Contenuti factual — sceneggiatura",
    title_en: "Factual content — screenwriting",
    desc_it: "Sceneggiatura e sviluppo editoriale per contenuti factual online.",
    desc_en: "Screenwriting and editorial development for online factual content."
  }
];

/* ---------------------------------------------------------------------- */

const POSTS = [
  {
    slug: "logline-perfetta",
    date: "2026-02-14",
    lang: "IT",
    title_it: "Come costruire una logline che funziona",
    title_en: "How to build a logline that works",
    excerpt_it: "Una logline non è un riassunto: è una promessa. Ecco come scriverne una che regga davvero.",
    excerpt_en: "A logline isn't a summary: it's a promise. Here's how to write one that actually holds up.",
    body_it: "<p>Una logline non deve raccontare la trama: deve vendere la tensione. In una riga, chi è il protagonista, cosa vuole, cosa glielo impedisce e perché dovremmo restare a guardare.</p><p>Il primo errore è provare a comprimere l'intera trama in una frase. Il secondo è dimenticare il conflitto centrale. Una buona logline lascia fuori tutto ciò che non serve a far percepire la posta in gioco.</p><p>Quando scrivo una logline, la testo leggendola ad alta voce a chi non conosce il progetto: se dopo una frase capiscono perché la storia dovrebbe interessarli, ha funzionato.</p>",
    body_en: "<p>A logline shouldn't tell the plot: it should sell the tension. In one line, who the protagonist is, what they want, what stands in the way, and why we should keep watching.</p><p>The first mistake is trying to compress the whole plot into a sentence. The second is forgetting the central conflict. A good logline leaves out everything that doesn't help the stakes land.</p><p>When I write a logline, I test it by reading it aloud to someone who doesn't know the project: if after one sentence they understand why the story should matter to them, it worked.</p>"
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
