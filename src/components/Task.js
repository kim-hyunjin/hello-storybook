import React from "react";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div>
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
