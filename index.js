// Cercalo - Logica Applicativa e Database Mock

// Database Locale di Artigiani e Professionisti che "lavorano con il cuore"
const ARTIGIANI_MOCK = [
  {
    id: 1,
    nome: "Mario R.",
    ruolo: "Tuttofare Gentile",
    citta: "Milano",
    biografia: "Faccio piccoli lavoretti di riparazione in casa dal 1995. Mi piace aggiustare piuttosto che buttare. Lavoro con calma, pulizia e spiego sempre quello che faccio. Per me, vedere un cliente sorridere sollevato è la gioia più grande del mio lavoro.",
    cuori: 5.0,
    recensioniCount: 14,
    prezzo: "Un pensiero per l'aiuto (Offerta libera)",
    categoria: "tuttofare",
    tipoHelper: "aiutante",
    avatar: "👨‍🔧",
    facSimile: true,
    contatti: {
      telefono: "+39 347 123 4567",
      email: "mario.gentile@example.com"
    },
    recensioni: [
      { utente: "Anna P.", data: "12 Gen 2026", cuori: 5, testo: "Mario è stato squisito. Ha sistemato la tapparella bloccata in pochi minuti e ha anche voluto dare un'occhiata a un cardine cigolante senza chiedermi nulla in più. Una persona d'oro!" },
      { utente: "Giacomo L.", data: "05 Dic 2025", cuori: 5, testo: "Puntuale, pulito e onestissimo. Ha spiegato il problema e l'ha risolto al minimo costo." }
    ]
  },
  {
    id: 2,
    nome: "Elena B.",
    ruolo: "Estetista a Domicilio",
    citta: "Roma",
    biografia: "Porto trattamenti di cura personale direttamente a casa, specialmente per persone anziane, neo-mamme o chi ha difficoltà a spostarsi. Credo che la cura del corpo sia anche cura dello spirito. Ci metto ascolto, pazienza e tanta dolcezza.",
    cuori: 4.9,
    recensioniCount: 22,
    prezzo: "Da €15 (trattamenti base)",
    categoria: "estetista",
    tipoHelper: "professionista",
    avatar: "💇‍♀️",
    facSimile: true,
    contatti: {
      telefono: "+39 333 987 6543",
      email: "elena.beauty@example.com"
    },
    recensioni: [
      { utente: "Teresa M. (figlia)", data: "18 Feb 2026", cuori: 5, testo: "Elena viene regolarmente da mia madre che ha problemi di mobilità. È incredibilmente dolce e professionale. Mamma aspetta le sue visite con una gioia immensa." },
      { utente: "Sofia R.", data: "10 Gen 2026", cuori: 4, testo: "Trattamento fantastico direttamente a casa. Molto comodo e rilassante, Elena è una persona splendida." }
    ]
  },
  {
    id: 3,
    nome: "Giuseppe V.",
    ruolo: "Idraulico Onesto",
    citta: "Milano",
    biografia: "Risolvo perdite, stasature e problemi idraulici con trasparenza totale. Prima di fare qualsiasi lavoro spiego il preventivo. Credo che la fiducia sia la base del mio lavoro, specialmente quando si entra nelle case della gente.",
    cuori: 4.9,
    recensioniCount: 19,
    prezzo: "€30 chiamata + tariffe trasparenti",
    categoria: "idraulico",
    tipoHelper: "professionista",
    avatar: "🔧",
    facSimile: true,
    contatti: {
      telefono: "+39 328 456 7890",
      email: "giuseppe.idraulica@example.com"
    },
    recensioni: [
      { utente: "Luigi F.", data: "22 Gen 2026", cuori: 5, testo: "Ha risolto una perdita in bagno che altri due idraulici non erano riusciti a riparare definitivamente. Prezzo onesto e spiegazioni chiare." },
      { utente: "Clara S.", data: "03 Nov 2025", cuori: 5, testo: "Molto educato e rapido. Si vede quando qualcuno ama e rispetta il proprio mestiere." }
    ]
  },
  {
    id: 4,
    nome: "Chiara N.",
    ruolo: "Assistenza Familiare e Compagnia",
    citta: "Torino",
    biografia: "Offro aiuto nelle faccende quotidiane, preparazione pasti e compagnia ad anziani o a chiunque si trovi in un momento di solitudine o difficoltà temporanea. Per me contano i legami umani: un caffè e una chiacchierata valgono quanto il lavoro pratico.",
    cuori: 5.0,
    recensioniCount: 8,
    prezzo: "Un pensiero per l'aiuto / Offerta libera",
    categoria: "assistenza",
    tipoHelper: "aiutante",
    avatar: "👩‍⚕️",
    facSimile: true,
    contatti: {
      telefono: "+39 349 222 3344",
      email: "chiara.compagnia@example.com"
    },
    recensioni: [
      { utente: "Paolo D.", data: "01 Feb 2026", cuori: 5, testo: "Chiara assiste mio padre tre pomeriggi a settimana. Gli ha ridato il sorriso. Preparano torte insieme e fanno passeggiate. Un angelo." }
    ]
  },
  {
    id: 5,
    nome: "Roberto M.",
    ruolo: "Falegname Creativo",
    citta: "Firenze",
    biografia: "Lavoro il legno con passione artigianale, dal piccolo restauro di una sedia di famiglia alla creazione di mobili su misura. Uso legni ecologici e vernici ad acqua. Ridare vita a un pezzo di legno antico è per me pura magia.",
    cuori: 4.8,
    recensioniCount: 11,
    prezzo: "Preventivi gratuiti e flessibili",
    categoria: "artigianato",
    tipoHelper: "professionista",
    avatar: "🪵",
    facSimile: true,
    contatti: {
      telefono: "+39 335 111 2233",
      email: "roberto.legno@example.com"
    },
    recensioni: [
      { utente: "Francesca V.", data: "15 Dic 2025", cuori: 5, testo: "Ha restaurato una vecchia cassapanca della nonna. Il lavoro è splendido e ha mantenuto intatta l'anima del mobile. Grazie Roberto!" }
    ]
  },
  {
    id: 6,
    nome: "Alessandro P.",
    ruolo: "Elettricista di Fiducia",
    citta: "Roma",
    biografia: "Specializzato in impianti elettrici civili e piccole riparazioni (prese, citofoni, lampadari). La sicurezza della tua casa è la mia priorità. Lavoro con precisione e lascio sempre pulito. Spiego chiaramente i costi prima di iniziare.",
    cuori: 4.9,
    recensioniCount: 15,
    prezzo: "€25 chiamata + materiali",
    categoria: "elettricista",
    tipoHelper: "professionista",
    avatar: "⚡",
    facSimile: true,
    contatti: {
      telefono: "+39 340 777 8899",
      email: "alessandro.elettrico@example.com"
    },
    recensioni: [
      { utente: "Matteo G.", data: "20 Gen 2026", cuori: 5, testo: "Rapido e preciso. Ha trovato subito il cortocircuito che faceva saltare il salvavita. Molto cortese e preparato." }
    ]
  },
  {
    id: 7,
    nome: "Stefano T.",
    ruolo: "Geometra per la Casa",
    citta: "Bologna",
    biografia: "Aiuto le persone a capire la burocrazia della casa: pratiche edilizie, catasto, successioni e controlli prima dell'acquisto. Spiego i termini legali e tecnici in modo che tutti possano capire e sentirsi tranquilli nelle loro scelte.",
    cuori: 5.0,
    recensioniCount: 6,
    prezzo: "Tariffe agevolate per famiglie",
    categoria: "assistenza",
    tipoHelper: "professionista",
    avatar: "📐",
    facSimile: true,
    contatti: {
      telefono: "+39 331 444 5566",
      email: "stefano.geometra@example.com"
    },
    recensioni: [
      { utente: "Elena K.", data: "08 Gen 2026", cuori: 5, testo: "Stefano ci ha aiutato a verificare la conformità della casa che volevamo comprare. Ha spiegato ogni singola carta con calma olimpica. Ci ha evitato grossi problemi!" }
    ]
  },
  {
    id: 8,
    nome: "Sofia E.",
    ruolo: "Artista & Decoratrice Pareti",
    citta: "Napoli",
    biografia: "Decoratrice d'interni, realizzo dipinti murali personalizzati per camerette di bambini, negozi o angoli di casa che hanno bisogno di luce e colore. Uso la pittura per trasmettere allegria e serenità negli ambienti di vita quotidiana.",
    cuori: 5.0,
    recensioniCount: 10,
    prezzo: "Un pensiero per l'aiuto / Offerta libera",
    categoria: "artista",
    tipoHelper: "aiutante",
    avatar: "🎨",
    facSimile: true,
    contatti: {
      telefono: "+39 327 555 6677",
      email: "sofia.arte@example.com"
    },
    recensioni: [
      { utente: "Valentina D.", data: "18 Dic 2025", cuori: 5, testo: "Ha dipinto una parete con alberi e animaletti nella stanza del mio piccolo. È meravigliosa, sembra di stare in una favola! Sofia ha una sensibilità rara." }
    ]
  }
];

