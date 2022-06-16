// 로딩 시 사용자 정보를 가져오는 함수
async function getUser() {
  try {
    const res = await axios.get("/users");
    const users = res.data;
    const list = document.getElementById("list");
    list.innerHTML = "";

    // 사용자마다 반복적으로 화면 표시 및 이벤트 연결

    Object.keys(users).map((key) => {
      console.log(key); // 사용자 이름마다 다른 key 설정 => 최종적으로 {1655063629123: '테스트'}
      const userDiv = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = users[key];
      const edit = document.createElement("button");
      edit.textContent = "수정";
      edit.addEventListener("click", async () => {
        const name = prompt("바꿀 이름을 입력하세요");
        if (!name) return alert("이름을 반드시 입력하세요!");
        try {
          await axios.put("/user/" + key, { name });
          getUser();
        } catch (err) {
          console.error(err);
        }
      });
      const remove = document.createElement("button");
      remove.textContent = "삭제";
      remove.addEventListener("click", async () => {
        try {
          await axios.delete("/user/" + key);
          getUser();
        } catch (err) {
          console.error(err);
        }
      });
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    });
  } catch (err) {
    console.error(err);
  }
}

window.onload = getUser; // 화면 로딩시 getUser호출

// form 제출시 실행

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.userName.value;
  console.log(name);
  if (!name) return alert("이름을 반드시 입력하세요!");
  try {
    await axios.post("/user", { name });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.userName.value = "";
});