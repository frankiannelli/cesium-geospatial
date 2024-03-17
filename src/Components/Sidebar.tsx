import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={{ padding: '1em', borderRight: '1px solid gray' }}>
      <h2>Cesium Examples</h2>
      <nav>
        <ul>
          <li>
            <Link to="/entity">Pin Sydney</Link>
          </li>
          <li>
            <Link to="/camera-fly-to">Fly to Nearmap office</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
