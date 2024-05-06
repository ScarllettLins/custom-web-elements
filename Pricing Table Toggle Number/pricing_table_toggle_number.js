let currentNumber = 1;

const priceMappingMensal = {
    1: 198,
    2: 296,
    3: 394,
    4: 492,
    5: 590,
    6: 688,
    7: 786,
    8: 884,
    9: 982,
    10: 1080,
};

const priceMappingMensalPro = {
    1: 1980,
    2: 2960,
    3: 3940,
    4: 4920,
    5: 5900,
    6: 6880,
    7: 7860,
    8: 8840,
    9: 9820,
    10: 10800,
};

const priceMappingAnual = {
    1: 1788,
    2: 1796,
    3: 1804,
    4: 1812,
    5: 1820,
    6: 1828,
    7: 1836,
    8: 1844,
    9: 1852,
    10: 1860,
};

const priceMappingAnualPro = {
    1: 17880,
    2: 17960,
    3: 18040,
    4: 18120,
    5: 18200,
    6: 18280,
    7: 18360,
    8: 18440,
    9: 18520,
    10: 18600,
};

const economiaAnualBasic = {
    1: 17,
    2: 18,
    3: 19,
    4: 20,
    5: 21,
    6: 22,
    7: 23,
    8: 24,
    9: 25,
    10: 26,
};

const economiaAnualPro = {
    1: 170,
    2: 180,
    3: 190,
    4: 200,
    5: 210,
    6: 220,
    7: 230,
    8: 240,
    9: 250,
    10: 260,
};


const linkMensal = {
    1: 'https://www.asmarte.com/mensal/1',
    2: 'https://www.asmarte.com/mensal/2',
    3: 'https://www.asmarte.com/mensal/3',
    4: 'https://www.asmarte.com/mensal/4',
    5: 'https://www.asmarte.com/mensal/5',
    6: 'https://www.asmarte.com/mensal/6',
    7: 'https://www.asmarte.com/mensal/7',
    8: 'https://www.asmarte.com/mensal/8',
    9: 'https://www.asmarte.com/mensal/9',
    10: 'https://www.asmarte.com/mensal/10',
};

const linkAnual = {
    1: 'https://www.asmarte.com/anual/1',
    2: 'https://www.asmarte.com/anual/2',
    3: 'https://www.asmarte.com/anual/3',
    4: 'https://www.asmarte.com/anual/4',
    5: 'https://www.asmarte.com/anual/5',
    6: 'https://www.asmarte.com/anual/6',
    7: 'https://www.asmarte.com/anual/7',
    8: 'https://www.asmarte.com/anual/8',
    9: 'https://www.asmarte.com/anual/9',
    10: 'https://www.asmarte.com/anual/10',
};

const linkMensalPro = {
    1: 'https://www.asmarte.com/mensal/pro/1',
    2: 'https://www.asmarte.com/mensal/pro/2',
    3: 'https://www.asmarte.com/mensal/pro/3',
    4: 'https://www.asmarte.com/mensal/pro/4',
    5: 'https://www.asmarte.com/mensal/pro/5',
    6: 'https://www.asmarte.com/mensal/pro/6',
    7: 'https://www.asmarte.com/mensal/pro/7',
    8: 'https://www.asmarte.com/mensal/pro/8',
    9: 'https://www.asmarte.com/mensal/pro/9',
    10: 'https://www.asmarte.com/mensal/pro/10',
};

const linkAnualPro = {
    1: 'https://www.asmarte.com/anual/pro/1',
    2: 'https://www.asmarte.com/anual/pro/2',
    3: 'https://www.asmarte.com/anual/pro/3',
    4: 'https://www.asmarte.com/anual/pro/4',
    5: 'https://www.asmarte.com/anual/pro/5',
    6: 'https://www.asmarte.com/anual/pro/6',
    7: 'https://www.asmarte.com/anual/pro/7',
    8: 'https://www.asmarte.com/anual/pro/8',
    9: 'https://www.asmarte.com/anual/pro/9',
    10: 'https://www.asmarte.com/anual/pro/10',
};