// Stato dell'Applicazione
const state = {
  utenteRegistrato: false,
  categoriaAttiva: "",
  filtroTesto: "",
  filtroCitta: "",
  artigianoSelezionato: null // Memorizza a quale artigiano l'utente voleva accedere
};

let ARTIGIANI = [];

// Inizializza il database da localStorage
const inizializzaDatabase = () => {
  const dbLocale = localStorage.getItem("cercalo_database");
  if (dbLocale) {
    try {
      ARTIGIANI = JSON.parse(dbLocale);
      // Allineamento/Migrazione dei profili demo esistenti per supportare Fac-Simile ed iniziali puntate
      let modificato = false;
      ARTIGIANI = ARTIGIANI.map(a => {
        const mockEquiv = ARTIGIANI_MOCK.find(m => m.id === a.id);
        if (mockEquiv) {
          // Se ha ancora il nome vecchio (es. Rossi) o manca la flag facsimile
          if (a.nome !== mockEquiv.nome || a.facSimile !== mockEquiv.facSimile) {
            modificato = true;
            return { ...a, nome: mockEquiv.nome, facSimile: mockEquiv.facSimile, approvato: mockEquiv.approvato };
          }
        }
        return a;
      });
      if (modificato) {
        localStorage.setItem("cercalo_database", JSON.stringify(ARTIGIANI));
      }
    } catch (e) {
      console.error("Errore nel parsing del database locale, ripristino mock", e);
      ARTIGIANI = ARTIGIANI_MOCK.map(a => ({ ...a, approvato: true }));
      localStorage.setItem("cercalo_database", JSON.stringify(ARTIGIANI));
    }
  } else {
    ARTIGIANI = ARTIGIANI_MOCK.map(a => ({ ...a, approvato: true }));
    localStorage.setItem("cercalo_database", JSON.stringify(ARTIGIANI));
  }
};

