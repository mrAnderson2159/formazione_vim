# Introduzione

Git è uno strumento di controllo di versione distribuito, utilizzato per tenere traccia delle modifiche ai file e coordinare il lavoro tra più persone.

La sincronizzazione si basa sull'utilizzo di **istantanee** (_snapshot_) dei file, che vengono salvate in un **repository**.

### Funzionamento

-   **Working Directory**: è la cartella in cui si sta lavorando.
-   **Staging Area**: è l'area in cui vengono preparate le modifiche da salvare.
-   **Repository**: è il database in cui vengono salvate le istantanee.

Una istantanea è composta dai file che sono stati modificati rispetto alla precedente e da puntatori ai file invariati.
La repository si trova all'interno della cartella `.git`, che contiene tutte le informazioni necessarie.

# Git Bash

Su Windows, Git Bash è una shell che permette di utilizzare i comandi di Git da riga di comando. È possibile aprirla cliccando con il tasto destro in una cartella e selezionando _Git Bash Here_.

> I comandi di Git Bash sono simili a quelli di Linux.

### Comandi utili

-   `ll`: elenca i file e le cartelle.

# Configurazione

Prima di iniziare a utilizzare Git, è necessario configurare il proprio
nome e indirizzo email. Questi dati verranno utilizzati per identificare
i commit.

-   `git config --global user.name "Nome Cognome"`
-   `git config --global user.email "email@esempio.com"`
-   `git config --list`: mostra la configurazione attuale
-   `git config --global --unset user.email`: rimuove un'impostazione
-   `git config --global --edit`: modifica il file di configurazione

# Comandi base

-   `git help`: mostra i comandi
-   `git init`: inizializza una nuova repository
-   `git status`: mostra lo stato della working directory
-   `git add <file>`: aggiunge un file alla staging area
-   `git commit -m "Messaggio"`: salva le modifiche
-   `git log`: mostra la cronologia dei commit

## git add

`git add` aggiunge file alla staging area.

-   `git add .`: aggiunge tutti i file modificati
-   `git add -A`: aggiunge anche i file eliminati
-   `git add -u`: solo modificati o eliminati
-   `git add <file>`: specifico file
-   `git add <cartella>`: tutti i file della cartella

> Aggiungere un file alla staging area non include le modifiche future!

Esempio:

```bash
git add file.txt
git commit -m "Aggiunto file.txt"
```

## git commit

-   `git commit -m "Messaggio"`: salva le modifiche
-   `git commit -am "Messaggio"`: aggiunge e salva file modificati
-   `git commit --amend`: modifica l'ultimo commit
-   `git commit -v`: mostra le modifiche nel messaggio

## git log

-   `git log --oneline`: una riga per commit
-   `git log --stat`: statistiche dei file
-   `git log --graph --oneline --all`: grafo dei commit
-   `git log --author="Nome"`: commit di un autore
-   `git log --grep="messaggio"`: cerca per messaggio

# git commit --amend

`git commit --amend` modifica l'ultimo commit.

Puoi anche cambiarne solo il messaggio:

```bash
git commit --amend -m "Nuovo messaggio"
```

# git restore

-   `git restore --staged <file>`: rimuove un file dalla staging area
-   `git restore <file>`: ripristina il file all'ultimo commit

# git diff

-   `git diff`: differenze tra working directory e staging
-   `git diff --staged`: tra staging e ultimo commit
-   `git diff <commit1> <commit2>`: tra due commit
-   `git diff <file>`: differenze per un file

# Riferimenti relativi

Puoi usare `git checkout` o `git switch` per passare a branch o commit specifici.

-   `git checkout HEAD^`: padre di HEAD
-   `git checkout HEAD^^`: nonno di HEAD
-   `git checkout HEAD~2`: antenato di due livelli

# Spostamento

-   `git branch -f <branch> <commit>`: sposta il branch
-   `git checkout <commit>`: sposta HEAD

# Annullare modifiche: `git reset` vs `git revert`

## `git reset`

Sposta il branch a un commit precedente, cancellando la cronologia seguente:

```bash
git reset --hard HEAD^
```

> ⚠️ Attenzione: non usare su branch condivisi!

## `git revert`

Crea un nuovo commit che annulla uno precedente:

```bash
git revert <hash_commit>
```

✅ Sicuro per ambienti collaborativi.

| Comando      | Effetto                                       | Riscrive la storia? |
| ------------ | --------------------------------------------- | ------------------- |
| `git reset`  | Elimina commit                                | Sì                  |
| `git revert` | Aggiunge un commit che annulla uno precedente | No                  |
