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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li
                 class="tasksList__listItem${task.done ? " tasksList__listItem--done" : ""}"
               >
                 ${task.content}
               </li>
               `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}