import './styles.scss';

export const Header = () => {
  return (
    <header className="header-container">
      <form>
        <input
          placeholder="Type a task"
        />
        <button type="submit">Criar</button>
      </form>
    </header>
  )
}