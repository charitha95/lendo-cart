import classNames from "./style.module.scss";

function Table() {
  const headers = ["Product", "Price", "Quantity", "Total", "Action"];
  const products = [
    { name: "name here", price: 50, quantity: 5 },
    { name: "name here looong", price: 540, quantity: 4 },
    { name: "here its name", price: 550, quantity: 1 },
    { name: "my name is", price: 10, quantity: 1 },
    { name: "yes this is my name too long ", price: 75, quantity: 2 }
  ];
  return (
    <table className={classNames.table}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price * item.quantity}</td>
            <td>x</td>
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
        <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr>
      </tfoot> */}
    </table>
  );
}

export default Table;
