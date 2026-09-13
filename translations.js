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
    "hero.bio": "I’m a writer with over a decade spent finding the story inside things that don't obviously have one: from animated short films to dramatic documentaries, from commercials to true crime series. Searching for new stories to tell and inventing new forms of storytelling is what gives meaning to my ambition.",
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
    slug: "documentario-canottaggio",
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
    slug: "fantasia-audiovisivo",
    date: "3.11.2025",
    lang: "IT",
    title_it: "Quando sei bambino",
    title_en: "When you are a child",
    excerpt_it: "Quello che per molti resta un intrattenimento, una scappatoia dalla quotidianità, diviene per alcuni un modo alternativo per tornare a sognare.",
    excerpt_en: "What remains mere entertainment for many, an escape from the everyday life, becomes an alternative way for some to dream again.",
    body_it: "<p>C’è una cosa che accade quando si diventa grandi: si smette di sognare. In qualche modo, la vita ci comprime e costringe a guardarci intorno con un occhio necessariamente realistico. Si tende a dimenticare come si era, quando le responsabilità e la società non richiedevano nulla. Quando si aveva la possibilità di fantasticare su nuovi mondi anche in contesti del tutto consueti, come una semplice sala da pranzo. Bastava qualche cuscino per imbastire battaglie e fortini. Bastava il bastone di una scopa per immaginare di poter cavalcare in un’ampia landa desolata. Più si diventa grandi, più il perimetro del possibile si stringe. Le pareti tornano a essere solo cartongesso, la scopa resta un attrezzo per le pulizie e ci si ritrova a cercare un modo per bucare quella corazza di razionalità che ci siamo costruiti addosso per sopravvivere. Chi ha la fortuna di crescere mantenendo questa miccia dentro di sé, si ritrova inevitabilmente a cercare espedienti che gli rilascino quella stessa dose di dopamina (perché fare battaglie immaginare da adulti non è socialmente accettabile, diversamente dal farle davvero, visti i tempi che corrono… Ma questa è un’altra storia). Quindi, ci si rinchiude in quei mondi narrati sulle pagine di un libro o nelle scene di un film. Quello che per molti resta un intrattenimento, una scappatoia dalla quotidianità, diviene per alcuni un modo alternativo per tornare a sognare. Diventano, così, uno specchio in cui riflettersi senza la paura di essere giudicati. Questi espedienti ci permette di esplorare la rabbia, la paura, il lutto o il desiderio attraverso vicende che non ci riguardano e ci fanno empatizzare, offrendoci una chiave di lettura diversa da quella a cui siamo costretti nella vita reale. Come se fosse un modo per dare un nome e una forma a ciò che ci portiamo dentro. Almeno per me, è sempre stato così. E, visto il lavoro che faccio, non si è mai limitato al solo osservare e apprezzare. Quando scrivi, giri o monti una storia, stai costruendo una zattera per qualcun altro. Sai perfettamente che dall'altra parte dello schermo ci sarà una persona stanca, delusa o semplicemente desiderosa di staccare la spina, pronta ad affidarti il proprio tempo. E il punto non è solo distrarla. È offrirle un luogo sicuro dove potersi sentire vulnerabile, protetta dalla distanza di sicurezza della finzione. Possiamo assistere alla fine di un amore, con la consapevolezza che al riaccendersi delle luci saremo ancora interi. Possiamo vivere avventure fantastiche, pur restando comodi sul divano. Conveniente, perché possiamo continuare a sognare sperando in una vita migliore.</p>",
    body_en: "<p>Something happens when you grow up: you stop daydreaming. Somehow, growing old means being compressed and forced to look around with a necessarily realistic eye. We tend to forget how we used to be, back when responsibilities and society demanded nothing from us. When we had the chance to fantasize about new worlds even in completely ordinary settings, like a simple dining room. A few pillows were enough to set up battles and fortresses. The handle of a broom was enough to imagine riding across a vast, desolate wasteland. The older you get, the narrower the perimeter of the possible becomes. The walls go back to being just drywall, the broom remains a cleaning tool, and you find yourself searching for a way to pierce that armour of rationality we built around ourselves just to survive. Those who are lucky enough to grow up keeping that spark alive inside inevitably find themselves searching for ways to release that same hit of dopamine (because fighting imaginary battles as an adult is not socially acceptable, unlike fighting real ones, given the times we live in… But that’s a story for another time). So, we shut ourselves away in those worlds narrated on the pages of a book or in the scenes of a movie. What remains mere entertainment for many, an escape from the everyday life, becomes an alternative way for some to dream again. They become mirrors able to reflect our emotions without the fear of being judged. These outlets allow us to explore anger, fear, grief, or desire through stories that aren't ours, yet make us empathize, offering us a different perspective from the one we are forced into in real life. As if it were a way to give a name and a shape to what we carry inside. At least for me, it has always been like this. And given the job I do, it has never been limited to just observing and appreciating. When you write, shoot, or edit a story, you are building a raft for someone else. You know full well that on the other side of the screen there will be a person who is tired, disappointed, or simply eager to unplug, ready to entrust you with their time. And the point isn't just to distract them. It’s to offer them a safe place where they can feel vulnerable, protected by the safe distance of fiction. We can witness the end of a love story, with the knowledge that when the lights come back on, we will still be whole. We can experience fantastic adventures, all while staying comfortable on the couch. Convenient, because we can keep dreaming, hoping for a better life.</p>"
  },
  {
    slug: "verità-finzione",
    date: "27.06.2026",
    lang: "IT",
    title_it: "False distinzioni",
    title_en: "False Distinctions",
    excerpt_it: "Tutto dipende dal modo in cui il pensiero del narratore deve muoversi all'interno del caos.",
    excerpt_en: "It all depends on the way the narrator's thought must move within the chaos.",
    body_it: "<p>Una credenza, tra le pieghe del cinema, vuole che ci sia differenza tra chi lavora con la realtà e chi lavora con la finzione. Si pensa che inventare personaggi dal nulla, plasmarne i destini, decidere dove cade ogni singola ombra sia l'atto supremo della creazione narrativa e che il documentario sia una forma di elaborazione quasi passiva, un esercizio d'archivio. Ma è come se fossero due facce di una stessa medaglia. Se da una parte potremmo avere una traiettoria lineare, con una sceneggiatura delineata, dialoghi precisi e ambientazioni definite, dall’altra avremmo caratterizzazioni a cui abituarci e verso cui muoverci per proseguire in direzioni di cui non possiamo conoscere o definire le sorti con certezza. Se da un lato la pagina bianca precede la camera e la realtà viene piegata alla sceneggiatura, dall’altra c’è la ricerca monumentale di materiale e l’esigenza di trovare un ordine a scene già scritte. Tutto dipende dal modo in cui il pensiero del narratore deve muoversi all'interno del caos. Chi crede che il documentario sia la pura e semplice verità, mentre la finzione, per definizione, sia solo menzogna… Beh, sbaglia di grosso. Entrambi i linguaggi usano la soggettività del montaggio e della costruzione narrativa per arrivare a una verità che non è mai quella reale. Cambia solo l’approccio. Scrivere un documentario significa farsi carico di una responsabilità enorme: non si manovrano personaggi senza conseguenze, ma si maneggiano pezzi di vita di persone vere. Se nella finzione si pensa all’arco narrativo del personaggio prima di iniziare a scrivere, nel documentario si ha già la persona da cui attingere per raccontare una storia.</p>",
    body_en: "<p>A belief, nestled within the folds of cinema, holds that there is a difference between those who work with reality and those who work with fiction. Creating characters from scratch, shaping their destinies, and deciding where every single shadow falls is thought to be the supreme act of narrative creation, while the documentary is viewed as an almost passive form of processing, an archival exercise. But it's as if they were two sides of the same coin. While on one hand we might have a linear trajectory, with a well-defined script, precise dialogue, and clear settings, on the other hand we have character traits we must adapt to and move toward, heading in directions whose outcomes we cannot know or define with certainty. If on one side the blank page precedes the camera and reality is bent to the screenplay, on the other side there is a monumental search for material and the need to find an order for scenes already written. It all depends on the way the narrator's thought must move within the chaos. Anyone who believes that a documentary is pure and simple truth, while fiction, by definition, is merely a lie… Well, they are dead wrong. Both languages use the subjectivity of editing and narrative construction to reach the conclusion that is never the real one. Only the approach changes. Writing a documentary means taking on a huge responsibility: you aren't maneuvering characters without consequences, but handling pieces of real people's lives. If in fiction you think about a character's narrative arc before you start writing, in a documentary you already have the person to draw from to tell a story.</p>"
  }
];