// Carica stato da LocalStorage se esiste
const caricaStato = () => {
  const reg = localStorage.getItem("cercalo_registrato");
  if (reg === "true") {
    state.utenteRegistrato = true;
    aggiornaUIRegistrazione();
  }
};

// Aggiorna l'interfaccia se l'utente è registrato
const aggiornaUIRegistrazione = () => {
  const btnAccedi = document.getElementById("btn-header-accedi");
  if (btnAccedi) {
    btnAccedi.innerHTML = "✨ Sei Online";
    btnAccedi.style.backgroundColor = "var(--primary-pesca-chiaro)";
    btnAccedi.style.color = "var(--primary-pesca-dark)";
    btnAccedi.disabled = false;
    btnAccedi.onclick = (e) => {
      e.preventDefault();
      apriModalProfilo();
    };
  }
};

// Helper per abbinare le emoji alle categorie anche personalizzate
const ottieniEmojiPerCategoria = (cat) => {
  const c = cat.toLowerCase().trim();
  const emojiMap = {
    tuttofare: "👨‍🔧",
    idraulico: "🔧",
    elettricista: "⚡",
    estetista: "💅",
    parrucchiere: "💇‍♀️",
    assistenza: "👩‍⚕️",
    giardiniere: "👨‍🌾",
    baratto: "🔄",
    scambio: "🔄",
    decoratrice: "🎨",
    artista: "🎨",
    pulizie: "🧹",
    traslochi: "🚚",
    falegname: "🪵",
    orologiaio: "⌚",
    orologiaia: "⌚",
    orologi: "⌚",
    sarto: "🪡",
    sarta: "🪡",
    cucito: "🪡",
    pasticcere: "🧁",
    pasticcera: "🧁",
    pasticceria: "🧁",
    cuoco: "👨‍🍳",
    cuoca: "👨‍🍳",
    vetraio: "🪟",
    vetraia: "🪟",
    meccanico: "🚗",
    meccanica: "🚗",
    bar: "☕",
    caffetteria: "☕",
    panettiere: "🥖",
    panettiera: "🥖"
  };
  return emojiMap[c] || "🌸";
};

