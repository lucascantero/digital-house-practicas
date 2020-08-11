import React from 'react';
import ItemsGroup from './ItemsGroup'


function NavGroup() {
  return (
    <div>
        <li class="nav-item active">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>
        <hr class="sidebar-divider"/>
        <div class="sidebar-heading">Actions</div>
        <ItemsGroup text = {'Pages'}/>
        <ItemsGroup text = {'Charts'}/>
        <ItemsGroup text = {'Tables'}/>
    </div>

  );
}

export default NavGroup;
