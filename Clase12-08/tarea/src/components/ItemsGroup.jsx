import React from 'react';


function ItemsGroup(props) {
    
  return (
    <div>
			<li class="nav-item">
				<a class="nav-link collapsed" href="/">
					<i class="fas fa-fw fa-folder"></i>
                    <span>{props.text}</span>
				</a>
			</li>
    </div>

  );
}

export default ItemsGroup;
