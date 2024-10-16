function isNumber(value) {
    const regex = /^[+-]?(\d+(\.\d+)?|\.\d+)$/; // số nguyên và số thập phân
    return regex.test(value);
}

document.getElementById('tính').addEventListener('click', function(){

    const num1String = (document.getElementById('num1').value);
    const num2String = (document.getElementById('num2').value);

    if (num1String.trim() === '' || num2String.trim() === '') {
        let numString = '';
        if (num1String.trim() === '' && num2String.trim() === '') {
            numString = 'Cả 2 số';
        }
        else if (num1String.trim() === '') {
            numString = 'Số thứ nhất';
        }
        else if (num2String.trim() === '') {
            numString = 'Số thứ hai';
        }

        document.getElementById('thông_báo').innerHTML = `Ô ${numString} đang để trống`;
        return;
    }
    
    if(!isNumber(num1String) || !isNumber(num2String)){
        let numString;
        if(!isNumber(num1String) && !isNumber(num2String)){
            numString = 'Cả 2 số';
        }
        else if(!isNumber(num1String)){
            numString = 'Số thứ nhất';
        }
        else if(!isNumber(num2String)){
            numString = 'Số thứ hai';
        }

        document.getElementById('thông_báo').innerHTML = `Giá trị nhập ở ô <span style="font-style: italic;">${numString}</span> không phải là số`;
        return;
    }

    const num1 = parseFloat(num1String);
    const num2 = parseFloat(num2String);

    const options = document.getElementsByName('chọn');
    let result = 0;
    let notChosen = 1;
    
    for(const option of options){
        if(option.checked && option.id == document.getElementById('Cộng').id){
            result = num1 + num2;
            notChosen = 0;
        }
        else if(option.checked && option.id == document.getElementById('Trừ').id){
            result = num1 - num2;
            notChosen = 0;
        }
        else if(option.checked && option.id == document.getElementById('Nhân').id){
            result = num1 * num2;
            notChosen = 0;
        }
        else if(option.checked && option.id == document.getElementById('Chia').id){
            result = num1 / num2;
            notChosen = 0;
        }
    }

    if(notChosen){
        document.getElementById('thông_báo').innerHTML = `Chưa chọn thao tác tính toán`;
        return;
    }

    document.getElementById('ketqua').value = result;

    document.getElementById('thông_báo').innerHTML = ``;

});