function updateNumber() {
    document.getElementById('number').textContent = currentNumber;
}

function updatePricing() {
    const selectedNumber = currentNumber;
    const isMonthly = document.querySelector('.monthly-toggle').classList.contains('active');

    if (isMonthly) {
        document.querySelectorAll('.price-number-mensal').forEach((element) => {
            element.textContent = priceMappingMensal[selectedNumber];
        });

        document.querySelectorAll('.price-number-anual').forEach((element) => {
            element.textContent = '';
        });

        document.querySelector('.price-number-mensal-pro').textContent = priceMappingMensalPro[selectedNumber];
        document.querySelector('.economia-anual-basic').textContent = `R$ ${economiaAnualBasic[selectedNumber]} de economia`;

        document.querySelector('.price-number-anual-pro').textContent = '';
        document.querySelector('.economia-anual-pro').textContent = '';
        document.getElementById('buyLinkMensal').href = linkMensal[selectedNumber];
        document.getElementById('buyLinkAnual').href = linkAnual[selectedNumber];
        document.getElementById('buyLinkMensalPro').href = linkMensalPro[selectedNumber];
        document.getElementById('buyLinkAnualPro').href = linkAnualPro[selectedNumber];
    } else {
        document.querySelectorAll('.price-number-anual').forEach((element) => {
            element.textContent = priceMappingAnual[selectedNumber];
        });

        document.querySelectorAll('.price-number-mensal').forEach((element) => {
            element.textContent = '';
        });

        document.querySelector('.price-number-mensal-pro').textContent = '';
        document.querySelector('.economia-anual-basic').textContent = `R$ ${economiaAnualBasic[selectedNumber]} de economia`;

        document.querySelector('.price-number-anual-pro').textContent = priceMappingAnualPro[selectedNumber];
        document.querySelector('.economia-anual-pro').textContent = `R$ ${economiaAnualPro[selectedNumber]} de economia`;
        document.getElementById('buyLinkMensal').href = linkMensal[selectedNumber];
        document.getElementById('buyLinkAnual').href = linkAnual[selectedNumber];
        document.getElementById('buyLinkAnualPro').href = linkAnualPro[selectedNumber];
    }

    if (currentNumber > 10) {
        document.querySelector('.left-table-mensal').style.display = 'none';
        document.querySelector('.left-table-anual').style.display = 'none';
    } else {
        document.querySelector('.left-table-mensal').style.display = 'block';
        document.querySelector('.left-table-anual').style.display = 'block';
    }
}


function updateCount(value) {
    currentNumber += value;
    if (currentNumber < 1) {
        currentNumber = 1;
    } else if (currentNumber > 10) {
        currentNumber = 10;
    }
    updateNumber();
    updatePricing();
}

function togglePlan(plan) {
        if (plan === 'monthly') {
            document.querySelector('.monthly-toggle').classList.add('active');
            document.querySelector('.annual-toggle').classList.remove('active');
            document.querySelector('.pricing-container-mensal').style.display = 'flex';
            document.querySelector('.pricing-container-anual').style.display = 'none';
        } else if (plan === 'annual') {
            document.querySelector('.annual-toggle').classList.add('active');
            document.querySelector('.monthly-toggle').classList.remove('active');
            document.querySelector('.pricing-container-mensal').style.display = 'none';
            document.querySelector('.pricing-container-anual').style.display = 'flex';
        }
        updatePricing();
    }

document.getElementById('buyLinkMensal').addEventListener('click', function (event) {
    const selectedNumber = currentNumber;
    const link = linkMensal[selectedNumber];
    window.location.href = link;
});



updateNumber();
updatePricing();

        
        document.querySelector('.monthly-toggle').classList.add('active');
        document.querySelector('.annual-toggle').classList.remove('active');

        
        togglePlan('monthly');


        window.addEventListener("contextmenu", function (e) {
            e.preventDefault();
          });

          window.addEventListener("keydown", function (e) {
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
              e.preventDefault(); // Impede a abertura do console (Ctrl+Shift+I)
            }
          });