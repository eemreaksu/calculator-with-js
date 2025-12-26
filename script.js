// Ekran (input) ve tuşlar alanı seçiliyor
const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

// Hesap makinesi state'leri
let displayValue = '0';              // Ekranda görünen değer
let firstValue = null;               // İlk girilen sayı
let currentOperator = null;          // Seçilen operatör (+ - * /)
let waitingForSecondValue = false;   // İkinci sayıya geçildi mi?

updateDisplay();

/**
 * Ekrandaki input değerini günceller
 */
function updateDisplay() {
    display.value = displayValue;
}

/**
 * Tuşlara basıldığında çalışır
 */
keys.addEventListener('click', (e) => {
    const button = e.target;

    // Button dışına tıklanırsa çık
    if (!button.matches('button')) return;

    const { value } = button;

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;

        case '.':
            inputDecimal();
            break;

        case 'clear':
            resetCalculator();
            break;

        default:
            inputNumber(value);
    }

    updateDisplay();
});

/**
 * Operatör (+ - * / =) işlemlerini yönetir
 */
function handleOperator(nextOperator) {
    const currentValue = parseFloat(displayValue);

    // Arka arkaya operatör basılırsa
    if (currentOperator && waitingForSecondValue) {
        currentOperator = nextOperator;
        return;
    }

    // İlk sayı henüz alınmadıysa
    if (firstValue === null) {
        firstValue = currentValue;
    } 
    // Daha önce operatör seçildiyse hesaplama yap
    else if (currentOperator) {
        const result = calculate(firstValue, currentValue, currentOperator);

        // Virgülden sonra çok uzamasın diye yuvarlama
        displayValue = String(Number(result.toFixed(7)));
        firstValue = result;
    }

    waitingForSecondValue = true;
    currentOperator = nextOperator;
}

/**
 * Gerçek matematiksel hesaplama
 */
function calculate(first, second, operator) {
    switch (operator) {
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return second === 0 ? 0 : first / second;
        default: return second;
    }
}

/**
 * Sayı tuşlarına basıldığında çalışır
 */
function inputNumber(number) {
    // Yeni sayıya geçilecekse ekran temizlenir
    if (waitingForSecondValue) {
        displayValue = number;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === '0'
            ? number
            : displayValue + number;
    }
}

/**
 * Ondalık sayı girişini kontrol eder
 */
function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

/**
 * Hesap makinesini tamamen sıfırlar
 */
function resetCalculator() {
    displayValue = '0';
    firstValue = null;
    currentOperator = null;
    waitingForSecondValue = false;
}
