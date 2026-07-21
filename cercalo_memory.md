# 🧠 Cercalo - File di Memoria Locale (mAImory)

Questo file raccoglie le specifiche tecniche, l'architettura dei dati e le logiche di funzionamento di **Cercalo** per agevolare lo sviluppo futuro del progetto.

---

## 🗄️ 1. Architettura dei Dati (Database)

Il database è salvato sul client dell'utente all'interno della memoria **`localStorage`** con chiave **`cercalo_database`**.

### Schema di un Profilo Artigiano / Tuttofare:
```json
{
  "id": 1,
  "nome": "Mario R.",
  "ruolo": "Tuttofare Gentile",
  "avatar": "👨‍🔧",
  "citta": "Milano",
  "categoria": "tuttofare",
  "tipoHelper": "aiutante", // "aiutante" (offerta libera) o "professionista" (con P.IVA)
  "prezzo": "Un pensiero per l'aiuto (Offerta libera)",
  "biografia": "Faccio piccoli lavoretti di riparazione in casa dal 1995...",
  "cuori": 5.0,
  "recensioniCount": 14,
  "approvato": true, // Controlla la visibilità pubblica nel portale
  "promoGratis": true, // Attiva il badge "Primo anno gratis"
  "contatti": {
    "telefono": "333 1234567",
    "email": "mario@example.com"
  },
  "recensioni": [
    {
      "utente": "Laura B.",
      "cuori": 5,
      "testo": "Persona fantastica e di cuore, consigliatissimo!",
      "data": "15/07/2026"
    }
  ]
}
```

---

## 🔑 2. Sistema di Autenticazione e Accessi
*   **Accesso Utente Comune**: Stato salvato in `localStorage` sotto la chiave `cercalo_registrato` (`"true"` o `"false"`). Se l'utente è registrato e loggato, i dettagli di contatto telefonici/email degli artigiani vengono mostrati in chiaro, altrimenti si apre il modal di registrazione.
*   **Accesso Amministratore**: L'Area Riservata (`admin.html`) è protetta da un prompt di inserimento codice statico impostato a: **`cercalo2026`**.

---

## 📂 3. Struttura delle Pagine del Portale
1.  **`index.html`** / **`index.js`**: Home page e bacheca. Gestisce i filtri per parole chiave, categorie (anche dinamiche inserite dall'admin) e città. Include la intro animata con sfondo satinato sfocato e il nastro watermark "FAC-SIMILE" per i profili di prova.
2.  **`admin.html`**: Pannello di amministrazione per il vaglio preventivo. Divide i profili in "Profili da Approvare" (segnalati dagli utenti) e "Profili Attivi" (con possibilità di modifica dei dati e cancellazione).
3.  **`chi-siamo.html`**: Pagina che descrive i valori di Cercalo ( Terracotta), la gratuità per il primo anno e introduce il concetto del *Baratto Solidale*.
4.  **`legal.html`**: Contiene i Termini e Condizioni, l'informativa Privacy conforme al GDPR e la Cookie Policy (che chiarisce l'utilizzo di soli cookie tecnici necessari).

---

## 📱 4. Configurazione Mobile App (PWA)
*   **`manifest.json`**: Configura l'installabilità su smartphone con icona in terracotta ed avvio in modalità app nativa (*standalone*).
*   **`sw.js`**: Service Worker che garantisce il caricamento delle risorse offline e gestisce la cache di base dell'applicazione per la stabilità in caso di blackout di rete.
