# psqt

<img src="./logo.png" alt="psqt logo" width="200"/>

Nástroj pro generování PHP data objektů  z SQL dotazů.
 - skenuje php soubory a pomocí statické analýzi SQL dotazů a schématu databáze generuje DTO
 - ke schématu přistupuje pomocí přímého připojení do DB
 - generování data objektů lze detailně konfigurovat v psqt.yaml
 - watch režim, který při změně souboru přegeneruje DTO

<video id="myVideo" autoplay muted loop controls width="640" height="360">
  <source src="example.webm" type="video/webm">
  Váš prohlížeč nepodporuje přehrávání videa.
</video>

### Instalce a spuštění
- Přes composer balíček
```
composer require filipeus-san/psqt
./vendor/bin/psqt
```

- Přes docker
```
docker run --rm filipeus513/psqt:latest psqt
```

## Inicializace
Vytvoří se configurační soubor pro psqt
- Přes composer balíček
```
./vendor/bin/psqt init
```

### Nápověda - příkazová řádka
- generování DTO

```
Usage: psqt generate [OPTIONS] --config <CONFIG>

Options:
  -f, --file <FILE>      
  -c, --config <CONFIG>  
  -h, --help  Print help
```

### 💡 Výhody použití DTO v PHP

Používání **DTO (Data Transfer Object)** přináší do PHP aplikací řadu výhod, zejména při práci s daty získanými z databáze:

##### ✅ Silná typová kontrola
- DTO třídy využívají **typové deklarace** (`string`, `int`, `DateTime`, apod.), což pomáhá odhalit chyby v době vývoje (ne až za běhu).
- IDE (např. PHPStorm, VSCode) dokážou díky typům nabídnout **automatické doplňování**, **refaktoring** a **statickou analýzu**.

##### ✅ Dokumentace samotným kódem
- Kód se stává **srozumitelnějším a samo-vysvětlujícím** – už ze samotné struktury DTO je jasné, jaká data dotaz vrací.
- Umožňuje jednoduše generovat dokumentaci pomocí nástrojů jako PHPStan nebo Psalm.

##### ✅ Stabilita API mezi vrstvami
- DTO vytvářejí jasné **smlouvy mezi vrstvami** aplikace (např. mezi databází a aplikační logikou).
- Umožňují **oddělit strukturu databáze od business logiky**, což je klíčové při refaktoringu nebo změnách v databázových schématech.

##### ✅ Testovatelnost a předvídatelnost
- DTO lze snadno **mockovat nebo vytvářet v testech**, protože nejsou závislé na databázi ani frameworku.
- Obsahují pouze data, žádné chování – to z nich dělá bezpečný a stabilní datový formát.

---

#### ⚠️ Historické problémy neotypovaného kódu

V legacy PHP projektech se často setkáváme s tzv. **"array hell"**, tedy kódem, který pracuje s daty jako s nestrukturovanými asociativními poli:

```php
$user = $db->fetch("SELECT * FROM users WHERE id = ?", [$id]);
echo $user['first_name']; // žádná garance, že klíč existuje nebo má správný typ
