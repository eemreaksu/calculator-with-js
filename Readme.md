# 🧮 JavaScript Hesap Makinesi

Bu proje, **HTML + CSS + Vanilla JavaScript** kullanılarak geliştirilmiş basit ama işlevsel bir **hesap makinesi uygulamasıdır**.  
Amaç; JavaScript’te **state yönetimi**, **event handling** ve **grid layout** mantığını pratik ederek öğrenmektir.

---

## 🚀 Özellikler

- ➕ ➖ ✖️ ➗ Temel matematiksel işlemler
- 🔢 Ondalık sayı desteği
- 🔁 Zincirleme işlemler (örn: 5 + 3 × 2)
- 🧼 AC (Clear) ile sıfırlama
- 🎯 Tek event listener (event delegation)
- 📐 CSS Grid ile düzenli tuş yerleşimi
- 💡 Kullanıcı dostu arayüz

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5**
- **CSS3**
  - Grid Layout
  - Hover efektleri
- **JavaScript (Vanilla JS)**
  - DOM Manipülasyonu
  - Event Delegation
  - State Management

---

## 📁 Proje Yapısı

calculator/
│
├── index.html # HTML yapısı
├── styles.css # Tüm stil tanımlamaları
├── script.js # Hesap makinesi mantığı
└── README.md # Proje dokümantasyonu


---

## 🧠 JavaScript Mantığı (Özet)

Hesap makinesi aşağıdaki **state** değişkenleriyle çalışır:

- `displayValue` → Ekranda görünen değer
- `firstValue` → İlk girilen sayı
- `currentOperator` → Seçilen işlem (+ - * /)
- `waitingForSecondValue` → İkinci sayıya geçildi mi?

### 🔄 Akış Mantığı

1. Kullanıcı sayı girer
2. Operatör seçilir
3. İkinci sayı girilir
4. `=` ile işlem yapılır
5. Sonuç ekrana yazdırılır

Tüm tuşlar tek bir `click` event listener ile kontrol edilir (**event delegation**).

---

## 🎨 CSS Yapısı

- **CSS Grid** kullanılarak 4 sütunlu tuş düzeni oluşturuldu
- `=` tuşu grid üzerinde daha büyük alan kaplar
- Hover efektleri ile kullanıcı etkileşimi artırıldı
- Responsive merkezleme (`transform: translate(-50%, -50%)`)

---

## ▶️ Kurulum & Çalıştırma

1. Projeyi klonla:
   ```bash
   git clone https://github.com/kullanici-adi/calculator.git
