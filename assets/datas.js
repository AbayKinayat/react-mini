const headerNavList = [
  {
    id: 1,
    href: "https://github.com/AbayKinayat",
    text: "Github"
  },
  {
    id: 2,
    href: "tel:87054786901",
    text: "Phone"
  },
  {
    id: 3,
    href: "mailto:kinayat.abay@mail.ru",
    text: "Mail"
  }
]
if (Object.freeze)
  Object.freeze(headerNavList);

function getTasksFromLocalStorage() {
  try {
    const taskLocalStorage = localStorage.getItem("tasks");
    const tasks = JSON.parse(taskLocalStorage);
    if (!Array.isArray(tasks)) {
      return []
    }

    return taskLocalStorage;
  } catch (e) {
    console.log(e.message);
    return [];
  }
}

const globalTasks = getTasksFromLocalStorage();
Object.freeze(globalTasks);

