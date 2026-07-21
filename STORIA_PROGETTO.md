# Memoria Storica del Progetto: Cercalo

Questo documento raccoglie l'evoluzione del progetto **Cercalo**, le decisioni prese, i cambiamenti strutturali e le scelte di design approvate, per conservare una traccia storica del lavoro svolto.

---

## 📁 Galleria Storica dei Loghi
Tutte le varianti grafiche discusse sono salvate localmente nella cartella del progetto: `storia_loghi/` e `Loghi/`

1.  **V1: Pesca & Croce (Stile Retrò)**: [logo_v1_pesca_croce.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v1_pesca_croce.jpg)
2.  **V2: Lente & Italia (Minimalist)**: [logo_v2_minimal_italia.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v2_minimal_italia.jpg)
3.  **V3: Lente a Cuore & Tipografia Apple**: [logo_v3_cuore_italia_minimal.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v3_cuore_italia_minimal.jpg)
4.  **V4: Lente Tonda & Cuore Esterno**: [logo_v4_cuore_esterno.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v4_cuore_esterno.jpg)
5.  **V5: Lente a Cuore & Quadrato Esterno**: [logo_v5_lente_cuore_quadrato.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v5_lente_cuore_quadrato.jpg)
6.  **V6: Cuore Lente & Scritta interna al Quadrato**: [logo_v6_cuore_lente_quadrato_testo.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v6_cuore_lente_quadrato_testo.jpg)
7.  **V7: Luxury Gold & Dark Mode**: [logo_v7_luxury_gold_dark.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v7_luxury_gold_dark.jpg)
8.  **V8: Verde Salvia & Oro + Stella a Capo d'Orlando**: [logo_v8_verde_salvia_oro.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v8_verde_salvia_oro.jpg)
9.  **V9: Pesca Terracotta & Crema**: [logo_v9_pesca_crema.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v9_pesca_crema.jpg)
10. **V10: Grigio Verde & Bianco (Pillowy/Bombato)**: [logo_v10_grigio_verde_bianco.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v10_grigio_verde_bianco.jpg)
11. **V11: Crema Argilla & Antracite**: [logo_v11_crema_argilla.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v11_crema_argilla.jpg)
12. **V12: Grigio-Verde con Cuore e Scritta V11**: [logo_v12_modificata_v10.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v12_modificata_v10.jpg)
13. **V13: Terracotta con Cuore e Scritta V11**: [logo_v13_terracotta.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v13_terracotta.jpg)
14. **V14: Terracotta con Manico V10 e Cuore V11**: [logo_v14_terracotta_definitivo.jpg](file:///Users/sollimac/Desktop/Cercalo/storia_loghi/logo_v14_terracotta_definitivo.jpg)
15. **V15: Loghi Materici Originali (Marmo, Lava, Terracotta) [Nuova Direzione]**: 
    *   *Marmo Siciliano (Beige)*: [Gemini_Generated_Image_6jj2av6jj2av6jj2.png](file:///Users/sollimac/Desktop/Cercalo/Loghi/Gemini_Generated_Image_6jj2av6jj2av6jj2.png)
    *   *Pietra Lavica (Nera)*: [Gemini_Generated_Image_69it9069it9069it.png](file:///Users/sollimac/Desktop/Cercalo/Loghi/Gemini_Generated_Image_69it9069it9069it.png)
    *   *Terracotta (Mattonella Orange) [Selezionato]*: [logo_terracotta_scontornato.png](file:///Users/sollimac/Desktop/Cercalo/Loghi/logo_terracotta_scontornato.png) (scontornata e resa trasparente per il sito).

---

## 📅 Cronologia dello Sviluppo

### 🔴 16 Luglio 2026 - Avvio e Analisi Trello
*   **Obiettivo**: Recuperare i dati strutturati della bacheca Trello "Cercalo" per impostare il sito.
*   **Prima Bozza del Sito**: Creati `index.html`, `index.css` e `index.js` con una barra di ricerca e i profili mock basati sulla bacheca Trello.

---

### 🟢 17 Luglio 2026 (Mattina) - Evoluzione Spirituale e Strutturale
*   **Rimozione del Numero Verde**: Si è deciso di rimuoverlo in questa fase iniziale per concentrarsi sul web.
*   **Introduzione delle Categorie di Aiuto**:
    *   **Aiutante di Quartiere (Senza Partita IVA)**: Offerta libera (*"un pensiero per il suo aiuto"*).
    *   **Professionista (Con Partita IVA)**: Tariffe oneste.

---

### 🎨 17 Luglio 2026 (Pomeriggio) - Studio dei Concept del Logo (V1 - V14)
*   Sviluppate diverse varianti per unire la lente, la mappa d'Italia, il cuore e la scritta CERCALO in stile minimal ed elegante.

---

### 🧱 19 Luglio 2026 - Nuova Identità Materica Nazionale & Terracotta Ufficiale
Il fondatore ha introdotto un'idea straordinaria: **utilizzare un materiale tipico locale per il logo di ciascuna nazione** in cui il portale verrà attivato (es. terracotta per l'Italia, marmi siciliani locali, pietra lavica, ecc.).

*   **I Loghi Caricati**: Il fondatore ha ricavato e inserito 3 immagini di loghi materici nella cartella `Loghi/` (Marmo Siciliano, Pietra Lavica, Terracotta).
*   **La Scelta**: Per la versione italiana si parte con la **Terracotta**.
*   **Operazioni Eseguite**:
    1.  **Scontornamento**: Tramite uno script in Python, la mattonella in terracotta è stata scontornata perfettamente (eliminando lo sfondo cartaceo e rendendolo trasparente) e salvata come `logo_terracotta_scontornato.png`.
    2.  **Logo Ufficiale**: L'SVG del sito è stato sostituito con l'immagine reale della mattonella in terracotta per renderla l'elemento distintivo.
    3.  **Color Palette di Sito**: Tutto il foglio di stile `index.css` è stato rimodellato per rispecchiare i colori caldi della mattonella (terracotta `#C86A51`, crema caldo `#F7F3EF` e scritte in antracite/marrone caldo `#3C322E`).
    4.  **Responsive**: Assicurato il layout perfetto del logo sia su desktop che su mobile (dove il menù si impila verticalmente senza schiacciare l'immagine).
