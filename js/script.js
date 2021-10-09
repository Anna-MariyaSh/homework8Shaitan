let ageUser = prompt("Укажите ваш возраст");
if (ageUser!==null&&!isNaN(ageUser)){
  let townUser = prompt("Укажите город в котороим вы живете");
  switch (townUser) {
    case "Киев": townUser = "Ты живешь в столице Украины"; break;
    case "Москва": townUser = "Ты живешь в столице Росси"; break;
    case "Минск": townUser = "Ты живешь в столице Белорусии"; break;
    default: townUser = `Ты живешь в городе ${townUser}`
  }
  if (townUser!==null) {
    let sportUser = prompt("Укажите ваш любимый вид спорта");
    switch (sportUser) {
      case "футбол": sportUser = "Круто! Ты хочешь стать как Месси?"; break;
      case "каратэ": sportUser = "Круто! Ты хочешь стать как Канадзава?"; break;
      case "бокс": sportUser = "Круто! Ты хочешь стать как Ломаченко?"; break;
      default: sportUser = `${sportUser} это круто!`;
    }
    if (sportUser!==null) {
      alert(` Тебе ${ageUser} лет \n ${townUser} \n ${sportUser}`);
    }
  } else {
    alert("Жаль что вы не можете ввести свой город")
  }
} else {
  alert("Жаль что вы не можете ввести свой возраст")
}