// Genera dinamicamente le categorie rapide in base ai dati reali presenti
const renderCategorieRapide = () => {
  const container = document.querySelector(".categorie-rapide");
  if (!container) return;

  // Categorie standard sempre visibili all'inizio
  const predefinite = [
    { id: "tuttofare", nome: "👨‍🔧 Tuttofare" },
    { id: "idraulico", nome: "🔧 Idraulico" },
    { id: "elettricista", nome: "⚡ Elettricista" },
    { id: "estetista", nome: "💅 Estetista" },
    { id: "assistenza", nome: "👩‍⚕️ Assistenza" }
  ];

  // Raccogli tutte le categorie distinte presenti nel database
  const tutteCategorie = Array.from(new Set(ARTIGIANI.map(a => a.categoria.toLowerCase().trim())));
  
  // Filtra quelle che non sono già incluse nelle predefinite
  const customCategorie = tutteCategorie.filter(cat => cat && !predefinite.some(p => p.id === cat));

  // Genera HTML dei pulsanti
  let html = predefinite.map(p => {
    const attivaClass = state.categoriaAttiva === p.id ? "categoria-pill attiva" : "categoria-pill";
    return `<button class="${attivaClass}" onclick="selezionaCategoria('${p.id}', this)">${p.nome}</button>`;
  }).join("");

  // Aggiungi le categorie personalizzate caricate dinamicamente
  customCategorie.forEach(cat => {
    const nomeVisualizzato = cat.charAt(0).toUpperCase() + cat.slice(1);
    const emoji = ottieniEmojiPerCategoria(cat);
    const attivaClass = state.categoriaAttiva === cat ? "categoria-pill attiva" : "categoria-pill";
    html += `<button class="${attivaClass}" onclick="selezionaCategoria('${cat}', this)">${emoji} ${nomeVisualizzato}</button>`;
  });

  container.innerHTML = html;
};

