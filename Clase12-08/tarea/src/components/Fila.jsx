import React from 'react';

function Fila(props) {
  return (
      <div>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Categories</th>
                <th>Colors</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Categories</th>
                <th>Colors</th>
                <th>Stock</th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
                <td>
                    <ul>
                        <li>Category 01</li>
                        <li>Category 02</li>
                        <li>Category 03</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li><span class="text-danger">Red</span></li>
                        <li><span class="text-primary">Blue</span></li>
                        <li><span class="text-success">Green</span></li>
                    </ul>
                </td>
                <td>245</td>
            </tr>
            <tr>
                <td>Jane Doe</td>
                <td>Fullstack developer</td>
                <td>$320,800</td>
                <td>
                    <ul>
                        <li>Category 01</li>
                        <li>Category 02</li>
                        <li>Category 03</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li><span class="text-danger">Red</span></li>
                        <li><span class="text-primary">Blue</span></li>
                        <li><span class="text-success">Green</span></li>
                    </ul>
                </td>
                <td>245</td>
            </tr>
        </tbody>
    </div>
  );
}

export default Fila;
