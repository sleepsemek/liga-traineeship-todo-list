export function TaskFilters() {
  return (
    <div className="filters">
      <label className="filters__label label label--inline">
        <input type="text" placeholder="Название задачи" className="filters__input input" />
        По названию
      </label>
      <label className="filters__label label label--inline">
        <input type="checkbox" className="filters__input input" />
        Только важные
      </label>
      <label className="filters__label label label--inline">
        <input type="checkbox" className="filters__input input" />
        Только выполненные
      </label>
    </div>
  );
}
