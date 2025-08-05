import { useFetch } from "../hooks/useFetch.js";

const UsuariosComponents = () => {
  const { data, isloading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      {isloading ? (
        <h4>Cargando</h4>
      ) : errors ? (
        <p>Ha ocurrido un error: {errors.message}</p>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">wedsite</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsuariosComponents;
