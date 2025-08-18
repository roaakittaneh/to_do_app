
    const input = document.getElementById('Input');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // دالة إنشاء مهمة جديدة (DOM Manipulation بالكامل)
    function addTask() {
      const taskText = input.value.trim();
      if (taskText === "") return;

      // إنشاء عناصر المهمة
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      const span = document.createElement('span');
      const deleteBtn = document.createElement('button');

      // إعداداتهم
      checkbox.type = "checkbox";
      checkbox.classList.add("task-check");

      span.textContent = taskText;

      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");

      // ترتيب العناصر داخل li
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      // إضافة المهمة للقائمة
      taskList.appendChild(li);

      input.value = "";
      input.focus();
    }

    // 📌 Click Event: إضافة مهمة
    addBtn.addEventListener('click', addTask);

    // 📌 Keyboard Event: Enter لإضافة مهمة
    input.addEventListener('keydown', function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });

    // 📌 Event Delegation (على UL)
    taskList.addEventListener('click', function(e) {
      // إكمال المهمة
      if (e.target.classList.contains('task-check')) {
        const span = e.target.nextElementSibling;
        span.classList.toggle('completed'); // classList.toggle
      }

      // حذف المهمة
      if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove(); // remove element dynamically
      }
    });
  