exports.seed = function (knex) {
  return knex("tasks")
    .del()
    .then(function () {
      return knex("tasks").insert([
        {
          title: "Test1",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur.",
          completed: false,
        },
        {
          title: "Test2",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur.",
          completed: false,
        },
        {
          title: "Test3",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur.",
          completed: false,
        },
        {
          title: "Test4",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur.",
          completed: false,
        },
        {
          title: "Test5",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit consectetur.",
          completed: true,
        },
      ]);
    });
};
