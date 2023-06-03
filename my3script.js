const calculateTemp = () => {
    const iTemp = document.getElementById('label-edit').value;

    const tp = document.getElementById('type');
    const valueT = type.options[tp.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueT == 'celsius') {
        document.getElementById("result").innerHTML = celToFah(iTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(iTemp) + "&#176; Celsius";
    }
}
