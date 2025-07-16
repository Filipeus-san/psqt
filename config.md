### ⚙️ Konfigurace generátoru DTO

Soubor config.yaml slouží k nastavení generátoru PHP DTO tříd na základě SQL dotazů nebo databázového schématu.


#### 🔁 Ukázka konfigurace (YAML)

````
schema_source: "database" # database, migrations
database_url: "mysql://root:password@127.0.0.1:3306/db"

app_path: "./php"
save_path: "./php/dto"
namespace: "App"
sufix: "DTO"

property_visibility: "public"
declarate_property_constructor: false
is_constructor: false
type_hint: false
indent: "spaces" # spaces, tabs
end_line: "lf" # lf, crlf

enable_getters: false
enable_setters: false
enable_anotation_type: true

datetime_type: "string"
````


---

#### 📚 Zdroj schématu

| Klíč | Popis |
|------|------|
| `schema_source` | Zdroj schématu: `database` nebo `migrations`. Určuje, zda se struktura DTO generuje přímo z databáze, nebo z migračních souborů. |
| `database_url` | URL připojení k databázi ve formátu [DSN](https://en.wikipedia.org/wiki/Data_source_name), např. `mysql://root:password@127.0.0.1:3306/db`. |

---

#### 📁 Cesty a jmenný prostor

| Klíč | Popis |
|------|------|
| `app_path` | Cesta ke kořenovému adresáři aplikace. Slouží jako výchozí základ pro generaci tříd. |
| `save_path` | Cesta, kam budou ukládány vygenerované DTO třídy. |
| `namespace` | PHP jmenný prostor pro DTO třídy, např. `App\Dto`. |
| `sufix` | Přípona/sufix pro název DTO třídy (např. `UserDTO`). |

---

#### 🧱 Generování tříd

| Klíč | Popis |
|------|------|
| `property_visibility` | Viditelnost vlastností: `public`, `protected` nebo `private`. |
| `declarate_property_constructor` | Pokud je `true`, deklarují se vlastnosti v konstruktoru (`public function __construct(public int $id, ...)`). |
| `is_constructor` | Pokud je `true`, generuje se konstruktor pro inicializaci hodnot. |
| `type_hint` | Pokud je `true`, vlastnosti a parametry konstruktoru mají typové hinty (např. `int $id`). |
| `indent` | Typ odsazení: `spaces` nebo `tabs`. |
| `end_line` | Ukončení řádku: `lf` (Unix) nebo `crlf` (Windows). |

---

#### 🔧 Volby getterů a setterů

| Klíč | Popis |
|------|------|
| `enable_getters` | Pokud je `true`, generují se getter metody pro každou vlastnost. |
| `enable_setters` | Pokud je `true`, generují se setter metody pro každou vlastnost. |
| `enable_anotation_type` | Pokud je `true`, přidávají se typové anotace do PHPDoc komentářů (např. `@var int`). |

---

#### 🕒 Typ pro DateTime

| Klíč | Popis |
|------|------|
| `datetime_type` | Výstupní typ pro hodnoty typu `datetime`: např. `string`, `DateTimeImmutable`, `Carbon`, atd. |

---
