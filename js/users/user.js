getCurrentUser = () => {
  userService
    .getCurrentUser()
    .then(updateUserProfilePage)
    .catch(onGetCurrentErr);
};

onGetCurrentErr = () => {
  location.replace("login.html");
  $("#CurrentUserName").text("Not Signed In");
};

updateUserProfilePage = (response) => {
  let cuid = response.item.id;
  let currentUser = response.item.name;
  $("#CurrentUserName").text(currentUser);
  userService
    .getCurrentUserById(cuid)
    .then(console.log("SUCESS MAN!"))
    .then(setImg)
    .catch(updateProfileErr);
};

setImg = (response) => {
  $("#userImg").attr("src", response.item.avatarUrl);
};

updateProfileErr = (err) => $("#userImg").text(`Error: ${err}`);

logOut = (response) => {
  userService.logOutSession().then(onLogoutSuccess).catch();
};

onLogoutSuccess = () => {
  location.replace("login.html");
};