// Funzione di Filtraggio ed Esposizione dei Risultati
const renderArtigiani = () => {
  const griglia = document.getElementById("griglia-artigiani");
  const titoloRisultati = document.getElementById("risultati-titolo");
  if (!griglia) return;

  // Applica filtri
  const risultati = ARTIGIANI.filter(art => {
    // Escludi i profili non approvati
    if (art.approvato === false) return false;

    const matchCategoria = !state.categoriaAttiva || art.categoria === state.categoriaAttiva;
    
    const testoRicerca = state.filtroTesto.toLowerCase().trim();
    const matchTesto = !testoRicerca || 
      art.nome.toLowerCase().includes(testoRicerca) || 
      art.ruolo.toLowerCase().includes(testoRicerca) || 
      art.biografia.toLowerCase().includes(testoRicerca);
      
    const cittaRicerca = state.filtroCitta.toLowerCase().trim();
    const matchCitta = !cittaRicerca || art.citta.toLowerCase().includes(cittaRicerca);

    return matchCategoria && matchTesto && matchCitta;
  });

  // Aggiorna il titolo della sezione risultati
  if (titoloRisultati) {
    if (state.categoriaAttiva || state.filtroTesto || state.filtroCitta) {
      titoloRisultati.innerText = `Persone disponibili con il cuore (${risultati.length})`;
    } else {
      titoloRisultati.innerText = `Alcune delle persone splendide iscritte a Cercalo`;
    }
  }

  // Genera HTML delle card
  if (risultati.length === 0) {
    griglia.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; background: white; border-radius: 28px; box-shadow: var(--shadow-nuvola);">
        <p style="font-size: 24px; margin-bottom: 10px;">🌸</p>
        <p style="font-weight: 600; color: var(--color-testo);">Nessuna persona corrisponde alla ricerca al momento.</p>
        <p style="color: var(--color-testo-mutato); font-size: 14px; margin-top: 5px;">Prova a cercare con parole più semplici o contatta la nostra community per un aiuto.</p>
      </div>
    `;
    return;
  }

  griglia.innerHTML = risultati.map(art => {
    // Tronca biografia nella card
    const bioTroncata = art.biografia.length > 120 
      ? art.biografia.substring(0, 115) + "..." 
      : art.biografia;

    // Scegli icona e testo del badge in base al tipo di aiutante
    const badgeHTML = art.tipoHelper === 'professionista'
      ? `<span class="ruolo-art professionista">💼 Professionista</span>`
      : `<span class="ruolo-art aiutante">❤️ Aiutante di Quartiere</span>`;

    const facsimileHTML = art.facSimile ? `<span class="badge-facsimile">Fac-Simile</span>` : '';

    return `
      <article class="card-artigiano" data-id="${art.id}">
        ${facsimileHTML}
        <div class="card-header-art">
          <div class="avatar-art">${art.avatar}</div>
          <div class="info-header-art">
            <h3 class="nome-art">${art.nome}</h3>
            <div style="display: flex; flex-direction: column; gap: 4px; align-items: flex-start; margin-bottom: 2px;">
              ${badgeHTML}
              ${art.promoGratis ? `<span class="badge-promo-gratis">🎁 Primo Anno Gratis</span>` : ''}
              <span style="font-size: 12px; font-weight: 600; color: var(--color-testo-mutato);">${art.ruolo}</span>
            </div>
            <div class="citta-tag">📍 ${art.citta}</div>
          </div>
        </div>
        
        <div style="margin-bottom: 15px;">
          <div class="cuori-rating">❤️ ${art.cuori.toFixed(1)} <span style="font-weight: 500; opacity: 0.8;">(${art.recensioniCount} recensioni)</span></div>
        </div>

        <p class="descrizione-art">${bioTroncata}</p>

        <div class="prezzi-art">
          <span class="prezzi-label">TARIFFE / COMPENSI</span>
          <span class="prezzi-valore">${art.prezzo}</span>
        </div>

        <button class="btn-contatta" onclick="gestisciContatto(${art.id})">
          ❤️ Contatta
        </button>
      </article>
    `;
  }).join("");
};

// Funzione avviata cliccando su "Contatta" nelle card
window.gestisciContatto = (id) => {
  const artigiano = ARTIGIANI.find(a => a.id === id);
  if (!artigiano) return;

  state.artigianoSelezionato = artigiano;

  if (state.utenteRegistrato) {
    // Utente registrato: mostra direttamente il modal dettagli
    apriModalDettagli(artigiano);
  } else {
    // Utente non registrato: apri il modal di registrazione/spiegazione
    apriModalRegistrazione();
  }
};

// Apertura Modal Registrazione
const apriModalRegistrazione = () => {
  const modal = document.getElementById("modal-registrazione");
  if (modal) {
    modal.classList.add("attivo");
  }
};

// Chiusura Modal Registrazione
const chiudiModalRegistrazione = () => {
  const modal = document.getElementById("modal-registrazione");
  if (modal) {
    modal.classList.remove("attivo");
  }
};

// Apertura Modal Dettagli Artigiano
const apriModalDettagli = (art) => {
  const modal = document.getElementById("modal-dettagli");
  if (!modal) return;

  // Compila i dati dell'artigiano
  document.getElementById("det-avatar").innerText = art.avatar;
  document.getElementById("det-nome").innerText = art.nome;
  document.getElementById("det-ruolo").innerText = art.ruolo;
  document.getElementById("det-citta").innerText = `📍 Opera a ${art.citta}`;
  document.getElementById("det-bio").innerText = art.biografia;
  document.getElementById("det-prezzo").innerText = art.prezzo;
  document.getElementById("det-valutazione").innerText = `❤️ ${art.cuori.toFixed(1)} / 5 (${art.recensioniCount} pareri del cuore)`;

  // Contatti
  document.getElementById("det-tel").innerText = art.contatti.telefono;
  document.getElementById("det-tel").href = `tel:${art.contatti.telefono}`;
  
  const emailEl = document.getElementById("det-email");
  if (emailEl) {
    const emailItem = emailEl.closest(".contatto-item");
    if (art.contatti.email) {
      emailEl.innerText = art.contatti.email;
      emailEl.href = `mailto:${art.contatti.email}`;
      if (emailItem) emailItem.style.display = "flex";
    } else {
      if (emailItem) emailItem.style.display = "none";
    }
  }

  // Recensioni
  const recensioniLista = document.getElementById("det-recensioni-lista");
  if (recensioniLista) {
    if (art.recensioni.length === 0) {
      recensioniLista.innerHTML = `<p style="font-size: 14px; font-style: italic; color: var(--color-testo-mutato);">Nessuna recensione dettagliata inserita al momento, ma ha ricevuto ${art.recensioniCount} valutazioni positive a cuori!</p>`;
    } else {
      recensioniLista.innerHTML = art.recensioni.map(r => `
        <div class="recensione-card">
          <div class="recensione-header">
            <span>👤 ${r.utente}</span>
            <span style="color: var(--color-cuore);"> ${"❤️".repeat(r.cuori)}</span>
          </div>
          <p class="recensione-testo">"${r.testo}"</p>
          <div style="font-size: 11px; text-align: right; color: var(--color-testo-mutato); margin-top: 6px;">Scritta il ${r.data}</div>
        </div>
      `).join("");
    }
  }

  modal.classList.add("attivo");
};

// Chiusura Modal Dettagli
const chiudiModalDettagli = () => {
  const modal = document.getElementById("modal-dettagli");
  if (modal) {
    modal.classList.remove("attivo");
  }
};

// Chiusura Lightbox Logo
const chiudiLightbox = () => {
  const lightbox = document.getElementById("lightbox-logo");
  if (lightbox) {
    lightbox.classList.remove("attivo");
  }
};

// Cambia tab nel modal registrazione (Accedi / Registrati)
window.cambiaTabModal = (tipo) => {
  const btnAccedi = document.getElementById("tab-accedi");
  const btnRegistrati = document.getElementById("tab-registrati");
  const formRegistrati = document.getElementById("form-registrati-campi");
  const quotaSpiegazione = document.getElementById("quota-spiegazione-box");
  const submitBtn = document.getElementById("submit-modal-btn");
  const modalTitolo = document.getElementById("modal-reg-titolo");

  if (tipo === 'accedi') {
    btnAccedi.classList.add("attivo");
    btnRegistrati.classList.remove("attivo");
    if (formRegistrati) formRegistrati.style.display = "none";
    if (quotaSpiegazione) quotaSpiegazione.style.display = "none";
    if (modalTitolo) modalTitolo.innerText = "Bentornato su Cercalo";
    if (submitBtn) submitBtn.innerText = "Accedi Ora";
  } else {
    btnRegistrati.classList.add("attivo");
    btnAccedi.classList.remove("attivo");
    if (formRegistrati) formRegistrati.style.display = "flex";
    if (quotaSpiegazione) quotaSpiegazione.style.display = "flex";
    if (modalTitolo) modalTitolo.innerText = "Unisciti a Cercalo";
    if (submitBtn) submitBtn.innerText = "Registrati e Sblocca i Contatti";
  }
};

// Gestione dell'invio del form di registrazione/accesso
const inviaFormRegistrazione = (e) => {
  e.preventDefault();
  
  const emailInput = document.getElementById("reg-email").value.trim() || "utente@cercalo.it";
  const nomeInput = document.getElementById("reg-nome").value.trim() || "Membro di Cercalo";
  
  localStorage.setItem("cercalo_utente_email", emailInput);
  localStorage.setItem("cercalo_utente_nome", nomeInput);
  
  // Salva stato
  state.utenteRegistrato = true;
  localStorage.setItem("cercalo_registrato", "true");
  aggiornaUIRegistrazione();
  chiudiModalRegistrazione();

  // Se l'utente voleva contattare qualcuno, apri i dettagli di quell'artigiano immediatamente
  if (state.artigianoSelezionato) {
    setTimeout(() => {
      apriModalDettagli(state.artigianoSelezionato);
    }, 300);
  } else {
    alert("Registrazione completata con successo! Ora puoi accedere a tutti i contatti degli artigiani e recensire le prestazioni.");
  }
};

// Modal Profilo Utente
const apriModalProfilo = () => {
  const modal = document.getElementById("modal-profilo");
  if (!modal) return;
  
  const nome = localStorage.getItem("cercalo_utente_nome") || "Membro di Cercalo";
  const email = localStorage.getItem("cercalo_utente_email") || "email@esempio.it";
  
  document.getElementById("profilo-nome-visualizzato").innerText = nome;
  document.getElementById("profilo-email-visualizzato").innerText = email;
  
  modal.classList.add("attivo");
};

const chiudiModalProfilo = () => {
  const modal = document.getElementById("modal-profilo");
  if (modal) {
    modal.classList.remove("attivo");
  }
};

window.eseguiLogout = () => {
  localStorage.removeItem("cercalo_registrato");
  localStorage.removeItem("cercalo_utente_nome");
  localStorage.removeItem("cercalo_utente_email");
  state.utenteRegistrato = false;
  
  chiudiModalProfilo();
  alert("Ti sei disconnesso correttamente.");
  location.reload();
};

window.eliminaAccount = () => {
  if (confirm("Sei sicuro di voler eliminare definitivamente il tuo account di Cercalo? Questa azione cancellerà tutti i tuoi dati pubblici.")) {
    const emailUtente = localStorage.getItem("cercalo_utente_email");
    if (emailUtente) {
      ARTIGIANI = ARTIGIANI.filter(a => a.contatti.email !== emailUtente);
      localStorage.setItem("cercalo_database", JSON.stringify(ARTIGIANI));
    }
    
    localStorage.removeItem("cercalo_registrato");
    localStorage.removeItem("cercalo_utente_nome");
    localStorage.removeItem("cercalo_utente_email");
    state.utenteRegistrato = false;
    
    chiudiModalProfilo();
    alert("Il tuo account è stato eliminato con successo. Come da termini e GDPR, i log di sistema amministrativi verranno conservati per scopi gestionali.");
    location.reload();
  }
};

// Gestione Categoria Cliccata
window.selezionaCategoria = (cat, element) => {
  if (state.categoriaAttiva === cat) {
    state.categoriaAttiva = "";
  } else {
    state.categoriaAttiva = cat;
  }

  renderCategorieRapide();
  renderArtigiani();
};

// Mostra spiegazione Filosofia del Progetto
window.mostraFilosofia = () => {
  const filosofiaSezione = document.getElementById("filosofia");
  if (filosofiaSezione) {
    filosofiaSezione.scrollIntoView({ behavior: 'smooth' });
  }
};

// Inizializzazione della Pagina
document.addEventListener("DOMContentLoaded", () => {
  inizializzaDatabase();
  caricaStato();
  renderCategorieRapide();
  renderArtigiani();

  // Listeners dei Filtri di Ricerca
  const inputTesto = document.getElementById("ricerca-testo");
  const inputCitta = document.getElementById("ricerca-citta");
  const formRicerca = document.getElementById("form-ricerca-bar");

  if (inputTesto) {
    inputTesto.addEventListener("input", (e) => {
      state.filtroTesto = e.target.value;
      renderArtigiani();
    });
  }

  if (inputCitta) {
    inputCitta.addEventListener("input", (e) => {
      state.filtroCitta = e.target.value;
      renderArtigiani();
    });
  }

  if (formRicerca) {
    formRicerca.addEventListener("submit", (e) => {
      e.preventDefault();
      renderArtigiani();
      // Scroll automatico alla griglia risultati
      const risultatiSez = document.getElementById("risultati-sezione");
      if (risultatiSez) {
        risultatiSez.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Listener del form del Modal
  const formModal = document.getElementById("form-auth");
  if (formModal) {
    formModal.addEventListener("submit", inviaFormRegistrazione);
  }

  // Overlay Click chiude i modal
  const overlays = document.querySelectorAll(".modal-overlay");
  overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        chiudiModalRegistrazione();
        chiudiModalDettagli();
        chiudiModalProfilo();
        chiudiLightbox();
      }
    });
  });
  
  // Bottone chiusura nel modal
  const closeButtons = document.querySelectorAll(".modal-close");
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      chiudiModalRegistrazione();
      chiudiModalDettagli();
      chiudiModalProfilo();
      chiudiLightbox();
    });
  });

  // Scroll Listener per rimpicciolire l'header ed il logo
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".app-header");
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  // Splash Screen automatico (mostrato una sola volta per sessione browser)
  const splash = document.getElementById("splash-screen");
  if (splash) {
    if (!sessionStorage.getItem("cercalo_splash_visto")) {
      const btnSalta = splash.querySelector(".splash-close");
      if (btnSalta) {
        btnSalta.addEventListener("click", (e) => {
          e.stopPropagation();
          splash.classList.add("fade-out");
          sessionStorage.setItem("cercalo_splash_visto", "true");
        });
      }
      
      // Sfuma dopo 3 secondi
      setTimeout(() => {
        splash.classList.add("fade-out");
        sessionStorage.setItem("cercalo_splash_visto", "true");
      }, 3000);
    } else {
      splash.style.display = "none";
    }
  }

  // Lightbox Zoom Logo
  const logoImg = document.querySelector(".logo-img");
  const lightbox = document.getElementById("lightbox-logo");
  if (logoImg && lightbox) {
    logoImg.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      lightbox.classList.add("attivo");
    });
  }

  // Effetto click con il Cuore ("Puff" animato ad ogni click sullo schermo)
  const creaEffettoCuore = (e) => {
    // Evita di spammare troppi cuori contemporaneamente
    if (document.querySelectorAll("span.cuore-puff").length > 8) return;

    const cuore = document.createElement("span");
    cuore.className = "cuore-puff";
    cuore.innerText = "❤️";
    cuore.style.position = "absolute";
    cuore.style.pointerEvents = "none";
    cuore.style.fontSize = "24px"; // Un po' più grande per visibilità
    cuore.style.zIndex = "10000";
    cuore.style.transition = "transform 1.8s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.8s ease-out";
    cuore.style.opacity = "1";
    cuore.style.transform = "translate(-50%, -50%) scale(1)";

    // Posiziona esattamente nel punto del click assoluto sulla pagina
    cuore.style.left = `${e.pageX}px`;
    cuore.style.top = `${e.pageY}px`;

    document.body.appendChild(cuore);

    // Animazione di salita verso l'alto ed espansione graduale
    requestAnimationFrame(() => {
      cuore.style.transform = "translate(-50%, -120px) scale(3)";
      cuore.style.opacity = "0";
    });

    setTimeout(() => {
      cuore.remove();
    }, 1800);
  };

  document.addEventListener("click", creaEffettoCuore);

  // Listener del form di segnalazione lavoratore (Salva come approvato: false)
  const formSegnala = document.getElementById("form-segnala-lavoratore");
  if (formSegnala) {
    formSegnala.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nomeVal = document.getElementById("seg-nome").value.trim();
      const ruoloVal = document.getElementById("seg-ruolo").value.trim();
      const telVal = document.getElementById("seg-tel").value.trim();
      const cittaVal = document.getElementById("seg-citta").value.trim();
      
      // Controllo format Nome e Cognome
      const isRagioneSociale = /srl|s\.r\.l\.|srls|snc|s\.n\.c\.|sas|ditta|impresa/i.test(nomeVal);
      if (!isRagioneSociale && !nomeVal.includes(" ")) {
        if (!confirm("Hai inserito solo una parola nel nominativo. Si consiglia di inserire Nome e Cognome completi (es. Giuseppe Rossi) per dare maggior fiducia agli utenti. Vuoi procedere comunque?")) {
          return;
        }
      }
      
      const nuovoId = ARTIGIANI.length > 0 ? Math.max(...ARTIGIANI.map(a => a.id)) + 1 : 1;
      
      const nuovo = {
        id: nuovoId,
        nome: nomeVal,
        ruolo: ruoloVal,
        avatar: "❤️",
        citta: cittaVal,
        categoria: "altro", // L'admin imposterà la categoria esatta
        tipoHelper: "aiutante",
        prezzo: "Da concordare",
        biografia: `Segnalato dalla community come persona splendida e di fiducia. Ruolo: ${ruoloVal}.`,
        cuori: 5.0,
        recensioniCount: 0,
        approvato: false, // In attesa di approvazione dell'amministratore!
        promoGratis: true,
        contatti: {
          telefono: telVal,
          email: ""
        },
        recensioni: []
      };
      
      ARTIGIANI.push(nuovo);
      localStorage.setItem("cercalo_database", JSON.stringify(ARTIGIANI));
      
      formSegnala.reset();
      alert("Grazie di cuore per la segnalazione! Verificheremo i contatti della persona indicata ed approveremo il suo profilo al più presto nell'elenco pubblico.");
      
      // Se l'utente si trova in modalità Admin, ricarica la lista per mostrare il pendente
      if (typeof renderWorkersList === "function") {
        renderWorkersList();
      }
    });
  }
});

// Registrazione del Service Worker per la Progressive Web App (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registrato con successo!', reg))
      .catch(err => console.error('Errore registrazione Service Worker:', err));
  });
}
