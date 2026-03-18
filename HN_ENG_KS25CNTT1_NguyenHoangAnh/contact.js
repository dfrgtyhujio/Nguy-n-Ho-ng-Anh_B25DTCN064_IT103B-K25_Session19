let contacts = [
    {
        name: "Nguyễn Văn An",
        phone: "0901234567",
        email: "nguyenvanan@email.com"
    }
];
let flag = -1;

function renderContacts() {
    let str = "";
    for (let i = 0; i < contacts.length; i++) {
        str += `<tr>
                    <td>${i + 1}</td>
                    <td>${contacts[i].name}</td>
                    <td>${contacts[i].phone}</td>
                    <td>${contacts[i].email}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn-edit" onclick="editContact(${i})">Sửa</button>
                            <button class="btn-delete" onclick="deleteContact(${i})">Xóa</button>
                        </div>
                    </td>
                </tr>`;
    }
    document.getElementById("contact-tbody").innerHTML = str;
}
renderContacts();


function addContact() {
    let inputName = document.getElementById("contact-name").value.trim();
    let inputPhone = document.getElementById("contact-phone").value.trim();
    let inputEmail = document.getElementById("contact-email").value.trim();


    if (inputName === "") {
        alert("Họ tên không được để trống!");
        return;
    }

    if (inputName.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
        return;
    }

    if (inputPhone === "") {
        alert("Số điện thoại không được để trống!");
        return;
    }

    if (inputPhone.length < 10 || (!inputPhone.startsWith("0") && !inputPhone.startsWith("+84"))) {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầu bằng 0) hoặc định dạng quốc tế (+84...)");
        return;
    }

    if (isNaN(inputPhone)) {
        alert("Số điện thoại phải là số");
        return;
    }

    if (inputEmail === "") {
        alert("Email không được để trống!");
        return;
    }

    if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
        alert("Email không hợp lệ!");
        return;
    }
    
    let newContact = {
        name: inputName,
        phone: inputPhone,
        email: inputEmail
    };

    if (flag == -1) {
        contacts.push(newContact);
        renderContacts();

    } else {
        contacts[flag] = {name: inputName, phone: inputPhone, email: inputEmail};
        renderContacts();
        flag = -1;
        document.getElementsByClassName("btn-add")[0].textContent = "Thêm";
    }
}



function deleteContact(index) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa liên hệ này?");
    if (confirmDelete) {
        contacts.splice(index, 1);
        renderContacts();
        alert("Xóa liên hệ thành công!");
    }
}

function editContact(index) {
    document.getElementById("contact-name").value = contacts[index].name;
    document.getElementById("contact-phone").value = contacts[index].phone;
    document.getElementById("contact-email").value = contacts[index].email;
    document.getElementsByClassName("btn-add")[0].textContent = "Cập nhật";
    flag = index;
}