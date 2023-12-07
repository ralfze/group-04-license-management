export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>License Management</h1>
        <nav>
          <ul>
            <li>
              <a href={`/customers`}>Customers</a>
            </li>
            <li>
              <a href={`/contracts`}>Contracts</a>
            </li>
            <li>
              <a href={`/instances`}>Instances</a>
            </li>
            <li>
              <a href={`/users`}>Users</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
