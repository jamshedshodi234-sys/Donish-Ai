# Дастури ҳалли саҳифаи сафед ва хатогии «Some checks were not successful» дар GitHub Pages

## ❓ 1. Хатогии «Some checks were not successful deploy to GitHub pages / build-and-deploy (push)» аз чӣ буд?

Ин хатогӣ ҳангоми иҷрои GitHub Actions бо ду сабаб рух медиҳад:

1. **Сабаби асосӣ: Дар танзимоти GitHub ҳанӯз «GitHub Actions» интихоб нашудааст**  
   GitHub аз рӯи амният намегузорад, ки скрипти автоматӣ саҳифаро нашр кунад, то даме ки соҳиби репозиторий ба ин иҷозат надиҳад. То интихоб накардани «GitHub Actions», хатогии `403 / Resource not accessible by integration` мебарояд.
2. **Ихтилофи бастаҳои npm (ERESOLVE peer dependency)**  
   Дар сервери Linux-и GitHub ҳангоми `npm install` бархӯрди версияҳои `esbuild` ва `vite` ба вуҷуд омада буд.

### ✅ Мо чиро ислоҳ намудем?
- Дар файли `.github/workflows/deploy.yml` фармони `npm install --legacy-peer-deps` илова шуд ва кэши сахтгирона хориҷ карда шуд.
- Файли `.npmrc` бо танзимоти `legacy-peer-deps=true` сохта шуд.
- Дар `package.json` версияи `esbuild` ба `^0.28.2` нав карда шуд, ки бо `vite@8.3.0` 100% мувофиқ аст.
- Файли `package-lock.json` тавлид ва омода гардид.

---

## 🚀 Чӣ тавр дар 2 қадам хатогиро сабз (муваффақ) кунем?

### Қадами 1: Дар танзимот фаъол кардани GitHub Actions
1. Ба саҳифаи лоиҳаи худ дар **GitHub** ворид шавед.
2. Дар боло ба тугмаи **Settings** (Танзимот) клик кунед.
3. Аз менюи тарафи чап ба қисмати **Pages** ворид шавед.
4. Дар зери навиштаҷоти **Build and deployment**:
   - Дар майдони **Source** менюро кушоед ва ба ҷои *"Deploy from a branch"*, ҳатман **`GitHub Actions`**-ро интихоб кунед.

### Қадами 2: Аз нав санҷидан (Re-run)
1. Ба бахши **Actions** (дар болои репозиторий) гузаред.
2. Ба рӯи ҳамон сатри хатогии сурх (Failed workflow) клик кунед.
3. Тугмаи тарафи рост — **«Re-run all jobs»**-ро пахш намоед (ё ба коди худ commit/push кунед).
4. Шумо мебинед, ки раванд комилан **сабз (Success)** мешавад ва истиноди сомона пайдо мегардад!

---

## ❓ 2. Чаро пештар саҳифа сафед (blank page) мешуд?

Дар лоиҳаҳои **React + Vite**, дар папкаи асосӣ файли `index.html` чунин аст:
```html
<script type="module" src="/src/main.tsx"></script>
```
Браузерҳо наметавонанд файли `.tsx`-ро мустақиман бе компилятсия бихонанд. Вақте GitHub Actions кор мекунад, он аввал `npm run build` карда, файлҳои компилятсияшудаи JavaScript-ро дар папкаи `dist/` омода месозад ва маҳз ҳамонро нашр мекунад. Аз ин рӯ дигар саҳифа ҳаргиз сафед нахоҳад шуд!

---

## 💡 Усули алтернативӣ (бе GitHub Actions)
Агар бо ягон сабаб аз Actions истифода бурдан нахоҳед:
1. Дар компютери худ фармонро занед:
   ```bash
   npm run deploy
   ```
2. Дар GitHub ба **Settings ➔ Pages** рафта:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/(root)`
   - Пахш кардани **Save**.
