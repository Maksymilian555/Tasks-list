{
    const tasks = [
        {
            content: "zadanie1",
            done: false,
        },
        {
            content: "zadanie2",
            done: true,
        },
    ];

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent
        });

        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <button class="js-done tasksList__doneButton">${task.done ? "✔" : ""}</button>

               <li
                 class="tasksList__listItem${task.done ? " tasksList__listItem--done" : ""}"
               >   ${task.content} </li>
               
               <button class="js-remove tasksList__removeButton">🗑</button>       
               `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        document.querySelector(".js-newTask").focus();
    }



    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}