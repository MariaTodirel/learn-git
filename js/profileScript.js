let edit = document.getElementById("EditProfile_Container");
let profile = document.getElementById("Profile");
let settings = document.getElementById("Settings_Container");
let password = document.getElementById("EditPassword_Container");

let profileContainers = [profile, edit, settings, password];

function openProfileContainer(container) {
    for (let i = 0; i < 4; i++)
        if (i !== container)
            profileContainers[i].style.display = "none";
    profileContainers[container].style.display = "block";
}