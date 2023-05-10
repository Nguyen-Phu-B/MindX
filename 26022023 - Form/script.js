window.onload = () => {
    let $phoneNumber = document.getElementById('phone-first');
    let $emailInp = document.getElementById('email');
    let $passWord = document.getElementById

    $emailInp.onchange = () => {
        let emailVal = $emailInp.value;
        
        if (!isEmailValid(email)) alert (`Nhập lại Email`)
    }

    $phoneNumber.onchange = () => {
        let phoneNumberVal = $phoneNumber.value;
        
        if (isPhoneNumValid(phoneNumberVal) == false) {
            alert('Số điện thoại không hợp lệ')
        }
    }

    const isPhoneNumValid = (phoneNum) => {
        const regex = /^\+?\d{10,14}$/; // định dạng cho phép số điện thoại bắt đầu bằng "+" và từ 10 đến 14 chữ số
        return regex.test(phoneNum);
    }

    const isEmailValid = (email) => {
        return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
}