import React from 'react';
import Fila from './Fila'

function Table(props) {
    
  return (
    <div class="card shadow mb-4">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">				
                        <Fila />								
                </table>
            </div>
        </div>
    </div>
  );
}

export default Table;
