function CalculoData(){
    var today = new Date()
    let nascimento = new Date(2019,00,25)
    let numdias = Math.abs(today - nascimento);
    let diffDays = Math.ceil(numdias/ (1000 * 3600 * 24)); 
    document.getElementById("diascontagem").innerHTML = diffDays;
    return diffDays;
}


 CalculoData();

